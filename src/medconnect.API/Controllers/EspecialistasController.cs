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
                new Especialista { Nome = "André", Sobrenome = "Silva", DescricaoCurta = "Médico especialista em cirurgia bariatrica.", FotoPerfil = "personImages/persona01.png" },
                new Especialista { Nome = "João", Sobrenome = "Gonsalves", DescricaoCurta = "Médico Especialista em Cirurgia Vascular. Cuida dos problemas em vasos sanguíneos das pernas, braços, tronco e pescoço. Problemas das artérias como aneurisma de aorta, estenose das carótidas, doença arterial obstrutiva; e nas veias: teleangectasias, varizes e trombos.  O cirurgião plástico atua na reparação de órgãos e tecidos para", FotoPerfil = "personImages/persona02.png" },
                new Especialista { Nome = "Aline", Sobrenome = "Santos", DescricaoCurta = "Especialista em Dermatologia...", FotoPerfil = "personImages/persona03.png" },
                new Especialista { Nome = "Pedro", Sobrenome = "Albuquerque", DescricaoCurta = "Especialista em Clínica Médica...", FotoPerfil = "personImages/persona04.png" },
                new Especialista { Nome = "José", Sobrenome = "Toledo Junior", DescricaoCurta = "Especialista em Endocrinologia e Metabologia...", FotoPerfil = "personImages/persona05.png" },
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
                new Atendimento{ EspecialistaId = Guid.Parse("08dbd190-916e-4b55-8dad-240c895d9aa1"), 
                    AtendimentoId = Guid.NewGuid(), DataAtendimento = DateTime.Now 
                },

               
                 new Atendimento{ EspecialistaId = Guid.Parse("08dbd190-917a-4186-8386-1d7e3c4a3d67"),
                    AtendimentoId = Guid.NewGuid(), DataAtendimento = DateTime.Now
                },

                 new Atendimento{ EspecialistaId = Guid.Parse("08dbd190-917a-4206-804b-499cce17549d"),
                    AtendimentoId = Guid.NewGuid(), DataAtendimento = DateTime.Now
                },

                new Atendimento{ EspecialistaId = Guid.Parse("08dbd190-917a-4213-81f5-0ccdfe492c00"),
                    AtendimentoId = Guid.NewGuid(), DataAtendimento = DateTime.Now
                },

                 new Atendimento{ EspecialistaId = Guid.Parse("08dbd190-917a-4231-847d-2fb80d19bf28"),
                    AtendimentoId = Guid.NewGuid(), DataAtendimento = DateTime.Now
                },

            };

            _appDbContext.Atendimentos.AddRangeAsync(at);
            await _appDbContext.SaveChangesAsync();

            return "criado";
        }
    }
}
