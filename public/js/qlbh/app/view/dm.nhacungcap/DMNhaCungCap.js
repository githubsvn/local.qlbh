var isAddNewNcc = 0;
//Defined object DMNhaCungCap
function DMNhaCungCap() {

    //Khai báo store chứa dữ liệu là danh sách của nhà cung cấp
    this.storeListNcc = new Ext.data.JsonStore({
        url: '/admin/ncc/get-list-json',
        root: 'rows',
        idProperty: 'id',
        totalProperty: 'count',
        fields: ['id', 'ten', 'diachi', 'dienthoai', 'fax', 'mst', 'tk_ten', 'tk_sotk', 'tk_nganhang', 'tk_diachi_nganhang']
    });

    //Khai báo menu top phía trên trong window nhà cung cấp
    this.menuTop = {
        xtype: 'toolbar',
        items: [{
            xtype: 'button',
            text: 'Thêm Mới',
            icon: 'images/icons/16/add.png',
            handler: function() {
               var utility = new UtilitiDMNhaCungCap();
               utility.clearValueFieldForm();
            }
        }, '-', {
            xtype: 'button',
            text: 'Chỉnh Sửa',
            icon: 'images/icons/16/edit.png'
        }, '-', {
            xtype: 'button',
            text: 'Xóa',
            icon: 'images/icons/16/delete.png'
        }, '-', {
            xtype: 'button',
            text: 'In',
            icon: 'images/icons/16/print.png',
            handler: function() {
            }
        }, '-', {
            xtype: 'button',
            text: 'Kết Thúc',
            id: 'btnKetThuc',
            icon: 'images/icons/16/home.png',
            handler: function() {
                var mainWindowDMNcc = Ext.getCmp('mainWindowDMNcc');
                mainWindowDMNcc.close();
            }
        }]
    }; //Kết thúc khai báo menu top

    //Khai báo grid nhà cung cấp
    this.girdNcc = {
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
                        var utility = new UtilitiDMNhaCungCap();
                        utility.disableFieldsForm(true);
                    }
                }
            }
        }),
        autoHeight: true,
        enableColumnMove: false,
        columnLines: true,
        store: this.storeListNcc,
        loadMask: true,
        bbar: new Ext.PagingToolbar({
            pageSize: pageSize,
            store: this.store,
            displayInfo: true,
            displayMsg: 'Hiện thị {0} - {1} trong tổng số {2} mẫu tin.',
            emptyMsg: "Không tồn tại mẫu tin nào."
        })
    }; //Kết thúc khai báo grid nhà cung cấp

    //Khai báo form
    this.frmNcc = {
        xtype: 'form',
        border: false,
        id: 'frmNcc',
        bodyStyle:'padding:5px;font-family:Arial;font-size:10pt;',
        items: [{
            xtype: 'hidden',
            name: 'id'
        },{
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
        }, {
            xtype: 'fieldset',
            defaultType: 'textfield',
            title: 'Thông tin tài khoản',
            items: [
            {
                fieldLabel: 'Tên tài khoản',
                name: 'tk_ten',
                anchor: '100%'
            }, {
                fieldLabel: 'Số tài khoản',
                name: 'tk_sotk',
                anchor: '100%'
            }, {
                fieldLabel: 'Ngân hàng',
                name: 'tk_nganhang',
                anchor: '100%'
            }, {
                fieldLabel: 'Địa chỉ',
                name: 'tk_diachi_nganhang',
                anchor: '100%'
            }
            ]
        }],//xtype form
        buttons: [{
            text: 'Lưu',
            id: 'btnLuu',
            icon: 'images/icons/16/save.png',
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
            text: 'Làm lại',
            id: 'btnLamLai',
            icon: 'images/icons/16/refesh.png',
            handler: function(){
                var frmNcc = Ext.getCmp('frmNcc');
                frmNcc.getForm().reset();
            }
        }]
    }; //Kết thúc khai báo this.frmNcc


    //Create main window for DM Nha Cung Cap
    this.createMainWindow = function(w, h) {
        return new Ext.Window({
            title: "DANH SÁCH NHÀ CUNG CẤP",
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
                tbar: [ this.menuTop ]
            },{
                //Form ben trai
                region: 'east',
                title: 'Thông tin chi tiết',
                split: true,
                collapsed: false,
                collapsible: true,
                collapseMode: 'mini',
                width: 400,
                items: [this.frmNcc]
            }, {
                //Vung luoi o giua
                region: 'center',
                items: [ this.girdNcc ]
            }
            ]//item layout border
        });
    }; //this.createMainWindow

    //Set mặc định cho dòng đầu tiên trong grid được chọn
    this.storeListNcc.on('load', function(store, records, options) {
        var gridDMNcc = Ext.getCmp("gridDMNcc");
        if (records && records.length > 0) {
            gridDMNcc.getSelectionModel().selectFirstRow();
        }
    });

    this.loadDataFormDbForGrid = function () {
        //Load data cho gird
        this.storeListNcc.load({
            params: {
                start: 0,
                limit: pageSize
            }
        });
    };

    //Show cửa sổ chính
    this.showMainWindow = function(w, h) {
        var mainWindow = this.createMainWindow(w, h);
        mainWindow.show();
        //Load data
        this.loadDataFormDbForGrid();
        var utiliti = new UtilitiDMNhaCungCap();
        utiliti.disableFieldsForm(true);
    };

}; //end main function DMNhaCungCap

//Định nghĩa lớp tiện ích cho DMNhaCungCap
function UtilitiDMNhaCungCap() {
    //Điều khiển việc disable hay enable cho các control của form
    this.disableFieldsForm = function(v) {
        var frmNcc = Ext.getCmp("frmNcc");
        frmNcc.getForm().items.each( function(itm){
            itm.setDisabled(v);
        });
        this.disableButtonsForm(v);
    }

    //disable hoặc enable cho 2 button
    this.disableButtonsForm = function(v) {
        var btnLuu = Ext.getCmp("btnLuu");
        btnLuu.disabled = v;
        var btnLamLai = Ext.getCmp("btnLamLai");
        btnLamLai.disabled = v;
    }

    //Xóa data của control trên form
    this.clearValueFieldForm = function() {
        this.disableFieldsForm(false); //enable cho control tren form
        var frmNcc = Ext.getCmp("frmNcc");
        frmNcc.getForm().items.each( function(itm){
            itm.setValue('');
        });
    }
} //end UtilitiDMNhaCungCap