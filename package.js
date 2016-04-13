Package.describe({
	"name":"microduino-blog",
	"version":"0.0.1",
	"summary":"microduino blog package",
	"git":"https://github.com/xusai2014/microduino-blog.git"
});

Package.onUse(function(api) {
  // api.versionsFrom('1.2.1');
  // package
  api.use('iron:router@1.0.12', ["server", "client"]);
  api.use('momentjs:moment@2.10.6', ["server", "client"]);
  api.use('aldeed:autoform@5.1.2', ["server", "client"]);
  api.use('aldeed:collection2@2.3.3', ["server", "client"]);
  api.use('aldeed:simple-schema@1.3.2', ["server", "client"]);
  api.use('matb33:collection-hooks@0.8.0', ["server", "client"]);
  api.use('cfs:graphicsmagick@0.0.18', ["server", "client"]);
  api.use('cfs:standard-packages@0.5.9', ["server", "client"]);
  api.use('cfs:gridfs@0.0.33', ["server", "client"]);
  api.use('cfs:filesystem@0.1.2', ["server", "client"]);
  api.use('momentjs:moment@2.10.6', ["server", "client"]);
  api.use('mpowaga:autoform-summernote@0.4.3', ['client']);

  // mongo and template
  // https://zh.discovermeteor.com/chapters/creating-a-meteor-package/
  api.use(['minimongo@1.0.10', 'mongo-livedata@1.0.9', 'templating@1.1.4'], 'client');

  api.use("maodouio:cdn@0.0.1");
  api.use('ecmascript');

  // file
  // ls -l | awk '{print "api.addFiles(\""$9"\", \"client\");"}'
  api.addFiles('client/blogroutes.js', 'client');
  
  

  api.addFiles("server/blogAccounts.js",'server');
});
