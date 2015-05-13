'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        // configuration files
        pkg: grunt.file.readJSON('package.json'),
        aws: grunt.file.readJSON('aws.json'),
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
        },
    });

    grunt.registerTask(
        'deploy',
        'Deploy to S3',
        ['s3']
    );

    require('load-grunt-tasks')(grunt);
};