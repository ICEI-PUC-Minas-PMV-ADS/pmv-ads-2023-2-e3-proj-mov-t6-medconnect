using medconnect.API.Context;
using medconnect.API.Repository.interfaces;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;

namespace medconnect.API.Repository
{
    public class Repository<T> : IRepository<T> where T : class
    {
        protected AppDbContext _context;

        public Repository(AppDbContext context)
        {
            _context = context;
        }

        public IQueryable<T> GetAll()
        {
            return _context.Set<T>().AsNoTracking();
        }

        public async Task<T> GetById(Expression<Func<T,bool>> predicate)
        {
            return await _context.Set<T>().AsNoTracking().SingleOrDefaultAsync( predicate );
        }

        public IQueryable<T> GetGetAllByUserId(Expression<Func<T, bool>> predicate)
        {
            return _context.Set<T>().AsNoTracking().Where(predicate);
        }

        public void Add(T entity)
        {
            _context.Set<T>().Add(entity); 
        }
    }
}
