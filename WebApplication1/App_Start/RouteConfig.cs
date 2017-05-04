using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace WebApplication1
{
   public class RouteConfig
   {
      public static void RegisterRoutes(RouteCollection routes)
      {
         routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

         routes.MapRoute(
           name: "grid",
           url: "grid/{*catchall}",
           defaults: new { controller = "Home", action = "AtsGrid" }
       );
         routes.MapRoute(
           name: "stickerComponent",
           url: "stickerComponent/{*catchall}",
           defaults: new { controller = "Home", action = "StickerComponent" }
       );

         routes.MapRoute(
         name: "RegisterOrder",
         url: "RegisterOrder/{*catchall}",
         defaults: new { controller = "Home", action = "RegisterOrder" }
       );

      routes.MapRoute(
      name: "Products",
      url: "Products/{*catchall}",
      defaults: new { controller = "Home", action = "Products" }
    );
         routes.MapRoute(
             name: "Default",
             url: "{controller}/{action}/{id}",
             defaults: new { controller = "Home", action = "Index", id = UrlParameter.Optional }
         );
      }
   }
}
