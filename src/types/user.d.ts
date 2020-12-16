interface User {
  name: string;
}

interface UserState {
  loggedIn: boolean;
  currentUser?: User;
}
