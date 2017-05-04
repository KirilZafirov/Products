using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MassTransit;
using Messaging;

namespace Registration.Service
{
   public class OrderReceivedConsumer : IConsumer<IOrderReceivedEvent>
   {
      public async Task Consume(ConsumeContext<IOrderReceivedEvent> context)
      {
         //Store order registration and get Id
         var id = 12;
         var pickUpName = context.Message.DeliverName;
         await Console.Out.WriteLineAsync($"Order with id {id} registered ,The Person to Pick Up the order is {pickUpName}");

         //publish event
         await context.Publish<IOrderRegisteredEvent>(
             new { CorrelationId = context.Message.CorrelationId });
      }
   }
}
