var app = app || {};

(function(){
app.AppView = Backbone.View.extend({
	el: '#emp_app',
	initialize: function() {		
		
		this.$empid = this.$('#emp_id');
		this.$empname = this.$('#emp_name');
		this.$empage = this.$('#emp_age');
		this.$empsalary = this.$('#emp_salary');
		this.$main = this.$('#list_employees');
	},
	events: {
		'click #save_employee' : 'addEmployee'
	},
	
	newEntries: function() {
		return {
			id : this.$empid.val().trim(),
			name : this.$empname.val().trim(),
			age : this.$empage.val().trim(),
			salary : this.$empsalary.val().trim()
		}
	},
	
	addEmployee: function(){		
		if(this.$empid.val().trim() && this.$empname.val().trim() && this.$empage.val().trim() && this.$empsalary.val().trim()) {			
			app.Employees.create(this.newEntries());
		}else{
			alert(1);
		}
	}	
	
});

})(jQuery);
