using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
   [Table("PARAMETERS")]
   public partial class PARAMETER
   {
      public PARAMETER()
      {
         REPORTS = new HashSet<REPORT>();
      }

      [Key]
      public int Parameter_Id { get; set; }

      public bool Required { get; set; }
      public string ParameterName { get; set; }
      public string ParameterType { get; set; }
      public string DisplayLabel { get; set; }
      public virtual ICollection<REPORT> REPORTS { get; set; }
   }

}