sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/core/ComponentSupport"], (UIComponent) => {
	"use strict";
	return UIComponent.extend("sap.ui.application.system.Component", {
		metadata: {
			manifest: "json",
			interfaces: ["sap.ui.core.IAsyncContentCreation"],
		},
		init: function () {
			// 调用父类的 init 函数
			UIComponent.prototype.init.apply(this, arguments);
			// 启动路由
			this.getRouter().initialize();
		}
	});
});
