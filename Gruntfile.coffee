module.exports = (grunt) ->
	grunt.initConfig
		pkg: grunt.file.readJSON('package.json')
		bump:
			files: ['package.json']
			options:
				pushTo: 'origin'
		uglify:
			options:
				preserveComments: 'some'
			lightbox:
				files:
					'distr/nivo-lightbox.min.js': ['src/nivo-lightbox.js']


	grunt.loadNpmTasks 'grunt-contrib-uglify'
	grunt.loadNpmTasks 'grunt-bump'

	grunt.registerTask 'default', ['uglify:lightbox']