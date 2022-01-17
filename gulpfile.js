const gulp = require('gulp')
const htmlbeautify = require('gulp-html-beautify')
const sass = require('gulp-sass')(require('sass'))
const { renameSync, mkdirSync, rmSync } = require('fs')

// internal tasks

gulp.task('setup', done => {
    rmSync('./build/', { recursive: true, force: true })
    renameSync('./site/', './build/')
    mkdirSync('./site/')
    done()
})

gulp.task('copy', () => {
    return gulp.src('./build/**/*')
        .pipe(gulp.dest('./site/'))
})

gulp.task('htmlbeautify', () => {
    const beautifyOptions = {
        indent_size: 1,
        indent_char: '\t',
    }
    return gulp.src('./build/**/*.html')
        .pipe(htmlbeautify(beautifyOptions))
        .pipe(gulp.dest('./site/', { overwrite: true }))
})

// external tasks

gulp.task('buildstyles', () => {
    return gulp.src('./styles/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed', sourceComments: false }).on('error', sass.logError))
        .pipe(gulp.dest('./docs/'))
})

gulp.task('postbuild', gulp.series('setup', 'copy', 'htmlbeautify'))
