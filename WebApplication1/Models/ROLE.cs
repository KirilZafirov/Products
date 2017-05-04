using WebApplication1.Models;

namespace WebApplication1
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("ROLES")]
    public partial class ROLE
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ROLE()
        {
            PERMISSIONS = new HashSet<PERMISSION>();
            USERS = new HashSet<USER>();
            REPORTS = new HashSet<REPORT>();
      }

        [Key]
        public int Role_Id { get; set; }

        [Required]
        public string RoleName { get; set; }

        public string RoleDescription { get; set; }

        public bool IsSysAdmin { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PERMISSION> PERMISSIONS { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<USER> USERS { get; set; }
        public virtual ICollection<REPORT> REPORTS { get; set; }

   }
}
