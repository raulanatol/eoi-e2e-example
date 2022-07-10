export const getFormData = <T extends any = {}>(form: HTMLFormElement): T =>
  (Object.fromEntries(new FormData(form).entries()) as T);
