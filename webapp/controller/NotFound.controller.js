sap.ui.define([
    "sap/ui/Device",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    'sap/m/library'
], (Device, Controller,JSONModel, library) => {
    "use strict";
    return Controller.extend("sap.ui.application.system.controller.NotFound", {
        onInit() {
            const oIllustratedMessageSize = library.IllustratedMessageSize;
            const oIllustratedMessageType = library.IllustratedMessageType;
            const oModel = new JSONModel({
                illustrationSize: oIllustratedMessageSize.Auto,  // 或 oIllustratedMessageSize.Base 等值
                illustrationType: oIllustratedMessageType.PageNotFound  // 或其他可用类型
            });
            this.getView().setModel(oModel, "illustrationModel");
        },
    });

});
