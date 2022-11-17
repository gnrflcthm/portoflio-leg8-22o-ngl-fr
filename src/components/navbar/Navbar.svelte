<script lang="ts">
    import MdSort from 'svelte-icons/md/MdSort.svelte'

    import navStore from '../../store/showNav';

    function onNavClick() {
        navStore.update((val) => !val);
    }

</script>

<nav class="flex justify-between align-center fixed top-0 px-4 py-2 z-10 w-full bg-light backdrop-blur-sm bg-opacity-5">
    <button class="text-light w-10 text-opacity-50 cursor-pointer relative hover:text-primary z-2 peer transition-all" on:click={onNavClick}><MdSort /></button>
    <button class="text-light w-10 absolute blur-md z-1 pointer-events-none peer-hover:text-primary transition-all" on:click={onNavClick}><MdSort /></button>
</nav>
