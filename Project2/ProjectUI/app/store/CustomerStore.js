Ext.define('ProjectUI.store.CustomerStore', {
    extend: 'Ext.data.Store',
    alias: 'store.customerstore',
    model: 'ProjectUI.model.Customer',
    autoLoad: false, // Do not use autoLoad
    autoSync: false, // Do not use autoSync
});