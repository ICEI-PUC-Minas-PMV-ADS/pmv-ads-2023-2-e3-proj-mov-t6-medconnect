using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace medconnect.API.Models
{
    public class Atendimento
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid AtendimentoId { get; set; }
        public DateTime DataAtendimento { get; set; }
        public Guid EspecialistaId { get; set; }

        [JsonIgnore]
        public virtual Especialista? Especialista { get; set;}
    }

}
