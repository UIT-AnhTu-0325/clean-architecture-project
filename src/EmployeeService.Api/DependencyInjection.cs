using EmployeeService.Api.Helper;
using EmployeeService.Core.Interfaces.Repositories;
using EmployeeService.Core.Interfaces.Services;
using EmployeeService.Core.Services;
using EmployeeService.Infrastructure.Context;
using EmployeeService.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

namespace EmployeeService.Api
{
    public static class DependencyInjection
    {
        public static IServiceCollection ConfigureDependencyInjection(this IServiceCollection services, IConfiguration configuration)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            if (configuration == null)
            {
                throw new ArgumentNullException(nameof(configuration));
            }

            string dbConnectionString = String.Empty;
            dbConnectionString = configuration.GetConnectionString("Employee");

            services.AddCors();

            services.AddDbContext<EmployeeDbContext>(
                optionsAction: options => options.UseSqlServer(dbConnectionString),
                contextLifetime: ServiceLifetime.Transient,
                optionsLifetime: ServiceLifetime.Transient);

            services.AddScoped<IEmployeeService, EmployeeService.Core.Services.EmployeeService>();
            services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            services.AddScoped<IUserService, EmployeeService.Core.Services.UserService>();
            services.AddScoped<IUserRepository,UserRepository>();
            services.AddScoped<JwtService>();
            services.AddHttpClient();
            return services;
        }
    }
}
