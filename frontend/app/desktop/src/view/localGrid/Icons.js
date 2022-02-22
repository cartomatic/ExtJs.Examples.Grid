//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    Ext.define('GridExamples.view.localGrid.Icons', {
        singleton: true,
        requires: [
            'mh.FontIconsDictionary'
        ],
        constructor: function() {
            mh.FontIconsDictionary.addIcons({
                lgViewHeader: 'x-li li-database',
                lgGrid: 'x-i54 i54-grid-2',
                lgColTypes: 'x-i54 i54-small-icons-view',
                lgActionColumn: 'x-i54c i54c-click-2',
                lgDarkSide: 'x-i54c i54c-darth-vader',
                lgLockingGrid: 'x-i54c i54c-lock-12',
                lgRowExpander: 'x-i54 i54-full-screen',
                lgCellEditor: 'x-i54 i54-edit-note',
                lgRowEditor: 'x-i54 i54-clipboard-pencil',
                lgDragAndDrop: 'x-i54c i54c-drag-drop',
                lgTreeGrid: 'x-i54 i54-tree-grid'
            });
        }
    });
    
}());