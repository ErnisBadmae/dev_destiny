import { CounterSchema } from 'entities/Counter';
import { getCounter } from './../getCounter/getCounter';
import { createSelector } from "@reduxjs/toolkit";

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value 
)