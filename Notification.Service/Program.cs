using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MassTransit;
using Messaging;

namespace Notification.Service
{
   class Program
   {
      static void Main(string[] args)
      {
         Console.Title = "Notification";

         var bus = BusConfigurator.ConfigureBus((cfg, host) =>
         {
            cfg.ReceiveEndpoint(host, RabbitMqConstants.NotificationServiceQueue, e =>
            {
               e.Consumer<OrderRegisteredConsumer>();
            });
         });

         bus.Start();

         Console.WriteLine("Listening for Order registered events.. Press enter to exit");
         Console.ReadLine();

         bus.Stop();
      }
   }
}
