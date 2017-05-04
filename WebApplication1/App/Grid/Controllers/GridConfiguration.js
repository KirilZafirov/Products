$("#datagrid")
    .dxDataGrid({
        //Specifies a shortcut key that sets focus on the widget element
        accessKey: null,
        //A Boolean value specifying whether or not the widget changes its state when interacting with a user
        activeStateEnabled: false,
        //Specifies whether or not grid columns can be reordered by a user.
        allowColumnReordering: false,
        //Specifies whether or not grid columns can be resized by a user.
        allowColumnResizing: false,
        //Specifies whether or not to enable data caching.
        cacheEnabled: true,
        //Enables a hint that appears when a user hovers the mouse pointer over a cell with truncated content
        cellHintEnabled: true,
        //Specifies whether or not the width of grid columns depends on column content
        columnAutoWidth: false,
        //Specifies the options of a column chooser
        //A column chooser is a grid element that allows a user to hide specific grid columns.
        columnChooser: {
            //Specifies text displayed by the column chooser panel when it does not contain any columns
            emptyPanelText: 'Drag a column here to hide',
            //Specifies whether a user can invoke the column chooser or not
            enabled: false,
            height: 260,
            //Specifies how the end-user chooses columns
            //other option is 'select'
            //In the "dragAndDrop" mode, the end-user moves column headers to the column chooser and back by drag-and-drop.
            //In the "select" mode, the end-user selects column headers in the column chooser using check boxes.
            //In both modes, the corresponding columns appear/disappear in the grid
            mode: 'dragAndDrop',
            //Specifies text displayed in the title of the column chooser panel
            title: 'Column Chooser',
            width: 250
        },
        //Specifies options for column fixing.
        //When a total column width is greater than the width of the grid's container, horizontal scrolling appears.
        //This may happen in the following cases:
        //when all columns have a specified width;
        //when the grid's columnAutoWidth option is set to false.
        //If you need specific columns to be displayed on screen regardless of the scrolling performed, set the columnFixing | enabled option to true. In this instance, the columns for which the fixed option is set to true will be anchored to the grid's edge. For instance, the command columns, the ones containing check boxes to select rows or links to save/delete rows, will be fixed since their fixed option is set to true.
        //You can anchor an unlimited number of columns to any grid edge. To specify a required edge, use a column's fixedPosition option.
        columnFixing: {
            //Indicates if column fixing is enabled.
            enabled: true,
            //Contains options that specify texts for column-fixing related commands in the column header's context menu
            //Use these options to provide custom texts for column-fixing related commands or when localizing the grid
            texts: {
                //Specifies text for a context menu item that fixes the column for which the context menu is invoked
                fix: 'Fix',
                //Specifies text for a context menu subitem that fixes a column, for which the context menu is invoked, to the left grid edge
                leftPosition: 'To The left',
                //Specifies text for a context menu subitem that fixes a column, for which the context menu is invoked, to the right grid edge
                rightPosition: 'To the right',
                //Specifies text for a context menu item that unfixes the column for which the context menu is invoked.
                unfix: 'Unfix'
            }
        },
        //Specifies whether or not the widget should hide columns in order to adapt to the screen or container size.
        columnHidingEnabled: false,
        //An array of grid columns.
        columns: [
            {
                //can be undefined,left,center,right
                //Specifies the content alignment within column cells.
                alignment: undefined,
                //Specifies whether the values in a column can be edited at runtime. Setting this option makes sense only when editing is enabled for a grid.
                allowEditing: true,
                //Specifies whether or not a column can be used for filtering grid records. Setting this option makes sense only when the filter row and column header filtering are visible.
                allowFiltering: true,
                //Specifies whether or not the column can be anchored to a grid edge by end users. Setting this option makes sense only when the columnFixing | enabled option is set to true.
                allowFixing: true,
                //Specifies whether the user can group data by values of this column. Applies only when grouping is enabled.
                allowGrouping: true,
                //Specifies whether or not to allow filtering by this column using its header
                allowHeaderFiltering: true,
                //Specifies whether or not a column can be hidden by a user. Setting this option makes sense only when the column chooser is visible
                allowHiding: true,
                //Specifies whether or not a particular column can be used in column reordering. Setting this option makes sense only when the allowColumnReordering option is set to true.
                allowReordering: true,
                //Specifies whether or not a particular column can be resized by a user. Setting this option makes sense only when the allowColumnResizing option is true.
                allowResizing: true,
                //Specifies if a column can be used for searching grid records. Setting this option makes sense only when the search panel is visible.
                allowSearch: true,
                //Specifies whether grid records can be sorted by a specific column at runtime. Setting this option makes sense only when the sorting mode differs from none.
                allowSorting: true,
                //Specifies whether groups appear expanded or not when records are grouped by a specific column. Setting this option makes sense only when grouping is allowed for this column.
                autoExpandGroup: true,
                //Specifies a callback function that returns a value to be displayed in a column cell.
                calculateCellValue: null,
                //Specifies how to get a value to be displayed in a cell when it is not in an editing state.
                calculateDisplayValue: null,
                //Specifies a callback function that defines filters for customary calculated grid cells.
                calculateFilterExpression: null,
                //Specifies a field name or a function that returns a field name or a value to be used for grouping column cells.
                calculateGroupValue: null,
                //Specifies a field name or a function that returns a field name or a value to be used for sorting column cells.
                calculateSortValue: null,
                //Specifies a caption for a column.
                caption: undefined,
                //Specifies a CSS class to be applied to a column
                cssClass: undefined,
                //Specifies the field of a data source that provides data for a column
                dataField: undefined,
                //Specifies the required type of column values.
                dataType: undefined,
                //Specifies whether HTML tags are displayed as plain text or applied to the values of the column.
                encodeHtml: true,
                //In a boolean column, replaces all false items with a specified text
                falseText: false,
                //Specifies whether to include or exclude the records with the values selected in the column's header filter.Accepted Values: 'include' | 'exclude
                filterType: 'include',
                //Specifies a filter value for a column.
                filterValue: undefined,
                //Indicates whether the column takes part in horizontal grid scrolling or is anchored to a grid edge.
                fixed: false,
                //Specifies the grid edge to which the column is anchored.
                fixedPosition: undefined,
                //Specifies the index of a column when grid records are grouped by the values of this column.
                groupIndex: undefined,
                //Specifies column-level options for filtering using a column header filter
                headerFilter: {
                    //Specifies the data source to be used for the header filter.
                    dataSource: models,
                    //Specifies how header filter values should be combined into groups.
                    groupInterval: undefined
                },
                //Specifies the order according to which grid columns must be concealed when the widget adapts to the screen or container size.
                hidingPriority: undefined,
                //Specifies whether the column bands other columns or not
                isBand: undefined,
                //Specifies options of a lookup column.
                lookup: {
                    //Specifies whether or not a user can nullify values of a lookup column
                    allowClearing: false,
                    //Specifies the data source providing data for a lookup column.
                    dataSource: models,
                    //Specifies the expression defining the data source field whose values must be displayed
                    displayExpr: undefined,
                    //Specifies the expression defining the data source field whose values must be replaced.
                    valueExpr: undefined
                },
                //Specifies the identifier of the column
                name: undefined,
                //Specifies the band column that owns the current column. Accepts the index of the band column in the columns array.
                ownerBand: undefined,
                //Specifies the default filter operation of a column.
                selectedFilterOperation: undefined,
                //Specifies whether or not the column displays its values by using editors.
                showEditorAlways: false,
                //Specifies whether or not to display the header of a hidden column in the column chooser
                showInColumnChooser: true,
                //Specifies whether or not to display the column when grid records are grouped by it.
                showWhenGrouped: false,
                //Specifies the index of a column when grid records are sorted by the values of this column.
                sortIndex: undefined,
                //Specifies the initial sort order of column values.
                sortOrder: undefined,
                //In a boolean column, replaces all true items with a specified text.
                trueText: true,
                //Specifies whether a column is visible or not.
                visible: true,
                //Specifies an array of validation rules to be checked when updating column cell values
                validationRules: undefined,
                //Specifies the sequence number of the column in the grid
                visibleIndex: undefined,
                //Specifies a column width in pixels or percentages.
                width: undefined
            }
        ],
        //Specifies a data source for the grid.
        dataSource: models,
        //A Boolean value specifying whether or not the widget can respond to user interaction.
        disabled: true,
        //Contains options that specify how grid content can be changed. DataGrid supports editing, insertion and the removing of grid values. 
        //The availability of performing a certain operation is specified by the allowUpdating, allowAdding and allowDeleting options.
        editing: {
            //Specifies whether or not new grid records can be added at runtime
            allowAdding: true,
            //Specifies whether or not new grid records can be deleted at runtime
            allowDeleting: true,
            //Specifies whether or not new grid records can be updated at runtime
            allowUpdating: true,
            //options for editing mode are 'row','batch','cell','form'
            mode: 'row',
            //
            texts: {
                //Specifies text for a hint that appears when a user hovers the mouse pointer over the "Add" button. Setting this option makes sense only when the allowAdding option is true.
                addRow: 'Add a row',
                //Specifies text for a hint that appears when a user hovers the mouse pointer over the "Revert" button. Setting this option makes sense only when the mode option is set to batch
                cancelAllChanges: 'Discard Changes',
                //Specifies text for a cancel button displayed when a row is in the editing state. Setting this option makes sense only when the allowUpdating option is set to true.
                cancelRowChanges: 'Cancel',
                //Specifies a message to be displayed by a confirmation window. Setting this option makes sense only when the edit mode is "row".
                confirmDeleteMessage: 'Are You sure you want to delete',
                //Specifies text to be displayed in the title of a confirmation window. Setting this option makes sense only when the edit mode is "row".
                confirmDeleteTittle: '',
                //Specifies text for a button that deletes a row from a grid. Setting this option makes sense only when the allowDeleting option is set to true.
                deleteRow: 'Delete',
                //Specifies text for a button that turns a row into the editing state. Setting this option makes sense only when the allowUpdating option is set to true.
                editRow: 'Edit',
                //Specifies text for a hint that appears when a user hovers the mouse pointer over the "Save" button. Setting this option makes sense only when the mode option is set to batch
                saveAllChanges: 'Save Changes',
                //Specifies text for a save button displayed when a row is in the editing state. Setting this option makes sense only when the allowUpdating option is set to true.
                saveRowChanges: 'Save',
                //Specifies text for a button that recovers a deleted row. Setting this option makes sense only if the grid uses the batch edit mode and the allowDeleting option is set to true.
                undeleteRow: 'Undelete',
                //Specifies text for a hint that appears when a user hovers the mouse pointer over the "Cancel changes" button.
                //Setting this option makes sense only when the mode option is set to cell and the validation capabilities are enabled.
                validationCancelChanges: 'Cancel'
            }
        },
        //Indicates whether to show the error row for the grid.
        //The error row displays the data errors that occur on the server during the grid's life cycle.
        errorRowEnabled: true,
        //Configures client-side export.
        //When client-side export is enabled, the grid toolbar contains the Export button that 
        //exports grid data to Excel. For details on exporting, refer to the Client-Side Export article.
        export: {
            //Allows an end user to export selected rows only.
            allowExportSelectedData: false,
            //Enables the client-side export feature.
            enabled: false,
            //Specifies whether to enable Excel filtering for the exported data in the resulting XLSX file.
            excelFilterEnabled: false,
            //Specifies whether to enable word wrapping for the exported data in the resulting XLSX file
            excelWrapTextEnabled: undefined,
            //Specifies a default name for the file to which grid data is exported
            fileName: 'DataGrid',
            //Specifies the URL of the server-side proxy that streams the resulting file to the end user to enable export in IE9 and Safari browsers.
            //Generally, exporting is performed using client-side API in browsers. 
            proxyUrl: undefined,
            //
            texts: {
                //Specifies the text of the command that exports all data.
                exportAll: 'Export All Data',
                //Specifies the text of the drop-down menu command that exports selected rows.
                exportSelectedRows: 'Export Selected Rows',
                //Specifies the hint of the Export button when the allowExportSelectedData option is true.
                exportTo: 'Export'
            }
        },
        //Specifies filter row options.
        // In DataGrid, an end-user can filter grid records at runtime using the filter row. This row is located below the 
        // grid row that contains column captions. By default, the filter row is hidden. To make it appear, set the visible option of the filterRow object to true.
        // To filter grid records by a value in a grid column, the user must enter the required value (or a part of it) in 
        // the filter row cell that belongs to this column. The matched records are determined according to the column's currently selected filter operation. ' +
        //'To change this operation, the user must click the magnifying glass icon accompanying each filter row cell and choose the required filter operation from the appeared drop-down list.
        filterRow: {
            //Specifies when to apply a filter.Accepted Values: 'auto' | 'onClick'
            applyFilter: 'auto',
            //Specifies text for the hint that pops up when a user hovers the mouse pointer over the "Apply Filter" button.
            applyFilterText: 'Apply filter',
            //Specifies text for the range end in the 'between' filter type
            betweenEndText: 'End',
            //Specifies text for the range start in the 'between' filter type
            betweenStartText: 'Start',
            //Specifies text for the reset operation in a filter list
            resetOperationText: 'Reset',
            //Specifies text for the operation of clearing the applied filter when a select box is used.
            showAllText: '(All)',
            //Specifies whether or not an icon that allows the user to choose a filter operation is visible
            showOperationChooser: true,
            //Specifies whether the filter row is visible or not
            visible: false
        },
        //Specifies whether or not the widget can be focused
        focusStateEnabled: false,
        //
        grouping: {
            //Specifies whether the user can collapse grouped records in a grid or not
            allowCollapsing: true,
            //Specifies whether groups appear expanded or not
            autoExpandAll: true,
            //Enables the user to group data using the context menu.
            contextMenuEnabled: false,
            //Options for exanding are buttonClick and rowClick
            expandMode: 'buttonClick',
            //
            texts: {
                //Specifies the text of the context menu item that groups data by a specific column
                groupByThisColumn: 'Group By this Column',
                //Specifies the message displayed in a group row when the corresponding group is continued from the previous page.
                groupContinuedMessage: 'Continued from the previous',
                //Specifies the message displayed in a group row when the corresponding group continues on the next page
                groupContinuesMessage: 'Continiues on the next page',
                //Specifies the text of the context menu item that clears grouping settings of a specific column
                ungroup: 'Ungroup',
                //Specifies the text of the context menu item that clears grouping settings of all columns
                ungroupAll: 'Ungroup All'
            }
        },
        //Data in DataGrid can be grouped by one column or by several. Once a column is used for grouping, it is added to the group panel.
        groupPanel: {
            //Specifies whether columns can be dragged onto or from the group panel.
            allowColumnDragging: true,
            //Specifies text displayed by the group panel when it does not contain any columns
            emptyPanelText: 'Drag a column here to group By',
            //Specifies whether the group panel is visible or not.
            visible: false
        },
        //Specifies options for filtering using a column header filter.
        headerFilter: {
            height: 300,
            //
            texts: {
                //Specifies text for a button that closes the column header filter's dropdown menu without applying performed selection
                cancel: 'Cancel',
                //Specifies text for the item specifying an empty value in the column header filter's dropdown menu
                emptyValue: '(Blanks)',
                //Specifies text for a button that closes the column header filter's dropdown menu and applies specified filtering
                ok: 'Ok'
            },
            visible: false,
            width: 250
        },
        //Specifies the height of the widget.
        height: undefined,
        //Specifies the text of the hint displayed for the widget.
        hint: undefined,
        //Specifies whether grid rows are highlighted when the mouse pointer moves over them
        hoverStateEnabled: false,
        //Specifies options configuring the load panel.
        //When DataGrid operates with a large number of records or uses a remote storage as a data source, loading data takes time. 
        //As data is being prepared, DataGrid displays a load panel.
        loadPanel: {
            //Specifies whether to show the load panel or not
            enabled: 'auto',
            //
            height: 90,
            //Specifies a URL pointing to an image to be used as a loading indicator.
            indicatorSrc: '',
            //Specifies whether or not a loading indicator must be displayed on the load panel
            showIndicator: true,
            //Specifies whether or not the pane of the load panel must be displayed.
            showPane: true,
            //Specifies text displayed by the load panel
            text: 'Loading...',
            //
            width: 200
        },
        //Allow you to build a master-detail interface in the Grid
        //In DataGrid, a master-detail interface supplies a usual data row with an expandable section that contains the details on this data row. 
        //In that case, the data row is called "master row", while the section is called "detail section".
        masterDetail: {
            //Specifies whether detail sections appear expanded or collapsed.
            autoExpandAll: false,
            //Enables an end-user to expand/collapse detail sections.
            enabled: false,
            //Specifies the template for detail sections.
            template:function(container,info) {
                $('<div>')
                    .dxDataGrid({
                //configuration here
                    })
                    .appendTo(container);
            }
        },
        //Specifies text displayed when a grid does not contain any records
        noDataText: 'No data',
        //A pager is a grid element that allows the user to navigate through grid pages and change their size at runtime. 
        //By default, the pager is visible if paging is enabled and you do not use virtual or infinite scrolling. 
        //To change the pager's visibility explicitly, use its visible option.
        pager: {
            //Specifies the text accompanying the page navigator
            infoText: 'Page {0} of {1}',
            //Specifies whether or not to display the text accompanying the page navigator. This text is specified by the infoText option
            showInfo: false,
            //Specifies whether or not to display buttons that switch the grid to the previous or next page.
            showNavigationButtons: false,
            //Specifies whether to show the page size selector or not.
            showPageSizeSelector: false,
            //Specifies whether to show the pager or not.
            visible: auto
        },
        //In DataGrid, records can be loaded either page by page or all at once.
        //Needless to say that the latter approach affects grid performance, especially when the number of loading records is very large. 
        //If you, however, want to use it, disable paging by setting the paging | enabled option to false.
        paging: {
            //Specifies whether DataGrid loads data page by page or all at once.
            enabled: true,
            //Specifies the grid page that should be displayed by default.
            pageIndex: 0,
            //Specifies the size of grid pages.
            pageSize: 20
        },
        //Specifies the operations that must be performed on the server side.
        remoteOperations: {
            //Specifies whether or not filtering must be performed on the server side
            filtering: true,
            //Specifies whether or not grouping must be performed on the server side
            grouping: false,
            //Specifies whether or not paging must be performed on the server side
            paging: true,
            //Specifies whether or not sorting must be performed on the server side
            sorting: true,
            //Specifies whether or not  summaries calculation must be performed on the server side
            summary: false
        },
        //Specifies whether or not grid rows must be shaded in a different way
        rowAlternationEnabled: false,
        //Specifies whether or not the current component supports a right-to-left representation.
        rtlEnabled: false,
        //The DataGrid widget supplies a user with an opportunity to scroll grid records. 
        scrolling: {
            //Specifies the scrolling mode.
            mode: 'standard',
            //Specifies whether or not a grid must preload pages adjacent to the current page when using virtual scrolling.
            preloadEnabled: false,
            //Specifies whether or not the scrolling by content is enabled.
            scrollByContent: true,
            //Specifies whether or not the scrollbar thumb scrolling enabled
            scrollByThumb: false,
            //Specifies the scrollbar display policy
            showScrollbar: 'onScroll',
            //Specifies whether or not the widget uses native scrolling.
            useNative: 'auto'
        },
        //A search panel is a grid element that allows the user to search grid records by a search string.
        //Searching performs in those grid columns that have the allowFiltering option set to true.
        searchPanel: {
            //Specifies whether or not search strings in the located grid records should be highlighted
            highlightSearchText: true,
            //Specifies text displayed by the search panel when no search string was typed.
            placeholder: 'Search...',
            //Specifies whether to search all columns or only visible ones.
            searchVisibleColumnsOnly: false,
            //Sets a search string for the search panel
            text: '',
            //Specifies whether the search panel is visible or not
            visible: false,
            //Specifies the width of the search panel in pixels.
            width: 160
        },
        //Specifies options of runtime selection.
        //DataGrid provides users with the capability of selecting grid records at runtime. 
        //End-users can perform selection in a single or multiple mode. To specify the required mode, use the mode property of the selection configuration object. 
        //You can disable selection completely using the same property.
        selection: {
            allowSelectAll: true,
            //'none' , 'single' , 'multiple'
            mode: 'none',
            //'onClick' , 'onLongTap' , 'always' , 'none'
            showCheckBoxesMode: 'onClick'
        },
        //Specifies whether the outer borders of the grid are visible or not
        showBorders: false,
        //Specifies whether column headers are visible or not
        showColumnHeaders: true,
        //Specifies whether or not vertical lines separating one grid column from another are visible.
        showColumnLines: true,
        //Specifies whether or not horizontal lines separating one grid row from another are visible.
        showRowLines: false,
        //Allows you to sort groups according to the values of group summary items
        sortByGroupSummaryInfo: [
            {
                //Specifies the identifier of the column that must be used in grouping so that sorting by group summary item values be applied.
                groupColumn: undefined,
                //Specifies the sort order of group summary item values.
                sortOrder: undefined,
                //Specifies the group summary item whose values must be used to sort groups.
                summaryItem
            }
        ],
        //Specifies options of runtime sorting.To make a column available for sorting, set its allowSorting option to true.
        sorting: {
            //Specifies text for the context menu item that sets an ascending sort order in a column
            ascendingText: 'Sorting Ascending',
            //Specifies text for the context menu item that resets sorting settings for a column.
            clearText: 'Clear Sorting',
            //Specifies text for the context menu item that sets a descending sort order in a column.
            descendingText: 'Sort Descending',
            //Specifies the runtime sorting mode.
            mode: 'single'
        },
        //Specifies options of state storing.
        //If user settings need to be saved and then restored, enable client-side state storing for the grid by 
        //setting the stateStoring | enabled option to true. The grid state will be saved under a specified storage key. 
        stateStoring: {
            //Specifies whether or not a grid saves its state
            enabled: false,
            //Specifies the delay between the last change of a grid state and the operation of saving this state in milliseconds.
            savingTimeout: 2000,
            //Specifies a unique key to be used for storing the grid state
            storageKey: null,
            //Specifies the type of storage to be used for state storing.
            type: 'localStorage'
        },
        //Specifies the options of the grid summary
        //A summary is a grid feature that provides a synopsis of data contained in the grid. A summary consists of several items.
        // A summary item displays a value that is a product of applying an aggregate function to the data of a specific column.
        // There are two types of summary in DataGrid: group and total. The group summary is calculated on a group of data, 
        // which is segregated during grouping. To specify the items of the group summary, declare an array of objects and assign it to the summary | groupItems field.
        // The total summary is calculated on all data contained in the grid. To specify the items of the total summary, 
        //declare an array of objects and assign it to the summary | totalItems field
        summary: {
            groupItems: [
            {
                //Indicates whether to display group summary items in parentheses after the group row header or to align them by the corresponding columns within the group row.
                alignByColumn: false,
                //Customizes the text to be displayed in the summary item.
                customizeText:'',
                //Specifies the column that provides data for a group summary item.
                column: undefined,
                //Specifies a pattern for the summary item text.
                displayFormat: undefined,
                //Specifies the identifier of a summary item
                name: undefined,
                //Specifies the column that must hold the summary item when this item is displayed in the group footer or aligned by a column in the group row.
                showInColumn: undefined,
                //Specifies whether or not a summary item must be displayed in the group footer
                showInGroupFooter: false,
                //Specifies whether or not to skip empty strings, null and undefined values when calculating a summary.
                skipEmptyValues: null,
                //Specifies how to aggregate data for a summary item.
                summaryType: undefined
            }],
            //Specifies whether or not to skip empty strings, null and undefined values when calculating a summary.
            skipEmptyValues: true,
            //Contains options that specify text patterns for summary items
            texts: {
                //Specifies a pattern for the 'avg' summary items when they are displayed in the parent column
                avg: 'Avg={0}',
                //Specifies a pattern for the 'avg' summary items displayed in a group row or in any other column rather than the parent one.
                avgOtherColumn: 'Avg of {1} is {0}',
                //Specifies a pattern for the 'count' summary items
                count: 'Count={0}',
                //Specifies a pattern for the 'max' summary items when they are displayed in the parent column
                max: 'Max={0}',
                //Specifies a pattern for the 'max' summary items displayed in a group row or in any other column rather than the parent one.
                maxOtherColumn: 'Max of {1} is {0}',
                //Specifies a pattern for the 'min' summary items when they are displayed in the parent column
                min: 'Min={0}',
                //Specifies a pattern for the 'min' summary items displayed in a group row or in any other column rather than the parent one
                minOtherColumn: 'Min of {1} is {0}',
                //Specifies a pattern for the 'sum' summary items when they are displayed in the parent column
                sum: 'Sum={0}',
                //Specifies a pattern for the 'sum' summary items displayed in a group row or in any other column rather than the parent one
                sumOtherColumn: 'Sum of {1} is {0}'
            },
            //
            totalItems: [
                {
                    //Specifies the alignment of a summary item.
                    alignment: undefined,
                    //Specifies the column that provides data for a summary item
                    column: undefined,
                    //Specifies a CSS class to be applied to a summary item.
                    cssClass: undefined,
                    //Specifies a pattern for the summary item text.
                    displayFormat: undefined,
                    //Specifies the identifier of a summary item
                    name: undefined,
                    //Specifies the column that must hold the summary item
                    shofInfoColumn: undefined,
                    //Specifies whether or not to skip empty strings, null and undefined values when calculating a summary.
                    skipEmptyValues: null,
                    //Specifies how to aggregate data for a summary item.
                    summaryType: undefined
                }
            ]
        },
        //Specifies the widget tab index
        tabIndex: 0,
        //Specifies whether to enable two-way data binding.
        //Two-way data binding ensures that the UI tracks changes made in the data source by a 3rd-party instrument, and vice versa,
        //the data source gets updated according to changes in the UI. Thus, the widget and its data source can continue to correspond to each other
        //In certain scenarios, you may want to implement two-way data binding in DataGrid on your own. For this purpose,
        //you can specify cellTemplate and/or editCellTemplate options. If so, make sure that you have the twoWayBindingEnabled option set to false
        twoWayBindingEnabled: true,
        //A Boolean value specifying whether or not the widget is visible.
        visible: true,
        //Specifies the width of the widget.
        width: undefined,
        //Specifies whether text that does not fit into a column should be wrapped.
        wordWrapEnabled:false
});