import { IProduct } from '@/config/type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
const initialState: IProduct[] = [];

const authSlice = createSlice({
    name: 'pcBuild',
    initialState,
    reducers: {
        addToPCBuild: (state, action: PayloadAction<IProduct>) => {
            console.log(action);
            state.push(action.payload);
        },
    }
})

export const { addToPCBuild } = authSlice.actions;
export default authSlice.reducer;