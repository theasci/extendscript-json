describe('stringify', function() {
	it('undefined', function(){
		expect(JSON.stringify(undefined)).toBeUndefined();
	});
	
	it('null', function(){
		expect(JSON.stringify(null)).toEqual('null');
	});
	
	it('NaN', function(){
		expect(JSON.stringify(NaN)).toEqual('null');
	});
	
	it('Infinity', function(){
		expect(JSON.stringify(Infinity)).toEqual('null');
	});
	
	it('string', function(){
		expect(JSON.stringify('test')).toEqual('"test"');
	});
	
	it('empty string', function(){
		expect(JSON.stringify('')).toEqual('""');
	});
	
	it('true', function(){
		expect(JSON.stringify(true)).toEqual('true');
	});
	
	it('false', function(){
		expect(JSON.stringify(false)).toEqual('false');
	});
	
	it('number', function(){
		expect(JSON.stringify(93489)).toEqual('93489');
	});
	
	it('array', function() {
		expect(JSON.stringify([1,'2'])).toEqual('[1,"2"]');
	});
	
	it('nested array', function(){
		expect(JSON.stringify([1,[2,[3,['x']]]])).toEqual('[1,[2,[3,["x"]]]]');
	});
	
	it('object', function() {
		expect(JSON.stringify({a: 1, "b":[3,'4']})).toEqual('{"a":1,"b":[3,"4"]}');
	});
	
	it('function', function(){
		var f = function(){
			return 1;
		}
		expect(JSON.stringify(f)).toBeUndefined();
	});
});
