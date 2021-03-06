/*global define*/

define([
    'jquery',
    'underscore',
    'parse',
    'views/header',
    'templates'
], function ($, _, Parse, HeaderView, JST) {
    'use strict';

    var MainView = Parse.View.extend({

        el: 'body',

        template: JST['app/scripts/templates/main.ejs'],

        id: '',

        className: 'main_wrapper',

        events: {},

        initialize: function (options) {
            // Global Events
            this.Bus = options.Bus;

            this.addSubView(new HeaderView({
                Bus : this.Bus
            }));
        },

        render: function (callback) {
            this.$el.prepend(this.template());
            this.$el.prepend(this.subViews[0].render().el);
            callback && callback();
        }

    });

    return MainView;
});
