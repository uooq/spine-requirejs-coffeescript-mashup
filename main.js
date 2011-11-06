/*
 *      This is the bootstrapping of our app code. It's a single statement
 *      to an already defined "require" (i.e. we've already loaded require.js)
 *      
 *      This script does two things:
 * 
 *      1) define the require plugin called 'cs' which extends require's 
 *         module-loading capabilities to allow coffeescript files to be
 *         loaded like pre-compiled js modules
 *      2) launches the app by using require to load the TaskApp module
 *         and once the TaskApp module is loaded, creates a new TaskApp
 *         and attaches it to the dom.
 * 
 *     TaskApp relies on Task and Tasks but they are not yet loaded when the
 *     require statement is run. The directives to load these are found with
 *     TaskApp where they can be loaded on demand. 
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
