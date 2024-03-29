﻿productsModule.controller("CompareProductsCtrl",
    function ($scope,
        productsService,
        $http,
        $q) {
        $scope.productsService = productsService;
      
        $scope.employees = productsService.employees;
      
        $scope.gridOptions = {
                   dataSource: $scope.employees,
                    columnAutoWidth: true,
                    showColumnLines: true,
                    showRowLines: true,
                    rowAlternationEnabled: true,
                    allowColumnReordering: true,
                    allowColumnResizing: true,
                    "export": {
                        enabled: true,
                        fileName: "Employees",
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
                    //stateStoring: {
                    //    enabled: true,
                    //    type: "localStorage",
                    //    storageKey: "storage"

                    //},
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
                    groupPanel: {
                        visible: 'auto'
                    },
                    loadPanel: {
                        enabled: true,
                        text: 'waiting for data'
                    },
                    hoverStateEnabled: true,
                    editing: {
                        mode: 'row',
                        allowUpdating: true,
                        allowDeleting: true,
                        allowAdding: true
                    },
                    onRowUpdated: function () {
                    },
                    columns: [
                        {
                        dataField: "Picture",
                        width: 100,
                        allowFiltering: false,
                        allowSorting: false,
                        cellTemplate: "cellTemplate"
                    },
                         {
                             caption: "Full Name",
                             calculateCellValue: function (data) {
                                 return [
                                         data.Prefix,
                                         data.FirstName,
                                         data.LastName
                                 ]
                                     .join(" ");
                             }
                         }
                        , 'Position', 'BirthDate', 'HireDate', 'Address',
                        
                    ],
                    onSelectionChanged:function(key) {
                        
                            $scope.resultingRows = key.selectedRowsData;
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
                        e.toolbarOptions.items.unshift( {
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
                    }
                };
          
         
        $scope.listCompare = [];
        $scope.showCompare = false;
        $scope.report = function () {
               if ($scope.resultingRows) {
                   if ($scope.resultingRows.length >= 2) {
                       for (var i = 0; i < $scope.resultingRows.length; i++) {
                           $scope.listCompare.push($scope.resultingRows[i]);
                       }
                       $scope.showCompare = true;
                       DevExpress.ui.notify('The Selected Values are shown', 'success', 2000);
                       console.log($scope.listCompare);
                   } else {
                       DevExpress.ui.notify('Atleast two values need to be selected', 'error', 2000);
                   }
               } else {
                   DevExpress.ui.notify('No values are selected', 'error', 2000);
               }
        }
        $scope.compareGridOptions = {
               dataSource: $scope.listCompare,

               showColumnLines: true,
               showRowLines: true,
               rowAlternationEnabled: true,
               allowColumnReordering: true,
               allowColumnResizing: true,
               "export": {
                   enabled: true,
                   fileName: "Employees",
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

               searchPanel: {
                   visible: true
               },
               paging: {
                   pageSize: 5
               },
               columnChooser: {
                   enabled: true,
                   mode: 'dragAndDrop'
               },
               loadPanel: {
                   enabled: true,
                   text: 'waiting for data'
               },
               hoverStateEnabled: true,

               columns: [
                  
                   {
                       caption: "Full Name",
                       calculateCellValue: function (data) {
                           return [
                                   data.Prefix,
                                   data.FirstName,
                                   data.LastName
                           ]
                               .join(" ");
                       }
                   }
                   , 'Position', 'Address'

               ]
           };

        var types = ["spline", "stackedSpline", "fullStackedSpline"];
        $scope.currentType = types[0];

        $scope.chartOptions = {
            palette: "violet",
            dataSource: $scope.listCompare,
            commonSeriesSettings: {
                argumentField: "HireDate"
            },
            bindingOptions: {
                "commonSeriesSettings.type": "currentType"
            },
            commonAxisSettings: {
                grid: {
                    visible: true
                }
            },
            margin: {
                bottom: 20
            },
            series: [
                { valueField: "ID", name: "ID" },
                { valueField: "Number", name: "Number" }
            ],
            tooltip: {
                enabled: true
            },
            legend: {
                verticalAlignment: "top",
                horizontalAlignment: "right"
            },
            "export": {
                enabled: true
            },
            title: "Architecture Share Over Time (Count)"
        };
      
        $scope.typesOptions = {
            dataSource: types,
            bindingOptions: {
                value: "currentType"
            }
        };

        $scope.pieChartOptions = {
            type: "doughnut",
            palette: "Soft Pastel",
            title: "Top Internet Languages",
            dataSource: $scope.listCompare,
            legend: {
                horizontalAlignment: "center",
                verticalAlignment: "bottom"
            },
            "export": {
                enabled: true
            },
            series: [{
                smallValuesGrouping: {
                    mode: "topN",
                    topCount: 3
                },
                argumentField: "FirstName",
                valueField: "Number",
                label: {
                    visible: true,
                    format: "fixedPoint",
                    customizeText: function (point) {
                        return point.argumentText + ": " + point.valueText + "%";
                    },
                    connector: {
                        visible: true,
                        width: 1
                    }
                }
            }]
        };
      
        var initialize = function () {

           
            $scope.test = 'teasdasdasst';

        }
        initialize();
        
    });
