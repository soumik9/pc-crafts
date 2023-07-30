import { IProduct } from '@/config/type';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast';

// Define a type for the slice state
const initialState: IProduct[] = [];

const authSlice = createSlice({
    name: 'pcBuild',
    initialState,
    reducers: {
        addToPCBuild: (state, action: PayloadAction<IProduct>) => {
            const productExists = state.some((product) => product.name === action.payload.name);
            if (productExists) {
                toast.error('This product is already in the PC Build.');
            } else {
                state.push(action.payload);
            }
        },
    }
})

export const { addToPCBuild } = authSlice.actions;
export default authSlice.reducer;