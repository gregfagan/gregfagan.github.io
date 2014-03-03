'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        // configuration files
        pkg: grunt.file.readJSON('package.json'),
        aws: grunt.file.readJSON('aws.json'),

        watch: {
            build: {
                files: [
                    'index.html',
                    'icon.png',
                    'css/**',
                    'js/**',
                ],
                tasks: ['default']
            }
        },

        jshint: {
            build: {
                src: [
                    'js/**/*.js',
                ]
            },
        },

        copy: {
            build: {
                files: [
                    {
                        expand: false,
                        src: [
                            'index.html',
                            'icon.png',
                            'css/**',
                            'js/**',
                        ],
                        dest: 'build/' 
                    },

                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/',
                        src: ['**'],
                        dest: 'build/'
                    }
                ]
            }
        },

        s3: {
            options: {
                accessKeyId: '<%= aws.key %>',
                secretAccessKey: '<%= aws.secret %>',
                bucket: 'gregfagan.com',
                region: 'us-west-2',
            },

            deploy: {
                cwd: 'build',
                src: '**'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-aws');

    grunt.registerTask('default', ['jshint', 'copy']);
    grunt.registerTask('deploy', ['s3']);
};