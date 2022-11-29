import { StateSchema } from '../../../../../app/providers/StoreProvider/config/StateSchema';

export const getProfileData = (state: StateSchema) => state?.profile?.data;
