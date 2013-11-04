/*
 * User: Alaa Badran
 * Date: 2013-11-04
 * Time: 09:16:19
 * Contact: me@alaabadran.com
 * URL: http://www.alaabadran.com/
 */

if (Meteor.isClient) {
    Router.configure({
        layoutTemplate: 'layout',
        notFoundTemplate: 'notFound',
        loadingTemplate: 'loading'
    });
}


Router.map(function () {
    this.route('todos', {
        path: '/todos'
    });
    this.route('todos_item', {
        path: '/todos/:_id',
        before: function() {
            Session.set('todos-active', this.params._id);
        }
    });
    this.route('admin', {
        path: '/admin'
    });
    this.route('notFound', { path: '*' });
});
