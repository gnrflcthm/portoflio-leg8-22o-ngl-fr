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
    })

</script>

<Navbar />
<NavMenu />
<Landing />
<About />
<Projects />
<Contact />
