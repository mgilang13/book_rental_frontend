import Axios from "axios";

export const register = adminData => {
  return {
    type: "POST_REGISTER",
    payload: Axios.post(`/api/v1/admin/register`, adminData)
  };
};

export const login = (adminData, history) => {
  return {
    type: "POST_LOGIN",
    payload: Axios.post(`/api/v1/admin/login`, adminData)
      .then(result => {
        console.log("token", result.data.data.token);
        if (result.status === 200) {
          alert("Login Success");
          try {
            localStorage.setItem("KEY_TOKEN", result.data.data.token);
            localStorage.setItem("id", result.data.data.id);
            localStorage.setItem("fullname", result.data.data.fullname);
            history.push("/home");
          } catch (error) {
            console.log(error);
            alert("Oops something went wrong!");
          }
        }
      })
      .catch(error => {
        console.log(error);
        alert("Email or Password is Wrong");
      })
  };
};
