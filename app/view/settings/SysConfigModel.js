/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('TutorialApp.view.settings.SysConfigModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.settings',

    data: {
        header: 'System configuration',
        name: 'Current Reg Date',

        sysConfigInfo: 'Some information text about this configuration',

        requireText: 'Require comments on Deviation'
    }


    //TODO - add data, formulas and/or methods to support your view
});
