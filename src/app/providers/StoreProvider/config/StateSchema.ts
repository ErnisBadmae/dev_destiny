import { LoginSchema } from 'features/AuthByUsername';
import { UserSchema } from 'entities/User';
import { CounterSchema } from 'entities/Counter';

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    loginForm?: LoginSchema
}