using medconnect.API.Context;
using medconnect.API.Models;
using medconnect.API.Repository.interfaces;
using Microsoft.EntityFrameworkCore;

namespace medconnect.API.Repository
{
    public class EspecialistaRepository : Repository<Especialista>, IEspecialistaRepository
    {
        public EspecialistaRepository(AppDbContext context) : base(context) { }

        public async Task<IEnumerable<Especialista>> GetEspecialistasAtendimentos()
        {
            return await GetAll().Include(e => e.Atendimentos).ToListAsync();  
        }
    }
}
