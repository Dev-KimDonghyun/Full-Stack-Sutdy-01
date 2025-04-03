const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            minlength: 2,
            maxlength: 30,
        }, // 사용자 설정
        password: {
            type: String,
            require: true,
            select: false,
        }, // 비밀번호 설정
        isLoggedIn: {
            type: Boolean,
            default: false,
        }, // 로그인 상태 확인
        isActive: {
            type: Boolean,
            default: true,
        }, // 계정 상태 확인
        failedLoginAttempts: {
            type: Number,
            default: 0,   
        }, // 로그인 실패 횟수
        lastLoginAttempt: {
            type: Date,
        }, // 마지막 로그인 시간
        ipAddress: {
            type: String,
            trim: true
        }, // 로그인 IP 주소
        createdAt: {
            type: Date,
            default: Date.now,
        } // 생성일
    },
    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;

// MongoDB 스키마 전용 규약이므로 외물 필요 없음. 필요할때 찾아보면 됨
// new는 말그대로 안에 새로 만드는거임