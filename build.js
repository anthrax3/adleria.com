/*
  adleria.com (c) 2016 Optimal Bits Sweden AB.
*/

var marlin = require('marlin');

var handlebars = require('handlebars'),
    layouts = require('handlebars-layouts');

handlebars.registerHelper(layouts(handlebars));

handlebars.registerHelper('active', function(page, name){
  if(page === name){
    return 'class="active"'
  }
})

//
// Register handlebars template engine.
//
marlin.register(function(src, ctx){
  var template = handlebars.compile(src);
  return template(ctx);
}, function(name, src){
  handlebars.registerPartial(name, src);
}, ['hbs'], 'html');

//
// Register Sass css preprocessor
//
var sass = require('node-sass');
marlin.register(function(src, ctx){
  var result = sass.renderSync({
    data: src,
    includePaths: [
      './scss',
      './partials'
    ],
    //outputStyle: 'compressed'
  });
  return result.css;
}, null, ['scss'], 'css');

marlin.build('./', 'build').then(function(site){
  console.log('marlin: site:', site);
});