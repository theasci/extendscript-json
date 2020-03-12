describe('parse', function() {
	it('array', function() {
		expect(JSON.parse('[1,"2"]')).toEqual([1,"2"]);
	});
	
	it('object', function() {
		expect(JSON.parse('{"a":1, "b":[3,"4"]}')).toEqual({a: 1, "b":[3,"4"]});
	});
});
