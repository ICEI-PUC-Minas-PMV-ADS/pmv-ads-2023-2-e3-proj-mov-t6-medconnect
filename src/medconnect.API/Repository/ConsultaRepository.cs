using medconnect.API.Context;
using medconnect.API.Models;
using medconnect.API.Repository.interfaces;

namespace medconnect.API.Repository
{
    public class ConsultaRepository : Repository<Consulta>, IConsultaRepository
    {
        public ConsultaRepository(AppDbContext context) : base(context)
        {
        }
    }
}
