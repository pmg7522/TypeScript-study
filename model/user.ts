interface UserSignUp {
  username: String;
  password: String;
};

interface loginData {
  username: String;
  password: String;
}

interface userInfo {
  username: String;
  password: String;
  createdAt: Date;
  status: Number;
}

interface userList {

}

export {
  UserSignUp,
  loginData,
}