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

            services.AddDbContext<EmployeeDbContext>(options => options.UseInMemoryDatabase("InMem"));

            services.AddScoped<IEmployeeService, EmployeeService.Core.Services.EmployeeService>();
            services.AddScoped<IEmployeeRepository, EmployeeRepository>();
            services.AddHttpClient();
            return services;
        }
    }
}
