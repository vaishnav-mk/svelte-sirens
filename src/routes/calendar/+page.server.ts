import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	throw redirect(
		301,
		'https://calendar.google.com/calendar/u/3?cid=c3ZlbHRlc2lyZW5zQGdtYWlsLmNvbQ'
	);
};