using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace medconnect.API.Models
{
    public class Especialista
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }
        public IEnumerable<Atendimento>? Atendimentos { get; set; }

        [StringLength(350)]
        public string? DescricaoCurta { get; set; }

        [ForeignKey("ClienteId")]
        public int ClienteId { get; set; }  
    }
}
