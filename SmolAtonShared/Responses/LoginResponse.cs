using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmolAtonShared.Requests
{
    public record LoginResponse
    {
        public required int UserId { get; init; }
        public required string Token { get; init; }
    }
}
