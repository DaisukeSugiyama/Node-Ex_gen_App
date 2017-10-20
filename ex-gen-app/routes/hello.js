var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    var data = {
        title: 'Hello',
        content: '※入力してください'
    };
    res.render('hello', data);
});

router.post('/post', (req, res, next) => {
    console.log(req);
    var msg = req.body['message'];
    var data = {
        title: 'Hello!',
        content: 'あなたは、「'　 + msg + '」と入力しました'
    };
    res.render('hello', data);
});

module.exports = router;