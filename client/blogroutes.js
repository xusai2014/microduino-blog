// ***************************************************************
// ROUTES (Blog)
// ***************************************************************

Router.map(function() {

  // Blog INDEX
  // -------------------------------------------------------
  this.route('blogIndex', {
    controller: ShopController,
    template: 'blogIndex',
    path: '/blog',
    subscriptions: function(){
      Meteor.subscribe("blogAccounts");
      var blogAccounts = Meteor.users.find({ "username": "admin" }).fetch()[0];  
      blogAccounts && typeof blogAccounts._id != "undefined" && BlogPages.set({
        sort: {
          title: -1
        },
        filters: {
          authorId: blogAccounts._id,
          // type: "project"
        }
      });
    }

  });

  

});

