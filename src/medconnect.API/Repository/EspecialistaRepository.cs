using medconnect.API.Context;
using medconnect.API.Models;
using medconnect.API.Repository.interfaces;
using Microsoft.EntityFrameworkCore;
using System;

namespace medconnect.API.Repository
{
    public class EspecialistaRepository : Repository<Especialista>, IEspecialistaRepository
    {
        public EspecialistaRepository(AppDbContext context) : base(context) { }

        public async Task Delete(Especialista objeto)
        {
            _context.Set<Especialista>().Remove(objeto);
            await _context.SaveChangesAsync();
        }

        public async Task<Especialista> GetEntityById(int id)
        {
            return await _context.Set<Especialista>().FindAsync(id);
        }

   
        public async Task<List<Especialista>> List()
        {
            return await _context.Set<Especialista>().ToListAsync();
           
        }
    

        public async Task Update(Especialista objeto)
        {
            _context.Set<Especialista>().Update(objeto);
            await _context.SaveChangesAsync();
        }

        public async Task Add(Especialista objeto)
        {
            _context.Set<Especialista>().Add(objeto);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Especialista>> GetEspecialistasAtendimentos()
        {
            return await GetAll().Include(e => e.Atendimentos).ToListAsync();
        }

    }
}
