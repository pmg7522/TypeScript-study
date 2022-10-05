interface UserSignUp {
  username: string;
  password: string;
};

interface LoginData {
  username: string;
  password: string;
};

interface UserInfo {
  username: string;
  createdAt: Date;
  status: number
};

interface UserList extends Array<UserInfo> { };

export {
  UserSignUp,
  LoginData,
  UserInfo,
  UserList
}