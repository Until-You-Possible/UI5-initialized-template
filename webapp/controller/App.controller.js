sap.ui.define([
	"sap/ui/Device",
	"sap/ui/core/mvc/Controller",
	"sap/base/strings/formatMessage"
], (Device, Controller) => {
	"use strict";

	return Controller.extend("sap.ui.application.system.controller.App", {

		onInit() {
		},
		goToDetail() {
			console.log("goToDetail");
			this.getOwnerComponent().getRouter().navTo("detail");
		}
	});

});
