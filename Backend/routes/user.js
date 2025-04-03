const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User.js')

// Express 라우터는 서버에서 HTTP 요청을 처리하고 각 요청에 맞는 응답을 보내는 역할을 함
// 이게 RESTfulAPI의 기초가 되는 것 같음

router.post('signUp', async ( res, req ) => {
    try {
        const { username, password } = req.body; // HTTP 요청의 본문에 담긴 데이터를 가져오는 역할을 함

        const searchUser = await User.findOne({ username });
        if (searchUser) {
            return res.status(400).json({ message: '이미 존재하는 사용자입니다.'});
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User ({
            username,
            password: hashedPassword,
        })

        await user.save();
        res.status(201).json({ message: '회원가입이 완료되었습니다.'})
    } catch (error) {
        res.status(500).json({ message: '서버 오류가 발생하였습니다.'});
        console.log(error);
    }
});

module.exports = router;