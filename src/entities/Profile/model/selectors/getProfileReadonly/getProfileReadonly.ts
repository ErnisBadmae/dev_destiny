import { StateSchema } from './../../../../../app/providers/StoreProvider/config/StateSchema';

export const getProfileReadonly= (state: StateSchema) => state?.profile?.readonly;
