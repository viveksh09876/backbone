var Person = new Backbone.Model({name: 'Jeremy'});

Person.on("change", function(){
	if (!Person.get("name") || Person.get("name") == "") {
    	console.log("onchange - validation works");
    	
  	}else{
  		console.log("onchange - validation failed");
  	}		
});

// Validate the model name
Person.validate = function(attrs) {
  if (!attrs.name || attrs.name == "") {
    return 'I need your name';
  }
};

// Change the name
Person.set({name: null}, {validate: true});
console.log(Person.get('name'));
// 'Samuel'

// Remove the name attribute, force validation
Person.unset('name', {validate: true});
// false