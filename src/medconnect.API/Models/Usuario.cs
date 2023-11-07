using medconnect.API.Enums;
using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace medconnect.API.Models
{
    public class Usuario : IdentityUser
    {
        [Required]
        [StringLength(15)]
        public string? CPF { get; set; }
        public TypeUser? TipoUsuario { get; set; } = TypeUser.Paciente;

        [Required]
        [StringLength(350)]
        public string? FotoPerfil { get; set; } = "apiImages/default.png";

        [Required]
        [StringLength(100)]
        public string Nome { get; set; }

        [Required]
        [StringLength(300)]
        public string Sobrenome { get; set; }

        public IEnumerable<Consulta>? Consultas { get; set; }

    }
}
