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
                    title: 'Menu Top'
                },{
                    region: 'west',
                    title: 'Left Menu'
                }, {
                    region: 'center',
                    title: 'Center'
                }
            ]
        });
    };
    
    this.showMainWindow = function(w, h) {
        var mainWindow = this.createMainWindow(w, h);
        mainWindow.show();
    };
};



