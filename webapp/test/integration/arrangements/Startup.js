sap.ui.define([
	"sap/ui/test/Opa5"
], (Opa5) => {
	"use strict";

	return Opa5.extend("sap.ui.application.system.test.integration.arrangements.Startup", {

		iStartMyApp() {
			this.iStartMyUIComponent({
				componentConfig: {
					name: "sap.ui.application.system",
					async: true,
					manifest: true
				}
			});
		}

	});
});
