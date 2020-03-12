describe('stringify', function() {
	it('array', function() {
		expect(JSON.stringify([1,'2'])).toEqual('[1,"2"]');
	});
	
	it('object', function() {
		expect(JSON.stringify({a: 1, "b":[3,'4']})).toEqual('{"a":1,"b":[3,"4"]}');
	});
});
