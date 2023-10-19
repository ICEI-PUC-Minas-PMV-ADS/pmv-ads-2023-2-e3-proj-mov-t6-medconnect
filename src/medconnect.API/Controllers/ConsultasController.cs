using medconnect.API.Models;
using medconnect.API.Repository.interfaces;
using Microsoft.AspNetCore.Mvc;

namespace medconnect.API.Controllers;

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
      public async Task<ActionResult> Post([FromBody] Consulta consulta)
      {
        if (consulta is null)
            return BadRequest();

        System.Diagnostics.Debug.WriteLine("=========================================================================");
        DateTime dataRes = consulta.DataConsulta;
        System.Diagnostics.Debug.WriteLine(dataRes);

        _context.ConsultaRepository.Add(consulta);
        await _context.Commit();
        return Ok(consulta);
      }
 }
