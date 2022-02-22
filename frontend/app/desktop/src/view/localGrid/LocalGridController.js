//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict';

    let logHdr = '[PERMALINK]_s::,pink,',
        currentOrg = null;

    Ext.define('GridExamples.view.localGrid.LocalGridController', {
        extend: 'Ext.app.ViewController',
        alias: 'controller.local-grid',

        requires: [
            'GridExamples.view.localGrid.LocalGridLocalization'
        ],

        mixins: [
            'mh.mixin.CallMeParent',
            'mh.mixin.Localization'
        ],

        init: function(){
            this.callMeParent(arguments);
            this.injectLocalizationToViewModel();
        },

        /**
         * star wars btn click handler
         * @param btn
         */
        onStarWarsBtnClicked: function(btn){
            let row = btn.ownerCmp.ownerCmp,
                rec = row.getRecord();

            Ext.Msg.show({
                title: 'Welcome to the dark side!',
                message: `txt: ${rec.get('txt')}`,
                buttons: Ext.MessageBox.OK
            });
        },

        /**
         * refresh btn click handler
         * @param grid
         * @param evt
         */
        onRefreshBtnClicked: function(grid, evt){
            Ext.Msg.show({
                title: 'Refresh clicked!',
                message: evt && evt.record ? `bool: ${evt.record.get('bool')}` : 'could not obtain record :(',
                buttons: Ext.MessageBox.OKCANCEL
            });
        },

        /**
         * slider cell -> widget binder
         * @param widgetCell
         * @param rec
         */
        onSliderRecordSet: function(widgetCell, rec){
            let slider = widgetCell.getWidget();

            if(rec && slider){
                slider.rec = null;
                slider.setValue(rec.get('number'));
                slider.rec = rec;
            }
        },

        onSliderChange: function(slider, newV, oldV, eOpts){
            if(slider.rec && Ext.isFunction(slider.rec.set)){
                slider.rec.set('number', newV);
            }
        }

    });

}());