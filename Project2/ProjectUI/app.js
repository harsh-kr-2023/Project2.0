/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ProjectUI.Application',

    name: 'ProjectUI',

    requires: [
        // This will automatically load all classes in the ProjectUI namespace
        // so that application classes do not need to require each other.
        'ProjectUI.*'
    ],

    // The name of the initial view to create.
    mainView: 'ProjectUI.view.main.Main'
});
