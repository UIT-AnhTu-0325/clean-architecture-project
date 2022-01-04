using EmployeeService.Infrastructure.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeService.Infrastructure.Context
{
    public class EmployeeDbContext: DbContext
    {
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> option): base(option)
        {
            SeedData();
        }
        public virtual DbSet<Employee> Emloyees { get; set; }
        private void SeedData()
        {
            var employees = new List<Employee>()
            {
                new Employee(){ Id = 1, Name = "Jett", Address="Acent", Role="Admin", Dob=DateTime.Now, CreatedAt=DateTime.Now, UpdatedAt=DateTime.Now },
                new Employee(){ Id = 2, Name = "Brim", Address="Bind", Role="User", Dob=DateTime.Now, CreatedAt=DateTime.Now, UpdatedAt=DateTime.Now },
                new Employee(){ Id = 3, Name = "Sova", Address="Fracture", Role="User", Dob=DateTime.Now, CreatedAt=DateTime.Now, UpdatedAt=DateTime.Now }
            };
            Emloyees.AddRange(employees);
            SaveChanges();  
        }
    }
}
