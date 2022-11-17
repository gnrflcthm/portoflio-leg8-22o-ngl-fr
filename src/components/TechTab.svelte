<script lang="ts">
    export let name: string = "";
    export let bgColor: string = "";
    export let textColor: string = "";
</script>

<div class="mx-2 my-2 relative group">
    <span class={`absolute w-full h-full rounded-full z-0 ${bgColor} group-hover:blur-sm transition-all`} />
    <span class={`relative rounded-full font-bold px-4 py-1 z-1 ${bgColor} ${textColor}`}>{name}</span>
</div>
