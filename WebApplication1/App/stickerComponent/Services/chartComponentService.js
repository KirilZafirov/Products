(function (app) {
    var chartComponentService = function ($rootScope,$http, $q, $location, viewModelHelper, stickerComponentService) {
        return {
                chartOptions : {
                dataSource: stickerComponentService.dataSource,
                series: {
                    argumentField: "day",
                    valueField: "oranges",
                    name: "My oranges",
                    type: "bar",
                    color: '#ffaa66'
                }
            }
        }
    };
    app.chartComponentService = chartComponentService;
})(window.MyApp);