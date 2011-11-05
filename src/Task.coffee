define (require, exports, module) ->
  class Task extends Spine.Model
    @configure "Task", "name", "done"
    
    @extend Spine.Model.Local
  
    @active: ->
      @select (item) -> !item.done
  
    @done: ->
      @select (item) -> !!item.done
  
    @destroyDone: ->
      rec.destroy() for rec in @done()
      
    sayfoo: ->
      alert 'foo'
      
  module.exports = Task
      
