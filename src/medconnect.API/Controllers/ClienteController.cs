using medconnect.API.Models;
using medconnect.API.Repository.interfaces;
using Microsoft.AspNetCore.Mvc;

namespace medconnect.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly IUnitOfWork _context;
        private readonly IClienteRepository _clienteRepository;

        public ClientesController(IUnitOfWork context, IClienteRepository clienteRepository)
        {
            _context = context;
            _clienteRepository = clienteRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Cliente>> Get()
        {
            var clientes = await _clienteRepository.List();
            return clientes;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Cliente>> Get(int id)
        {
            var cliente = await _clienteRepository.GetEntityById(id);

            if (cliente == null)
                return NotFound();

            return cliente;
        }

        [HttpPost]
        public async Task<ActionResult<Cliente>> Post([FromBody] Cliente cliente)
        {
            if (cliente == null)
                return BadRequest();

            _clienteRepository.Add(cliente);
            await _context.Commit();

            return Ok(cliente);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Cliente clienteAtualizado)
        {
            if (clienteAtualizado == null || id != clienteAtualizado.Id)
            {
                return BadRequest();
            }

            var clienteExistente = await _clienteRepository.GetEntityById(id);

            if (clienteExistente == null)
            {
                return NotFound();
            }

            clienteExistente.Nome = clienteAtualizado.Nome;
            clienteExistente.Sobrenome = clienteAtualizado.Sobrenome;
            clienteExistente.FotoPerfil = clienteAtualizado.FotoPerfil;

            _clienteRepository.Update(clienteExistente);
            await _context.Commit();

            return Ok(clienteExistente);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var cliente = await _clienteRepository.GetEntityById(id);

            if (cliente == null)
            {
                return NotFound();
            }

            _clienteRepository.Delete(cliente);
            await _context.Commit();

            return Ok(cliente);
        }
    }
}
