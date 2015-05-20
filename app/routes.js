// routes.js

module.exports = function (app) {
    
    //app.get('/', function (req, res) {
    //    res.json({ 'message': 'hi' });
    //});
    
    //app.get('/hello', function (req, res) {
    //    res.write('Hello world, I am going LIVE');
    //    res.end();
    //});
    
    //// call the Router
    //var dogs = express.Router();
    
    //dogs.get('/', function (req, res, next) {
    //    // doing more stuff 
    //});
    
    //dogs.post('/', function (req, res, next) {
    //            // stuff stuff stuff
    //});
    
    //// call our router we just created
    //app.use('/dogs', dogs);


    app.route('/').get(function (req, res) {
        res.json({ 'message': 'hi' });
    });

    app.route('/hello').get(function (req, res) {
        res.write('Hello world, I am going LIVE');
        res.end();
    });

};
