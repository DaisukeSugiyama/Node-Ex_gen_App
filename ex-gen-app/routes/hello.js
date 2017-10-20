var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    var msg = '※入力してください';
    if (req.session.message != undefined) {
        msg = "Last Message : " + req.session.message
    }
    var data = {
        title: 'Hello',
        content: msg
    };
    res.render('hello', data);
});

router.post('/post', (req, res, next) => {
    console.log(req);

    var msg = req.body['message'];
    req.session.message = msg;
    var data = {
        title: 'Hello!',
        content: 'Last Message : '　 + req.session.message
    };
    res.render('hello', data);
});

module.exports = router;