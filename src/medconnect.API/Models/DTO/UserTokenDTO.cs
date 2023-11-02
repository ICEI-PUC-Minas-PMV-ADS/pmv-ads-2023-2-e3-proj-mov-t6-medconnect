namespace medconnect.API.Models.DTO
{
    public class UserTokenDTO
    {
        public bool Authenticated { get; set; }
        public DateTime Expiration { get; set; }
        public string Token { get; set; }

    }
}
