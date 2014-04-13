/*
 * User: Alaa Badran
 * Date: 2013-12-01
 * Time: 15:37:23
 * Contact: me@alaabadran.com
 * URL: http://www.alaabadran.com/
 */

// Connecting to todos collection
Todos = new Meteor.Collection('todos');

// this will return all todos
function myTodos() {
    return Todos.find();
}

// This will run in Server-side only
if (Meteor.isServer) {
    Meteor.publish('my-todos', function() {
    	// This will return all todos for the current user.
        return Todos.find({
            owner: this.userId
        });
    });
}

if(Meteor.isClient){

	Meteor.subscribe('my-todos');
    // Template.todo_list.rendered = function (){}
    Template.todos.rendered = function() {
        // What to run when 
    };
    Template.todo_list.todos = function() {
    	// Limiting and sorting.
        return Todos.find({done: false}, {limit: 9, sort:{created:-1}});
    };
    // Template.todo_list.events = {}
}
