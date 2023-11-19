using medconnect.API.Models;
using medconnect.API.Repository.interfaces;
using Microsoft.AspNetCore.Mvc;

namespace medconnect.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EspecialistasController : ControllerBase
    {
        private readonly IUnitOfWork _context;

        public EspecialistasController(IUnitOfWork context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IEnumerable<Especialista>> Get()
        {
            var especialistas = await _context.EspecialistaRepository.List();
              
            return especialistas;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Especialista>> Get(int id)
        {
            var especialista = await _context.EspecialistaRepository.GetEntityById(id);

            if (especialista == null)
                return NotFound();

            return especialista;
        }

        [HttpPost]
        public async Task<ActionResult<Especialista>> Post([FromBody] Especialista especialista)
        {
            if (especialista == null)
                return BadRequest();

           
            if (especialista.ClienteId == 0)
                return BadRequest("O ClienteId deve ser fornecido para associar o Especialista a um Cliente.");

            _context.EspecialistaRepository.Add(especialista);
            await _context.Commit();

            return Ok(especialista);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Especialista especialistaAtualizado)
        {
            if (especialistaAtualizado == null || id != especialistaAtualizado.Id)
            {
                return BadRequest();
            }

            var especialistaExistente = await _context.EspecialistaRepository.GetEntityById(id);

            if (especialistaExistente == null)
            {
                return NotFound();
            }

            especialistaExistente.Nome = especialistaAtualizado.Nome;
            especialistaExistente.SobreNome = especialistaAtualizado.SobreNome;
            especialistaExistente.DescricaoCurta = especialistaAtualizado.DescricaoCurta;

            _context.EspecialistaRepository.Update(especialistaExistente);
            await _context.Commit();

            return Ok(especialistaExistente);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var especialista = await _context.EspecialistaRepository.GetEntityById(id);

            if (especialista == null)
            {
                return NotFound();
            }

            _context.EspecialistaRepository.Delete(especialista);
            await _context.Commit();

            return Ok(especialista);
        }
    }
}
