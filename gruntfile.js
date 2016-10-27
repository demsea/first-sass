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
  },
  watch: {
  scripts: {
    files: ['**/*.scss'],
    tasks: ['sass'],
    options: {
      spawn: false,
    },
  },
} 
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('watch', ['watch']);

};





