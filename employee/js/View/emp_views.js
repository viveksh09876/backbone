var app = app || {};

(function(){
app.AppView = Backbone.View.extend({
	el: '#add_entry',
	template: _.template($('#list_template').html()),
	initialize: function() {		
		
		this.$empid = this.$('#emp_id');
		this.$empname = this.$('#emp_name');
		this.$empage = this.$('#emp_age');
		this.$empsalary = this.$('#emp_salary');
		this.$list = this.$('#info_list');
		this.listenTo(app.Employees, 'add', this.addOne);
	},
		
	events: {
		'click #save_employee' : 'addEmployee'
	},
	render: function(){
		//console.log(this.model.toJSON());
		 this.$el.html(this.template(this.model.toJSON()));
		 return this;
	},
	addOne: function (Emp) {
		
		var view = new app.AppView({ model: Emp });
		console.log(view.render().el);
		this.$list.append(view.render().el);
	},
	
	newEntries: function() {
		return {
			id : this.$empid.val().trim(),
			name : this.$empname.val().trim(),
			age : this.$empage.val().trim(),
			salary : this.$empsalary.val().trim()
		};
	},
	
	addEmployee: function(){	
			
		if(this.$empid.val().trim() || this.$empname.val().trim() || this.$empage.val().trim() || this.$empsalary.val().trim()) {			
			app.Employees.create(this.newEntries());
		}else{
			alert('Please fill all information');
		}
	}	
	
});

})(jQuery);
