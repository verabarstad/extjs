Ext.define('TutorialApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',
    storeId: 'personell',

    fields: [
        'name', 'email', 'phone'
    ],
     autoLoad: true,

    proxy: {
        type: 'ajax',

        url : '/data.json',
        reader:  {
            type: 'json',
            rootProperty: 'items'
        }

    }
});
