using Microsoft.AspNetCore.SignalR;

namespace medconnect.API.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string usuario, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", usuario, message);
        }
    }
}
