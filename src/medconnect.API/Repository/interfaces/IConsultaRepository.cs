using medconnect.API.Models;

namespace medconnect.API.Repository.interfaces
{
    public interface IConsultaRepository : IGeneric<Consulta>
    {
        Task<IEnumerable<Consulta>> GetAllByUserId(string userId);
    }
}
