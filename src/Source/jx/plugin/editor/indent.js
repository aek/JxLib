/*
---

name: Jx.Plugin.Editor.Indent

description: Button to indent a list in the editor.

license: MIT-style license.

requires:
 - Jx.Plugin.Editor.Button

provides: [Jx.Plugin.Editor.Indent]

images:
 - text_indent.png

...
 */
define("jx/plugin/editor/indent", ['../../../base','./button'],
       function(base, Button){
    
    var indent = new Class({
    
        Extends: Button,
        Family: 'Jx.Plugin.Editor.Indent',
        
        name: 'indent',
        
        options: {
            image: base.aPixel.src,
            imageClass: 'Indent',
            toggle: false,
            title: 'Indent'
        },
        
        tags: ['blockquote'],
        action: 'indent'
        
    });
    
    if (base.global) {
        base.global.Plugin.Editor.Indent = indent;
    }
    return indent;
    
});