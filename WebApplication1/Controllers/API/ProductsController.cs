using System;
using System.Collections.Generic;
using System.IO;
using System.Web.Http;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Hosting;
using Newtonsoft.Json;
using WebApplication1.Models;

namespace WebApplication1.Controllers.API
{
   //[Authorize]
   [RoutePrefix("api/products")]
   public class ProductsController : ApiController
   {
      private NORTHWNDEntities _db = new NORTHWNDEntities();

      ProductsRepository myProducts = new ProductsRepository();
      // GET api/<controller>
      public IEnumerable<string> Get()
      {
         return new string[] { "value1", "value2" };
      }
      // GET api/<controller>/5
      public string Get(int id)
      {
         return "value";
      }

      [Route("GetProducts")]
      public HttpResponseMessage GetProducts(HttpRequestMessage request)
      {
        
         return request.CreateResponse(myProducts.GetProducts());
      }
      [Route("SendProducts")]
      public HttpResponseMessage SendProducts(HttpRequestMessage request)
      {

         return request.CreateResponse(myProducts.GetProducts());
      }
      /// <summary>
      /// Api call to save files
      /// </summary>
      /// <returns></returns>
      [HttpPost]
      [Route("UploadFile")]
      public HttpResponseMessage UploadFile()
      {
         HttpResponseMessage result = Request.CreateResponse(HttpStatusCode.OK, "");
         try
         {
            var req = HttpContext.Current.Request;
            var uploadFiles = req.Files;
            var returnobj = new { success = false, msg = "Invalid File" };
            if (req.Files.Count > 0)
            {
               var postedFile = uploadFiles[0];
               var fileName = Guid.NewGuid();
               var filePath =
                  HostingEnvironment.MapPath(
                     Path.Combine("~/Content/Uploads/" + fileName +
                                  Path.GetExtension(postedFile.FileName)));
               if (filePath == null)
               {
                  return Request.CreateResponse(HttpStatusCode.BadRequest, returnobj);
               }
               var extension = Path.GetExtension(postedFile.FileName).ToLower();
               var acceptedExtensions = new List<string> { ".jpg", ".png" };
               if (acceptedExtensions.All(x => x != extension))
               {
                  returnobj = new { success = false, msg = "Invalid file extension" };
                  return Request.CreateResponse(HttpStatusCode.BadRequest, returnobj);
               }
               postedFile.SaveAs(filePath);
               System.Drawing.Image img = System.Drawing.Image.FromFile(filePath);
               var returnobja = new { success = true, height = img.Height, width = img.Width, file = fileName + extension };

               result = Request.CreateResponse(HttpStatusCode.OK, returnobja);
            }
         }
         catch (Exception ex)
         {
            result = Request.CreateResponse(HttpStatusCode.BadRequest, new { success = false, msg = ex.ToString() });
         }
         return result;
      }
   }
}
