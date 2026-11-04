import { createSlice } from '@reduxjs/toolkit';
import { companiesData } from '../../core/constant';

const initialState = {
  allCompanies: companiesData,
  filteredCompanies: companiesData,
  keyword: '',
  companyType: '',
  location: '',
  industry: '',
  similarSearch: '',
  technology: '',
  employeeRange: { min: 0, max: 5000 },
  onlyPrivate: false,
  sortBy: 'popular',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
      applyFilters(state);
    },
    setEmployeeRange: (state, action) => {
      state.employeeRange = action.payload;
      applyFilters(state);
    },
    toggleOnlyPrivate: (state) => {
      state.onlyPrivate = !state.onlyPrivate;
      applyFilters(state);
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
      applyFilters(state);
    },
    clearFilters: (state) => {
      state.keyword = '';
      state.companyType = '';
      state.location = '';
      state.industry = '';
      state.similarSearch = '';
      state.technology = '';
      state.employeeRange = { min: 0, max: 5000 };
      state.onlyPrivate = false;
      state.sortBy = 'popular';
      state.filteredCompanies = state.allCompanies;
    }
  },
});

const applyFilters = (state) => {
  let result = state.allCompanies;

  if (state.keyword) {
    result = result.filter(c => c.name.toLowerCase().includes(state.keyword.toLowerCase()) || c.description.toLowerCase().includes(state.keyword.toLowerCase()));
  }
  if (state.companyType) {
    result = result.filter(c => c.isPrivate.toString().includes(state.companyType.toLowerCase()));
  }
  if (state.location) {
    result = result.filter(c => c.location.toLowerCase().includes(state.location.toLowerCase()));
  }
  if (state.industry) {
    result = result.filter(c => c.industry.toLowerCase().includes(state.industry.toLowerCase()));
  }
  if (state.similarSearch) {
    result = result.filter(c => c.name.toLowerCase().includes(state.similarSearch.toLowerCase()));
  }
  if (state.technology) {
    result = result.filter(c => c.industry.toLowerCase().includes(state.technology.toLowerCase()));
  }

  result = result.filter(c => c.employees >= state.employeeRange.min && c.employees <= state.employeeRange.max);

  if (state.onlyPrivate) {
    result = result.filter(c => c.isPrivate === true);
  }

  if (state.sortBy === 'newest') {
    result = [...result].sort((a, b) => b.id - a.id);
  } else if (state.sortBy === 'top') {
    result = [...result].sort((a, b) => b.employees - a.employees);
  }

  state.filteredCompanies = result;
};

export const { setFilter, setEmployeeRange, toggleOnlyPrivate, setSortBy, clearFilters } = searchSlice.actions;
export default searchSlice.reducer;