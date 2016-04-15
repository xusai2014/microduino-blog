Meteor.publish("blogAccounts",function(){
	return Meteor.users.find({ "username": "microduinoblog" },{_id:1});
});