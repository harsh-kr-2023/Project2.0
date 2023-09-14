Ext.define('ProjectUI.model.Movie', {
    extend: 'ProjectUI.model.Base',
    idProperty: 'movieId',

    fields: [
        { name: 'movieId', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'releaseYear', type: 'int' },
        { name: 'genre', type: 'string' },
        { name: 'rating', type: 'string' },
        { name: 'rentalPrice', type: 'float' },
        { name: 'totalCopies', type: 'int' }
    ]
});
