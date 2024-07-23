import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: null,
    form: {
      open: false,
      formAction: null,
      productId: null
    },
  },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
    showForm(state, action) {
      state.form.open = action.payload.open;
      state.form.formAction = action.payload.formAction;
      state.form.productId = action.payload.productId;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
