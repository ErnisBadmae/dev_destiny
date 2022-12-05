import { StateSchema } from './../../../../../app/providers/StoreProvider/config/StateSchema';

export const getProfileLoading= (state: StateSchema) => state?.profile?.isLoading;
