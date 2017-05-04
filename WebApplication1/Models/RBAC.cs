using WebApplication1.Models;

namespace WebApplication1
{
   using System;
   using System.Data.Entity;
   using System.ComponentModel.DataAnnotations.Schema;
   using System.Linq;

   public partial class RBAC : DbContext
   {
      public RBAC()
          : base("name=RBAC")
      {
      }

      public virtual DbSet<C__MigrationHistory> C__MigrationHistory { get; set; }
      public virtual DbSet<PERMISSION> PERMISSIONS { get; set; }
      public virtual DbSet<ROLE> ROLES { get; set; }
      public virtual DbSet<USER> USERS { get; set; }
      public virtual DbSet<REPORT> REPORTS { get; set; }
      public virtual DbSet<PARAMETER> PARAMETERS { get; set; }
      protected override void OnModelCreating(DbModelBuilder modelBuilder)
      {
         modelBuilder.Entity<PERMISSION>()
             .HasMany(e => e.ROLES)
             .WithMany(e => e.PERMISSIONS)
             .Map(m => m.ToTable("LNK_ROLE_PERMISSION").MapLeftKey("Permission_Id").MapRightKey("Role_Id"));

         modelBuilder.Entity<ROLE>()
             .HasMany(e => e.USERS)
             .WithMany(e => e.ROLES)
             .Map(m => m.ToTable("LNK_USER_ROLE").MapLeftKey("Role_Id").MapRightKey("User_Id"));
         modelBuilder.Entity<REPORT>()
            .HasMany(e => e.ROLES)
            .WithMany(e => e.REPORTS)
            .Map(m => m.ToTable("LNK_ROLE_REPORT").MapLeftKey("Report_Id").MapRightKey("Role_Id"));

         modelBuilder.Entity<PARAMETER>()
            .HasMany(e => e.REPORTS)
            .WithMany(e => e.PARAMETERS)
            .Map(m => m.ToTable("LNK_REPORT_PARAMETER").MapLeftKey("Parameter_Id").MapRightKey("Report_Id"));
      }
   }
}
