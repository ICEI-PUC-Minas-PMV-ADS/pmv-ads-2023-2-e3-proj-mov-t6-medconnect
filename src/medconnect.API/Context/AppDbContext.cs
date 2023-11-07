using medconnect.API.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace medconnect.API.Context
{
    public class AppDbContext : IdentityDbContext<Usuario>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Especialista> Especialistas { get; set; }
        public DbSet<Atendimento> Atendimentos { get; set;}
        public DbSet<Consulta> Consultas { get; set; }


        public DbSet<Usuario> UserIdentities { get; set; }
       
    }
}
