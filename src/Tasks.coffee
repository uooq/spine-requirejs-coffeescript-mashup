define (require, exports, module) ->
  module.exports = Tasks

  Spine = require "order!src/spineModule"
  Task = require "cs!src/Task"

  class Tasks extends Spine.Controller
    events:
     "change   input[type=checkbox]": "toggle"
     "click    .destroy":             "remove"
     "dblclick .view":                "edit"
     "keypress input[type=text]":     "blurOnEnter"
     "blur     input[type=text]":     "close"
   
    elements:
      "input[type=text]": "input"
  
    constructor: ->
      super
      @item.bind("update",  @render)
      @item.bind("destroy", @destroy)
    
    render: =>
      @replace($("#taskTemplate").tmpl(@item))
      @
    
    toggle: ->
      @item.done = !@item.done
      @item.save()
    
    remove: ->
      @item.destroy()
    
    edit: ->
      @el.addClass("editing")
      @input.focus()
    
    blurOnEnter: (e) ->
      if e.keyCode is 13 then e.target.blur()
    
    close: ->
      @el.removeClass("editing")
      @item.updateAttributes({name: @input.val()})
