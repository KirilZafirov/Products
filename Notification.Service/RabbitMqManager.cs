using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Messaging;
using Newtonsoft.Json;
using Notification.Service.Messages;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;

namespace Notification.Service
{
   //public class RabbitMqManager : IDisposable
   //{
   //   private readonly IModel _channel;

   //   public RabbitMqManager()
   //   {
   //      var connectionFactory = new ConnectionFactory { Uri = RabbitMqConstants.RabbitMqUri };
   //      var connection = connectionFactory.CreateConnection();
   //      _channel = connection.CreateModel();
   //      connection.AutoClose = true;
   //   }

   //   public void ListenForOrderRegisteredEvent()
   //   {
   //      #region queue and qos setup
   //      _channel.QueueDeclare(
   //          queue: RabbitMqConstants.OrderRegisteredNotificationQueue,
   //          durable: false, exclusive: false,
   //          autoDelete: false, arguments: null);

   //      _channel.BasicQos(prefetchSize: 0, prefetchCount: 1, global: false);
   //      #endregion
   //      var eventingConsumer = new EventingBasicConsumer(_channel);
   //      eventingConsumer.Received += (chan, eventArgs) =>
   //      {
   //         var contentType = eventArgs.BasicProperties.ContentType;
   //         if (contentType != RabbitMqConstants.JsonMimeType)
   //            throw new ArgumentException(
   //                $"Can't handle content type {contentType}");

   //         var message = Encoding.UTF8.GetString(eventArgs.Body);
   //         var orderConsumer = new OrderRegisteredConsumer();
   //         var commandObj =
   //         JsonConvert.DeserializeObject<OrderRegisteredEvent>(message);
   //         orderConsumer.Consume(commandObj);
   //         _channel.BasicAck(deliveryTag: eventArgs.DeliveryTag,
   //             multiple: false);
   //      };
   //      _channel.BasicConsume(
   //          queue: RabbitMqConstants.OrderRegisteredNotificationQueue,
   //          //noAck: false,
   //          consumer: eventingConsumer);
   //   }

   //   public void Dispose()
   //   {
   //      if (!_channel.IsClosed)
   //         _channel.Close();
   //   }
   //}
}
