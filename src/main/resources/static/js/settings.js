(function($) {
    if (window.APP_SETTINGS) {
        var classHolder = document.getElementsByTagName("BODY")[0],
            /** 
             * Load from localstorage
             **/
            themeSettings = (window.APP_SETTINGS) ? window.APP_SETTINGS : {},
            themeURL = themeSettings.themeURL || '',
            themeOptions = themeSettings.themeOptions || '';
        /** 
         * Load theme options
         **/
        if (themeSettings.themeOptions) {
            classHolder.className = themeSettings.themeOptions;
        } else {
            //console.log("Heads up! Theme settings is empty or does not exist, loading default settings...");
        }

        if (themeSettings.themeURL && !document.getElementById('mytheme')) {
            var cssfile = document.createElement('link');
            cssfile.id = 'mytheme';
            cssfile.rel = 'stylesheet';
            cssfile.href = window.MRM_REMTYS_APP_URL + '/' + themeURL;
            document.getElementsByTagName('head')[0].appendChild(cssfile);
        }
    }
})(jQuery, window, document);