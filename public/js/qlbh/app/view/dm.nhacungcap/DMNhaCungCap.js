var isAddNewNcc = 0;
//Defined object DMNhaCungCap
function DMNhaCungCap() {

    //Khai báo store chứa dữ liệu là danh sách của nhà cung cấp
    this.storeListNcc = new Ext.data.JsonStore({
        url: '/admin/ncc/get-list-json',
        root: 'rows',
        idProperty: 'id',
        totalProperty: 'count',
        remoteSort: true,
        sortInfo: {
            field: "id",
            direction: "DESC"
        },
        fields: ['id', 'ten', 'diachi', 'dienthoai', 'fax', 'mst', 'tk_ten', 'tk_sotk', 'tk_nganhang', 'tk_diachi_nganhang']
    });

    //Khai báo menu top phía trên trong window nhà cung cấp
    this.menuTop = {
        xtype: 'toolbar',
        items: [{
            xtype: 'button',
            id: 'btnThemMoi',
            text: lang_global_btnThemMoi, //Thêm Mới
            icon: 'images/icons/16/add.png',
            handler: function() {
                var utility = new UtilitiDMNhaCungCap();
                utility.clearValueFieldForm();
                utility.disableToolbarButton(true);
                utility.setFocusForm();
            }
        }, '-', {
            xtype: 'button',
            text: lang_global_btnChinhSua,
            id: 'btnChinhSua',
            icon: 'images/icons/16/edit.png',
            handler: function() {
                var utility = new UtilitiDMNhaCungCap();
                utility.disableFieldsForm(false);
                utility.disableToolbarButton(true);
                utility.setFocusForm();
            }
        }, '-', {
            xtype: 'button',
            id: 'btnXoa',
            text: lang_global_btnXoa,
            icon: 'images/icons/16/delete.png',
            handler: function() {
                var u = new UtilitiDMNhaCungCap();
                u.deleteSelectionRow();
            } //end handler Xoa
        }, '-', {
            xtype: 'button',
            text: lang_global_btnIn,
            id: 'btnIn',
            icon: 'images/icons/16/print.png',
            handler: function() {
            }
        }, '-', {
            xtype: 'button',
            text: lang_global_btnKetThuc,
            id: 'btnKetThuc',
            icon: 'images/icons/16/home.png',
            handler: function() {
                var utility = new UtilitiDMNhaCungCap();
                utility.closeWindow();
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
            header: lang_ten,
            dataIndex: 'ten',
            width: 250,
            sortable: true
        }, {
            header: lang_diachi,
            dataIndex: 'diachi',
            width: 350,
            sortable: true
        }, {
            header: lang_dienthoai,
            dataIndex: 'dienthoai',
            width: 160,
            sortable: true
        }, {
            header: lang_fax,
            dataIndex: 'fax',
            sortable: true
        }, {
            header: lang_tentaikhoan,
            dataIndex: 'tk_ten'
        }, {
            header: lang_sotaikhoan,
            dataIndex: 'tk_sotk'
        }, {
            header: lang_nganhang,
            dataIndex: 'tk_sotk'
        }, {
            header: lang_diachinganhang,
            dataIndex: 'tk_diachi_nganhang'
        }
        ],
        sm: new Ext.grid.RowSelectionModel({
            //Function này sẽ run mỗi khi select một row trên grid
            //và sẽ gán giá trị vào form
            singleSelect: true,
            listeners: {
                'rowselect': {
                    fn: function(sm, index, record) {
                        var frmNcc = Ext.getCmp("frmNcc");
                        frmNcc.getForm().loadRecord(record);
                        var utility = new UtilitiDMNhaCungCap();
                        utility.disableFieldsForm(true);
                        utility.disableToolbarButton(false);
                    }
                }
            }
        }),
        listeners: {
            'rowdblclick': {
                fn: function(grid, index, rec) {
                    var utility = new UtilitiDMNhaCungCap();
                    utility.disableFieldsForm(false);
                    utility.disableToolbarButton(true);
                    utility.setFocusForm();
                }
            }
        },
        keys: [
        {
            key: [46, 13],
            fn: function(key,e){
                var utility = new UtilitiDMNhaCungCap();
                if (key === 46) { //Người dùng vừa nhấn DELETE trên bàn phím
                    utility.deleteSelectionRow();
                }
                
                if (key == 13) { //Người dùng vừa nhấn ENTER trên bàn phím
                    utility.disableFieldsForm(false);
                    utility.disableToolbarButton(true);
                    utility.setFocusForm();
                }
                
            },
            ctrl:false,
            stopEvent:true
        }
        ],
        autoHeight: true,
        enableColumnMove: false,
        columnLines: true,
        store: this.storeListNcc,
        loadMask: true,
        bbar: new Ext.PagingToolbar({
            pageSize: pageSize,
            store: this.storeListNcc,
            displayInfo: true,
            displayMsg: lang_global_grid_bbar_HienThi + ' {0} - {1} ' + lang_global_grid_bbar_TrongTongSo + ' {2} ' + lang_global_grid_bbar_MauTin,
            emptyMsg: lang_global_grid_khong_ton_tai_mau_tin_nao
        })
    }; //Kết thúc khai báo grid nhà cung cấp

    //Khai báo form
    this.frmNcc = {
        xtype: 'form',
        border: false,
        id: 'frmNcc',
        bodyStyle:'padding:5px;font-family:Arial;font-size:10pt;',
        url: '/admin/ncc/add',
        items: [{
            xtype: 'hidden',
            name: 'id'
        },{
            xtype: 'textfield',
            fieldLabel: lang_ten,
            name: 'ten',
            id: 'ten',
            anchor: '100%',
            allowBlank: false
        }, {
            xtype: 'textfield',
            fieldLabel: lang_masothue,
            name: 'mst',
            anchor: '100%'
        }, {
            xtype: 'textfield',
            fieldLabel: lang_diachi,
            name: 'diachi',
            anchor: '100%'
        }, {
            xtype: 'textfield',
            fieldLabel: lang_dienthoai,
            name: 'dienthoai',
            anchor: '100%'
        }, {
            xtype: 'textfield',
            fieldLabel: lang_fax,
            name: 'fax',
            anchor: '100%'
        }, {
            xtype: 'fieldset',
            defaultType: 'textfield',
            title: lang_thong_tin_tai_khoan,
            items: [
            {
                fieldLabel: lang_tentaikhoan,
                name: 'tk_ten',
                anchor: '100%'
            }, {
                fieldLabel: lang_sotaikhoan,
                name: 'tk_sotk',
                anchor: '100%'
            }, {
                fieldLabel: lang_nganhang,
                name: 'tk_nganhang',
                anchor: '100%'
            }, {
                fieldLabel: lang_diachinganhang,
                name: 'tk_diachi_nganhang',
                anchor: '100%'
            }
            ]
        }],//xtype form
        buttons: [{
            text: lang_global_btnLuu,
            id: 'btnLuu',
            icon: 'images/icons/16/save.png',
            handler: function(){
                var utility = new UtilitiDMNhaCungCap();
                var frmNcc = Ext.getCmp('frmNcc');
                Ext.MessageBox.wait(
                    lang_global_he_thong_dang_xu_ly_xin_vui_long_doi_trong_giay_lat,
                    lang_global_thong_bao
                    );
                frmNcc.getForm().submit({
                    //waitMsg : 'Hệ thống đang xữ lý xin vui lòng đợi trong giây lát.',
                    success: function(f, a){
                        utility.disableToolbarButton(false);
                        var utilitiDMNhaCungCap = new UtilitiDMNhaCungCap();
                        utilitiDMNhaCungCap.reloadGridAfterSaving();
                        Ext.MessageBox.hide();
                        Ext.Msg.show({
                            title      : lang_global_thong_bao,
                            msg        : lang_global_thao_tac_thanh_cong,
                            buttons    : Ext.MessageBox.OK,
                            icon       : Ext.MessageBox.INFO
                        })
                    },
                    failure: function(f,a){
                        utility.disableToolbarButton(false);
                        Ext.Msg.show({
                            title      : lang_global_thong_bao,
                            msg        : lang_global_thao_tac_khong_thanh_cong,
                            buttons    : Ext.MessageBox.OK,
                            icon       : Ext.MessageBox.ERROR
                        })
                    }
                });
            }
        }, {
            text: lang_global_btnLamLai,
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
            title: lang_danh_sach_nha_cung_cap,
            id: 'mainWindowDMNcc',
            draggable: false,
            resizable: false,
            width: w,
            height: h,
            layout: 'border',
            border: false,
            closable: false,
            onEsc: function() {
                var utility = new UtilitiDMNhaCungCap();
                utility.closeWindow();
            },
            items: [
            {
                //Menu top phia tren
                region: 'north',
                tbar: [ this.menuTop ]
            },{
                //Form ben trai
                region: 'east',
                id: 'panelLeft',
                title: lang_thong_tin_chi_tiet,
                split: true,
                collapsed: false,
                collapsible: true,
                collapseMode: 'mini',
                width: 400,
                listeners: {
                    expand: function() { //Sự kiện Mở rộng form bên trái
                        var utility = new UtilitiDMNhaCungCap();
                        utility.setWidthForBbarGrid(2);
                    },
                    collapse: function() { //Sự kiện Thu nhỏ form bên trái
                        var utility = new UtilitiDMNhaCungCap();
                        utility.setWidthForBbarGrid(1);
                    }
                },
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

    //Refesh lại grid sau khi save data
    this.reloadGridAfterSaving = function() {
        var gridDMNcc = Ext.getCmp("gridDMNcc");
        gridDMNcc.getStore().reload();
    }

    //Xóa mẫu tin hiện tại đang chọn.
    //Vì sao ta phải xóa trong đây mà không phải trong handler của button Xóa
    //Bởi vì, Ta muốn show message để xát nhận là muốn xóa hay không nhưng message này là dạng popup
    //nên nó không ngừng lại để ta xát nhận mà nó sẽ chạy luôn và kết thúc hàm này
    this.deleteSelectionRow = function() {
        var gridDMNcc = Ext.getCmp("gridDMNcc");
        var sm = gridDMNcc.getSelectionModel();
        var sel = sm.getSelected();
        if (sm.hasSelection()){
            Ext.Msg.show({
                title: lang_global_canh_bao,
                buttons: Ext.MessageBox.YESNO,
                msg: lang_global_ban_co_chac_muon_xoa_mau_tin_nay_khong,
                icon: Ext.MessageBox.WARNING,
                fn: function(btn){
                    if (btn == 'yes'){
                        id = sel.data.id;
                        Ext.MessageBox.wait(
                            lang_global_he_thong_dang_xu_ly_xin_vui_long_doi_trong_giay_lat,
                            lang_global_thong_bao
                            );
                        if (id > 0) {
                            Ext.Ajax.request({
                                url: 'admin/ncc/delete/id/' + id,
                                success: function(response, opts) {
                                    Ext.MessageBox.hide();
                                    Ext.Msg.show({
                                        title      : lang_global_thong_bao,
                                        msg        : lang_global_thao_tac_thanh_cong,
                                        buttons    : Ext.MessageBox.OK,
                                        icon       : Ext.MessageBox.INFO
                                    });
                                    gridDMNcc.getStore().remove(sel);

                                    //Set selection for first item
                                    if (gridDMNcc.getStore().data.length > 0) {
                                        gridDMNcc.getSelectionModel().selectFirstRow();
                                    }
                                },
                                failure: function(response, opts) {
                                    Ext.Msg.show({
                                        title      : lang_global_thong_bao,
                                        msg        : lang_global_thao_tac_khong_thanh_cong,
                                        buttons    : Ext.MessageBox.OK,
                                        icon       : Ext.MessageBox.ERROR
                                    })
                                }
                            });
                        }

                    }
                }
            });
        }
    }

    //Khi nhấn vào nút thêm mới, chỉnh sửa chúng ta cần disable nhưng button này đi để chuyên focus cho form
    this.disableToolbarButton = function(v) {
        var arrayButton = Array();
        arrayButton[0] = "btnThemMoi";
        arrayButton[1] = "btnChinhSua";
        arrayButton[2] = "btnXoa";
        arrayButton[3] = "btnIn";
        for (var i = 0; i < arrayButton.length; i ++) {
            var nameBtn = arrayButton[i]
            var btnLuu = Ext.getCmp(nameBtn);
            btnLuu.disabled = v;
        }
    };

    //set focus cho trường ten trên form
    this.setFocusForm = function() {
        Ext.getCmp("ten").focus(false, 200);
    }
    
    //Đóng cửa form Nhà Cung Cấp
    this.closeWindow = function() {
        Ext.Msg.show({
            title: lang_global_canh_bao,
            buttons: Ext.MessageBox.YESNO,
            msg: lang_global_ban_co_chac_muon_dong_form_nay,
            icon: Ext.MessageBox.WARNING,
            fn: function(btn){
                if (btn == 'yes'){
                    var mainWindowDMNcc = Ext.getCmp('mainWindowDMNcc');
                    mainWindowDMNcc.close();
                }
            }
        });
    }
    
    //Thay đổi độ rộng cho bbar của grid
    //type = 1 là khi thu nhỏ form bên trái
    //type = 2 là mở rộng form bên trái
    this.setWidthForBbarGrid = function(type) {
        var gridDMNcc = Ext.getCmp("gridDMNcc");
        var panelLeft = Ext.getCmp("panelLeft");
        var wG = gridDMNcc.getWidth();
        var wP = panelLeft.getWidth();
        if (type == 1) {
            w = wG;
        } else if (type == 2) {
            w = wG - wP;
        }
        gridDMNcc.bbar.setWidth(w)
        gridDMNcc.getBottomToolbar().setWidth(w);
    }
} //end UtilitiDMNhaCungCap