Ext.define('ProjectUI.model.RentalDetails', {
    extend: 'ProjectUI.model.Base',
    idProperty: 'rentalDetailId',

    fields: [
        { name: 'rentalDetailId', type: 'string' },
        { name: 'customerId', type: 'string' },
        { name: 'movieId', type: 'string' },
        { name: 'rentalDate', type: 'date' },
        { name: 'returnDate', type: 'date' },
        { name: 'rentalPrice', type: 'float' },
        // Add associations for customer and movie if needed
        { name: 'customer', type: 'auto' },
        { name: 'movie', type: 'auto' }
    ]
});
