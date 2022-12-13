<script lang="ts">
    import Navbar from "./components/navbar/Navbar.svelte";
    import NavMenu from "./components/navbar/NavMenu.svelte";
    import About from "./pages/About.svelte";
    import Contact from "./pages/Contact.svelte";
    import Landing from "./pages/Landing.svelte";
    import Projects from "./pages/Projects.svelte";
    import showNav from "./store/showNav";

    showNav.subscribe((isVisible: boolean) => {
        const root = document.getElementsByTagName("html")[0];
        root.style.overflow = isVisible ? "hidden" : "auto";
    });

    const hideNav = () => showNav.set(false);
</script>

<Navbar />
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class={`bg-black fixed top-0 left-0 h-screen w-screen z-20 ${$showNav ? "opacity-70 pointer-events-auto" : "opacity-0 pointer-events-none"} transition-all duration-300`} on:click={hideNav} />
<div class="w-[95%] sm:w-[85%] xl:w-[70%] m-auto">
    <NavMenu />
    <Landing />
    <About />
    <Projects />
    <Contact />
</div>
