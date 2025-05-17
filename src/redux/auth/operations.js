import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data || error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");
  axios.defaults.headers.common.Authorization = "";
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    if (!token) return thunkAPI.rejectWithValue("No token.");

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      const { data } = await axios.get("/users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data || error.message);
    }
  }
);
