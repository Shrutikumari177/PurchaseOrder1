sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("purchaseorder1.controller.home", {
            onInit: function () {

            },
            onPress: function() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RoutePOhome");
            },
            onPress2: function() {
                const oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RouteBidCont");
            },
        });
    });
