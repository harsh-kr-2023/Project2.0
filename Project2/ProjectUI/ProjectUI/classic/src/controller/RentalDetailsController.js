Ext.define('ProjectUI.controller.RentalDetailsController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.rentaldetails',

    init: function () {
        var me = this;
        var rentalDetailsStore = this.getViewModel().getStore('rentalDetails');

        // Auto-load the rentalDetailsStore
        rentalDetailsStore.load({
            callback: function (records, operation, success) {
                if (success) {
                    console.log('Rental details loaded successfully:', records);
                } else {
                    console.error('Failed to load rental details:', operation.getError());
                }
            }
        });
    },

    onAddRentalDetailClick: function () {
        var me = this;
        var rentalDetailsStore = this.getViewModel().getStore('rentalDetails');
        var rentalDetailModel = Ext.create('ProjectUI.model.RentalDetail');

        var rentalDetailForm = Ext.create('ProjectUI.view.rentaldetails.RentalDetailForm', {
            viewModel: {
                data: {
                    rentalDetail: rentalDetailModel
                }
            }
        });

        var window = Ext.create('Ext.window.Window', {
            title: 'Add Rental Detail',
            modal: true,
            items: [rentalDetailForm],
            buttons: [{
                text: 'Save',
                handler: 'onSaveRentalDetailClick' // Define this handler in your RentalDetailsController
            }, {
                text: 'Cancel',
                handler: 'onCancelRentalDetailClick' // Define this handler in your RentalDetailsController
            }]
        });

        window.show();
    },

    onEditRentalDetailClick: function (grid, rowIndex) {
        var me = this;
        var rentalDetailsStore = this.getViewModel().getStore('rentalDetails');
        var rentalDetailModel = rentalDetailsStore.getAt(rowIndex);

        var rentalDetailForm = Ext.create('ProjectUI.view.rentaldetails.RentalDetailForm', {
            viewModel: {
                data: {
                    rentalDetail: rentalDetailModel
                }
            }
        });

        var window = Ext.create('Ext.window.Window', {
            title: 'Edit Rental Detail',
            modal: true,
            items: [rentalDetailForm],
            buttons: [{
                text: 'Save',
                handler: 'onSaveRentalDetailClick' // Define this handler in your RentalDetailsController
            }, {
                text: 'Cancel',
                handler: 'onCancelRentalDetailClick' // Define this handler in your RentalDetailsController
            }]
        });

        window.show();
    },

    onDeleteRentalDetailClick: function (grid, rowIndex) {
        var me = this;
        var rentalDetailsStore = this.getViewModel().getStore('rentalDetails');
        var rentalDetailModel = rentalDetailsStore.getAt(rowIndex);

        Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this rental detail?', function (btn) {
            if (btn === 'yes') {
                rentalDetailsStore.remove(rentalDetailModel);
                rentalDetailsStore.sync({
                    success: function () {
                        // Rental detail deleted successfully
                    },
                    failure: function (batch, options) {
                        Ext.Msg.alert('Error', 'Failed to delete rental detail.');
                    }
                });
            }
        });
    }
});
