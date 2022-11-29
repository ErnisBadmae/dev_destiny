import { StateSchema } from './../../../../../app/providers/StoreProvider/config/StateSchema';

export const getProfileFirstName = (state: StateSchema) => state?.profile?.data?.first || '';
