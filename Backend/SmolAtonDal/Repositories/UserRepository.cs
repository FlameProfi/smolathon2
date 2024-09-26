using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using SmolAtonDAL.Entity;
using SmolAtonShared.DTO.Request;
using SmolAtonShared.DTO.Response;

namespace SmolAtonDAL.Repositories
{
    public class UserRepository
    {
        private readonly DateBaseContext _context;

        public UserRepository(DateBaseContext context)
        {
            _context = context;
        }

        public async Task<InsertUserResponse> Insert(InsertUserRequest request) 
        {
            //доделать валидацию и возможные экзепшены
            var newUser = new User()
            {
                Name = request.Name,
                Surname = request.Surname,
                Email = request.Email,
                Password = request.Password,
                Phone = request.Phone,
                NickName = request.NickName,
                Balace = 0 // старта баланс при реге
            };
            var userFromBD = await _context.Users.AddAsync(newUser);
            await _context.SaveChangesAsync();
            return new()
            {
                Id = newUser.Id,
                Balace = newUser.Balace,
                Email = newUser.Email,
                Name = newUser.Name,
                NickName = newUser.NickName,
                Password = newUser.Password,
                Phone = newUser.Phone,
                Surname = newUser.Surname,
            };
        }

        // DODEP
        //public async Task<>
    }
}
