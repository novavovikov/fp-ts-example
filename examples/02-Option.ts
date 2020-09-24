import * as O from 'fp-ts/lib/Option';
import {pipe} from 'fp-ts/function';
import {log, getNameFromEmail, isValidEmail} from '../helpers';

const validateLength = (value: string) =>
    value.length > 3 ? O.some(value) : O.none;

const validateEmail = (value: string) => {
    console.log(222);
    return isValidEmail(value) ? O.some(value) : O.none;
};

const userName: string = pipe(
    O.of('joh@dsjak.ru'),
    O.chain(validateLength),
    O.chain(validateEmail),
    O.map(getNameFromEmail),
    O.fold(
        () => 'Unknown',
        (val) => val
    )
);

log(userName);
