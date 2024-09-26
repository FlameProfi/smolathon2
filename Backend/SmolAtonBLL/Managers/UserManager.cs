using SmolAtonBLL.Services;
using SmolAtonDAL.Repositories;
using SmolAtonShared.Requests;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SmolAtonBLL.Managers
{
    sealed class UserManager
    {
        private readonly UserRepository _repository;
        public UserManager(UserRepository repos) 
        {
            _repository = repos;
        }
        public async Task<CreateUserResponse> CreateUser(CreateUserRequest request)
        {
            var user = await _repository.Insert(new()
            {
                Email = request.Email,
                Name = request.Name,
                NickName = request.NickName,
                Password = HashPasswordService.MDFive(request.Password),
                Phone = request.Phone,
                Surname = request.Surname,
            });
            return new()
            {
                Id = user.Id,
                Balace = user.Balace,
                Email = request.Email,
                Name = request.Name,
                NickName = request.NickName,
                Password = request.Password,
                Phone = request.Phone,
                Surname = request.Surname,
            };
        }
    }

}
