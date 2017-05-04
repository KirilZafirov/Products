//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using Messaging;
//using Newtonsoft.Json;
//using RabbitMQ.Client;

//namespace Registration.Service
//{
//   public class RabbitMqManager : IDisposable
//   {
//      private readonly IModel _channel;

//      public RabbitMqManager()
//      {
//         var connectionFactory =
//             new ConnectionFactory { Uri = RabbitMqConstants.RabbitMqUri };
//         var connection = connectionFactory.CreateConnection();
//         _channel = connection.CreateModel();
//         connection.AutoClose = true;
//      }

//      public void ListenForRegisterOrderCommand()
//      {
//         _channel.QueueDeclare(
//             queue: RabbitMqConstants.RegisterOrderQueue,
//             durable: false, exclusive: false,
//             autoDelete: false, arguments: null);

//         _channel.BasicQos(prefetchSize: 0, prefetchCount: 1,
//             global: false);

//         var consumer = new RegisteredOrderCommandConsumer(this);
//         _channel.BasicConsume(
//             queue: RabbitMqConstants.RegisterOrderQueue,
//             //noAck: false,
             
//             consumer: consumer);
//      }

//      public void SendOrderRegisteredEvent(IOrderRegisteredEvent command)
//      {
//         _channel.ExchangeDeclare(
//             exchange: RabbitMqConstants.OrderRegisteredExchange,
//             type: ExchangeType.Fanout);
//         _channel.QueueDeclare(
//             queue: RabbitMqConstants.OrderRegisteredNotificationQueue,
//             durable: false, exclusive: false,
//             autoDelete: false, arguments: null);
//         _channel.QueueBind(
//             queue: RabbitMqConstants.OrderRegisteredNotificationQueue,
//             exchange: RabbitMqConstants.OrderRegisteredExchange,
//             routingKey: "");

//         var serializedCommand = JsonConvert.SerializeObject(command);

//         var messageProperties = _channel.CreateBasicProperties();
//         messageProperties.ContentType = RabbitMqConstants.JsonMimeType;

//         _channel.BasicPublish(
//             exchange: RabbitMqConstants.OrderRegisteredExchange,
//             routingKey: "",
//             basicProperties: messageProperties,
//             body: Encoding.UTF8.GetBytes(serializedCommand));
//      }

//      public void SendAck(ulong deliveryTag)
//      {
//         _channel.BasicAck(deliveryTag: deliveryTag, multiple: false);
//      }

//      public void Dispose()
//      {
//         if (!_channel.IsClosed)
//            _channel.Close();
//      }
//   }
//}
