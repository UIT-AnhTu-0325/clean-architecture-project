using EmployeeService.Core.Interfaces.Repositories;
using EmployeeService.Core.Interfaces.Services;
using EmployeeService.Core.Models;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeService.Core.Services
{
    public class UserService : IUserService
    {
        public readonly IUserRepository _userRepository;
        private readonly ILogger<UserService> _logger;

        public UserService(IUserRepository userRepository, ILogger<UserService> logger)
        {
            _userRepository = userRepository ?? throw new ArgumentNullException(nameof(userRepository));
            _logger = logger??throw new ArgumentNullException(nameof(logger));
        }

        public async Task<User> CreateUser(User user)
        {
            try
            {
                return await _userRepository.CreateUser(user);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error while trying to call CreateUser in service class, Error Message = {ex}.");
                throw;
            }
        }

        public async Task<User> GetUserById(int id )
        {
            try
            {
                return await _userRepository.GetUserById(id);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error while trying to call GetUserById in service class, Error Message = {ex}.");
                throw;
            }
        }

        public async Task<User> GetUserByUsername(string username)
        {
            try
            {
                return await _userRepository.GetUserByUsername(username);
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error while trying to call GetUserByUsername in service class, Error Message = {ex}.");
                throw;
            }
        }
    }
}
