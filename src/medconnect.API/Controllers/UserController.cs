﻿using medconnect.API.Models;
using medconnect.API.Models.DTO;
using medconnect.API.utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace medconnect.API.Controllers
{
    [Authorize(AuthenticationSchemes = "Bearer")]
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly UserManager<Usuario> _userManager;

        public UserController(UserManager<Usuario> userManager)
        {
            _userManager = userManager;
        }   

        [HttpPost]
        public async Task<IActionResult> Post()
        {
           
            string token = Request.Headers["Authorization"];
            string userId = Token.getIdByToken(token);

            var user = await _userManager.FindByIdAsync(userId);

            if(user == null) return BadRequest("Usuário não encontrado...");

            UserResponseDTO userResponse = new UserResponseDTO
            {
                Nome        = user.Nome,
                Sobrenome   = user.Sobrenome,
                Email       = user.Email,
                CPF         = user.CPF,
                FotoPerfil  = user.FotoPerfil,
                 
            };
            return Ok(userResponse);
        }
    }
}
