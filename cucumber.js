var common = [
    `--format json:cucumber_report.json`,
    //'--format rerun:@rerun.txt',
    //'--format usage:usage.txt',
].join(' ')

module.exports = {
    default: common,
}