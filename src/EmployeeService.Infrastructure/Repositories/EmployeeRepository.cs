using AutoMapper;
using EmployeeService.Core.Interfaces.Repositories;
using EmployeeService.Core.Models;
using EmployeeService.Infrastructure.Context;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeService.Infrastructure.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly EmployeeDbContext _dbContext;
        private readonly IMapper _mapper;
        public EmployeeRepository(EmployeeDbContext dbContext, IMapper mapper)
        {
            _dbContext = dbContext ?? throw new ArgumentNullException(nameof(dbContext));
            _mapper = mapper ?? throw new ArgumentNullException(nameof(mapper));
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
            var dbEmployees = await _dbContext.Emloyees.ToListAsync().ConfigureAwait(false);
            return _mapper.Map<IEnumerable<Employee>>(dbEmployees);
        }

        public async Task<Employee> GetEmployeeById(int id)
        {
            throw new NotImplementedException();
        }
    }
}
