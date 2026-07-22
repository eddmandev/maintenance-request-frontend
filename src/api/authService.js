import axiosClient from "./axiosClient";

const login = (request) =>

    axiosClient.post("/login", request);

const register = (request) =>

    axiosClient.post("/register", request);

export default {

    login,

    register

};