using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmolAtonShared.DTO.Request
{
    public record GetUserRequest
    {
        public required string Email { get; init; }
        public required string Password { get; init; }
    }
}
