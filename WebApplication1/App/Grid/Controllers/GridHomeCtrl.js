gridModule.controller("GridHomeCtrl",
    function ($scope,
        gridService,
        $http,
        $q) {


        $scope.gridService = gridService;
        $scope.countries = [{
            "ID": 1,
            "Country": "Brazil",
            "Area": 8515767,
            "Tasks": [{
                "ID": 5,
                "Subject": "Choose between PPO and HMO Health Plan",
                "StartDate": "2013-02-15T00:00:00",
                "DueDate": "2013-04-15T00:00:00",
                "Status": "In Progress",
                "Priority": "High",
                "Completion": 75
            }, {
                "ID": 6,
                "Subject": "Google AdWords Strategy",
                "StartDate": "2013-02-16T00:00:00",
                "DueDate": "2013-02-28T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 7,
                "Subject": "New Brochures",
                "StartDate": "2013-02-17T00:00:00",
                "DueDate": "2013-02-24T00:00:00",
                "Status": "Completed",
                "Priority": "Normal",
                "Completion": 100
            }, {
                "ID": 22,
                "Subject": "Update NDA Agreement",
                "StartDate": "2013-03-14T00:00:00",
                "DueDate": "2013-03-16T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 52,
                "Subject": "Review Product Recall Report by Engineering Team",
                "StartDate": "2013-05-17T00:00:00",
                "DueDate": "2013-05-20T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }],
            "Population_Urban": 0.85,
            "Population_Rural": 0.15,
            "Population_Total": 205809000,
            "GDP_Agriculture": 0.054,
            "GDP_Industry": 0.274,
            "GDP_Services": 0.672,
            "GDP_Total": 2353025
        }, {
            "ID": 2,
            "Country": "China",
            "Area": 9388211,
            "Tasks": [{
                "ID": 5,
                "Subject": "Choose between PPO and HMO Health Plan",
                "StartDate": "2013-02-15T00:00:00",
                "DueDate": "2013-04-15T00:00:00",
                "Status": "In Progress",
                "Priority": "High",
                "Completion": 75
            }, {
                "ID": 6,
                "Subject": "Google AdWords Strategy",
                "StartDate": "2013-02-16T00:00:00",
                "DueDate": "2013-02-28T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 7,
                "Subject": "New Brochures",
                "StartDate": "2013-02-17T00:00:00",
                "DueDate": "2013-02-24T00:00:00",
                "Status": "Completed",
                "Priority": "Normal",
                "Completion": 100
            }, {
                "ID": 22,
                "Subject": "Update NDA Agreement",
                "StartDate": "2013-03-14T00:00:00",
                "DueDate": "2013-03-16T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 52,
                "Subject": "Review Product Recall Report by Engineering Team",
                "StartDate": "2013-05-17T00:00:00",
                "DueDate": "2013-05-20T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }],
            "Population_Urban": 0.54,
            "Population_Rural": 0.46,
            "Population_Total": 1375530000,
            "GDP_Agriculture": 0.091,
            "GDP_Industry": 0.426,
            "GDP_Services": 0.483,
            "GDP_Total": 10380380
        }, {
            "ID": 3,
            "Country": "France",
            "Area": 675417,
            "Tasks": [{
                "ID": 5,
                "Subject": "Choose between PPO and HMO Health Plan",
                "StartDate": "2013-02-15T00:00:00",
                "DueDate": "2013-04-15T00:00:00",
                "Status": "In Progress",
                "Priority": "High",
                "Completion": 75
            }, {
                "ID": 6,
                "Subject": "Google AdWords Strategy",
                "StartDate": "2013-02-16T00:00:00",
                "DueDate": "2013-02-28T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 7,
                "Subject": "New Brochures",
                "StartDate": "2013-02-17T00:00:00",
                "DueDate": "2013-02-24T00:00:00",
                "Status": "Completed",
                "Priority": "Normal",
                "Completion": 100
            }, {
                "ID": 22,
                "Subject": "Update NDA Agreement",
                "StartDate": "2013-03-14T00:00:00",
                "DueDate": "2013-03-16T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 52,
                "Subject": "Review Product Recall Report by Engineering Team",
                "StartDate": "2013-05-17T00:00:00",
                "DueDate": "2013-05-20T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }],
            "Population_Urban": 0.79,
            "Population_Rural": 0.21,
            "Population_Total": 64529000,
            "GDP_Agriculture": 0.019,
            "GDP_Industry": 0.183,
            "GDP_Services": 0.798,
            "GDP_Total": 2846889
        }, {
            "ID": 4,
            "Country": "Germany",
            "Area": 357021,
            "Tasks": [{
                "ID": 5,
                "Subject": "Choose between PPO and HMO Health Plan",
                "StartDate": "2013-02-15T00:00:00",
                "DueDate": "2013-04-15T00:00:00",
                "Status": "In Progress",
                "Priority": "High",
                "Completion": 75
            }, {
                "ID": 6,
                "Subject": "Google AdWords Strategy",
                "StartDate": "2013-02-16T00:00:00",
                "DueDate": "2013-02-28T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 7,
                "Subject": "New Brochures",
                "StartDate": "2013-02-17T00:00:00",
                "DueDate": "2013-02-24T00:00:00",
                "Status": "Completed",
                "Priority": "Normal",
                "Completion": 100
            }, {
                "ID": 22,
                "Subject": "Update NDA Agreement",
                "StartDate": "2013-03-14T00:00:00",
                "DueDate": "2013-03-16T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 52,
                "Subject": "Review Product Recall Report by Engineering Team",
                "StartDate": "2013-05-17T00:00:00",
                "DueDate": "2013-05-20T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }],
            "Population_Urban": 0.75,
            "Population_Rural": 0.25,
            "Population_Total": 81459000,
            "GDP_Agriculture": 0.008,
            "GDP_Industry": 0.281,
            "GDP_Services": 0.711,
            "GDP_Total": 3859547
        }, {
            "ID": 5,
            "Country": "India",
            "Area": 3287590, "Tasks": [{
                "ID": 5,
                "Subject": "Choose between PPO and HMO Health Plan",
                "StartDate": "2013-02-15T00:00:00",
                "DueDate": "2013-04-15T00:00:00",
                "Status": "In Progress",
                "Priority": "High",
                "Completion": 75
            }, {
                "ID": 6,
                "Subject": "Google AdWords Strategy",
                "StartDate": "2013-02-16T00:00:00",
                "DueDate": "2013-02-28T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 7,
                "Subject": "New Brochures",
                "StartDate": "2013-02-17T00:00:00",
                "DueDate": "2013-02-24T00:00:00",
                "Status": "Completed",
                "Priority": "Normal",
                "Completion": 100
            }, {
                "ID": 22,
                "Subject": "Update NDA Agreement",
                "StartDate": "2013-03-14T00:00:00",
                "DueDate": "2013-03-16T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 52,
                "Subject": "Review Product Recall Report by Engineering Team",
                "StartDate": "2013-05-17T00:00:00",
                "DueDate": "2013-05-20T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }],
            "Population_Urban": 0.32,
            "Population_Rural": 0.68,
            "Population_Total": 1286260000,
            "GDP_Agriculture": 0.174,
            "GDP_Industry": 0.258,
            "GDP_Services": 0.569,
            "GDP_Total": 2047811
        }, {
            "ID": 6,
            "Country": "Italy",
            "Area": 301230,
            "Tasks": [{
                "ID": 5,
                "Subject": "Choose between PPO and HMO Health Plan",
                "StartDate": "2013-02-15T00:00:00",
                "DueDate": "2013-04-15T00:00:00",
                "Status": "In Progress",
                "Priority": "High",
                "Completion": 75
            }, {
                "ID": 6,
                "Subject": "Google AdWords Strategy",
                "StartDate": "2013-02-16T00:00:00",
                "DueDate": "2013-02-28T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 7,
                "Subject": "New Brochures",
                "StartDate": "2013-02-17T00:00:00",
                "DueDate": "2013-02-24T00:00:00",
                "Status": "Completed",
                "Priority": "Normal",
                "Completion": 100
            }, {
                "ID": 22,
                "Subject": "Update NDA Agreement",
                "StartDate": "2013-03-14T00:00:00",
                "DueDate": "2013-03-16T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 52,
                "Subject": "Review Product Recall Report by Engineering Team",
                "StartDate": "2013-05-17T00:00:00",
                "DueDate": "2013-05-20T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }],
            "Population_Urban": 0.69,
            "Population_Rural": 0.31,
            "Population_Total": 60676361,
            "GDP_Agriculture": 0.02,
            "GDP_Industry": 0.242,
            "GDP_Services": 0.738,
            "GDP_Total": 2147952
        }, {
            "ID": 7,
            "Country": "Japan",
            "Area": 377835,
            "Tasks": [{
                "ID": 5,
                "Subject": "Choose between PPO and HMO Health Plan",
                "StartDate": "2013-02-15T00:00:00",
                "DueDate": "2013-04-15T00:00:00",
                "Status": "In Progress",
                "Priority": "High",
                "Completion": 75
            }, {
                "ID": 6,
                "Subject": "Google AdWords Strategy",
                "StartDate": "2013-02-16T00:00:00",
                "DueDate": "2013-02-28T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 7,
                "Subject": "New Brochures",
                "StartDate": "2013-02-17T00:00:00",
                "DueDate": "2013-02-24T00:00:00",
                "Status": "Completed",
                "Priority": "Normal",
                "Completion": 100
            }, {
                "ID": 22,
                "Subject": "Update NDA Agreement",
                "StartDate": "2013-03-14T00:00:00",
                "DueDate": "2013-03-16T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 52,
                "Subject": "Review Product Recall Report by Engineering Team",
                "StartDate": "2013-05-17T00:00:00",
                "DueDate": "2013-05-20T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }],
            "Population_Urban": 0.93,
            "Population_Rural": 0.07,
            "Population_Total": 126920000,
            "GDP_Agriculture": 0.012,
            "GDP_Industry": 0.275,
            "GDP_Services": 0.714,
            "GDP_Total": 4616335
        }, {
            "ID": 8,
            "Country": "Russia",
            "Area": 17098242,
            "Tasks": [{
                "ID": 5,
                "Subject": "Choose between PPO and HMO Health Plan",
                "StartDate": "2013-02-15T00:00:00",
                "DueDate": "2013-04-15T00:00:00",
                "Status": "In Progress",
                "Priority": "High",
                "Completion": 75
            }, {
                "ID": 6,
                "Subject": "Google AdWords Strategy",
                "StartDate": "2013-02-16T00:00:00",
                "DueDate": "2013-02-28T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 7,
                "Subject": "New Brochures",
                "StartDate": "2013-02-17T00:00:00",
                "DueDate": "2013-02-24T00:00:00",
                "Status": "Completed",
                "Priority": "Normal",
                "Completion": 100
            }, {
                "ID": 22,
                "Subject": "Update NDA Agreement",
                "StartDate": "2013-03-14T00:00:00",
                "DueDate": "2013-03-16T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 52,
                "Subject": "Review Product Recall Report by Engineering Team",
                "StartDate": "2013-05-17T00:00:00",
                "DueDate": "2013-05-20T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }],
            "Population_Urban": 0.74,
            "Population_Rural": 0.26,
            "Population_Total": 146544710,
            "GDP_Agriculture": 0.039,
            "GDP_Industry": 0.36,
            "GDP_Services": 0.601,
            "GDP_Total": 1857461
        }, {
            "ID": 9,
            "Tasks": [{
                "ID": 5,
                "Subject": "Choose between PPO and HMO Health Plan",
                "StartDate": "2013-02-15T00:00:00",
                "DueDate": "2013-04-15T00:00:00",
                "Status": "In Progress",
                "Priority": "High",
                "Completion": 75
            }, {
                "ID": 6,
                "Subject": "Google AdWords Strategy",
                "StartDate": "2013-02-16T00:00:00",
                "DueDate": "2013-02-28T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 7,
                "Subject": "New Brochures",
                "StartDate": "2013-02-17T00:00:00",
                "DueDate": "2013-02-24T00:00:00",
                "Status": "Completed",
                "Priority": "Normal",
                "Completion": 100
            }, {
                "ID": 22,
                "Subject": "Update NDA Agreement",
                "StartDate": "2013-03-14T00:00:00",
                "DueDate": "2013-03-16T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 52,
                "Subject": "Review Product Recall Report by Engineering Team",
                "StartDate": "2013-05-17T00:00:00",
                "DueDate": "2013-05-20T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }],
            "Country": "United States",
            "Area": 9147420,
            "Population_Urban": 0.81,
            "Population_Rural": 0.19,
            "Population_Total": 323097000,
            "GDP_Agriculture": 0.0112,
            "GDP_Industry": 0.191,
            "GDP_Services": 0.797,
            "GDP_Total": 17418925
        }, {
            "ID": 10,
            "Country": "United Kingdom",
            "Area": 244820,
            "Tasks": [{
                "ID": 5,
                "Subject": "Choose between PPO and HMO Health Plan",
                "StartDate": "2013-02-15T00:00:00",
                "DueDate": "2013-04-15T00:00:00",
                "Status": "In Progress",
                "Priority": "High",
                "Completion": 75
            }, {
                "ID": 6,
                "Subject": "Google AdWords Strategy",
                "StartDate": "2013-02-16T00:00:00",
                "DueDate": "2013-02-28T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 7,
                "Subject": "New Brochures",
                "StartDate": "2013-02-17T00:00:00",
                "DueDate": "2013-02-24T00:00:00",
                "Status": "Completed",
                "Priority": "Normal",
                "Completion": 100
            }, {
                "ID": 22,
                "Subject": "Update NDA Agreement",
                "StartDate": "2013-03-14T00:00:00",
                "DueDate": "2013-03-16T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }, {
                "ID": 52,
                "Subject": "Review Product Recall Report by Engineering Team",
                "StartDate": "2013-05-17T00:00:00",
                "DueDate": "2013-05-20T00:00:00",
                "Status": "Completed",
                "Priority": "High",
                "Completion": 100
            }],
            "Population_Urban": 0.82,
            "Population_Rural": 0.18,
            "Population_Total": 65097000,
            "GDP_Agriculture": 0.007,
            "GDP_Industry": 0.21,
            "GDP_Services": 0.783,
            "GDP_Total": 2945146
        }];
        var initialize = function () {
        }
        initialize();
    });

gridModule.directive('atsGridView', function () {
    return {
        templateUrl: '/App/atsGrid/Views/atsGridDirectiveView.html',
        restrict: 'AE',
        scope:true,
        controller: function ($scope) {
                $scope.gridOptions = {
                    dataSource: $scope.countries,
                    columnAutoWidth: true,
                    showColumnLines: true,
                    showRowLines: true,
                    rowAlternationEnabled: true,
                    allowColumnReordering: true,
                    allowColumnResizing: true,
                    "export": {
                        enabled: true,
                        fileName: "Countries",
                        allowExportSelectedData: true
                    },
                    showBorders: true,
                    filterRow: {
                        visible: true,
                        applyFilter: "auto"
                    },
                    headerFilter: {
                        visible: true
                    },
                    sorting: {
                        mode: 'multiple'
                    },
                    twoWayBindingEnabled: true,
                    stateStoring: {
                        enabled: true,
                        type: "localStorage",
                        storageKey: "storage"

                    },
                    selection: {
                        mode: 'multiple'
                        // deferred: true
                    },
                    grouping: {
                        autoExpandAll: true,
                        visible: 'auto'
                    },
                    searchPanel: {
                        visible: true
                    },
                    paging: {
                        pageSize: 5
                    },
                    pager: {
                        showPageSizeSelector: true,
                        visible: 'auto',
                        allowedPageSizes: [5, 10, 20],
                        showInfo: true
                    },
                    columnChooser: {
                        enabled: true,
                        mode: 'dragAndDrop'
                    },
                    columnFixing: {
                        enabled: true
                    },
                    groupPanel: {
                        visible: 'auto'
                    },
                    loadPanel: {
                        enabled: true,
                        text: 'waiting for data'
                    },
                    hoverStateEnabled: true,
                    height: '100%',
                    width: '100%',
                    editing: {
                        mode: 'batch',
                        allowUpdating: true,
                        allowDeleting: true,
                        allowAdding: true
                    },
                    onRowUpdated: function () {
                        console.log();
                        alert('row update');
                    },
                    columns: [
                        {
                            caption: "Face/Legend " + "| Name |",
                            cellTemplate: "detail",
                            allowReordering: false,
                            fixed: true
                        },
                        {
                            caption: 'Calculation',
                            allowReordering: false,
                            fixed: true
                        },
                    {
                        caption: "Model",
                        columns: [
                         {
                             dataField: "Country",
                             filterOperations: [
                                 'startswith', 'contains', '='
                             ],
                             selectedFilterOperation: 'contains',
                             // groupIndex: 0
                             cssClass: 'testing'
                         },
                        {
                            caption: "Total",
                            dataField: "Population_Total",
                            format: "fixedPoint",
                            allowGrouping: false
                        }, {
                            caption: "Urban",
                            dataField: "Population_Urban",
                            format: "percent",
                            allowGrouping: false
                        },
                        {
                            caption: "Total, mln $",
                            dataField: "GDP_Total",
                            format: "fixedPoint",
                            sortOrder: "desc",
                            allowGrouping: false
                        },
                        {
                            caption: "Agriculture",
                            dataField: "GDP_Agriculture",
                            format: {
                                type: "percent",
                                precision: 1
                            }
                        }, {
                            caption: "Industry",
                            dataField: "GDP_Industry",
                            format: {
                                type: "percent",
                                precision: 1
                            }
                        }, {
                            caption: "Services",
                            dataField: "GDP_Services",
                            format: {
                                type: "percent",
                                precision: 1
                            }
                        }
                        ]
                    }],
                    masterDetail: {
                        enabled: true,
                        template: function (container, options) {
                            var currentCountryData = options.data;
                            container.addClass("internal-grid-container");
                            $("<div>").text(currentCountryData.ID + " " + currentCountryData.Country + " Tasks:").appendTo(container);
                            $("<div>")
                                .addClass("internal-grid")
                                .dxDataGrid({
                                    columnAutoWidth: true,
                                    columns: ["Subject", {
                                        dataField: "StartDate",
                                        dataType: "date"
                                    }, {
                                        dataField: "DueDate",
                                        dataType: "date"
                                    }, "Priority", {
                                        caption: "Completed",
                                        dataType: "boolean",
                                        calculateCellValue: function (rowData) {
                                            return rowData.Status === "Completed";
                                        }
                                    }],
                                    dataSource: currentCountryData.Tasks
                                }).appendTo(container);
                        }
                    },
                    sortByGroupSummaryInfo: [
                        { summaryItem: "count" },
                        { summaryItem: 1, groupColumn: 'GDP_Industry' }
                    ],
                    summary: {
                        groupItems: [
                        {
                            column: "Country",
                            summaryType: "count"
                        },
                        {
                            column: "GDP_Industry",
                            summaryType: "sum",
                            valueFormat: "currency"
                        },
                        {
                            column: "GDP_Agriculture",
                            summaryType: "sum",
                            valueFormat: "currency"
                        },
                        {
                            column: "GDP_Services",
                            summaryType: "sum",
                            valueFormat: "currency"
                        },
                        {
                            column: "GDP_Total",
                            summaryType: "sum",
                            valueFormat: "currency",
                            displayFormat: "Total: {0}"
                        }]
                    },

                    calculateCustomSummary: function (options) {
                        if (options.name === "SelectedRowsSummary") {
                            if (options.summaryProcess === "start") {
                                options.totalValue = 0;
                            }
                            if (options.summaryProcess === "calculate") {

                                if (options.component.isRowSelected(options.value.ID)) {
                                    options.totalValue = options.totalValue + options.value.GDP_Total;
                                }
                            }
                            if (options.summaryProcess === "finalize") {
                                //
                            }
                        }
                    },
                    onCellPrepared: function (e) {
                        if (e.rowType === "data" && e.column.command === "edit") {
                            var isEditing = e.row.isEditing,
                                $links = e.cellElement.find(".dx-link");
                            $links.text("");
                            if (isEditing) {
                                $links.filter(".dx-link-save").addClass("dx-icon-save");
                                $links.filter(".dx-link-cancel").addClass("dx-icon-revert");
                            } else {
                                $links.filter(".dx-link-edit").addClass("dx-icon-edit");
                                $links.filter(".dx-link-delete").addClass("dx-icon-trash");
                            }
                        }
                    },                   
                    onToolbarPreparing: function (e) {
                        var dataGrid = e.component;
                        e.toolbarOptions.items.unshift({
                            location: "after",
                            widget: "dxSelectBox",
                            options: {
                                width: 200,
                                items: [{
                                    value: "Country",
                                    text: "Grouping by Country"
                                }, {
                                    value: "GDP_Industry",
                                    text: "Grouping by Industry"
                                }],
                                displayExpr: "text",
                                valueExpr: "value",
                                value: "Country",
                                onValueChanged: function (e) {
                                    dataGrid.clearGrouping();
                                    dataGrid.columnOption(e.value, "groupIndex", 0);
                                    $(".informer .count").text(getGroupCount(e.value));
                                }
                            }
                        }, {
                            location: "after",
                            widget: "dxButton",
                            options: {
                                hint: "Collapse All",
                                icon: "chevrondown",
                                onClick: function (e) {
                                    var expanding = e.component.option("icon") === "chevronnext";
                                    dataGrid.option("grouping.autoExpandAll", expanding);
                                    e.component.option({
                                        icon: expanding ? "chevrondown" : "chevronnext",
                                        hint: expanding ? "Collapse All" : "Expand All"
                                    });
                                }
                            }
                        }, {
                            location: "after",
                            widget: "dxButton",
                            options: {
                                icon: "refresh",
                                onClick: function () {
                                    dataGrid.refresh();
                                }
                            }
                        });
                    },
                    wordWrapEnabled: true
                };


                function getGroupCount(groupField) {
                    return DevExpress.data.query(countries)
                        .groupBy(groupField)
                        .toArray().length;
                }

                $scope.buttonOptions = {
                    text: "Calculate summary for selected rows",
                    onClick: function () {
                        $("#gridContainer").dxDataGrid("instance").refresh();
                    }
                };
                $scope.something = {
                    text: "Calculate summary for selected rows",
                    type: "success",
                    onClick: function () {
                        console.log(countries);
                        DevExpress.ui.notify("Data was successfully saved");
                        $("#gridContainer").dxDataGrid("instance").refresh();
                    }
                }
                $scope.someText = "asdf";
            }
        
    }
});