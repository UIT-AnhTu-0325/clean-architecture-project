using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace EmployeeService.Core.Models
{
    public class User
    {
        [JsonIgnore]
        public int Id { get; set; }
        [JsonIgnore]
        public int IdEmployee { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }

    }
}
