<script lang="ts">
    import SectionHeader from "../components/SectionHeader.svelte";
    import FaGithub from "svelte-icons/fa/FaGithub.svelte";
    import FaLinkedin from "svelte-icons/fa/FaLinkedin.svelte";
    import MdEmail from "svelte-icons/md/MdEmail.svelte";
    import viewport from "../actions/viewport";

    let fadeIn = false;
</script>

<section
    class={`px-10 md:px-24 py-8 flex flex-col space-y-4 ${
        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    } transition-all duration-700
    `}
    id="contact"
    use:viewport
    on:enterviewport|once={() => (fadeIn = true)}
>
    <SectionHeader title="Contact Me" size={"xl"} />
    <div class="relative space-y-4 px-4">
        <p class="text-light text-center md:text-start">
            You can reach me thru the following links:
        </p>
        <div class="relative">
            <div
                class="flex justify-evenly space-x-4 absolute blur-sm pointer-events-none w-full"
            >
                <span class="text-primary w-8"><FaGithub /></span>
                <span class="text-primary w-8"><FaLinkedin /></span>
                <span class="text-primary w-8"><MdEmail /></span>
            </div>
            <div class="flex justify-evenly space-x-4">
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/gnrflcthm"
                    class="text-primary w-8"><FaGithub /></a
                >
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/in/gian-rafael-thiam-a0237a221/"
                    class="text-primary w-8"><FaLinkedin /></a
                >
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:gianthiam126@gmail.com"
                    class="text-primary w-8"><MdEmail /></a
                >
            </div>
        </div>
    </div>
</section>
