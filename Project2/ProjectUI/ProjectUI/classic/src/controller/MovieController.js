Ext.define('ProjectUI.controller.MovieController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.movie',

    init: function () {
        var me = this;
        var movieStore = this.getViewModel().getStore('movies');

        movieStore.load({
            callback: function (records, operation, success) {
                if (success) {
                    console.log('Movies loaded successfully:', records);
                } else {
                    console.error('Failed to load movies:', operation.getError());
                }
            }
        });
    },

    onAddMovieClick: function () {
        var me = this;
        var movieStore = this.getViewModel().getStore('movies');
        var movieModel = Ext.create('ProjectUI.model.Movie');

        var movieForm = Ext.create('ProjectUI.view.movie.MovieForm', {
            viewModel: {
                data: {
                    movie: movieModel
                }
            }
        });

        var window = Ext.create('Ext.window.Window', {
            title: 'Add Movie',
            modal: true,
            items: [movieForm],
            buttons: [{
                text: 'Save',
                handler: 'onSaveMovieClick' // Define this handler in your MovieController
            }, {
                text: 'Cancel',
                handler: 'onCancelMovieClick' // Define this handler in your MovieController
            }]
        });

        window.show();
    },

    onEditMovieClick: function (grid, rowIndex) {
        var me = this;
        var movieStore = this.getViewModel().getStore('movies');
        var movieModel = movieStore.getAt(rowIndex);

        var movieForm = Ext.create('ProjectUI.view.movie.MovieForm', {
            viewModel: {
                data: {
                    movie: movieModel
                }
            }
        });

        var window = Ext.create('Ext.window.Window', {
            title: 'Edit Movie',
            modal: true,
            items: [movieForm],
            buttons: [{
                text: 'Save',
                handler: 'onSaveMovieClick' // Define this handler in your MovieController
            }, {
                text: 'Cancel',
                handler: 'onCancelMovieClick' // Define this handler in your MovieController
            }]
        });

        window.show();
    },

    onDeleteMovieClick: function (grid, rowIndex) {
        var me = this;
        var movieStore = this.getViewModel().getStore('movies');
        var movieModel = movieStore.getAt(rowIndex);

        Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this movie?', function (btn) {
            if (btn === 'yes') {
                movieStore.remove(movieModel);
                movieStore.sync({
                    success: function () {
                        // Movie deleted successfully
                    },
                    failure: function (batch, options) {
                        Ext.Msg.alert('Error', 'Failed to delete movie.');
                    }
                });
            }
        });
    }
});
