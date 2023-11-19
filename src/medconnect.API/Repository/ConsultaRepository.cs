using medconnect.API.Context;
using medconnect.API.Models;
using medconnect.API.Repository.interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace medconnect.API.Repository
{
    public class ConsultaRepository : Repository<Consulta>, IConsultaRepository
    {
        public ConsultaRepository(AppDbContext context) : base(context)
        {
        }

        public async Task Delete(Consulta objeto)
        {
            _context.Set<Consulta>().Remove(objeto);
            await _context.SaveChangesAsync();
        }

        public async Task<Consulta> GetEntityById(int id)
        {
            return await _context.Set<Consulta>().FindAsync(id);
        }

        public async Task<List<Consulta>> List()
        {
            return await _context.Set<Consulta>().ToListAsync();
        }

        public async Task Update(Consulta objeto)
        {
            _context.Set<Consulta>().Update(objeto);
            await _context.SaveChangesAsync();
        }

        public async Task Add(Consulta objeto)
        {
            _context.Set<Consulta>().Add(objeto);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Consulta>> GetAllByUserId(string userId)
        {
            return await _context.Set<Consulta>().Where(c => c.UsuarioId == userId).ToListAsync();
        }

    }
}
