module.exports = function(grunt) {

  grunt.initConfig({
   sass: {                              // Task 
    dist: {                            // Target 
      options: {                       // Target options 
        style: 'expanded'
      },
      files: {                         // Dictionary of files 
        'dist/main.css': 'src/sass/main.scss'       // 'destination': 'source' 
      }
    }
  } 
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};