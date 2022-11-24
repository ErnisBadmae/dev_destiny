import { StateSchema } from 'app/providers/StoreProvider';

export const getLoginIsError =(state: StateSchema) => state?.loginForm?.isError || ''