export const log = (message: any, isError?: boolean) =>
    console.log(
        `%c${message}`,
        `color: ${isError ? 'red' : 'green'}; font-size: 14px`
    );
