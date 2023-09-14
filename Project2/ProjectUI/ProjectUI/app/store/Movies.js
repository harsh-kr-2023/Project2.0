Ext.define('ProjectUI.store.Movies', {
    extend: 'Ext.data.Store',
    alias: 'store.movies',

    model: 'ProjectUI.model.Movie',

    proxy: {
        type: 'rest',
        url: 'https://localhost:7032/api/Movies', // Replace with the correct API endpoint for movies
        reader: {
            type: 'json',
            rootProperty: 'data',
        },
    },

    // Set autoLoad to false to load data manually
    autoLoad: true,
});
