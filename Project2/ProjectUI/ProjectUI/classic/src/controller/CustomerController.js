
Ext.define('ProjectUI.controller.CustomerController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.customer',

    init: function () {
        var me = this;
        var customerStore = this.getViewModel().getStore('customers');
        customerStore.load({
            callback: function (records, operation, success) {
                if (success) {
                    console.log('Customers loaded successfully:', records);
                } else {
                    console.error('Failed to load customers:', operation.getError());
                }
            }
        });
    },


    onAddCustomerClick: function () {
        console.log('onAddCustomerClick method called');
        var me = this;
        var customerStore = this.getViewModel().getStore('customers');
        var customerModel = Ext.create('ProjectUI.model.Customer');

        var customerForm = Ext.create('ProjectUI.view.customer.CustomerForm', {
            viewModel: {
                data: {
                    customer: customerModel
                }
            }
        });

        var window = Ext.create('Ext.window.Window', {
            title: 'Add Customer',
            modal: true,
            items: [customerForm],
            buttons: [{
                text: 'Save',
                handler: function () {
                    var form = customerForm.getForm();
                    if (form.isValid()) {
                        form.updateRecord(customerModel);
                        customerStore.add(customerModel);
                        customerStore.sync({
                            success: function () {
                                window.close();
                            },
                            failure: function (batch, options) {
                                Ext.Msg.alert('Error', 'Failed to save customer.');
                            }
                        });
                    }
                }
            }, {
                text: 'Cancel',
                handler: function () {
                    window.close();
                }
            }]
        });

        window.show();
    },

    onEditCustomerClick: function (grid, rowIndex) {
        var me = this;
        var customerStore = this.getViewModel().getStore('customers');
        var customerModel = customerStore.getAt(rowIndex);

        var customerForm = Ext.create('ProjectUI.view.customer.CustomerForm', {
            viewModel: {
                data: {
                    customer: customerModel
                }
            }
        });

        var window = Ext.create('Ext.window.Window', {
            title: 'Edit Customer',
            modal: true,
            items: [customerForm],
            buttons: [{
                text: 'Save',
                handler: function () {
                    var form = customerForm.getForm();
                    if (form.isValid()) {
                        form.updateRecord(customerModel);
                        customerStore.sync({
                            success: function () {
                                window.close();
                            },
                            failure: function (batch, options) {
                                Ext.Msg.alert('Error', 'Failed to update customer.');
                            }
                        });
                    }
                }
            }, {
                text: 'Cancel',
                handler: function () {
                    window.close();
                }
            }]
        });

        window.show();
    },

    onDeleteCustomerClick: function () {
        var me = this;
        var grid = this.getView().down('customerlist');
        var selection = grid.getSelectionModel().getSelection();

        if (selection.length === 1) {
            var customerModel = selection[0];

            Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this customer?', function (btn) {
                if (btn === 'yes') {
                    var customerStore = me.getViewModel().getStore('customers');
                    customerStore.remove(customerModel);
                    customerStore.sync({
                        success: function () {
                            Ext.Msg.alert('Success', 'Customer deleted successfully.');
                        },
                        failure: function (batch, options) {
                            Ext.Msg.alert('Error', 'Failed to delete customer.');
                        }
                    });
                }
            });
        } else {
            Ext.Msg.alert('Error', 'Please select a customer to delete.');
        }
    }
});