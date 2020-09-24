import * as TE from 'fp-ts/TaskEither';
import * as T from 'fp-ts/lib/Task';
import {pipe} from 'fp-ts/function';

async function someTask(num: number) {
    if (num > 8) {
        throw new Error('Danger');
    }

    return {status: 'ok'};
}

(async () => {
    const result = await pipe(
        TE.tryCatch(
            () => someTask(1),
            () => 'critical error'
        ),
        TE.map((resp) => resp.status),
        TE.getOrElse((res) => T.of(res))
    )();
})();
