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
        IEnumerable<Consulta> consultas = await _context.ConsultaRepository.GetAllByUserId(userId);
        return Ok(consultas);
    }


    [HttpGet("{id}")]
    public async Task<IActionResult> GetById(int id)
    {
        string userId = Token.getIdByToken(Request.Headers["Authorization"]);
        Consulta consulta = await _context.ConsultaRepository.GetEntityById(id);

        if (consulta == null || consulta.UsuarioId != userId)
        {
            return NotFound();
        }

        return Ok(consulta);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        string userId = Token.getIdByToken(Request.Headers["Authorization"]);
        Consulta consulta = await _context.ConsultaRepository.GetEntityById(id);

        if (consulta == null || consulta.UsuarioId != userId)
        {
            return NotFound();
        }

        _context.ConsultaRepository.Delete(consulta);
        await _context.Commit();

        return Ok(consulta);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Put(int id, [FromBody] Consulta consultaAtualizada)
    {
        if (consultaAtualizada == null || id != consultaAtualizada.Id)
        {
            return BadRequest();
        }

        string userId = Token.getIdByToken(Request.Headers["Authorization"]);
        Consulta consultaExistente = await _context.ConsultaRepository.GetEntityById(id);

        if (consultaExistente == null || consultaExistente.UsuarioId != userId)
        {
            return NotFound();
        }

        if (!string.IsNullOrEmpty(consultaAtualizada.EspecialistaId))
        {
            consultaExistente.EspecialistaId = consultaAtualizada.EspecialistaId;
        }

        consultaExistente.DataConsulta = consultaAtualizada.DataConsulta;

        _context.ConsultaRepository.Update(consultaExistente);
        await _context.Commit();

        return Ok(consultaExistente);
    }

 

}
