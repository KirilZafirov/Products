using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Messaging
{
 public class RabbitMqConstants
   {
      // public const string RabbitMqUri =
      //"amqp://guest:guest@localhost:5672/";
      // public const string JsonMimeType =
      //     "application/json";

      // public const string RegisterOrderExchange =
      //     "registerorder.exchange";
      // public const string RegisterOrderQueue =
      //     "registerorder.queue";

      // public const string OrderRegisteredExchange =
      //     "orderregistered.exchange";
      // public const string OrderRegisteredNotificationQueue =
      //     "orderregistered.notification.queue";
      public const string RabbitMqUri = "rabbitmq://localhost/";
      public const string UserName = "guest";
      public const string Password = "guest";
      public const string RegisterOrderServiceQueue = "registerorder.service";
      public const string NotificationServiceQueue = "notification.service";
      public const string SagaQueue = "saga";
      //public const string UserName = "guest";
      //public const string Password = "guest";
      //public const string RegisterOrderServiceQueue = "registerorder.service";
      //public const string NotificationServiceQueue = "notification.service";
      //public const string FinanceServiceQueue = "finance.service";
      //public const string CityMonitorServiceQueue = "citymonitor.service";

   }
}
