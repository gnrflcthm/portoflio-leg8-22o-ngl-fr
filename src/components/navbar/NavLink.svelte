<script lang="ts">
    export let name: string;
    export let onClick: Function = () => {};
</script>

<button class="py-4 relative font-bold group" on:click={() => onClick()}>
    <span class="absolute text-primary group-hover:blur-sm z-0 transition-all">{name}</span>
    <span class="text-light relative z- group-hover:text-primary">{name}</span>
</button>
