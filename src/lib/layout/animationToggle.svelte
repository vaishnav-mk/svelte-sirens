<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	import { bubblesToggle } from '../stores/stores';
	let checked = true;
	let color = 'var(--blue)';
	let label = null;

	$: dispatch('check', checked);

	$: handleCheck = () => {
		const bubbles = document.getElementById('bubbles');
		if (!checked) {
			bubbles.style.display = 'none';
			bubblesToggle.set('off');
		} else {
			bubbles.style.display = 'block';
			bubblesToggle.set('on');
		}
	};

	export { checked, color, label };
</script>

<div>
	<label class="switch">
		<input type="checkbox" bind:checked on:change={handleCheck} {color} />
		<span class="slider" />
		<span class="text">{label}</span>
	</label>
</div>

<style lang="scss">
	div {
		margin-left: auto;
		position: absolute;
		left: 50%;
		transform: translate(-50%, 0);
		height: 100px;
		width: 125px;
	}
	.switch {
		box-sizing: border-box;
		position: absolute;
		width: 50px;
		height: 25px;
		left: 25px;
		top: 25px;
		border-radius: 50px;

		&:focus-within {
			outline: 2px solid var(--blue);
		}
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.text {
		position: absolute;
		left: -25px;
		top: 25px;
		width: 125px;
	}

	.slider {
		box-shadow: 0px -2px 20px rgba(33, 50, 84, 0.8) inset;
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--teal);
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 34px;
	}

	// circle indicator
	.slider:before {
		box-shadow: 0 4px 8px rgba(33, 50, 84, 0.3);
		position: absolute;
		content: '';
		height: 14px;
		width: 14px;
		left: 5px;
		bottom: 5px;
		background-color: var(--silver);
		-webkit-transition: 0.4s;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .slider {
		background-color: var(--navy);
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(26px);
		-ms-transform: translateX(26px);
		transform: translateX(26px);
		background-color: var(--blue);
	}

	@media (min-width: 1024px) {
		.text {
			left: -30px;
		}
		div {
			position: relative;
			left: -1rem;
			transform: none;
		}
	}
</style>
