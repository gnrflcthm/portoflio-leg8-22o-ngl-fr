<script lang="ts">
    import showNav from '../../store/showNav'
    import NavLink from './NavLink.svelte';
    import MdClose from 'svelte-icons/md/MdClose.svelte'

    function hideNav() {
        showNav.set(false);
    }

    function scrollTo(sectionId: string) {
        showNav.set(false);
        const a = document.getElementById(sectionId);
        window.scrollTo({
            top: a.offsetTop - 48,
            behavior: "smooth"
        })
    }

</script>

<div class={`flex flex-col justify-start items-stretch text-light fixed h-screen w-screen top-0 ${$showNav ? "left-0" : "left-[-100vw]"} py-6 z-20 bg-dark bg-opacity-50 backdrop-blur-[1rem] transition-all duration-700`}>
    <NavLink name="Home" onClick={() => scrollTo("home")} />
    <NavLink name="About" onClick={() => scrollTo("about")} />
    <NavLink name="Projects" onClick={() => scrollTo("projects")} />
    <NavLink name="Contact" onClick={() => scrollTo("contact")} />
    <button class="w-8 flex self-center" on:click={hideNav}>
        <MdClose />
    </button>
</div>