using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MassTransit;
using Messaging;

namespace CityMonitor.Service
{
   class Program
   {
      static void Main(string[] args)
      {
         //Console.Title = "City monitor";

         //var bus = BusConfigurator.ConfigureBus((cfg, host) =>
         //{
         //   cfg.EnablePerformanceCounters();
         //   cfg.ReceiveEndpoint(host, RabbitMqConstants.CityMonitorServiceQueue, e =>
         //   {
         //      e.Consumer<CityMessageConsumer>();
         //   });
         //});

         //bus.Start();

         //Console.WriteLine("Listening for city messages.. Press enter to exit");
         //Console.ReadLine();

         //bus.Stop();
      }
   }
}
