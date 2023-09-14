Ext.define('ProjectUI.viewmodel.MovieList', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.movielist',

    stores: {
        movies: {
            model: 'ProjectUI.model.Movie',
            autoLoad: true, // Load data from the backend when the store is created
            proxy: {
                type: 'rest',
                url: 'https://localhost:7032/api/Movies', // Replace with the correct API endpoint for movies
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                },
            },
        },
    },
});
