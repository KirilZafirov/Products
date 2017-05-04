using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Messaging;
using WebApplication1.Controllers;
using WebApplication1.ViewModels;

namespace WebApplication1.Messages
{
   public class RegisterOrderCommand : IRegisterOrderCommand
   {
      private readonly OrderViewModel viewModel;
      public RegisterOrderCommand(OrderViewModel viewModel)
      {
         this.viewModel = viewModel;
      }
      public string PickupName => viewModel.PickupName;
      public string PickupAddress => viewModel.PickupAddress;
      public string PickupCity => viewModel.PickupCity;

      public string DeliverName => viewModel.DeliverName;
      public string DeliverAddress => viewModel.DeliverAddress;
      public string DeliverCity => viewModel.DeliverCity;

      public int Weight => viewModel.Weight;
      public bool Fragile => viewModel.Fragile;
      public bool Oversized => viewModel.Oversized;
   }
}