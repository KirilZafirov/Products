using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
   [Table("REPORTS")]
   public partial class REPORT
   {
      public REPORT()
      {
         PARAMETERS = new HashSet<PARAMETER>();
         ROLES = new HashSet<ROLE>();
      }


      [Key]
      public int Report_Id { get; set; }

      public DateTime LastModified { get; set; }
      public bool Inactive { get; set; }
      public string ReportName { get; set; }
      public string ReportDescription { get; set; }
      public string Template { get; set; }
      public string StoredProcedureName { get; set; }

      public virtual ICollection<ROLE> ROLES { get; set; }
      public virtual ICollection<PARAMETER> PARAMETERS { get; set; }
   }
}