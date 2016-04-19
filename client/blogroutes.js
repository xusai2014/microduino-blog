// ***************************************************************
// ROUTES (Blog)
// ***************************************************************

Router.map(function() {

  // Blog INDEX
  // -------------------------------------------------------
  this.route('blogIndex', {
    controller: ShopController,
    template: 'blogIndex',
    path: '/blog'

  });

  this.route('blogDetail',{
    controller:ShopController,
    template:'blogDetail',
    path:'/blog/:_id',
    waitOn: function () {
      return ReactionCore.subsManager.subscribe("article", this.params._id, true);
    },
    data: function () {
      return Articles.findOne(this.params._id);
    }

  });

  

});

