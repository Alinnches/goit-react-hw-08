import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://681d010cf74de1d219ae833a.mockapi.io/contacts";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchConatcts",
  async (_, { isRejectedWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}`);
      return response.data;
    } catch (error) {
      return isRejectedWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, { isRejectedWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}`, newContact);
      return response.data;
    } catch (error) {
      return isRejectedWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { isRejectedWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/${contactId}`);
      return contactId;
    } catch (error) {
      return isRejectedWithValue(error.message);
    }
  }
);
