//Defined object DMNhaCungCap
function DMNhaCungCap() {

    this.store = new Ext.data.JsonStore({
        url: '/admin/ncc/get-list-json',
        root: 'rows',
        idProperty: 'id',
        totalProperty: 'count',
        fields: ['id', 'ten', 'diachi', 'dienthoai', 'fax', 'mst', 'tk_ten', 'tk_sotk', 'tk_nganhang', 'tk_diachi_nganhang'],
    });

    //Create main window for DM Nha Cung Cap
    this.createMainWindow = function(w, h) {
        return new Ext.Window({
            title: "Danh Sách Nhà Cung Cấp",
            id: 'mainWindowDMNcc',
            draggable: false,
            resizable: false,
            width: w,
            height: h,
            layout: 'border',
            border: false,
            items: [
            {
                //Menu top phia tren
                region: 'north',
                tbar: [{
                    xtype: 'toolbar',
                    items: [{
                        xtype: 'button',
                        text: 'In',
                        handler: function() {
                        }
                    }, '-', {
                        xtype: 'button',
                        text: 'Kết thúc',
                        handler: function() {
                            var mainWindowDMNcc = Ext.getCmp('mainWindowDMNcc');
                            mainWindowDMNcc.close();
                        }
                    }] //item toolbar
                }] //tbar
            },{
                //Form ben trai
                region: 'east',
                title: 'Thông tin chi tiết',
                xtype: 'form',
                id: 'frmNcc',
                bodyStyle:'padding:5px;font-family:Arial;font-size:10pt;',
                split: true,
                collapsed: false,
                collapsible: true,
                collapseMode: 'mini',
                width: 400,
                items: [{
                    xtype: 'textfield',
                    fieldLabel: 'Tên',
                    name: 'ten',
                    anchor: '100%',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Mã Số Thuế',
                    name: 'mst',
                    anchor: '100%'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Địa Chỉ',
                    name: 'diachi',
                    anchor: '100%'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Điện Thoại',
                    name: 'dienthoai',
                    anchor: '100%'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Fax',
                    name: 'fax',
                    anchor: '100%'
                }],//xtype form
                buttons: [{
                    text: 'Save',
                    handler: function(){
                        var frmNcc = Ext.getCmp('frmNcc');
                        frmNcc.getForm().submit({
                            success: function(f,a){
                                Ext.Msg.alert('Success', 'It worked');
                            },
                            failure: function(f,a){
                                Ext.Msg.alert('Warning', 'It fail');
                            }
                        });
                    }
                }, {
                    text: 'Reset',
                    handler: function(){
                        var frmNcc = Ext.getCmp('frmNcc');
                        frmNcc.getForm().reset();
                    }
                }]
            }, {
                //Vung luoi o giua
                region: 'center',
                items: [
                {
                    xtype: 'grid',
                    id: 'gridDMNcc',
                    border: false,
                    columns: [
                    {
                        header: "Tên",
                        dataIndex: 'ten',
                        width: 250,
                        sortable: true
                    }, {
                        header: "Địa Chỉ",
                        dataIndex: 'diachi',
                        width: 350,
                        sortable: true
                    }, {
                        header: "Điện Thoại",
                        dataIndex: 'dienthoai',
                        width: 160,
                        sortable: true
                    }, {
                        header: "Fax",
                        dataIndex: 'fax',
                        sortable: true
                    }
                    ],
                    sm: new Ext.grid.RowSelectionModel({
                        //Function này sẽ run mỗi khi select một row trên grid
                        //và sẽ gán giá trị vào form
                        singleSelect: true,
                        listeners: {
                            rowselect: {
                                fn: function(sm, index, record) {
                                    var frmNcc = Ext.getCmp("frmNcc");
                                    frmNcc.getForm().loadRecord(record);
                                }
                            }
                        }
                    }),
                    autoHeight: true,
                    enableColumnMove: false,
                    columnLines: true,
                    store: this.store,
                    bbar: new Ext.PagingToolbar({
                        pageSize: pageSize,
                        store: this.store,
                        displayInfo: true,
                        displayMsg: 'Hiện thị {0} - {1} trong tổng số {2} mẫu tin',
                        emptyMsg: "Không tồn tại Nhà cung cấp nào"
                    })

                }
                ]
            }
            ]//item layout border
        });
    };

    this.store.on('load', function(store, records, options) {
        var gridDMNcc = Ext.getCmp("gridDMNcc");
        if (records && records.length > 0) {
            gridDMNcc.getSelectionModel().selectFirstRow();
        }
    });

    //Load data cho gird
    this.store.load({
        params: {
            start: 0,
            limit: pageSize
        }
    });


    //Show window
    this.showMainWindow = function(w, h) {
        var mainWindow = this.createMainWindow(w, h);
        mainWindow.show();
    };

};



