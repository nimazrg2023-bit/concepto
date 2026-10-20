import { createSlice } from '@reduxjs/toolkit';
import { companiesData } from '../data/companies';

const initialState = {
  allCompanies: companiesData,
  filteredCompanies: companiesData,
  searchQuery: '',
  selectedIndustries: [], // فیلتر صنعت
  maxEmployees: 5000, // اسلایدر تعداد کارمندان
  onlyPrivate: false, // سوییچ شرکت‌های خصوصی
  sortBy: 'popular', // محبوب‌ترین، جدیدترین، برترین
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      applyFilters(state);
    },
    toggleIndustry: (state, action) => {
      const industry = action.payload;
      if (state.selectedIndustries.includes(industry)) {
        state.selectedIndustries = state.selectedIndustries.filter(i => i !== industry);
      } else {
        state.selectedIndustries.push(industry);
      }
      applyFilters(state);
    },
    setMaxEmployees: (state, action) => {
      state.maxEmployees = action.payload;
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
      state.searchQuery = '';
      state.selectedIndustries = [];
      state.maxEmployees = 5000;
      state.onlyPrivate = false;
      state.sortBy = 'popular';
      applyFilters(state);
    }
  },
});

// تابع کمکی برای اعمال همه فیلترها
const applyFilters = (state) => {
  let result = state.allCompanies;

  // ۱. فیلتر بر اساس سرچ (کلمات کلیدی)
  if (state.searchQuery) {
    result = result.filter(company => 
      company.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      company.industry.toLowerCase().includes(state.searchQuery.toLowerCase())
    );
  }

  // ۲. فیلتر بر اساس صنعت
  if (state.selectedIndustries.length > 0) {
    result = result.filter(company => 
      state.selectedIndustries.some(ind => company.industry.includes(ind))
    );
  }

  // ۳. فیلتر بر اساس تعداد کارمندان
  result = result.filter(company => company.employees <= state.maxEmployees);

  // ۴. فیلتر شرکت‌های خصوصی
  if (state.onlyPrivate) {
    result = result.filter(company => company.isPrivate === true);
  }

  // ۵. مرتب‌سازی (الکی هندل شده)
  if (state.sortBy === 'newest') {
    // فرض میکنیم آیدی بالاتر یعنی جدیدتر
    result = [...result].sort((a, b) => b.id - a.id);
  } else if (state.sortBy === 'top') {
    // فرض میکنیم تعداد کارمندان بیشتر یعنی برتر
    result = [...result].sort((a, b) => b.employees - a.employees);
  } else {
    // محبوب‌ترین (پیش‌فرض)
    result = [...result].sort((a, b) => a.id - b.id);
  }

  state.filteredCompanies = result;
};

export const { 
  setSearchQuery, 
  toggleIndustry, 
  setMaxEmployees, 
  toggleOnlyPrivate, 
  setSortBy,
  clearFilters
} = searchSlice.actions;

export default searchSlice.reducer;