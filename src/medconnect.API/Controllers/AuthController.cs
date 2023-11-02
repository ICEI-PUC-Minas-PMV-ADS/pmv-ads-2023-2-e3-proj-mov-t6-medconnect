using medconnect.API.Models;
using medconnect.API.Models.DTO;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace medconnect.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<UserIdentity> _userManager;
        private readonly SignInManager<UserIdentity> _signInManager;
        private readonly IConfiguration _configuration;
        public AuthController(UserManager<UserIdentity> userManager, SignInManager<UserIdentity> signInManager, IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
        }

        [HttpPost("register")]
        public async Task<ActionResult> RegisterUser([FromBody] UserModelDTO model)
        {
            var user = new UserIdentity
            {
                UserName = model.Email,
                Email = model.Email,
                CPF = model.CPF,
                Nome = model.Nome,
                Sobrenome = model.Sobrenome,

                EmailConfirmed = true
            };

            var result = await _userManager.CreateAsync(user, model.Senha);

            if (!result.Succeeded)
            {
                return BadRequest(result.Errors);
            }
            var userManager = await _userManager.FindByEmailAsync(model.Email);
            await _signInManager.SignInAsync(user, false);
            return Ok(TokenGenerator(model, userManager.Id));

        }

        [HttpPost("login")]
        public async Task<ActionResult> Login([FromBody] LoginDTO loginDTO)
        {
            var result = await _signInManager.PasswordSignInAsync(
                    loginDTO.Email, loginDTO.Senha, isPersistent: false, lockoutOnFailure: false);

            if (result.Succeeded)
            {
                var userModelDTO = new UserModelDTO
                {
                    Email = loginDTO.Email,
                    Senha = loginDTO.Senha,
                    Nome = "DEFAULT",
                    Sobrenome = "DEFAULT",
                    CPF = "DEFAULT",
                    
                };


                var userManager = await _userManager.FindByEmailAsync((string)loginDTO.Email);

                return Ok(TokenGenerator(userModelDTO, userManager.Id));
            }
            else
            {
                ModelState.AddModelError(string.Empty, "Login Invalido...");
                return BadRequest(ModelState);
            }
        }


        private UserTokenDTO TokenGenerator(UserModelDTO userModelDTO, string userId)
        {
            var claims = new[]
            {
                new Claim(JwtRegisteredClaimNames.NameId, userId),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));

            var credenciais = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var expiracao = _configuration["TokenConfiguration:ExpireHours"];
            var expiration = DateTime.UtcNow.AddHours(double.Parse(expiracao));

            JwtSecurityToken token = new JwtSecurityToken(
                issuer: _configuration["TokenConfiguration:Issuer"],
                audience: _configuration["TokenConfiguration:Audience"],
                claims: claims,
                expires: expiration,
                signingCredentials: credenciais
            );

            return new UserTokenDTO()
            {
                Authenticated = true,
                Token = new JwtSecurityTokenHandler().WriteToken(token),
                Expiration = expiration,
            };
        }
    }
}

