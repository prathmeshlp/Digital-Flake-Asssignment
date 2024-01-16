import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = "http://localhost:3001";

export const createCategory = createAsyncThunk(
  "createCategory",
  async (data, { rejectWithValue }) => {
    try {
      console.log("data", data);
      const response = await axios.post(`${apiURL}/category/addcategories`, data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//read action
export const getCategories = createAsyncThunk(
  "getCategories",
  async (args, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${apiURL}/category/getcategories`);
      console.log(response,"response")
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
//delete action
export const deleteCategory = createAsyncThunk(
  "deleteCategory",
  async (id, { rejectWithValue }) => {
    console.log(id);
    try {
      const response = await axios.delete(`${apiURL}/category/getcategories/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateCategory = createAsyncThunk(
  "updateCategory",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${apiURL}/category/getcategories/${data._id}`, data);
      console.log(response.data, "updateresponse");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const categoryDetail = createSlice({
  name: "categoryDetail",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },

  // reducers: {
  //   searchUser: (state, action) => {
  //     console.log(action.payload);
  //     state.searchData = action.payload;
  //   },
  // },

  extraReducers: (builder) => {
    builder
      .addCase(
        createCategory.pending,

        (state) => {
          state.loading = true;
        }
      )
      .addCase(createCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.id) {
          state.categories = state.categories.filter(
            (ele) => ele._id !== action.payload.id
          );
        }
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.map((ele) =>
          ele._id === action.payload._id ? action.payload : ele
        );
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export default categoryDetail.reducer;
;
