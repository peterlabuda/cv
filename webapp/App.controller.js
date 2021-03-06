sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel"],
  function (Controller, JSONModel) {
    "use strict";
    return Controller.extend("Cv.App", {
      onInit: function () {
        this.getView().setModel(
          new JSONModel({
  		    "updated":"2022-04-21T22:00:00.000Z",
  		    "title": "Ing.",
            "name" : "Peter",
            "lastName": "Labuda",
            "birthDay": "1991-11-12T09:00:00.000Z",
            "phone": "+421 944 245 xxx",
            "mail": "peter.labuda.2@gmail.com",
            "address": {
              "street" : "Hidden",
              "number": 0,
              "city": "Hidden",
              "zip": "00000"
            },
            "languages": [
              { 
                "id": "en",
                "level": 4
              },
              {
                "id": "de",
                "level": 3
              }
            ],
            "experriances":[
              {
              	"from":"2021-03-01T09:00:00.000Z",
                "to":"2022-06-30T16:00:00.000Z",
                "position": "Senior ABAP Developer",
                "company":"Deutsche Telekom IT & Telecommunications Slovakia s. r. o.",
                "description":"Mostly solving of incidents in OFI (making indian coding working)"
              },
              {
              	"from":"2018-01-01T09:00:00.000Z",
                "to":"2021-02-28T16:00:00.000Z",
                "position": "ABAP Developer",
                "company":"T-Systems Slovakia s.r.o.",
                "description":"Creating new reports, maintenance of existing solutions, implementation of new SAPUI5 applications (Front End & Backend)"
              },
              {
              	"from":"2016-06-01T09:00:00.000Z",
                "to":"2017-12-31T16:00:00.000Z",
                "position": "Junior ABAP Developer",
                "company":"T-Systems Slovakia s.r.o.",
                "description":"PSL International Procurement"
              },
              {
              	"from":"2015-01-01T09:00:00.000Z",
                "to":"2016-05-30T16:00:00.000Z",
                "position": "IT Assistant",
                "company":"T-Systems Slovakia s.r.o.",
                "description":"User Management in many SAP systems, checking SAP system condition"
              },
              
            ],
            "educations": [
              {
                "from":"2011-09-02T09:00:00.000Z",
                "to":"2016-06-12T09:00:00.000Z",
                "degree": 3,
                "school":"Technical University of Ko??ice",
                "faculty":"Faculty of Electrical Engineering and Informatics",
                "expertise":"Informatics"
              },
              {
                "from":"2007-09-02T09:00:00.000Z",
                "to":"2011-06-30T09:00:00.000Z",
                "degree": 1,
                "school":"Grammar school P.O.Hviezdoslava, Ke??marok",
                "faculty":"",
                "expertise":""
              }
            ],
            "trainings": [
              {
                "id": "UX400",
                "title":"Developing UIs with SAPUI5",
                "from":"2022-03-21T09:00:00.000Z",
                "to":"2022-03-25T16:00:00.000Z",
                "description":""
              },
              {
                "id": "HA400",
                "title":"ABAP Programming for SAP HANA",
                "from":"2022-03-16T09:00:00.000Z",
                "to":"2022-03-18T16:00:00.000Z",
                "description":""
              },
              {
                "id": "BC490",
                "title":"ABAP Performance Tuning",
                "from":"2021-08-02T09:00:00.000Z",
                "to":"2021-08-06T16:00:00.000Z",
                "description":""
              },
              {
                "id": "S4SD1",
                "title":"SAP S/4HANA Sales - Functions & Innovations",
                "from":"2018-10-11T09:00:00.000Z",
                "to":"2018-10-11T16:00:00.000Z",
                "description":""
              },
              {
                "id": "SCM680",
                "title":"Cross-Application Processes in ERP MM and SD",
                "from":"2017-07-17T09:00:00.000Z",
                "to":"2017-07-19T16:00:00.000Z",
                "description":""
              },
              {
                "id": "SCM500",
                "title":"Processes in Procurement",
                "from":"2017-06-12T09:00:00.000Z",
                "to":"2017-06-16T16:00:00.000Z",
                "description":""
              },
              {
                "id": "SM100",
                "title":"SAP Solution Manager Operations and Configuration",
                "from":"2016-02-29T09:00:00.000Z",
                "to":"2016-03-04T16:00:00.000Z",
                "description":""
              }
            ],
            "skills": [
              "ABAP",
              "SAP UI5",
              "SAP ADOBE Forms",
              "JavaScript",
              "JSON",
              "XML",
            ]

          })
        );
      },

      onChange: function (oEvent) {
        var bState = oEvent.getParameter("state");
        this.byId("ready").setVisible(bState);
      }
    });
  }
);
