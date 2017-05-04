namespace WebApplication1.Common
{
   public class DynamicDataObject
   {
      public readonly string Name;
      public readonly string Value;
      public readonly string DataType;

      public DynamicDataObject(string _colName, string _colValue, string _colType = "string")
      {
         Name = _colName;
         Value = _colValue;
         DataType = _colType;
      }
   }
}