interface UserSignUp {
  username: string;
  password: string;
};

interface loginData {
  username: string;
  password: string;
}

interface userInfo {
  username: string;
  password: string;
  createdAt: Date;
  status: number
}

interface userList {

}

export {
  UserSignUp,
  loginData,
}