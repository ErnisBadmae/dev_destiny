import { StateSchema } from './../../../../../app/providers/StoreProvider/config/StateSchema';

export const getProfileValidateErrors= (state: StateSchema) => state?.profile?.validateError
