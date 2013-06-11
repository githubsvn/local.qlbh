//Defined object DMNganhHang
function DMNganhHang() {

    this.createMainWindow = function(w, h) {
        return new Ext.Window({
            title: "DM Ngành Hàng",
            draggable: false,
            resizable: false,
            width: w,
            height: h,
            layout: 'border',
            items: [
            {
                region: 'north',
                tbar: [{
                    xtype: 'toolbar',
                    items: [{
                        xtype: 'button',
                        text: 'Thêm',
                        handler: function(item) {
                        }
                    }, '-', {
                        xtype: 'button',
                        text: 'Lưu'
                    }, '-', {
                        xtype: 'button',
                        text: 'Bỏ qua'
                    }, '-', {
                        xtype: 'button',
                        text: 'Xóa'
                    }, '-', {
                        xtype: 'button',
                        text: 'Liên hệ'
                    }, '-', {
                        xtype: 'button',
                        text: 'In'
                    }, '-', {
                        xtype: 'button',
                        text: 'Kết thúc'
                    }] //item toolbar
                }] //tbar
            },{
                region: 'west',
                title: 'Left Menu'
            }, {
                region: 'center',
                title: 'Center'
            }
            ]//item layout border
        });
    };

    this.showMainWindow = function(w, h) {
        var mainWindow = this.createMainWindow(w, h);
        mainWindow.show();
    };
};



