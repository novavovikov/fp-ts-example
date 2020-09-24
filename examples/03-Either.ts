import * as E from 'fp-ts/Either';
import {pipe} from 'fp-ts/function';
import {log, isValidEmail} from '../helpers';

const validateLength = (value: string) =>
    value.length > 3 ? E.right(value) : E.left('The string is too short');

const validateEmail = (value: string) =>
    isValidEmail(value) ? E.right(value) : E.left('This is not an email');

pipe(
    E.right('john@doe.com'),
    E.chain(validateLength),
    E.chain(validateEmail),
    E.fold(
        (error: string) => log(`${error}`, true),
        (value: string) => log(`${value} is valid`)
    )
);
