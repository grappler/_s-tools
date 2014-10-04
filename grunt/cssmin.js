module.exports = function(grunt) {
	return {
		dynamic_mappings: {
			files: [
				{
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}
			]
		}
	};
};
