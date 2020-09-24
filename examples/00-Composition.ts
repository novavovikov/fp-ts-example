import {pipe} from 'fp-ts/function';
import {log, getNameFromEmail} from '../helpers';

const capitalize = (text: string) => text.toUpperCase();
const addRoleOfUser = (role: string) => (name: string) => `${name} - ${role}`;

const userName = pipe(
    'john@doe.com',
    getNameFromEmail,
    capitalize,
    addRoleOfUser('Developer')
);

log(userName);
