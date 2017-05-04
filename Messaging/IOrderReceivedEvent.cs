using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Messaging
{
   public interface IOrderReceivedEvent
   {
      Guid CorrelationId { get; }
      string PickupName { get; }
      string PickupAddress { get; }
      string PickupCity { get; }

      string DeliverName { get; }
      string DeliverAddress { get; }
      string DeliverCity { get; }

      int Weight { get; }
      bool Fragile { get; }
      bool Oversized { get; }
   }
}
