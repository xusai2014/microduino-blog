Meteor.publish("blogAccounts",function(){
	return Meteor.users.find({ "username": "admin" },{_id:1});
});