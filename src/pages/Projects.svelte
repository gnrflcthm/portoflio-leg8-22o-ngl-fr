<script lang="ts">
    import SectionHeader from "../components/SectionHeader.svelte";
    import ProjectItem from "../components/ProjectItem.svelte";
    import data from "../../project-data.json";
    import viewport from "../actions/viewport";

    const projects: ProjectData[] = data as ProjectData[];

    let fadeIn = false;
</script>

<section
    class={`py-8 ${
        fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    } transition-all duration-700
    `}
    id="projects"
    use:viewport
    on:enterviewport|once={() => (fadeIn = true)}
>
    <SectionHeader title="Projects" size={"xl"} />
    <div class="relative">
        <div class="py-4 flex flex-row overflow-auto w-full">
            {#each projects as project}
                <ProjectItem {project} />
            {/each}
        </div>
    </div>
</section>
