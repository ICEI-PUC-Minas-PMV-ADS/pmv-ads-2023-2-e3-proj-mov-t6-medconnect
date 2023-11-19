using medconnect.API.Models;

namespace medconnect.API.Repository.interfaces
{
    public interface IEspecialistaRepository : IGeneric<Especialista>
    {
        Task<IEnumerable<Especialista>> GetEspecialistasAtendimentos();
    }
}
