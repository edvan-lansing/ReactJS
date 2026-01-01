import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nome: '',
  dataNascimento: '',
  cpf: '',
  apelido: '',
  genero: '',
  email: '',
  telefone: '',
  estado: '',
  pais: ''
};

export const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    setField: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetRegister: () => initialState,
  },
});

export const { setField, resetRegister } = registerSlice.actions;
export default registerSlice.reducer;
