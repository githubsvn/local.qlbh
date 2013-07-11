//Defined object DMNganhHang
function DMNganhHang() {

    //Khai báo store chứa dữ liệu là danh sách của nhà cung cấp
    this.storeListNganhHang = new Ext.data.JsonStore({
        url: '/admin/nganhhang/get-list-json',
        root: 'rows',
        idProperty: 'id',
        totalProperty: 'count',
        remoteSort: true,
        sortInfo: {
            field: "id",
            direction: "DESC"
        },
        fields: ['id', 'ten']
    });

    //Khai báo menu top phía trên trong window nhà cung cấp
    this.menuTop = {
        xtype: 'toolbar',
        items: [{
            xtype: 'button',
            id: 'btnThemMoi',
            text: lang_global_btnThemMoi, //Thêm Mới
            icon: '/images/icons/16/add.png',
            handler: function() {
                var utility = new UtilitiDMNganhHang();
                utility.clearValueFieldForm();
                utility.disableToolbarButton(true);
                utility.setFocusForm();
            }
        }, '-', {
            xtype: 'button',
            text: lang_global_btnChinhSua,
            id: 'btnChinhSua',
            icon: '/images/icons/16/edit.png',
            handler: function() {
                var utility = new UtilitiDMNganhHang();
                utility.disableFieldsForm(false);
                utility.disableToolbarButton(true);
                utility.setFocusForm();
            }
        }, '-', {
            xtype: 'button',
            id: 'btnXoa',
            text: lang_global_btnXoa,
            icon: '/images/icons/16/delete.png',
            handler: function() {
                var u = new UtilitiDMNganhHang();
                u.deleteSelectionRow();
            } //end handler Xoa
        }, '-', {
            xtype: 'button',
            text: lang_global_btnIn,
            id: 'btnIn',
            icon: '/images/icons/16/print.png',
            handler: function() {
                window.open("http://www.google.com", "google");
            }
        }, '-', {
            xtype: 'button',
            text: lang_global_btnKetThuc,
            id: 'btnKetThuc',
            icon: '/images/icons/16/home.png',
            handler: function() {
                var utility = new UtilitiDMNganhHang();
                utility.closeWindow();
            }
        }]
    }; //Kết thúc khai báo menu top

    //Khai báo grid nhà cung cấp
    this.girdNganhHang = {
        xtype: 'grid',
        id: 'gridDMNganhHang',
        border: false,
        columns: [
        {
            header: lang_ten,
            dataIndex: 'ten',
            width: 250,
            sortable: true
        }
        ],
        sm: new Ext.grid.RowSelectionModel({
            //Function này sẽ run mỗi khi select một row trên grid
            //và sẽ gán giá trị vào form
            singleSelect: true,
            listeners: {
                'rowselect': {
                    fn: function(sm, index, record) {
                        var frm = Ext.getCmp("frmNganhHang");
                        frm.getForm().loadRecord(record);
                        var utility = new UtilitiDMNganhHang();
                        utility.disableFieldsForm(true);
                        utility.disableToolbarButton(false);
                    }
                }
            }
        }),
        listeners: {
            'rowdblclick': {
                fn: function(grid, index, rec) {
                    var utility = new UtilitiDMNganhHang();
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
                var utility = new UtilitiDMNganhHang();
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
        //height: 700,
        enableColumnMove: false,
        columnLines: true,
        store: this.storeListNganhHang,
        loadMask: true,
        bbar: new Ext.PagingToolbar({
            pageSize: pageSize,
            store: this.storeListNganhHang,
            displayInfo: true,
            displayMsg: lang_global_grid_bbar_HienThi + ' {0} - {1} ' + lang_global_grid_bbar_TrongTongSo + ' {2} ' + lang_global_grid_bbar_MauTin,
            emptyMsg: lang_global_grid_khong_ton_tai_mau_tin_nao
        })
    }; //Kết thúc khai báo grid nhà cung cấp

    //Khai báo form
    this.frmNganhHang = {
        xtype: 'form',
        border: false,
        id: 'frmNganhHang',
        bodyStyle:'padding:5px;font-family:Arial;font-size:10pt;',
        url: '/admin/nganhhang/add',
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
        }],//xtype form
        buttons: [{
            text: lang_global_btnLuu,
            id: 'btnLuu',
            icon: '/images/icons/16/save.png',
            handler: function(){
                var utility = new UtilitiDMNganhHang();
                var frm = Ext.getCmp('frmNganhHang');
                Ext.MessageBox.wait(
                    lang_global_he_thong_dang_xu_ly_xin_vui_long_doi_trong_giay_lat,
                    lang_global_thong_bao
                    );
                frm.getForm().submit({
                    //waitMsg : 'Hệ thống đang xữ lý xin vui lòng đợi trong giây lát.',
                    success: function(f, a){
                        utility.disableToolbarButton(false);
                        var utilitiDMNganhHang = new UtilitiDMNganhHang();
                        utilitiDMNganhHang.reloadGridAfterSaving();
                        Ext.MessageBox.hide();
//                        Ext.Msg.show({
//                            title      : lang_global_thong_bao,
//                            msg        : lang_global_thao_tac_thanh_cong,
//                            buttons    : Ext.MessageBox.OK,
//                            icon       : Ext.MessageBox.INFO
//                        })
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
            icon: '/images/icons/16/refesh.png',
            handler: function(){
                var frm = Ext.getCmp('frmNganhHang');
                frm.getForm().reset();
            }
        }]
    }; //Kết thúc khai báo this.frmNganhhang


    //Create main window for DM Nha Cung Cap
    this.createMainWindow = function(w, h) {
        return new Ext.Window({
            title: lang_danh_sach_nganh_hang,
            id: 'mainWindowDMNganhHang',
            draggable: false,
            resizable: false,
            minimizable: false,
            maximizable: false,
            width: w,
            height: h,
            layout: 'border',
            border: false,
            closable: false,
            onEsc: function() {
                var utility = new UtilitiDMNganhHang();
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
                        var utility = new UtilitiDMNganhHang();
                        utility.setWidthForBbarGrid(2);
                    },
                    collapse: function() { //Sự kiện Thu nhỏ form bên trái
                        var utility = new UtilitiDMNganhHang();
                        utility.setWidthForBbarGrid(1);
                    }
                },
                items: [this.frmNganhHang]
            }, {
                //Vung luoi o giua
                region: 'center',
                items: [ this.girdNganhHang ]
            }
            ]//item layout border
        });
    }; //this.createMainWindow

    //Set mặc định cho dòng đầu tiên trong grid được chọn
    this.storeListNganhHang.on('load', function(store, records, options) {
        var gridDMNganhHang = Ext.getCmp("gridDMNganhHang");
        if (records && records.length > 0) {
            gridDMNganhHang.getSelectionModel().selectFirstRow();
        }
    });

    this.loadDataFormDbForGrid = function () {
        //Load data cho gird
        this.storeListNganhHang.load({
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
        var utiliti = new UtilitiDMNganhHang();
        utiliti.disableFieldsForm(true);
    };

}; //end main function DMNganhHang

//Định nghĩa lớp tiện ích cho DMNganhHang
function UtilitiDMNganhHang() {
    //Điều khiển việc disable hay enable cho các control của form
    this.disableFieldsForm = function(v) {
        var frm = Ext.getCmp("frmNganhHang");
        frm.getForm().items.each( function(itm){
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
        var frm = Ext.getCmp("frmNganhHang");
        frm.getForm().items.each( function(itm){
            itm.setValue('');
        });
    }

    //Refesh lại grid sau khi save data
    this.reloadGridAfterSaving = function() {
        var gridDM = Ext.getCmp("gridDMNganhHang");
        gridDM.getStore().reload();
    }

    //Xóa mẫu tin hiện tại đang chọn.
    //Vì sao ta phải xóa trong đây mà không phải trong handler của button Xóa
    //Bởi vì, Ta muốn show message để xát nhận là muốn xóa hay không nhưng message này là dạng popup
    //nên nó không ngừng lại để ta xát nhận mà nó sẽ chạy luôn và kết thúc hàm này
    this.deleteSelectionRow = function() {
        var gridDM = Ext.getCmp("gridDMNganhHang");
        var sm = gridDM.getSelectionModel();
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
                                url: 'admin/nganhhang/delete/id/' + id,
                                success: function(response, opts) {
                                    Ext.MessageBox.hide();
//                                    Ext.Msg.show({
//                                        title      : lang_global_thong_bao,
//                                        msg        : lang_global_thao_tac_thanh_cong,
//                                        buttons    : Ext.MessageBox.OK,
//                                        icon       : Ext.MessageBox.INFO
//                                    });
                                    gridDM.getStore().remove(sel);

                                    gridDM.getStore().reload();

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
                    var mainWindowDM = Ext.getCmp('mainWindowDMNganhHang');
                    mainWindowDM.close();
                }
            }
        });
    }

    //Thay đổi độ rộng cho bbar của grid
    //type = 1 là khi thu nhỏ form bên trái
    //type = 2 là mở rộng form bên trái
    this.setWidthForBbarGrid = function(type) {
        var gridDM = Ext.getCmp("gridDMNganhHang");
        var panelLeft = Ext.getCmp("panelLeft");
        var wG = gridDM.getWidth();
        var wP = panelLeft.getWidth();
        if (type == 1) {
            w = wG;
        } else if (type == 2) {
            w = wG - wP;
        }
        gridDM.bbar.setWidth(w)
        gridDM.getBottomToolbar().setWidth(w);
    }
} //end UtilitiDMNganhHang