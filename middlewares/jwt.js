require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SALT);
  },

  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SALT);
  },

  sendToken: (res, accessToken, refreshToken) => {
    return res
      .status(200)
      .cookie("refreshToken", refreshToken, {
        sameSite: "none",
        secure: true,
        httpOnly: true,
      })
      .send({
        message: "토큰 발급에 성공하였습니다.",
        data: {
          accessToken
        },
      });
  },

  isAuthorized: (req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
      return accessInvalidToken
    }
    const payload = authorization.split(" ")[1];
    try {
      const data = verify(payload, process.env.ACCESS_SALT);
      return data;
    }
    catch (err) {
      if (err.message === "jwt expired") {
        return accessExpireToken
      } else {
        return accessInvalidToken
      }
    }
  },

  checkRefreshToken: (req) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return refreshInvalidToken
    }
    try {
      const data = verify(refreshToken, process.env.REFRESH_SALT);
      return data;
    }
    catch (err) {
      if (err.message === "jwt expired") {
        return refreshExpireToken
      } else {
        return refreshInvalidToken
      }
    }
  },
};