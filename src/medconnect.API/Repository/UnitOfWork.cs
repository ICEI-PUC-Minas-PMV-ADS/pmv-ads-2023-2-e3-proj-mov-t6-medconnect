using medconnect.API.Context;
using medconnect.API.Repository.interfaces;

namespace medconnect.API.Repository
{
    public class UnitOfWork :IUnitOfWork
    {
        private EspecialistaRepository _especialistaRepo;
        private ConsultaRepository _consultaRepo;
        public AppDbContext _context { get; set; }

        public UnitOfWork(AppDbContext context)
        {
            _context = context;
        }

        public IEspecialistaRepository EspecialistaRepository
        {
            get { return _especialistaRepo = _especialistaRepo ?? new EspecialistaRepository(_context); }
        }

        public IConsultaRepository ConsultaRepository
        {
            get { return _consultaRepo = _consultaRepo ?? new ConsultaRepository(_context); }
        }

        public async Task Commit()
        {
            await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
