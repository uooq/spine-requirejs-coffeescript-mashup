
var configuration = {
  paths: {
    cs: "lib/cs",
    order: "lib/order"
  }
};

require(configuration, ["cs!src/TaskApp"], function(TaskApp) {
    new TaskApp({el: "#tasks"});
});
