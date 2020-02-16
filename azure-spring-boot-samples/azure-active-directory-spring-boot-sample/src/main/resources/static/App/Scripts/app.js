'use strict';
angular.module('todoApp', ['ngRoute', 'MsalAngular'])
    .config(['$routeProvider', '$httpProvider', 'msalAuthenticationServiceProvider', function ($routeProvider, $httpProvider, msalProvider) {

        $routeProvider.when("/Home", {
            controller: "homeCtrl",
            templateUrl: "/App/Views/Home.html",
        }).when("/TodoList", {
            controller: "todoListCtrl",
            templateUrl: "/App/Views/TodoList.html",
            requireLogin: true,
        }).when("/UserData", {
            controller: "userDataCtrl",
            templateUrl: "/App/Views/UserData.html",
        }).otherwise({redirectTo: "/Home"});

        window.applicationConfig = {
            clientID: 'c78882c3-8f3d-48ad-b0f4-48cb94cb09ab'
        };

        msalProvider.init(
            {
                authority: 'https://login.microsoftonline.com/girginactivedirectory.onmicrosoft.com',
                clientID: applicationConfig.clientID,
                cacheLocation: 'localStorage',
                postLogoutRedirectUri: 'http://localhost:8080/logout',

                tokenReceivedCallback: function (errorDesc, token, error, tokenType) {
                },
            },
            $httpProvider
        );

    }]);
