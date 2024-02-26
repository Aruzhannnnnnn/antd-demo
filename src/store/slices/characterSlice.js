import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCharacter = createAsyncThunk(
    '@@GetChar',
    async ({currentPage, search}) => {
        const json = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}&name=${search}`)
        const res = await json.json()
        return res.results
    },
  )

const initialState = {
  isLoading:false,
  data:[],
  error:false,
  searchText:''
}


export const characterSlice = createSlice({
  name: 'character',
  initialState,
  reducers: {
    setSearchText: (state, action) => {
        state.searchText = action.payload
      },
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchCharacter.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchCharacter.rejected, (state) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(fetchCharacter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.data = action.payload;
      });
  },
})

export const {setSearchText} = characterSlice.actions

export default characterSlice.reducer