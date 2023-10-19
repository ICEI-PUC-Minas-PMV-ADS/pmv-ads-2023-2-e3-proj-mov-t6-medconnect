using System.Linq.Expressions;

namespace medconnect.API.Repository.interfaces
{
    public interface IRepository<T>
    {
        IQueryable<T> GetAll();
        Task<T> GetById(Expression<Func<T, bool>> predicate);
 
        void Add(T entity); 
    }
}
