using System.ComponentModel.DataAnnotations;

namespace medconnect.API.Models
{
    public class Cliente
    {
        [StringLength(50)]
        public string Nome { get; set; }

        [StringLength(200)]
        public string Sobrenome { get; set; }

        [StringLength(350)]
        public string FotoPerfil { get; set; }
    }
}
