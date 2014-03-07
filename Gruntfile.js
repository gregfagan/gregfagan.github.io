'use strict';

module.exports = function(grunt) {
    var build_files = [
            'index.html',
            'img/**',
            'css/**',
            'js/**',
        ];

    grunt.initConfig({
        // configuration files
        pkg: grunt.file.readJSON('package.json'),
        aws: grunt.file.readJSON('aws.json'),

        watch: {
            build: {
                files: build_files,
                tasks: ['default'],
                options: {
                    livereload: true
                }
            }
        },

        jshint: {
            build: {
                src: [
                    'js/**/*.js',
                ]
            },
        },

        stylus: {
            build: {
                files: {
                    'build/css/stylesheet.css' : 'css/*.styl'
                }
            }
        },

        copy: {
            build: {
                files: [
                    {
                        expand: false,
                        src: [
                            'index.html',
                            'img/**',
                            'js/**'
                        ],
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

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', [
        'newer:jshint:build',
        'newer:stylus:build',
        'newer:copy:build'
    ]);
    grunt.registerTask('deploy', ['s3']);
};