const {doit} = require('../src/test');

describe('thing', () => {
	it('should', () => {
		doit(() => console.log('thing'));
	});
});