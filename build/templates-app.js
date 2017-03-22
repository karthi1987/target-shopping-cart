angular.module('templates-app', ['partials/cart.tpl.html', 'partials/product.tpl.html', 'partials/store.tpl.html']);

angular.module("partials/cart.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/cart.tpl.html",
    "<h2 class=\"text-info\" aria-label=\"alert\">\n" +
    "	<span class=\"product-header\">Shopping cart</span>\n" +
    "</h2>\n" +
    "\n" +
    "<br/><br/>\n" +
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "	<div class=\"col-md-8\">\n" +
    "\n" +
    "		<!-- items -->\n" +
    "		<table class=\"table table-bordered\">\n" +
    "\n" +
    "			<!-- header -->\n" +
    "			<thead>\n" +
    "				<tr class=\"head\">\n" +
    "					<th>Item</th>\n" +
    "					<th>Quantity</th>\n" +
    "					<th>Price</th>\n" +
    "					<th>Action</th>\n" +
    "				</tr>\n" +
    "			</thead>\n" +
    "			<tbody>\n" +
    "\n" +
    "			<!-- empty cart message -->\n" +
    "			<tr ng-hide=\"cart.getTotalCount() > 0\" >\n" +
    "				<td class=\"tdCenter\" colspan=\"4\">\n" +
    "					Your cart is empty.\n" +
    "				</td>\n" +
    "			</tr>\n" +
    "\n" +
    "			<!-- cart items -->\n" +
    "			<tr ng-repeat=\"item in cart.items | orderBy:'name'\">\n" +
    "				<td>{{item.name}}</td>\n" +
    "				<td class=\"tdCenter\">\n" +
    "				  <div class=\"input-append\">\n" +
    "					<!-- use type=tel instead of  to prevent spinners -->\n" +
    "					<input\n" +
    "						class=\"span3 text-center input-type\" type=\"tel\" \n" +
    "						ng-model=\"item.quantity\" \n" +
    "						ng-change=\"cart.saveItems()\" />\n" +
    "					<button \n" +
    "						class=\"btn btn-small \" type=\"button\" \n" +
    "						ng-disabled=\"item.quantity >= 1000\"\n" +
    "						ng-click=\"cart.addItem(item.sku, item.name, item.price, +1)\">+</button>\n" +
    "					<button \n" +
    "						class=\"btn btn-small \" type=\"button\" \n" +
    "						ng-disabled=\"item.quantity <= 1\"\n" +
    "						ng-click=\"cart.addItem(item.sku, item.name, item.price, -1)\">-</button>\n" +
    "				  </div>\n" +
    "				</td>\n" +
    "				<td class=\"tdRight\">{{item.price * item.quantity | currency}}</td>\n" +
    "				<td class=\"tdCenter\" title=\"remove from cart\">\n" +
    "					<a href=\"\" ng-click=\"cart.addItem(item.sku, item.name, item.price, -10000000)\" >\n" +
    "						<i class=\"icon-remove\" />\n" +
    "					</a>\n" +
    "				</td>\n" +
    "			</tr>\n" +
    "\n" +
    "			<!-- footer -->\n" +
    "			<tr class=\"table-footer\">\n" +
    "				<td style=\"border-right: 1px solid #ccc;\"><b>Total</b></td>\n" +
    "				<td class=\"tdCenter\" style=\"border-right: 1px solid #ccc;\"><b>{{cart.getTotalCount()}}</b></td>\n" +
    "				<td class=\"tdRight\" style=\"border-right: 1px solid #ccc;\"><b>{{cart.getTotalPrice() | currency}}</b></td>\n" +
    "				<td />\n" +
    "			</tr>\n" +
    "			</tbody>\n" +
    "		</table>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- buttons -->\n" +
    "	<div class=\"col-md-4\">\n" +
    "		<div class=\"text-info\" style=\"text-align:center;\">\n" +
    "			<button \n" +
    "				class=\"btn call-to-action\" \n" +
    "				onclick=\"window.location.href='index.html'\">\n" +
    "				<i class=\"icon-chevron-left\" /> back to store\n" +
    "			</button>\n" +
    "			<button \n" +
    "				class=\"btn call-to-action\" \n" +
    "				ng-click=\"cart.clearItems()\" \n" +
    "				ng-disabled=\"cart.getTotalCount() < 1\" >\n" +
    "				<i class=\"icon-trash icon-white\" /> clear cart\n" +
    "			</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("partials/product.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/product.tpl.html",
    "<h2 class=\"text-info\">\n" +
    "	<span class=\"product-header\">Product details</span>\n" +
    "</h2>\n" +
    "<br/>\n" +
    "<div class=\"cart-flyout\">\n" +
    "	<div class=\"cart-items\">\n" +
    "		<a href=\"javascript:;\" ui-sref=\"cart\" title=\"go to shopping cart\" ng-disabled=\"cart.getTotalCount() < 1\">\n" +
    "			<i class=\"icon-shopping-cart\" />\n" +
    "			<b>{{cart.getTotalCount()}}</b> items, <b>{{cart.getTotalPrice() | currency}}</b>\n" +
    "		</a>\n" +
    "		<span ng-show=\"cart.getTotalCount(product.sku) > 0\" style=\"font-size:0.5rem; padding-top:5px; font-size: 0.6rem; display:inline-block; padding-top: 1px;\"><br />this item is in the cart</span>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "<p class=\"text-info\">\n" +
    "	<img ng-src=\"assets/img/products/{{product.sku | lowercase}}.jpg\" alt=\"{{product.name}}\"/>\n" +
    "	{{product.name}}: {{product.description}}<br />\n" +
    "</p>\n" +
    "\n" +
    "<div class=\"row-fluid\">\n" +
    "	<div class=\"col-md-8\">\n" +
    "		<!-- product info -->\n" +
    "		<table class=\"table table-bordered\">\n" +
    "\n" +
    "			<tr>\n" +
    "				<td class=\"tdRight\"><b>Calories</b></td>\n" +
    "				<td class=\"tdCenter\"><h2>{{product.cal}}</h2></td>\n" +
    "				<td />\n" +
    "			</tr>\n" +
    "			<tr ng-repeat=\"(nutrientName, nutrientValue) in product.nutrients\">\n" +
    "				<td class=\"tdRight\"><b>{{nutrientName}}</b></td>\n" +
    "				<td class=\"tdCenter\"><img ng-src=\"assets/img/r{{nutrientValue | lowercase}}.png\" alt=\"{{nutrientValue}}\" /></td>\n" +
    "				<td>\n" +
    "					<b>{{store.dvaCaption[nutrientValue]}}</b>:\n" +
    "					{{store.dvaRange[nutrientValue]}}\n" +
    "					of the recommended daily value.\n" +
    "				</td>\n" +
    "			</tr>\n" +
    "\n" +
    "		</table>\n" +
    "	</div>\n" +
    "\n" +
    "	<!-- buttons -->\n" +
    "	<div class=\"col-md-4\">\n" +
    "		<div class=\"text-info\" style=\"text-align:center;\">\n" +
    "			<button \n" +
    "				class=\"btn btn-block call-to-action\" \n" +
    "				ng-click=\"cart.addItem(product.sku, product.name, product.price, 1)\">\n" +
    "				<i class=\"icon-shopping-cart icon-white\" /> add to cart\n" +
    "			</button>\n" +
    "			<button \n" +
    "				class=\"btn btn-block call-to-action\" \n" +
    "				ng-click=\"cart.addItem(product.sku, product.name, product.price, -10000)\"\n" +
    "				ng-disabled=\"cart.getTotalCount(product.sku) < 1\">\n" +
    "				<i class=\"icon-trash icon-white\" /> remove from cart\n" +
    "			</button>\n" +
    "			<button \n" +
    "				class=\"btn call-to-action\" \n" +
    "				onclick=\"window.location.href=''\">\n" +
    "				<i class=\"icon-chevron-left\" /> back to store\n" +
    "			</button>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("partials/store.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("partials/store.tpl.html",
    "<!--<p class=\"text-info\" aria-label=\"alert\">\n" +
    "	Please select the products you want and add them to your shopping cart.<br />\n" +
    "	When you are done, click the shopping cart icon to review your order and check out.\n" +
    "</p>\n" +
    "\n" +
    "-->\n" +
    "\n" +
    "<!--\n" +
    "<p>\n" +
    "	Search: <input ng-model=\"search\">\n" +
    "</p>\n" +
    "-->\n" +
    "\n" +
    "<h2 class=\"text-info\" aria-label=\"alert\">\n" +
    "	<span class=\"product-header\">Product listing</span>\n" +
    "</h2>\n" +
    "\n" +
    "<br />\n" +
    "<div class=\"cart-flyout\">\n" +
    "	<div class=\"cart-items\">\n" +
    "		<a href=\"javascript:;\" ui-sref=\"cart\" title=\"go to shopping cart\" ng-disabled=\"cart.getTotalCount() < 1\">\n" +
    "			<i class=\"icon-shopping-cart\" />\n" +
    "			<b>{{cart.getTotalCount()}}</b> items, <b>{{cart.getTotalPrice() | currency}}</b>\n" +
    "		</a>\n" +
    "	</div>\n" +
    "</div>\n" +
    "\n" +
    "\n" +
    "<table class=\"table table-bordered\">\n" +
    "	<thead>\n" +
    "	<tr class=\"head\">\n" +
    "	  <th>Product image</th>\n" +
    "	  <th>Product name</th>\n" +
    "	  <th>Price</th>\n" +
    "	  <th>Action</th>\n" +
    "	</tr>\n" +
    "	</thead>\n" +
    "	<tbody>\n" +
    "		<tr ng-repeat=\"product in store.products | orderBy:'name' | filter:search\" >\n" +
    "			<td class=\"tdCenter\"><img ng-src=\"assets/img/products/{{product.sku | lowercase}}.jpg\" alt=\"{{product.name}}\" /></td>\n" +
    "			<td>\n" +
    "				<a href=\"javascript:;\" ui-sref=\"product({productSku: product.sku})\"><b>{{product.name}}</b></a><br />\n" +
    "				{{product.description}}\n" +
    "			</td>\n" +
    "			<td class=\"tdRight\">\n" +
    "				{{product.price | currency}}\n" +
    "			</td>\n" +
    "			<td class=\"tdCenter\">\n" +
    "				<a href=\"\" ng-click=\"cart.addItem(product.sku, product.name, product.price, 1)\" class=\"call-to-action\">\n" +
    "					add to cart\n" +
    "				</a>\n" +
    "			</td>\n" +
    "		</tr>\n" +
    "	</tbody>\n" +
    "</table>\n" +
    "");
}]);
