//TODO:MJ dividde up services in separate files
//TODO:MJ add repositories for api calls

var productsModule = angular.module('products', ['common', 'pascalprecht.translate'])
    .config(function ($routeProvider, $locationProvider) {
        
        $routeProvider.when('/Products',
           {
               templateUrl: '/App/Products/Views/ProductsView.html',
               controller: 'ProductsCtrl'
           }); 
        $routeProvider.when('/Products/New',
          {
              templateUrl: '/App/Products/Views/AddProduct.html',
              controller: 'AddProductCtrl'
          });
        
        $routeProvider.when('/Products/Compare',
          {
              templateUrl: '/App/Products/Views/CompareProducts.html',
              controller: 'CompareProductsCtrl'
          });
        $routeProvider.otherwise({ redirectTo: '/Products' });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });

        //$translateProvider.fallbackLanguage('en');
        //$translateProvider.registerAvailableLanguageKeys(['en', 'es'],
        //{
        //    'en_*': 'en',
        //    'es_*': 'es'
        //});
        //$translateProvider.translations('en', {
        //    QUESTION: "Where are you going?",
        //    BUTTON_LANG_EN: "english",
        //    BUTTON_LANG_ES: "spanish"
        //});
        //$translateProvider.translations('es', {
        //    QUESTION: "Á donde te vas?",
        //    BUTTON_LANG_EN: "inglés",
        //    BUTTON_LANG_ES: "español"
        //});
        //$translateProvider.useSanitizeValueStrategy('escape');
        //$translateProvider.preferredLanguage('en');

    });
productsModule.config(function ($translateProvider) {
 
    $translateProvider.fallbackLanguage('en');
    $translateProvider.registerAvailableLanguageKeys(['en', 'es'],
    {
        'en_*': 'en',
        'es_*': 'es'
    });
    $translateProvider.translations('en', {
        QUESTION: "Where are you going?",
        BUTTON_LANG_EN: "english",
        BUTTON_LANG_ES: "spanish"
    });
    $translateProvider.translations('es', {
        QUESTION: "Á donde te vas?",
        BUTTON_LANG_EN: "inglés",
        BUTTON_LANG_ES: "español"
    });
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');

});
productsModule.factory('productsService',
    function ($rootScope, $http, $q, $location, viewModelHelper) {
        return MyApp.productsService($rootScope, $http, $q, $location, viewModelHelper);
    });