using medconnect.API.Context;
using medconnect.API.Models;
using medconnect.API.Repository.interfaces;
using Microsoft.EntityFrameworkCore;

namespace medconnect.API.Repository
{
    public class ClienteRepository : Repository<Cliente>, IClienteRepository
    {
        public ClienteRepository(AppDbContext context) : base(context)
        {
        }

        public async Task Delete(Cliente objeto)
        {
            _context.Set<Cliente>().Remove(objeto);
            await _context.SaveChangesAsync();
        }

        public async Task<Cliente> GetEntityById(int id)
        {
            return await _context.Set<Cliente>().FindAsync(id);
        }

        public async Task<List<Cliente>> List()
        {
            return await _context.Set<Cliente>().AsNoTracking().ToListAsync();
        }

        public async Task Update(Cliente objeto)
        {
            _context.Set<Cliente>().Update(objeto);
            await _context.SaveChangesAsync();
        }

        public async Task Add(Cliente objeto)
        {
            _context.Set<Cliente>().Add(objeto);
            await _context.SaveChangesAsync();
        }
    }
}
