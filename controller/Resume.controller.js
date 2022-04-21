sap.ui.define([
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/mvc/Controller"
], function (MessageToast, JSONModel, Controller) {
	"use strict";
	return Controller.extend("sk.peterlabuda.Resume.controller.Resume", {
		onInit: function () {
			var oJsonModel = new JSONModel("../model/resume.json");
			this.getView().setModel(oJsonModel, "Resume");
		},
		
	});
});

