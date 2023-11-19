using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace medconnect.API.Models
{
    public class Consulta
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        public string UsuarioId { get; set; }
        public string EspecialistaId { get; set; }

        public DateTime DataConsulta { get; set; }

        [ForeignKey("UsuarioId")]
        public virtual Usuario Usuario { get; set; }

        [ForeignKey("EspecialistaId")]
        public virtual Especialista Especialista { get; set; }
    }
}
