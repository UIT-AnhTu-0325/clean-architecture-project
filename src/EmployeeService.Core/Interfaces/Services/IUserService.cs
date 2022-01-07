using EmployeeService.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeService.Core.Interfaces.Services
{
    public interface IUserService
    {
        public Task<User> CreateUser(User user);
        public Task<User> GetUserByUsername(string username);
        public Task<User> GetUserById(int id);
    }
}
