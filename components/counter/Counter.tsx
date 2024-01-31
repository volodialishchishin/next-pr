"use client";

/* Core */
import { useState } from "react";

/* Instruments */
import {
  counterSlice,
  useSelector,
  useDispatch,
  selectCount,
  saveResultThunk
} from "@/lib/redux";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";


export const  Counter =  () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState(2);
  return (
    <div>
      <div className={"mb-5 flex justify-between items-center"}>
        <Button variant={"secondary"} size={"lg"}
          aria-label="Decrement value"
          onClick={() => dispatch(counterSlice.actions.decrement())}
        >
          -
        </Button>
        <Label>{count}</Label>
        <Button variant={"secondary"} size={"lg"}
          aria-label="Increment value"
          onClick={() => dispatch(counterSlice.actions.increment())}
        >
          +
        </Button>
      </div>
      <div className={"flex flex-col"}>
        <Input className={"mb-5"}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
        />
        <Button variant={"secondary"} size={"lg"}
          onClick={() =>
            dispatch(counterSlice.actions.incrementByAmount(incrementAmount))
          }
        >
          Add Amount
        </Button>

        <Button className={"mt-5"} variant={"secondary"} size={"lg"}
                onClick={() =>
                    dispatch(saveResultThunk({value:incrementAmount, userId:"hello"}))
                }
        >
          save
        </Button>
      </div>
    </div>
  );
};
