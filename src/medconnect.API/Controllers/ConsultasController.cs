using medconnect.API.Models;
using medconnect.API.Repository.interfaces;
using medconnect.API.utils;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace medconnect.API.Controllers;

[Authorize(AuthenticationSchemes = "Bearer")]
[Route("api/[controller]")]
[ApiController]
public class ConsultasController : ControllerBase
{
    private readonly IUnitOfWork _context;
    
    public ConsultasController(IUnitOfWork context)
    {
        _context = context;
    }

     [HttpPost]
      public async Task<IActionResult> Post([FromBody] Consulta consulta)
      {
        System.Console.WriteLine(consulta);

        if (consulta is null)
            return BadRequest();

        string token = Request.Headers["Authorization"];     
        consulta.UsuarioId = Token.getIdByToken(token); 
           
        _context.ConsultaRepository.Add(consulta);
        await _context.Commit();
        return Ok(consulta);
      }

    [HttpGet("GetAll")]
    public async Task<IActionResult> GetAll()
    {
        string userId = Token.getIdByToken(Request.Headers["Authorization"]);

        IEnumerable<Consulta> consultas =
                 _context.ConsultaRepository.GetGetAllByUserId(c => c.UsuarioId == userId);
        return Ok(consultas);
    }
 }
