namespace WebApplication1
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("USERS")]
    public partial class USER
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public USER()
        {
            ROLES = new HashSet<ROLE>();
        }

        [Key]
        public int User_Id { get; set; }

        [Required]
        [StringLength(30)]
        public string Username { get; set; }

        public DateTime? LastModified { get; set; }

        public bool? Inactive { get; set; }

        [StringLength(50)]
        public string Firstname { get; set; }

        [StringLength(50)]
        public string Lastname { get; set; }

        [StringLength(30)]
        public string Title { get; set; }

        [StringLength(3)]
        public string Initial { get; set; }

        [StringLength(100)]
        public string EMail { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ROLE> ROLES { get; set; }
    }
}
