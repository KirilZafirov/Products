productsModule.controller("AddProductCtrl",
    function ($scope,
        productsService,
        $http,
        $q) {
        $scope.productsService = productsService;
        var positions = [
       "HR Manager",
       "IT Manager",
       "Controller",
       "Sales Manager",
       "Support Manager",
       "Shipping Manager"
        ];
        var data = [
          { weight: "1", appleCost: 3, orangeCost: 7 },
          { weight: "2", appleCost: 20, orangeCost: 14 },
          { weight: "3", appleCost: 21, orangeCost: 21 },
          { weight: "4", appleCost: 22, orangeCost: 28 },
          { weight: "5", appleCost: 25, orangeCost: 35 },
          { weight: "6", appleCost: 30, orangeCost: 42 },
          { weight: "7", appleCost: 35, orangeCost: 44 },
          { weight: "8", appleCost: 42, orangeCost: 45 },
          { weight: "9", appleCost: 49, orangeCost: 46 },
          { weight: "10", appleCost: 60, orangeCost: 47 }
       ];
        $scope.rangeSelectorOptions = {
            dataSource: data,
            margin: {
                top: 50
            },
            size: {
                height: 400
            },
            chart: {
                commonSeriesSettings: {
                    type: "spline",
                    argumentField: "weight"
                },
                series: [
                    { valueField: "appleCost", color: "#00ff00" },
                    { valueField: "orangeCost", color: "#ffa500" }
                ]
            },
            scale: {
                valueType: "numeric"
            },
            value: ["1", "2"],
            title: "Select a Product Weight"
        };
        var products = [];
        $scope.formOptions = {
            colCount: 2,
            formData: products,
            items: ["ID", {
                dataField: "ProductName",
                editorOptions: {
                    disabled: true
                }
            }, {
                dataField: "SubCategory",
                editorOptions: {
                    disabled: true
                }
            }, {
                dataField: "Category",
                editorType: "dxSelectBox",
                editorOptions: {
                    items: positions,
                    value: ""
                },
                validationRules: [{
                    type: "required",
                    message: "Position is required"
                }]
            }, {
                dataField: "PackageDate",
                editorType: "dxDateBox",
                editorOptions: {
                    disabled: true
                }
            }, {
                dataField: "Expires",
                editorType: "dxDateBox",
                editorOptions: {
                    value: null
                },
                validationRules: [{
                    type: "required",
                    message: "Expired Date is required"
                }]
            }, {
                colSpan: 2,
                dataField: "Notes",
                editorType: "dxTextArea",
                editorOptions: {
                    height: 90
                }
            }, "ProducedBy", {
                dataField: "SerialNumber",
                editorOptions: {
                    mask: "+1 (X00) 000-0000",
                    maskRules: { "X": /[02-9]/ }
                }
            }
            ]
        };
       

        $scope.multiple = false;
        $scope.accept = "*";
        $scope.value = [];
        $scope.uploadMode = "instantly";

        $scope.options = {
            uploadUrl: "https://js.devexpress.com/Content/Services/upload.aspx",
            bindingOptions: {
                multiple: "multiple",
                accept: "accept",
                value: "value",
                uploadMode: "uploadMode"
            }
        };

        $scope.acceptOptions = {
            dataSource: [
                { name: "All types", value: "*" },
                { name: "Images", value: "image/*" },
                { name: "Videos", value: "video/*" }
            ],
            valueExpr: "value",
            displayExpr: "name",
            width: 200,
            bindingOptions: {
                value: "accept"
            }
        };

        $scope.uploadOptions = {
            items: ["instantly", "useButtons"],
            width: 200,
            bindingOptions: {
                value: "uploadMode"
            }
        };


        var initialize = function () {

          

        }
        initialize();
    });
