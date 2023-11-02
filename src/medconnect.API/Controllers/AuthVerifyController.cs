using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace medconnect.API.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer")]
    [Route("api/[controller]")]
    [ApiController]
    public class AuthVerifyController : ControllerBase
    {
        [HttpGet]
        public String Get()
        {
            string token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiI1NDY5NTNhMS0yOWE3LTQ0N2YtYTVmYy05OGQ3MzhiZDkwMzMiLCJqdGkiOiI2YWI4NTcwNC05MjhkLTQzY2YtOTk1My1lZjA4NmZkYjRjN2YiLCJleHAiOjE2OTg4NjY5MjgsImlzcyI6IlRva2VuX0lzc3VlciIsImF1ZCI6IlRva2VuX0F1ZGllbmNlIn0.hxdKGQxNx2aPXG8e7vfpu39F13g1MCl6bRMEsrhvAqU";
           
            var TokenInfo = new Dictionary<string, string>();

            var handler = new JwtSecurityTokenHandler();
            var jwtSecurityToken = handler.ReadJwtToken(token);
            var claims = jwtSecurityToken.Claims.ToList();

            foreach (var claim in claims)
            {
                TokenInfo.Add(claim.Type, claim.Value);
            }

            
            return TokenInfo["nameid"];

            
        }
    }
}
