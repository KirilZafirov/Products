using System.Collections.Generic;
using WebApplication1.Models;

namespace WebApplication1.Action_Filters
{
   public class UserRole
   {
      public int Role_Id { get; set; }
      public string RoleName { get; set; }
      public List<RolePermission> Permissions = new List<RolePermission>();
      public List<REPORT> Reports = new List<REPORT>();
   }
}