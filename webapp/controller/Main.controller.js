sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/m/MessageToast",
  "../model/formatter"
], function (Controller, Filter, FilterOperator, MessageToast, formatter) {
  "use strict";

  return Controller.extend("com.diogocamargo.servicedesk.controller.Main", {
    formatter: formatter,

    onSearch: function (event) {
      const value = event.getParameter("newValue");
      const binding = this.byId("ticketTable").getBinding("items");

      binding.filter(value ? [
        new Filter({
          filters: [
            new Filter("TicketId", FilterOperator.Contains, value),
            new Filter("Title", FilterOperator.Contains, value),
            new Filter("System", FilterOperator.Contains, value)
          ],
          and: false
        })
      ] : []);
    },

    onResolve: function (event) {
      const context = event.getSource().getBindingContext();
      context.getModel().setProperty(`${context.getPath()}/Status`, "Resolved");
      MessageToast.show("Ticket resolved.");
    }
  });
});
