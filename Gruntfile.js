module.exports = function(grunt) {

grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
    development: {
        files: {
        'css/style.css': 'less/style.less'
        }
    }
    },

    uglify: {
    dist: {
        files: {
        'js/script.min.js': ['js/script.js']
        }
    }
    }
});

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.registerTask('default', ['less', 'uglify']);
};