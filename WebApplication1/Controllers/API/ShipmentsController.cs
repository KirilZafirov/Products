using System.Web.Http;

namespace WebApplication1.Controllers.API
{
   [Authorize]
    public class ShipmentsController : ApiController
    {
       public IHttpActionResult Get() => Ok();
    }
}
