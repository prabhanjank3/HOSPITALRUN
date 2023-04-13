import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const fetchUserDetails = createAsyncThunk(
  "user/details",
  async (id: number) => {
    const response = await axios.get(SERVER_URL + "/user/" + id);
    return response.data;
  }
);
const authenticateUser = createAsyncThunk(
  "user/authenticate",
  async ({
    role,
    email,
    password
  }: {
    role: string;
    email: string;
    password: string;
  }) => {
    const response = await axios.post(SERVER_URL + "/auth/login",{role,email,password});
    return response.data;
  }
);

export { fetchUserDetails, authenticateUser };
