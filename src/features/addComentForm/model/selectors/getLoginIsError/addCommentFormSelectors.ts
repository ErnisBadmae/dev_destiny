import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormText =(state: StateSchema) => state?.addComentForm?.text ?? ''
export const getAddCommentFormIsError =(state: StateSchema) => state?.addComentForm?.isError
