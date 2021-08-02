module.exports = function(grunt) {
  require('jit-grunt')(grunt);

  grunt.initConfig({
    less: {
      development: {
        files: {
          "site-appeperia/css/estilos.css": "site-appeperia/css/estilos.less", // Caminho dos arquivos
          "site-appeperia/css/layout/media-queries.css": "site-appeperia/css/layout/media-queries.less"
        }
      }
    },
    watch: {
      styles: {
        files: ['**/*.less'], // Quais arquivos o grunt ficará de olho
        tasks: ['less']
      }
    }
  });

  grunt.registerTask('default', ['less', 'watch']);
};