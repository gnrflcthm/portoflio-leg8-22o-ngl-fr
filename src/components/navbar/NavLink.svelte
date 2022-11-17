<script lang="ts">
    export let name: string;
    export let onClick: Function = () => {};
</script>

<button class="py-4 relative font-bold" on:click={() => onClick()}>{name}</button>
