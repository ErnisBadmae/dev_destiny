import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

export interface Profile {
    first?: string,
    last?: string,
    age?: number,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading: boolean;
    isError?: string;
    readonly: boolean
}