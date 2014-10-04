module.exports = function(grunt) {
	return {
		dynamic_mappings: {
			files: [
				{
					expand: true,
					cwd: 'js/',
					src: ['*.js', '!*.min.js'],
					dest: 'js/',
					ext: '.min.js'
				}
			]
		}
	};
};
