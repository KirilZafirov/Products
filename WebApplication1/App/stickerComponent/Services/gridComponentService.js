(function (app) {
    var gridComponentService = function ($rootScope,$http, $q, $location, viewModelHelper, stickerComponentService) {
        return {
            grouping : {
                autoExpandAll: true
            },
            dataGridOptions : {
            dataSource: stickerComponentService.customers,
            allowColumnReordering: true,
            bindingOptions: {
                grouping: "grouping"
            },
            searchPanel: {
                visible: true
            },
            paging: {
                pageSize: 10
            },
            groupPanel: {
                visible: true
            },
            columns: [
                "CompanyName",
                "Phone",
                "Fax",
                "City",
                {
                    dataField: "State",
                    groupIndex: 0
                }
            ]
        },
            checkBoxOptions : {
            text: "Expand All Groups",
            bindingOptions: {
                value: "grouping.autoExpandAll"
            }
        }
        }
    };

    app.gridComponentService = gridComponentService;
})(window.MyApp);