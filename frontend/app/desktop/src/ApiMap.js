//Disable some of the JSLint warnings
/*global window,console,Ext,mh*/
(function(){
    //Make sure strict mode is on
    'use strict'
    
    Ext.define('GridExamples.ApiMap', {
        singleton: true,

        mixins: [
            'mh.mixin.ApiMap'
        ],

        constructor: function () {

            let apis = {


                };

            this.extendOrUpdateApiMap(this.applyApiEndPointKey(apis, 'apis' ));
        }
    });
}());
