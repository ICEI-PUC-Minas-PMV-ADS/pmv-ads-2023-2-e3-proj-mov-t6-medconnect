using medconnect.API.Models;

namespace medconnect.API.Repository.interfaces
{
    public interface IEspecialistaRepository : IRepository<Especialista>
    {
        Task<IEnumerable<Especialista>> GetEspecialistasAtendimentos();
    }
}
