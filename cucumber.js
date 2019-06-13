var common = [
    `--format json:cucumber_report.json`,
    '--tags @SomeTag',
    //'--format rerun:@rerun.txt',
    //'--format usage:usage.txt',
].join(' ')

module.exports = {
    default: common,
}