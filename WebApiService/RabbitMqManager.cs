//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Web;
//using Messaging;
//using Newtonsoft.Json;
//using RabbitMQ.Client;

//namespace WebApplication1
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
//      public void SendRegisterOrderCommand(IRegisterOrderCommand command)
//      {
//         _channel.ExchangeDeclare(
//             exchange: RabbitMqConstants.RegisterOrderExchange,
//             type: ExchangeType.Direct);
//         _channel.QueueDeclare(
//             queue: RabbitMqConstants.RegisterOrderQueue, durable: false,
//             exclusive: false, autoDelete: false, arguments: null);
//         _channel.QueueBind(
//             queue: RabbitMqConstants.RegisterOrderQueue,
//             exchange: RabbitMqConstants.RegisterOrderExchange,
//             routingKey: "");

//         var serializedCommand = JsonConvert.SerializeObject(command);

//         var messageProperties = _channel.CreateBasicProperties();
//         messageProperties.ContentType =
//             RabbitMqConstants.JsonMimeType;

//         _channel.BasicPublish(
//             exchange: RabbitMqConstants.RegisterOrderExchange,
//             routingKey: "",
//             basicProperties: messageProperties,
//             body: Encoding.UTF8.GetBytes(serializedCommand));
//      }

//      public void Dispose()
//      {
//         if (!_channel.IsClosed)
//            _channel.Close();
//      }
//   }
//}