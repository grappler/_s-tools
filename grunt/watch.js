module.exports = function(grunt) {
	return {
		scripts: {
			files: ['**/*.js'],
			tasks: ['js'],
			options: {
				spawn: false,
			},
		},
		styles: {
			files: ['**/*.scss'],
			tasks: ['css'],
			options: {
				spawn: false,
			}
		}
	};
};
