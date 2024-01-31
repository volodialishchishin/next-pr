/* Core */
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

/* Instruments */
import {getResults, saveResultThunk} from "./thunks";

const initialState: CounterSliceState = {
    value: 0,
    status: "idle",
};

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveResultThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(saveResultThunk.fulfilled, (state, action) => {
                state.status = "idle";
            })
    },
});

/* Types */
export interface CounterSliceState {
    value: number;
    status: "idle" | "loading" | "failed";
}
