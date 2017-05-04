using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Messaging;

namespace Notification.Service.Messages
{
   public class OrderRegisteredEvent : IOrderRegisteredEvent
   {
      public Guid CorrelationId { get; }
      public int OrderId { get; set; }

      public string PickupName { get; set; }
      public string PickupAddress { get; set; }
      public string PickupCity { get; set; }

      public string DeliverName { get; set; }
      public string DeliverAddress { get; set; }
      public string DeliverCity { get; set; }

      public int Weight { get; set; }
      public bool Fragile { get; set; }
      public bool Oversized { get; set; }
   }
}
