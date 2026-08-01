sap.ui.require([
  "com/diogocamargo/servicedesk/model/formatter"
], function (formatter) {
  "use strict";

  QUnit.module("SLA formatter");

  QUnit.test("marks overdue open tickets as error", function (assert) {
    assert.strictEqual(formatter.slaState(10, 8, "Open"), "Error");
  });

  QUnit.test("marks resolved tickets as success", function (assert) {
    assert.strictEqual(formatter.slaState(10, 8, "Resolved"), "Success");
  });
});
