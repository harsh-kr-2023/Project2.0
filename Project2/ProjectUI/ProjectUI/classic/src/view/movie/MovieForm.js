Ext.define('ProjectUI.view.movie.MovieForm', {
    extend: 'Ext.form.Panel',
    xtype: 'movieform',

    title: 'Movie Details',

    items: [
        {
            xtype: 'textfield',
            name: 'movieId',
            fieldLabel: 'Movie ID',
            readOnly: true // Assuming movie ID should not be editable
        },
        {
            xtype: 'textfield',
            name: 'title',
            fieldLabel: 'Title',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'releaseYear',
            fieldLabel: 'Release Year',
            allowBlank: false,
            xtype: 'numberfield'
        },
        {
            xtype: 'textfield',
            name: 'genre',
            fieldLabel: 'Genre',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'rating',
            fieldLabel: 'Rating',
            allowBlank: false
        },
        {
            xtype: 'numberfield',
            name: 'rentalPrice',
            fieldLabel: 'Rental Price',
            allowBlank: false
        },
        {
            xtype: 'numberfield',
            name: 'totalCopies',
            fieldLabel: 'Total Copies',
            allowBlank: false
        }
    ],

    buttons: [
        {
            text: 'Save',
            formBind: true,
            handler: 'onSaveMovieClick' // Define this handler in your MovieController
        },
        {
            text: 'Cancel',
            handler: 'onCancelMovieClick' // Define this handler in your MovieController
        }
    ]
});
