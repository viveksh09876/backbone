var app = app || {};

(function(){
var empList = Backbone.Collection.extend({
	
	model: app.Emp,
	localStorage: new Backbone.LocalStorage('employees-bacbone'),
	
	nextOrder: function(){
		if ( !this.length) {
			return 1;
		}
		return this.last().get('order') + 1;
	},
		
	comparator: function(emp) {
		return emp.get('order');	
	}
	
});

app.Employees = new empList();
})();
