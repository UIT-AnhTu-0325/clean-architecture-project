using EmployeeService.Core.Interfaces.Repositories;
using EmployeeService.Core.Interfaces.Services;
using EmployeeService.Core.Models;
using Microsoft.Extensions.Logging;
using NLog;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeService.Core.Services
{
    public class EmployeeService : IEmployeeService
    {
        public readonly IEmployeeRepository _employeeRepository;
        private readonly ILogger<EmployeeService> _logger;
        public EmployeeService(IEmployeeRepository employeeRepository, ILogger<EmployeeService> logger)
        {
            _employeeRepository = employeeRepository??throw new ArgumentNullException(nameof(employeeRepository));
            _logger = logger??throw new ArgumentNullException(nameof(logger));
        }   
        public async Task<bool> CreateEmployee(Employee employee)
        {
            throw new NotImplementedException();
        }

        public async Task<bool> DeleteEmployee(int id)
        {
            throw new NotImplementedException();
        }

        public async Task<IEnumerable<Employee>> GetAllEmployees()
        {
            try
            {
                throw new Exception("Error");
                return await _employeeRepository.GetAllEmployees();
            }
            catch (Exception ex)
            {
                _logger.LogError($"Error while trying to call GetAllEmployees in service class, Error Message = {ex}.");
                throw;
            }
        }

        public async Task<Employee> GetEmployeeById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
