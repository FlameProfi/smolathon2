using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmolAtonDAL.Entity
{
    public record User
    {
        public int Id { get; init; }
        public required string Name { get; init; }
        public required string Surname { get; init; }
        public required string Email { get; init; }
        public required string Password { get; init; }
        public required string NickName { get; init; }
        public required string Phone { get; init; }
        public required long Balace {  get; init; }
        public byte[]? ProfilePic { get; init; }
        public string? Description { get; init; }
    }
}
