sap.ui.define([
  "sap/ui/core/util/MockServer"
], function (MockServer) {
  "use strict";

  return {
    init: function () {
      const serviceUrl = "/sap/opu/odata/sap/ZSERVICE_DESK_SRV/";
      const mockServer = new MockServer({
        rootUri: serviceUrl
      });

      mockServer.simulate("localService/metadata.xml", {
        sMockdataBaseUrl: "localService/mockdata",
        bGenerateMissingMockData: false
      });

      mockServer.start();
    }
  };
});
