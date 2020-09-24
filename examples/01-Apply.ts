import * as O from 'fp-ts/lib/Option';
import {pipe} from 'fp-ts/function';
import {log} from '../helpers';

interface UserData {
    name: string;
    surname: string;
    isAdmin: boolean;
}

const getUserData = ([name, surname]: string[]) => (
    isAdmin: boolean
): UserData => ({
    name,
    surname,
    isAdmin
});

const getUserInfo = (username: string) =>
    pipe(
        O.fromNullable(username),
        O.map((username) => username.split(' ').splice(0, 2))
    );

const getUserRole = (role: 'admin' | 'member') => role === 'admin';

const userName = pipe(
    O.of(getUserData),
    // apply the first argument
    O.ap(getUserInfo('John Doe')),
    // apply the second argument
    O.ap(getUserRole('admin')),
    O.fold(
        () => 'Unknown',
        ({name, surname}) => `Hello, ${name} ${surname}`
    )
);

log(userName);
