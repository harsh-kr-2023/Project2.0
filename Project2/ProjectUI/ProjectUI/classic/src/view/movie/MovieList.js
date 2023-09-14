Ext.define('ProjectUI.view.movie.MovieList', {
    extend: 'Ext.grid.Panel',
    xtype: 'movielist',

    title: 'Movies',

    viewModel: {
        type: 'movielist', // Use ViewModel alias
    },

    bind: {
        store: '{movies}', // Use view model binding for the store
    },

    columns: [
        // Define columns to display movie details
        { text: 'Movie ID', dataIndex: 'movieId', flex: 2 },
        { text: 'Title', dataIndex: 'title', flex: 1 },
        { text: 'Release Year', dataIndex: 'releaseYear', flex: 1 },
        { text: 'Genre', dataIndex: 'genre', flex: 1 },
        { text: 'Rating', dataIndex: 'rating', flex: 1 },
        { text: 'Rental Price', dataIndex: 'rentalPrice', flex: 1 },
        { text: 'Total Copies', dataIndex: 'totalCopies', flex: 1 },
    ],

    tbar: [
        {
            text: 'Add Movie',
            handler: 'onAddMovieClick', // Define this in your movie controller
        },
        {
            text: 'Edit Movie',
            handler: 'onEditMovieClick', // Define this in your movie controller
        },
        {
            text: 'Delete Movie',
            handler: 'onDeleteMovieClick', // Define this in your movie controller
        },
    ],
});
