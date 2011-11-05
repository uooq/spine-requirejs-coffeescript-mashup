/*
 *      This is the bootstrapping of our app code. It's a single statement
 *      to an already defined global "require" (defined in require.js)
 *      
 *      What we do here is to 1) define the cs plugin to require. It allows
 *      us to prefix required paths with 
 * 
 * 
 */

var configuration = {
  paths: {
    cs: 'lib/cs'
  }
};

require(configuration, ["cs!src/TaskApp"], function(TaskApp) {
    new TaskApp({el: "#tasks"});
});
