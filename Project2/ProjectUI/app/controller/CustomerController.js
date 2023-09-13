// app/controller/CustomerController.js
Ext.define('ProjectUI.controller.CustomerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.customercontroller',
    onSaveClick: function () {
        var form = this.getView().down('form');
        var store = Ext.getStore('customerstore');
        var customer = form.getValues();
        var existingRecord = store.getById(customer.customerid);

        if (existingRecord) {
            // Update the existing record with the form data
            existingRecord.set(customer);
        } else {
            // Create a new record with the form data
            var newCustomer = Ext.create('ProjectUI.model.Customer', customer);
            store.add(newCustomer);
        }

        store.sync({
            success: function () {
                Ext.Msg.alert('Success', 'Customer data saved successfully.');
                // Handle success, e.g., show a success message
            },
            failure: function () {
                Ext.Msg.alert('Error', 'Failed to save customer data.');
                // Handle failure, e.g., show an error message
            }
        });

        form.up('window').close();
    },

    onCancelClick: function () {
        var form = this.getView().down('form');
        form.up('window').close();
    },

    onSearchFieldChange: function (textfield, newValue, oldValue, eOpts) {
        var grid = this.lookupReference('customerGrid');
        var store = grid.getStore();

        // Apply filtering to the store based on the entered search text
        store.filter({
            property: 'name', // Adjust this property based on your search criteria
            anyMatch: true,   // Match any part of the string
            value: newValue,
            caseSensitive: false
        });
    },

    onGridItemDoubleClick: function (grid, record, item, index, e, eOpts) {
        // Handle double-clicking on a grid item to open the CustomerForm for editing
        var form = Ext.create('ProjectUI.view.CustomerForm', {
            viewModel: {
                data: {
                    customer: record.data
                }
            }
        });

        form.show();
    }
});
