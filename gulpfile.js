const gulp = require('gulp')
const htmlbeautify = require('gulp-html-beautify')
const { renameSync, mkdirSync, rmSync } = require('fs')

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
        indentSize: 4,
    }
    return gulp.src('./build/**/*.html')
            .pipe(htmlbeautify(beautifyOptions))
            .pipe(gulp.dest('./site/', { overwrite: true }))
})

gulp.task('default', gulp.series('setup', 'copy', 'htmlbeautify'))
