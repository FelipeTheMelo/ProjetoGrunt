module.exports = function(grunt) {
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    less: {
    development: {
        files: {
        'css/estilo.css': 'less/estilo.less'
        }
    }
    },

    // Tarefa para minificar JS
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