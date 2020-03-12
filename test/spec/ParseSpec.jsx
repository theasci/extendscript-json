describe('parse', function() {
	it('undefined', function(){
		expect(function(){
			JSON.parse('undefined')
		}).toThrow(
			new SyntaxError('JSON.parse')
		);
	});
	
	it('null', function(){
		expect(JSON.parse('null')).toEqual(null);
	});
	
	it('NaN', function(){
		expect(function(){
			JSON.parse('NaN')
		}).toThrow(
			new SyntaxError('JSON.parse')
		);
	});

	it('Infinity', function(){
		expect(function(){
			JSON.parse('Infinity')
		}).toThrow(
			new SyntaxError('JSON.parse')
		);
	});
	
	it('string', function(){
		expect(JSON.parse('"test"')).toEqual('test');
	});

	it('empty string', function(){
		expect(JSON.parse('""')).toEqual('');
	});

	it('true', function(){
		expect(JSON.parse('true')).toEqual(true);
	});
	
	it('false', function(){
		expect(JSON.parse('false')).toEqual(false);
	});

	it('number', function(){
		expect(JSON.parse('3497842')).toEqual(3497842);
	});

	it('array', function() {
		expect(JSON.parse('[1,"2"]')).toEqual([1,"2"]);
	});
	
	it('nested array', function(){
		expect(JSON.parse('[1,[2,[3,["x"]]]]')).toEqual([1,[2,[3,['x']]]]);
	});
	
	it('object', function() {
		expect(JSON.parse('{"a":1, "b":[3,"4"]}')).toEqual({a: 1, "b":[3,"4"]});
	});
	
	it('function', function(){
		expect(function(){
			JSON.parse('function f(){ return 1; }')
		}).toThrow(
			new SyntaxError('JSON.parse')
		);
	});
});
