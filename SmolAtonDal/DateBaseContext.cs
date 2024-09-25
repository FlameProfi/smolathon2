using Microsoft.EntityFrameworkCore;
using SmolAtonDAL.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmolAtonDAL
{
    sealed class DateBaseContext : DbContext
    {
        public DbSet<User> Users { get; set; }

        public DateBaseContext() 
        {
            Database.Migrate();
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql(@"Server=localhost;Port=5432;Database=ArtConnect;UID=postgres;PWD=123");
        }
    }
}
