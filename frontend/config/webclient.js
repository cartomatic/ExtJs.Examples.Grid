(function(){
    if(typeof(__mhcfg__) === 'undefined'){
        __mhcfg__ = {};
    }

    let debug = window.location.href.indexOf('debug=true') >= 0,
        test = window.location.href.indexOf('-test') >= 0 || window.location.href.indexOf('test=true') >= 0,
        getUrl = function(endPoint){
            return (debug
                ? __mhcfg__.apiEndPoints[endPoint].dev
                : test
                    ? __mhcfg__.apiEndPoints[endPoint].test
                    :__mhcfg__.apiEndPoints[endPoint].production
            );
        };

    //customise and add endpoints as required
    __mhcfg__.apiEndPoints = {
        authApi: {
            dev: 'https://localhost:5003/auth/'
        },
        coreApi: {
            dev: 'https://localhost:5003/'
        }
    };

    for(apiEndPoint in __mhcfg__.apiEndPoints){
        __mhcfg__.apiEndPoints[apiEndPoint].url = getUrl(apiEndPoint);
        delete __mhcfg__.apiEndPoints[apiEndPoint].dev;
        delete __mhcfg__.apiEndPoints[apiEndPoint].production;
    }

    //namespaces to get the localization for
    __mhcfg__.namespacesToLocalize = [
        'mh'
    ];

    //total header to extract total dataset counts when reading lists
    __mhcfg__.headerTotal = 'x-total-count';
}());
