import execa from 'execa';
import test from 'ava';

test(async t => {
	t.truthy(await execa.stdout('./cli.js'));
});
