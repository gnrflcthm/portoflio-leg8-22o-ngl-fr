<script lang="ts">
    export let title: string = "";
    export let size:  string = "lg";
</script>

<div class="relative">
    <h1 class={`font-bold text-${size} absolute w-full text-center text-primary blur-sm`}>{title}</h1>
    <h1 class={`font-bold text-${size} text-center md:text-start text-primary`}>{title}</h1>
</div>
