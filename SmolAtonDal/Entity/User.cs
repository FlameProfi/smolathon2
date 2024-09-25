using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmolAtonDAL.Entity
{
    public record User
    {
        public int Id { get; set; }
        public required string Login { get; set; }
        public required string Password { get; set; }
    }
}
