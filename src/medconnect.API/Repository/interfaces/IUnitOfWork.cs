namespace medconnect.API.Repository.interfaces
{
    public interface IUnitOfWork
    {
        IEspecialistaRepository EspecialistaRepository { get; }

        IConsultaRepository ConsultaRepository { get; }
        Task Commit();
    }
}
