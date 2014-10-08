(function($){
	
	var app = app || {};
	
	var contacts = [
        { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 2", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 3", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Contact 4", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Contact 5", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 6", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Contact 7", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Contact 8", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" }
    ];
	
	app.ContactView = Backbone.View.extend({
		
		tagName: "article",
    	className: "contact-container",
		template: $('#contactTemplate').html(),
		
		render: function() {
			
			var tmpl = _.template(this.template);
			this.$el.html(tmpl(this.model.toJSON()));
			return this;
		}		
	});
	
	
	app.DirectoryView = Backbone.View.extend({
		el: $('#dataView'),
		
		initialize: function() {
			
			this.collection = new app.Directory(contacts);
			this.render();
		},
		
		render: function() {
			var that = this.
			_.each(this.collection.models, function(item){
				
				that.renderContact(item);
				
			}, this	);
		},
		
		renderContact: function(item) {
			var contactView = app.ContactView({
				model: item
			});
			this.$el.append(app.contactView.render().el);
		}
	});
	
	new app.DirectoryView();
	
}(jQuery));
