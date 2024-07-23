import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'project',
  initialState: {
    allProjects: [],
    filterValue: { name: 'Apartments', value: 'Apartment' },
    filteredGrid: [],
  },
  reducers: {
    setAllprojects: (state, action) => {
      state.allProjects = action.payload;
    },
    setFilterValue: (state, action) => {
      state.filterValue = action.payload;
    },
    setFilteredGrid: (state, action) => {
      state.filteredGrid = state.allProjects.filter(
        (proj) =>
          proj.attributes.building_type.data.attributes.type ===
          state.filterValue.value
      );
    },
  },
});

export const { setAllprojects, setFilterValue, setFilteredGrid } =
  filterSlice.actions;

export default filterSlice.reducer;
