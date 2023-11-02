using System.IdentityModel.Tokens.Jwt;

namespace medconnect.API.utils
{
    public static class Token
    {
        public static string getIdByToken(string token)
        {           
            var TokenInfo = new Dictionary<string, string>();

            token = token.Replace("Bearer ", "");
            var handler = new JwtSecurityTokenHandler();
            var jwtSecurityToken = handler.ReadJwtToken(token);
            var claims = jwtSecurityToken.Claims.ToList();

            foreach (var claim in claims)
            {
                TokenInfo.Add(claim.Type, claim.Value);
            }


            return TokenInfo["nameid"];
       
        }
    }
}
