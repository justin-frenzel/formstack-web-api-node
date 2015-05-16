require('./config');
var should = require('should');
var assert = require('assert');
var fsAPI = require('formstack-web-api-node');

var fsa = new fsAPI(fsaConf.ACCESS_TOKEN);

describe('fsapi', function(){
	describe('#getForms()', function(){
		
		it('should return an array of existing forms', function(done){
			fsa.getForms({}, function(data, err){
				data.should.be.instanceOf(Array);
				done();
			});
		})
		
		// TODO: test with folderOrganized
	
	})
})