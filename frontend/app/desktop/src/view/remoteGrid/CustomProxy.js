
/**
 * Customised json reader that can read some customised mh serverside output
 */
Ext.define('GridExamples.data.reader.Custom', {
    extend: 'Ext.data.reader.Json',
    alias : 'reader.custom',


    //server response will be transformed into a std response required by rest proxy
    rootProperty: 'data',
    totalProperty: 'total',

    /**
     * Customised response data extractor. used, so can extract some custom properties such as 'total' off the header.
     * @param response
     * @returns {*}
     */
    getResponseData: function(response) {
        let error;

        try {
            //extract the data and wrap it into an object with root, so can avoid polluting the response data itself
            let data = {};
            if (response.responseJson) {
                data[this.getRootProperty()] = response.responseJson;
            }
            else {
                data[this.getRootProperty()] = response.responseText ? Ext.decode(response.responseText) : undefined;
            }

            //grab the response header and set a total property based on it;
            //this sets a property on the actual output object though!
            let total = response.getResponseHeader('total');
            if(total !== undefined){
                total = parseInt(total);
                if(!isNaN(total)){
                    data[this.getTotalProperty()] = total;
                }
            }

            return data;
        } catch (ex) {
            error = this.createReadError(ex.message);

            Ext.Logger.warn('Unable to parse the JSON returned by the server');
            this.fireEvent('exception', this, response, error);
            return error;
        }
    }
});

/**
 * simple custom data writer
 */
Ext.define('GridExamples.data.writer.Custom', {
    extend: 'Ext.data.writer.Json',
    alias : 'writer.custom',

    //so a full record is sent on put
    writeAllFields: true
});

/**
 * simple customized proxy
 */
Ext.define('GridExamples.data.proxy.CustomProxy', {
    extend: 'Ext.data.proxy.Rest',

    alias: 'proxy.custom',

    writer: {
        type: 'custom'
    },

    reader: {
        type: 'custom'
    }
});

/**
 * Customized proxy that talks to endpoints filterable via https://github.com/Biarity/Sieve
 */
Ext.define('GridExamples.data.proxy.CustomSieveProxy', {
    extend: 'Ext.data.proxy.Rest',

    alias: 'proxy.custom-sieve',

    writer: {
        type: 'custom'
    },

    reader: {
        type: 'custom'
    },

    config: {
        pageSize: 25
    },

    pageParam: 'page',
    sortParam: 'sorts',
    filterParam: 'filters',
    pageSizeParam: 'pageSize',

    /**
     * plug into params generation, so can customize stuff further
     * @param operation
     * @returns {*}
     */
    getParams: function(operation){
        let params = this.callParent(arguments);

        //need to add page size for sieve paging
        params[this.pageSizeParam] = this.getPageSize() || 25;

        //cleanup some unused paging properties, so the request is less messy.
        delete params.start;
        delete params.limit;

        return params;
    },

    /**
     * customised sieve sorters encoder
     * @param sorters
     * @param preventArray
     * @returns {string}
     */
    encodeSorters: function(sorters, preventArray) {
        let out = [],
            length = sorters.length,
            i;

        for (i = 0; i < length; i++) {
            out[i] = sorters[i].getProperty();
            if((sorters[i].getDirection() || '').toLowerCase() === 'desc'){
                out[i] = '-' + out[i];
            }
        }

        return out.join(',');
    },

    /**
     * customized sieve filters encoder
     * @param filters
     * @returns {string}
     */
    encodeFilters: function(filters) {
        let me = this,
            out = [],
            length = filters.length,
            i;

        for (i = 0; i < length; i++) {
            let f = filters[i];
            if(f.getValue()){
                out.push(
                    `${f.getProperty()}${me.getSieveOperator(f.getOperator())}${f.getValue()}`
                )
            }
        }

        return out.join(',');
    },

    /**
     * gets sieve operator based on extjs filter operator
     * @param operator
     * @returns {string}
     */
    getSieveOperator: function(operator){
        /*
==	Equals
!=	Not equals
>	Greater than
<	Less than
>=	Greater than or equal to
<=	Less than or equal to
@=	Contains
_=	Starts with
!@=	Does not Contains
!_=	Does not Starts with
@=*	Case-insensitive string Contains
_=*	Case-insensitive string Starts with
==*	Case-insensitive string Equals
!=*	Case-insensitive string Not equals
!@=*	Case-insensitive string does not Contains
!_=*	Case-insensitive string does not Starts with
         */
        return '@=*'; //just case insensitive contains for a starter
    }

});
