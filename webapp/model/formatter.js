sap.ui.define([], function () {
  "use strict";

  return {
    priorityState: function (priority) {
      return {
        Critical: "Error",
        High: "Warning",
        Medium: "Information",
        Low: "None"
      }[priority] || "None";
    },

    slaState: function (elapsed, limit, status) {
      if (status === "Resolved") {
        return "Success";
      }

      return Number(elapsed) > Number(limit) ? "Error" : "Success";
    },

    slaText: function (elapsed, limit) {
      return `${elapsed}h / ${limit}h`;
    }
  };
});
