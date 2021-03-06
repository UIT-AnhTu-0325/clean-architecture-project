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
        public async Task<Employee> CreateEmployee(Employee employee)
        {
            var dbEmployee = _mapper.Map<Entities.Employee>(employee);
            await _dbContext.Employees.AddAsync(dbEmployee);
            await _dbContext.SaveChangesAsync();
            return employee;
        }

        public async Task<bool> DeleteEmployee(int id)
        {
            var employee = await _dbContext.Employees.FindAsync(id);
            if (employee != null)
            {
                _dbContext.Employees.Remove(employee);
                await _dbContext.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<IEnumerable<Employee>> GetAllEmployees()
        {
            var employees = await _dbContext.Employees.ToListAsync().ConfigureAwait(false);
            return _mapper.Map<IEnumerable<Employee>>(employees);
        }

        public async Task<Employee> GetEmployeeById(int id)
        {
            var employee = await _dbContext.Employees.FindAsync(id);
            if(employee != null)
            {
                return _mapper.Map<Employee>(employee);
            }
            return null;
        }

        public async Task<Object> UpdateEmployee(int id, Employee employee)
        {
            var dbEmployee = await _dbContext.Employees.FindAsync(id);
            if (dbEmployee == null)
            {
                return new { message = "Not found!" };
            }
            //if (dbEmployee.UpdatedAt != employee.UpdatedAt)
            //{
            //    return new { message = "Employee has been updated, please refresh the page!\n",
            //        update = $"{dbEmployee.UpdatedAt}\n",
            //        update2 = $"{employee.UpdatedAt}\n"
            //    };
            //}
            dbEmployee.Name = employee.Name;
            dbEmployee.Address = employee.Address;
            dbEmployee.Role = employee.Role;
            dbEmployee.PhoneNumber = employee.PhoneNumber;
            dbEmployee.Gender = employee.Gender;
            dbEmployee.Email = employee.Email;
            dbEmployee.Dob = employee.Dob;
            //dbEmployee.ImageUrl = employee.ImageUrl;
            dbEmployee.UpdatedAt = DateTime.Now;

            // Update employee
            _dbContext.Employees.Update(dbEmployee);
            //Commit
            await _dbContext.SaveChangesAsync();
            return new { message = "Update success!", employee = dbEmployee };
        }
    }
}
