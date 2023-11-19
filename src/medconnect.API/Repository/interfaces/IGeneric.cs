namespace medconnect.API.Repository.interfaces
{
    public interface IGeneric<T> where T : class
    {
        Task Add(T objeto);
        Task Update(T objeto);
        Task Delete(T objeto);
        Task<T> GetEntityById(int id);
        Task<List<T>> List();
    }
}
