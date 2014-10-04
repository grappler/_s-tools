module.exports = function(grunt) {
	return {
		bootstap: {
			options: {
				style: 'expanded',
				sourcemap: 'none'
			},
			files: [
				{
					expand: true,
					cwd: 'bootstrap/',
					src: ['*.scss'],
					dest: 'css/',
					ext: '.css'
				}
			]
		},
		_s: {
			options: {
				style: 'expanded',
				sourcemap: 'none'
			},
			files: [
				{
					expand: true,
					cwd: 'sass/',
					src: ['*.scss'],
					dest: '',
					ext: '.css'
				}
			]
		}
	};
};
