using medconnect.API.Context;
using medconnect.API.Models;
using medconnect.API.Repository.interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace medconnect.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EspecialistasController : ControllerBase
    {
        private readonly IUnitOfWork _context;
        private AppDbContext _appDbContext;
        public EspecialistasController(IUnitOfWork context, AppDbContext appDbContext) 
        {
            _context = context;
            _appDbContext = appDbContext;
        }

        [HttpGet]
        [HttpGet("especialistas")]
        public async Task<IEnumerable<Especialista>> Get()
        {
            var especialistas = await _context.EspecialistaRepository.GetEspecialistasAtendimentos();
            return especialistas;
        }

        [HttpGet("especialistasOnly")]
        public async Task<ActionResult<IEnumerable<Especialista>>> GetEsp()
        {
            var especialistas = await _context.EspecialistaRepository.GetAll().ToListAsync();

            return especialistas;
        }


        [HttpGet("{id:Guid}", Name = "especialista")]
        public async Task<ActionResult<Especialista>> Get(Guid id)
        {
            var especialista = await _context.EspecialistaRepository.GetById(e => e.EspecialistaId == id);
            if (especialista is null)
                return NotFound();
            return especialista;
        }

        [HttpGet("add")]
        public async Task<ActionResult<string>> Add()
        {
            List<Especialista> es = new List<Especialista>() {
                new Especialista { Nome = "André", Sobrenome = "Silva", DescricaoCurta = "Médico especialista em cirurgia bariatrica...", FotoPerfil = "foto.png" },
                new Especialista { Nome = "João", Sobrenome = "Gonsalves", DescricaoCurta = "Médico especialista em cirurgia bariatrica...", FotoPerfil = "foto.png" },
                new Especialista { Nome = "Aline", Sobrenome = "Silva", DescricaoCurta = "Médico especialista em cirurgia bariatrica...", FotoPerfil = "foto.png" },
                new Especialista { Nome = "Pedro", Sobrenome = "Silva", DescricaoCurta = "Médico especialista em cirurgia bariatrica...", FotoPerfil = "foto.png" },
                new Especialista { Nome = "José", Sobrenome = "Silva", DescricaoCurta = "Médico especialista em cirurgia bariatrica...", FotoPerfil = "foto.png" },
        };
             _appDbContext.Especialistas.AddRangeAsync(es);
             await _appDbContext.SaveChangesAsync();

            return "criado";
        }

        [HttpGet("addAtende")]
        public async Task<ActionResult<string>> AddAtende()
        {
            List<Atendimento> at = new List<Atendimento>()
            {
                new Atendimento{ EspecialistaId = Guid.Parse("08dbcc34-2905-46dc-83ce-fae0d3ee454f"), 
                    AtendimentoId = Guid.NewGuid(), DataAtendimento = DateTime.Now 
                },

               
                 new Atendimento{ EspecialistaId = Guid.Parse("08dbcc34-2910-4d3f-8dea-663799f3016c"),
                    AtendimentoId = Guid.NewGuid(), DataAtendimento = DateTime.Now
                },

                 new Atendimento{ EspecialistaId = Guid.Parse("08dbcc34-2910-4d99-8303-1fe2affd29d1"),
                    AtendimentoId = Guid.NewGuid(), DataAtendimento = DateTime.Now
                },

                new Atendimento{ EspecialistaId = Guid.Parse("08dbcc34-2910-4da0-89a1-f255c6c68570"),
                    AtendimentoId = Guid.NewGuid(), DataAtendimento = DateTime.Now
                },

                 new Atendimento{ EspecialistaId = Guid.Parse("08dbcc34-2910-4db6-81c4-9cb8c939f811"),
                    AtendimentoId = Guid.NewGuid(), DataAtendimento = DateTime.Now
                },

            };

            _appDbContext.Atendimentos.AddRangeAsync(at);
            await _appDbContext.SaveChangesAsync();

            return "criado";
        }
    }
}
