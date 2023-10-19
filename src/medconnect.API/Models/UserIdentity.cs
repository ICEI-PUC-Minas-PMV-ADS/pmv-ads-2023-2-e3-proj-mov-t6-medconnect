using medconnect.API.Enums;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace medconnect.API.Models
{
    public class UserIdentity : IdentityUser
    {
        public string CPF { get; set; }
        public TypeUser TipoUsuario { get; set; } = TypeUser.Paciente;
        public Guid? EspecialistaId { get; set; }
        public Especialista? Especialista { get; set; }

    }
}
