<script lang="ts">
	import type { Event, Speaker } from '$data/data.d';
	import { dateSort } from '$data/utils/time';

	export let events: Event[];

	interface Item {
		url: string;
		title: string;
		people: Speaker[];
		date: number;
	}

	let items: Item[];

	$: items = dateSort([
		//prettier-ignore
		...events.slice(0,3).map(event => ({ title: event.title, url: `/latest/${event.slug}`, people: event.speakers, date: event.date }))
	]);
</script>

<section>
	{#each items as { title, url, people }}
		{#each people as guest}
			<a href={url} class="glass">
				<article class="grid">
					<h3>{title}</h3>
					<figure>
						<img src={guest.picture} alt={title} />
						<figcaption>{guest.name}</figcaption>
					</figure>
				</article>
			</a>
		{/each}
	{/each}
</section>

<style lang="scss">
	section {
		margin: 0 auto;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: var(--size-8);
	}
	.glass {
		width: 30ch;
		padding: var(--size-4);
		margin: var(--size-2);
		border-bottom: none;
		transition: var(--transition-colors);
		flex-shrink: 0;
		border: 1px solid transparent;

		&:hover {
			border: 1px solid var(--aqua);
		}
	}

	article {
		display: grid;
		justify-items: center;
		align-items: space-between;
		gap: var(--size-4);
		height: 100%;
		align-content: space-between;
	}

	img {
		border-radius: 100%;
		width: 250px;
		height: 250px;
	}

	figure {
		display: grid;
		gap: var(--size-2);
	}

	@media (min-width: 800px) {
		section {
			flex-wrap: nowrap;
			padding: var(--size-8) var(--size-8) var(--size-4) var(--size-4);
			justify-content: start;
		}

		.glass {
			margin: 0;
			width: 30ch;
		}
	}
</style>
