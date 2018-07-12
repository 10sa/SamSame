module.exports = function (err, req, res, next) {
    console.log('Error Occured')
    console.log(err)
    res.json({ message: 'Error!' })
}