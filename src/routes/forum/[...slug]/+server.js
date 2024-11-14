export const prerender = false;

const myOptions = { status: 400, statusText: 'SuperSmashingGreat!' };

export async function POST({ request, fetch, url }) {
	return new Response(null, myOptions);
}

export async function PUT({ request, fetch, url }) {
	return new Response(null, myOptions);
}
