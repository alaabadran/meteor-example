/*
 * User: Alaa Badran
 * Date: 2013-12-01
 * Time: 15:37:23
 * Contact: me@alaabadran.com
 * URL: http://www.alaabadran.com/
 */

/**
 * List script
 */

if (Meteor.isServer) {
    Meteor.publish('my-todos', function() {
        return Todos.find({
            owner: this.userId
        });
    });
}

if(Meteor.isClient){

	Meteor.subscribe('my-todos');
    // Template.todo_list.rendered = function (){}
    Template.todo_list.todos = function() {
        return Todos.find({done: false}, {limit: 9, sort:{created:-1}});
    };
    // Template.todo_list.events = {}
}
