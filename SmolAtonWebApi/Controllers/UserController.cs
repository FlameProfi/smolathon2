using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SmolAtonShared.Requests;
using System.IdentityModel.Tokens.Jwt;

namespace SmolAtonWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpPost("login")]
        public Task<IActionResult> Login(LoginRequest request) 
        {
            // сделать логику возращения с бд юзера 
        }
    }
}
