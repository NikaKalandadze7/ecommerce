import axios from "axios";

const apiUrl = "https://fakestoreapi.com";

const loginService = async ({ username, password }) => {
  const dataSend = {
    username,
    password,
  };

  return axios
    .post(`${apiUrl}/auth/login`, dataSend)
    .then((response) => response.data);
};

export default loginService;
