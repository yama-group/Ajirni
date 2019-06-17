class Auth {
    constructor() {
      this.token = window.localStorage.getItem("token");
      this.id = window.localStorage.getItem("userId")
    }
  
    login(cb) {
      this.authenticated = true;
      cb();
    }
  
    logout(cb) {
      this.authenticated = false;
      cb();
    }
  
    getToken() {
      return this.token;
    }

    getUserId() {
        return this.id;
      }
  }
  
  export default new Auth();
  