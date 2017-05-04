using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using WebApplication1.Models;

namespace WebApplication1.Action_Filters
{

   public class RBACUser
   {
      public int User_Id { get; set; }
      public bool IsSysAdmin { get; set; }
      public string Username { get; set; }
      private List<UserRole> Roles = new List<UserRole>();

      public RBACUser(string _username)
      {
         this.Username = _username;
         this.IsSysAdmin = false;
         GetDatabaseUserRolesPermissions();
      }

      private void GetDatabaseUserRolesPermissions()
      {
         using (RBAC _data = new RBAC())
         {
            USER _user = _data.USERS.Where(u => u.Username == this.Username).FirstOrDefault();
            if (_user != null)
            {
               this.User_Id = _user.User_Id;
               foreach (ROLE _role in _user.ROLES)
               {
                  UserRole _userRole = new UserRole { Role_Id = _role.Role_Id, RoleName = _role.RoleName };
                  foreach (PERMISSION _permission in _role.PERMISSIONS)
                  {
                     _userRole.Permissions.Add(new RolePermission { Permission_Id = _permission.Permission_Id, PermissionDescription = _permission.PermissionDescription });
                  }
                  foreach (REPORT _report in _role.REPORTS)
                  {
                     _userRole.Reports.Add(
                        new REPORT { Report_Id = _report.Report_Id});
                  }
                  this.Roles.Add(_userRole);

                  if (!this.IsSysAdmin)
                     this.IsSysAdmin = _role.IsSysAdmin;
               }
            }
         }
      }
      public List<REPORT> GetReports()
      {
         List<REPORT> _retVal = new List<REPORT>();
         foreach (UserRole _role in this.Roles)
         {
            foreach (REPORT _report in _role.Reports)
            {
               if (_report.Inactive == false)
               {
                  if (!_retVal.Contains(_report))
                  {
                     _retVal.Add(_report);
                  }
               }
            }
         }
         return _retVal;
      }
      public bool HasPermission(string requiredPermission)
      {
         bool bFound = false;
         foreach (UserRole role in this.Roles)
         {
            bFound = (role.Permissions.Where(p => p.PermissionDescription.ToLower() == requiredPermission.ToLower()).ToList().Count > 0);
            if (bFound)
               break;
         }
         return bFound;
      }

      public bool HasRole(string role)
      {
         return (Roles.Where(p => p.RoleName == role).ToList().Count > 0);
      }

      public bool HasRoles(string roles)
      {
         bool bFound = false;
         string[] _roles = roles.ToLower().Split(';');
         foreach (UserRole role in this.Roles)
         {
            try
            {
               bFound = _roles.Contains(role.RoleName.ToLower());
               if (bFound)
                  return bFound;
            }
            catch (Exception)
            {
            }
         }
         return bFound;
      }
   }
}