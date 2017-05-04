using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using WebApplication1.Action_Filters;
using WebApplication1.Common;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class ReportsController : Controller
    {
      private RBAC Database = new RBAC();

      // GET: Reports
      public ActionResult Index()
      {
         //Called from flow diagram process 1    
         return View(this.GetReports());
      }

      public ActionResult Preview(int report_id)
      {

         ViewBag.ReportUrl = ConfigurationManager.AppSettings.Get("ReportViewerUrl");
         return View(this.GetReports().Where(p => p.Report_Id == report_id).FirstOrDefault());
      }

      private ActionResult ExecuteReportviaSP(REPORT _report, string rawParams, string _defaultReportTemplate = "DefaultResultsTemplate")
      {
         List<dynamic> _list = new List<dynamic>();
         string _reportName = _report.Template;
         try
         {
            _list = CommonSql.ExecuteStoredProcedure(_report, rawParams, this);
         }
         catch (Exception ex)
         {
            return RedirectToAction("Error", "Unauthorised", new RouteValueDictionary(new { _errorMsg = ex.Message }));
         }

         string _targetFile = string.Format("{0}/{1}.cshtml", Server.MapPath("~/Views/Reports"), _reportName);
         if (!System.IO.File.Exists(_targetFile))
         {
            _reportName = _defaultReportTemplate;
         }
         return View(_reportName, _list);
      }

      [HttpGet]
      public ActionResult Execute(int report_id, string rawParams)
      {
         //Called from flow diagram process 3

         //Generates flow diagram process 4
         ViewBag.ReportName = this.GetReports().Where(p => p.Report_Id == report_id).FirstOrDefault().ReportName;
         return ExecuteReportviaSP(this.GetReports().Where(p => p.Report_Id == report_id).FirstOrDefault(), rawParams);
      }

      [HttpPost]
      public ActionResult ExportData(FormCollection form)
      {
         //Called from flow diagram process 5    
         List<dynamic> _list = TempData["ModelData"] as List<dynamic>;
         try
         {
            int _recordsExported = DynamicDataExport2CSV.Export(_list);
            return RedirectToAction("Error", "Unauthorised", new RouteValueDictionary(new { _errorMsg = string.Format("Records Exported: {0}", _recordsExported) }));
         }
         catch (Exception ex)
         {
            return RedirectToAction("Error", "Unauthorised", new RouteValueDictionary(new { _errorMsg = ex.Message }));
         }
      }
   }
}
