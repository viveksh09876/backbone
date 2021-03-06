(function($){	
	
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
	
	 ContactView = Backbone.View.extend({
		
		tagName: "article",
    	className: "contact-container",
		template: $('#contactTemplate').html(),
		
		render: function() {
			
			var tmpl = _.template(this.template);
			this.$el.append(tmpl(this.model.toJSON()));
			return this;
		}		
	});
	
	
	AddView = Backbone.View.extend({		
		
		el: $('#dataView'),
		template: $('#addcontactTemplate').html(),
		
		initialize: function(){
			this.render();
		},
		
		render: function(){
			
			var tmpl1 = _.template(this.template);
			this.$el.html(tmpl1);
			return this;
		}
		
	});
	
	
	 DirectoryView = Backbone.View.extend({
		el: $('#dataView'),
		
		initialize: function() {
			
			this.collection = new Directory(contacts);
			this.render();
		},
		
		events: {
			"click #add": "displayAddContact" 
		},
		
		render: function() {
			var that = this;
			_.each(this.collection.models, function(item){
				
				that.renderContact(item);
				
			}, this	);
		},
		
		displayAddContact: function(){
			
			var display = new AddView();
			
			this.$el.html(display.render().el);
		},	
		
		renderContact: function(item) {
			var contactView = new ContactView({
				model: item
			});
			this.$el.append(contactView.render().el);
		}
	});
	
	new DirectoryView();
	
}(jQuery));
