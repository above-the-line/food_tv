module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.initConfig({
    uglify: {
      my_target: {
        files: {
          '_/js/script.js': ['_/components/js/*.js']
        } //files
      } //my_target
    }, //uglify
    compass: {
      dev: {
        options: {
          config: 'compass_config.rb'
        } //options
      } //dev
    }, //compass
    watch: {
      options: { livereload: true },
      scripts: {
        files: ['_/components/js/*.js'],
        tasks: ['uglify'] 
      }, //scripts task runner function
      sass: {
        files: ['_/components/sass/*.scss', '_/components/sass/font-awesome-4.6.3/*.scss'],
        tasks: ['compass:dev']  
      },
      html: {
        files: ['*.html'],
      }//html_watch
    } //watch_task
  }); //initConfig
  grunt.registerTask('default', ['watch']);
} //exports