import { Currency, Country } from './../../../../shared/const/common';
export interface Profile {
    first: string,
    last: string,
    age: string,
    currency: Currency,
    country: Country,
    city: string,
    username: string,
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    isError?: string;
    readonly: boolean
}