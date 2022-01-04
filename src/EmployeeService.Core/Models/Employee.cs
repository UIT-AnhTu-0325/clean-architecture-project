using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeService.Core.Models
{
    public class Employee
    {
        //public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        //public string ImageUrl { get; set; }
        public string Role { get; set; }
        public DateTime Dob { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
    }
}
