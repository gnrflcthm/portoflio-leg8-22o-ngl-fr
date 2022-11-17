<script lang="ts">
    import SectionHeader from "../components/SectionHeader.svelte";
    import ProjectItem from "../components/ProjectItem.svelte";
    import data from "../../project-data.json";
    
    const projects: ProjectData[] = data as ProjectData[];
</script>

<section class="px-10 py-8" id="projects">
    <SectionHeader title="Projects" />
    <div class="relative">
        <div class="py-4 flex flex-row overflow-auto w-full">
            {#each projects as project}
                <ProjectItem 
                    project={project}
                />
            {/each}
        </div>
    </div>
</section>