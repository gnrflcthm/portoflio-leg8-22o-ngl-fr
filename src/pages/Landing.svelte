<script lang="ts">
    import viewPort from '../actions/viewport';
    import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte'
    import FaGithub from 'svelte-icons/fa/FaGithub.svelte'
</script>

<main
    class="relative z-0 min-h-screen flex justify-center items-center flex-col"
    use:viewPort
    on:enterviewport|once={() => console.log("Entered Viewport")}
    id="home"
>
    <div class="relative mb-2">
        <h1
            class="text-light font-medium text-center text-xl absolute pb-0.5 pr-0.5 text-transparent pointer-events-none z-1"
        >
            Hi, I am <span class="text-primary font-bold blur-sm uppercase">Gian Thiam</span
            >
            <p>and I make things work.</p>
        </h1>
        <h1 class="text-light font-medium text-center text-xl relative z-2">
            Hi, I am <span class="text-primary font-bold uppercase">Gian Thiam</span>
            <p>and I make things work.</p>
        </h1>
    </div>
    <div class=" relative">
        <div class="flex justify-between space-x-4 absolute blur-sm pointer-events-none">
            <span class="text-primary w-8"><FaGithub /></span>
            <span class="text-primary w-8"><FaLinkedin /></span>
        </div>
        <div class="flex justify-between space-x-4">
            <a target="_blank" rel="noreferrer" href="https://github.com/gnrflcthm" class="text-primary w-8"><FaGithub /></a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/gian-rafael-thiam-a0237a221/" class="text-primary w-8"><FaLinkedin /></a>
        </div>
    </div>
</main>
