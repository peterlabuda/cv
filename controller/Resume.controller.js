sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller"
], function (MessageToast, JSONModel, Controller) {
	"use strict";
	return Controller.extend("sk.peterlabuda.Resume.controller.Resume", {
		onInit: function () {
			var oJsonModel = new JSONModel(sap.ui.require.toUrl("sap/uxap/sample/SharedJSONData/HRData.json"));
			this.getView().setModel(oJsonModel, "Resume");
		},
		
	});
});

