using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace medconnect.API.Models
{
    public class Especialista : Cliente
    {
     
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public Guid EspecialistaId { get; set; }
        public IEnumerable<Atendimento>? Atendimentos { get; set; }

        [StringLength(350)]
        public string DescricaoCurta { get; set; }

    }
}
