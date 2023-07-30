import { IProduct } from '@/config/type';
import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
interface IPcBuild {
    category: string | undefined;
    product: IProduct | undefined;
}

const initialState: IPcBuild[] = [];

const authSlice = createSlice({
    name: 'pcBuild',
    initialState,
    reducers: {

    }
})

export const { } = authSlice.actions;
export default authSlice.reducer;