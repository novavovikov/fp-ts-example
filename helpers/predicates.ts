export const isValidEmail = (email: string) =>
    /(.+)@(.+)\.(.+){2,}/.test(email);
