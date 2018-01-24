const assert = require('assert');
const User = require('../src/user'); // represents a "Class User", a model representing the whole user data

describe('Creating records', () => {
	it('saves a user', (done) => {
		const joe = new User({ name: 'Joe' }); // creates a new "instance" of a User. It's not persisted to database, only exists on memory
		joe.save().then(() => {
			// Has Joe been saved to database?
			assert(!joe.isNew);
			done();
		});
	});
});
