/// <reference path="atsGrid/Views/userInfoFile.html" />
/// <reference path="ReportTemplate/Views/modal.html" />
var commonModule = angular.module('common', ['ngRoute', 'dx']);
var mainModule = angular.module('main', ['common', 'pascalprecht.translate']);

mainModule.config(function ($translateProvider) {
    $translateProvider.fallbackLanguage('en');
    $translateProvider.registerAvailableLanguageKeys(['en', 'mk'],
    {
        'en_*': 'en',
        'mk_*': 'mk'
    });
    $translateProvider.translations('en', {
        'QUESTION      ': "Where are you going?",
        'BUTTON_LANG_EN': "english",
        'BUTTON_LANG_ES': "Macedonian",
        'Menu_Home': "Home",
        'Menu_About': "About",
        'Menu_Contact': "Contact",
        'Menu_Reports':"Reports",
        'Menu_Products': "Products",
        'Menu_NewProduct': "Add New Product",
        'Menu_CompareProduct': "Compare Products",
        'Menu_RegisterORder': "Make Order",
        'Menu_ChangeLang': "Change Language",
        'Menu_heading': "World Product Reviews",
        'Menu_SA': "System Administration",
        "Menu_Users": "Users",
        'Menu_Roles': "Roles",
        'Menu_Permissions':"Permissions"
    });
    $translateProvider.translations('mk', {
        'QUESTION      ': "Á donde te vas?",
        'BUTTON_LANG_EN': "Англиски",
        'BUTTON_LANG_ES': "Македонски",
        'Menu_Home': "Почетна",
        'Menu_About': "За Нас",
        'Menu_Contact': "Контакт",
        'Menu_Reports':"Извештаи",
        'Menu_Products': "Производи",
        'Menu_NewProduct': "Додај Нов производ",
        'Menu_CompareProduct': "Споредувај",
        'Menu_RegisterORder': "Направи порачка",
        'Menu_ChangeLang': "Промени Јазик",
        'Menu_heading': "Светски искуства за производи",
        'Menu_SA': "Системска администрација",
        "Menu_Users": "Корисници",
        'Menu_Roles': "Позиција",
        'Menu_Permissions': "Пермисии"
    });
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.preferredLanguage('en');
});
commonModule.factory('viewModelHelper',
    function($http, $q, $window, $location) {
        return MyApp.viewModelHelper($http, $q, $window, $location);
    });

mainModule.controller("indexCtrl",
    function ($scope, $translate) {
        var self = this;
        $scope.changeLanguage = function (langKey) {
            $translate.use(langKey);
        };
    });

mainModule.controller("contactCtrl",
    function ($scope) {
        var self = this;
        var markerUrl = "https://js.devexpress.com/Demos/RealtorApp/images/map-marker.png";
        var mapProviders = [{
            key: "google",
            name: "Google Dynamic Map"
        }, {
            key: "googleStatic",
            name: "Google Static Map"
        }, {
            key: "bing",
            name: "Bing Map"
        }],
          mapTypes = [{
              key: "roadmap",
              name: "Default Map"
          }, {
              key: "satellite",
              name: "Photographic Map"
          }, {
              key: "hybrid",
              name: "Hybrid Map"
          }];
        //kikidoel.mk
        var markersData = [
           {
          location: "4th Macedonian Brigade, Kochani 2310",
            tooltip: {
                text: "Home"
            }
           },
             {
                 location: " Macedonia (FYROM), Goce Delchev No.23, Kochani 2300",
                 tooltip: {
                     text: "Home"
                 }
             }
        //{
        //    location: "Brooklyn Bridge,New York,NY",
        //    tooltip: {
        //        text: "Brooklyn Bridge"
        //    }
        //}
        ];
        $scope.markerUrlValue = markerUrl;
        $scope.markers = markersData;

        $scope.provider = mapProviders[0].key;
        $scope.type = mapTypes[0].key;
        $scope.mapOptions = {
            center: "4th Macedonian Brigade, Kochani 2310, Macedonia (FYROM)",
            key:'AIzaSyDwqeoYwLZgpH18SN3yX3YwKgGYzrRfG2Y',
            zoom: 14,
            height: 400,
            width: "100%",
            bindingOptions: {
                provider: "provider",
                type: "type",
                markerIconSrc: "markerUrlValue",
                markers: "markers"
            }
        };
        $scope.useCustomMarkersOptions = {
            value: true,
            text: "Use custom marker icons",
            onValueChanged: function (data) {
                $scope.markers = markersData;
                $scope.markerUrlValue = data.value ? markerUrl : null;
            }
        };

        $scope.showTooltipsOptions = {
            text: "Show all tooltips",
            onClick: function () {
                $scope.markers = $scope.markers.map(function (item) {
                    return $.extend(true, {}, item, { tooltip: { isShown: true } });
                });
            }
        };
        $scope.chooseProviderOptions = {
            dataSource: mapProviders,
            displayExpr: "name",
            valueExpr: "key",
            bindingOptions: {
                value: "provider"
            }
        };
        $scope.chooseTypeOptions = {
            dataSource: mapTypes,
            displayExpr: "name",
            valueExpr: "key",
            bindingOptions: {
                value: "type"
            }
        };
    });

(function (myApp) {

    var viewModelHelper = function($http, $q, $window, $location) {

        var self = this;

   
        return this;
    };

    myApp.viewModelHelper = viewModelHelper;

})(window.MyApp);

