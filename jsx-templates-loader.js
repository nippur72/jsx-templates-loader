var processHtmlString = require('jsx-templates/process/processHtmlString').processHtmlString;

var url = require('url');
var queryString = require('querystring');

module.exports = function(source, map) {
	var query = queryString.parse(url.parse(this.query).query);
	this.cacheable && this.cacheable();

   // appends .tsx extension so that it can be compiled by typescript (ts-loader)
   if(tobool(query.typescript)) {
      this.resourcePath = this.resourcePath + ".tsx";
   }   

   const options = {
      /*
      trace: tobool(query.trace) || false,
      brackets: query.brackets || '{ }',
      useRioctRuntime: tobool(query.useRioctRuntime) || false,
      checkUndefined: tobool(query.checkUndefined) || false,
      normalizeHtmlWhitespace: tobool(query.normalizeHtmlWhitespace) || true,
      createElementAlias: query.createElementAlias,
      reactImportPath: query.reactImportPath || 'react',
      lodashImportPath: query.lodashImportPath || 'lodash',
      targetVersion: query.targetVersion || '15.0.0',
      */
      typescript: tobool(query.typescript) || false,
      /*
      externalHelpers: query.externalHelpers
      */
   }

   try
   {
      const result = processHtmlString(source, options, this.resourcePath);
      this.callback(null, result, map);
   }
   catch(err)
   {
      if(typeof err === 'string') this.callback(new Error(err));
      else this.callback(err);
   }
};

function tobool(s) {
   if(s === undefined) return undefined;
   if(s == 'true') return true;
   return false;
}