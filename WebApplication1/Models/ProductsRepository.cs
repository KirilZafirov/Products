using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Globalization;
using System.Linq;
using WebApplication1.Models;

namespace WebApplication1
{
   public class ProductsRepository
   {
      private NORTHWNDEntities _db = new NORTHWNDEntities();

      public List<ProductModel> GetProducts()
      {
         var listOfProducts = new List<ProductModel>();
         var products = _db.Products.ToList();
         foreach (var product in products)
         {
            var p = new ProductModel();
            p.ProductId = product.ProductID;
            p.ProductName = product.ProductName;
            p.SupplierId = product.SupplierID;
            p.CategoryId = product.CategoryID;
            p.QuantityPerUnit = product.QuantityPerUnit;
            p.UnitPrice = product.UnitPrice;
            p.UnitsInStock = product.UnitsInStock;
            p.UnitsOnOrder = product.UnitsOnOrder;
            p.ReorderLevel = product.ReorderLevel;
            p.Discountinued = product.Discontinued;
            listOfProducts.Add(p);
         }
         return listOfProducts;
      }
   }
}