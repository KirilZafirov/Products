using System;
using System.Collections.Generic;
using System.Text;
using System.Web;

namespace WebApplication1.Common
{
   public class DynamicDataExport2CSV
   {
      public static int Export(List<dynamic> objList, string _filename = "DataExport")
      {
         int _retVal = 0;
         try
         {
            if (objList != null && objList.Count > 0)
            {
               SendHttpContextHeaderInfo(_filename);
               WriteRowData(objList[0], true);

               foreach (DynamicDataRow obj in objList)
               {
                  WriteRowData(obj);
               }
               HttpContext.Current.Response.End();
               _retVal = objList.Count;
            }
         }
         catch (Exception ex)
         {
            throw ex;
         }
         return _retVal;
      }

      private static void WriteRowData(dynamic obj, bool _columnNames = false)
      {
         StringBuilder _data = new StringBuilder();
         foreach (DynamicDataObject _column in obj.Columns)
         {
            if (_columnNames)
               AddComma(_column.Name, _data);
            else
               AddComma(_column.Value, _data);
         }
         _data = RemoveLastComma(_data);
         HttpContext.Current.Response.Write(_data.ToString());
         HttpContext.Current.Response.Write(Environment.NewLine);
      }

      private static void AddComma(object value, StringBuilder stringBuilder)
      {
         try
         {
            if (value == null)
            {
               stringBuilder.Append(", ");
            }
            else
            {
               var _data = value;
               string _value = _data.ToString().Replace("\r\n", " ");
               stringBuilder.Append(string.Format("{0}, ", _value.Replace(",", " ")));
            }
         }
         catch
         {
            stringBuilder.Append(", ");
         }
      }

      private static StringBuilder RemoveLastComma(StringBuilder stringBuilder)
      {
         string _line = stringBuilder.ToString();
         int idx = _line.LastIndexOf(',');
         return new StringBuilder(_line.Remove(idx));
      }

      private static void SendHttpContextHeaderInfo(string _filename)
      {
         string attachment = string.Format("attachment; filename={0}.csv", _filename);
         HttpContext.Current.Response.Clear();
         HttpContext.Current.Response.ClearHeaders();
         HttpContext.Current.Response.ClearContent();
         HttpContext.Current.Response.AddHeader("content-disposition", attachment);
         HttpContext.Current.Response.ContentType = "text/csv";
         HttpContext.Current.Response.AddHeader("Pragma", "public");
      }
   }
}