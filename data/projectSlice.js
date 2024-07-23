import { createSlice } from '@reduxjs/toolkit';

export const projectSlice = createSlice({
  name: 'project',
  initialState: {
    projectImages: [],
    modalOpen: false,
    imageId: null,
    imageIndex: null,
    mapPins: [],
    mapOpen: false,
    mobileMenuOpen: false,
  },
  reducers: {
    setProjectImages: (state, action) => {
      state.projectImages = [...state.projectImages, action.payload];
    },
    setModal: (state, action) => {
      state.modalOpen = !state.modalOpen;
      state.imageId = action.payload;
      state.imageIndex = state.projectImages
        .map((img) => img.id)
        .indexOf(state.imageId);
    },
    setImageIndex: (state, action) => {
      state.imageIndex = action.payload;
    },
    setIndexForward: (state) => {
      state.imageIndex = state.imageIndex + 1;
    },
    setIndexBackwards: (state) => {
      state.imageIndex = state.imageIndex - 1;
    },
    setMapPins: (state, action) => {
      state.mapPins = action.payload;
    },
    setMapOpen: (state) => {
      state.mapOpen = true;
    },
    setMapClose: (state) => {
      state.mapOpen = false;
    },
    setMobileMenuOpen: (state) => {
      state.mobileMenuOpen = true;
    },
    setMobileMenuClose: (state) => {
      state.mobileMenuOpen = false;
    },
  },
});

export const {
  setProject,
  setProjectImages,
  setModal,
  setImageIndex,
  setIndexForward,
  setIndexBackwards,
  setMapPins,
  setMapClose,
  setMapOpen,
  setMobileMenuOpen,
  setMobileMenuClose,
} = projectSlice.actions;

export default projectSlice.reducer;
