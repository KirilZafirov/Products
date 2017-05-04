using System;
using System.Threading.Tasks;
using System.Web.Mvc;
using Messaging;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Messages;
using WebApplication1.ViewModels;
using ActionResult = System.Web.Mvc.ActionResult;

namespace WebApplication1.Controllers
{
   public class HomeController : Controller
   {
      public ActionResult Index()
      {
         return View();
      }

      public ActionResult About()
      {
         ViewBag.Message = "Your application description page.";

         return View();
      }

      public ActionResult Contact()
      {
         ViewBag.Message = "Your contact page.";

         return View();
      }
      public ActionResult AtsGrid()
      {
         return View();
      }

      public ActionResult StickerComponent()
      {
         return View();
      }
      //[Authorize]
      public ActionResult Products()
      {
         return View();
      }
      public ViewResult RegisterOrder()
      {
         return View();
      }

      [System.Web.Mvc.HttpPost]
      public async Task<ViewResult> RegisterOrder(OrderViewModel model)
      {
         //Send RegisterOrderCommand
         var bus = BusConfigurator.ConfigureBus();

         var sendToUri = new Uri($"{RabbitMqConstants.RabbitMqUri}{RabbitMqConstants.SagaQueue}");
         var endPoint = await bus.GetSendEndpoint(sendToUri);

         await endPoint.Send<IRegisterOrderCommand>(new
         {
            PickupName = model.PickupName,
            PickupAddress = model.PickupAddress,
            PickupCity = model.PickupCity,
            DeliverName = model.DeliverName,
            DeliverAddress = model.DeliverAddress,
            DeliverCity = model.DeliverCity,
            Weight = model.Weight,
            Fragile = model.Fragile,
            Oversized = model.Oversized
         });

         return View("Thanks");
      }
   }
}