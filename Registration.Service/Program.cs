using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MassTransit;
using Messaging;

namespace Registration.Service
{
   class Program
   {
      static void Main(string[] args)
      {
         Console.Title = "Registration";

         var bus = BusConfigurator.ConfigureBus((cfg, host) =>
         {
            cfg.ReceiveEndpoint(host, RabbitMqConstants.RegisterOrderServiceQueue, e =>
            {
               e.Consumer<OrderReceivedConsumer>();
            });
         });

         bus.Start();

         Console.WriteLine("Listening for Register order commands.. Press enter to exit");
         Console.ReadLine();

         bus.Stop();
      }
   }
}
