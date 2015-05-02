angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html', 'support/support.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<h2>About Page</h2>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>English Learning</h1>\n" +
    "\n" +
    "  \n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("support/support.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("support/support.tpl.html",
    "<h2>Support</h2>");
}]);
