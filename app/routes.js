// routes.js

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.json({ 'message': 'hi' });
    });

    app.get('/hello', function (req, res) {
        res.write('Hello world, I am going LIVE');
        res.end();
    });

};