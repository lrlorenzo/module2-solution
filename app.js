(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.items = ShoppingListCheckOffService.getToBuyItems();

    toBuy.boughtItem = function(itemIndex) {
        ShoppingListCheckOffService.boughtItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;
    alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
  }

  function ShoppingListCheckOffService () {
    var service = this;

    var alreadyBoughtItems = [];
    var toBuyItems = [{name:"cookies", quantity:10}, {name:"coffee", quantity:20}, {name:"pizza", quantity:30}, {name:"burgers", quantity:40}, {name:"beers", quantity:50}];

    service.getToBuyItems = function() {
      return toBuyItems;
    };

    service.getAlreadyBoughtItems = function() {
      return alreadyBoughtItems;
    };

    service.boughtItem = function(itemIndex) {
      console.log("Index:" + itemIndex);
      var item = toBuyItems[itemIndex];
      console.log(item);
      alreadyBoughtItems.push(item);
      toBuyItems.splice(itemIndex, 1);
    };
  }

})();
