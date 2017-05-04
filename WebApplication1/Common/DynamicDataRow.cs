using System.Collections.Generic;
using System.Linq;

namespace WebApplication1.Common
{
   public class DynamicDataRow
   {
      public List<DynamicDataObject> Columns = new List<DynamicDataObject>();

      public int ColumnCount
      {
         get
         {
            return Columns.Count;
         }
      }

      public void AddColumn(string _columnName, dynamic _columnValue, string _columnDataType)
      {
         try
         {
            Columns.Add(new DynamicDataObject(_columnName, _columnValue.ToString(), _columnDataType));
         }
         catch
         {
         }
      }

      public string GetColumnValue(string _columnName, string _defaultValue = "")
      {
         string _retVal = _defaultValue;
         try
         {
            if (Columns.Where(p => p.Name == _columnName).FirstOrDefault() != null)
            {
               _retVal = Columns.Where(p => p.Name == _columnName).FirstOrDefault().Value;
            }
         }
         catch
         {
         }
         return _retVal;
      }

      public string GetColumnValue(int _idx)
      {
         string _retVal = "";
         try
         {
            int _index = 0;
            foreach (DynamicDataObject _item in Columns)
            {
               if (_index == _idx)
               {
                  _retVal = _item.Value;
               }
               _index++;
            }
         }
         catch
         {
         }
         return _retVal;
      }

      public int GetColumnValueAsInt(string _columnName, int _defaultValue = 0)
      {
         int _retVal = _defaultValue;
         try
         {
            if (Columns.Where(p => p.Name == _columnName).FirstOrDefault() != null)
            {
               _retVal = int.Parse(Columns.Where(p => p.Name == _columnName).FirstOrDefault().Value);
            }
         }
         catch
         {
         }
         return _retVal;
      }

      public string GetColumnName(int _idx)
      {
         string _retVal = "";
         try
         {
            int _index = 0;
            foreach (DynamicDataObject _item in Columns)
            {
               if (_index == _idx)
               {
                  _retVal = _item.Name;
               }
               _index++;
            }
         }
         catch
         {
         }
         return _retVal;
      }
   }
}