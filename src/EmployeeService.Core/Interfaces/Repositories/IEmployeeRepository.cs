using EmployeeService.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeService.Core.Interfaces.Repositories
{
    public interface IEmployeeRepository
    {
        public Task<IEnumerable<Employee>> GetAllEmployees();
        public Task<Employee> GetEmployeeById(int id);
        public Task<bool> CreateEmployee(Employee employee);
        public Task<bool> DeleteEmployee(int id);

    }
}
