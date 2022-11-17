<script lang="ts">
    import TechTab from "../components/TechTab.svelte";
import SectionHeader from "../components/SectionHeader.svelte";
</script>

<section class="px-10 py-8 flex flex-col justify-start align-stretch space-y-4" id="about">
    <SectionHeader title="About Me" />
    <div class="relative space-y-2">
        <p class="px-4 text-light">
            I am a web-developer looking to gain experience from actual projects and working with teams.
        </p>
        <p class="px-4 text-light">
            I like learning and working with new technologies which I can use for my future projects.
        </p>
    </div>
    <div class="relative mt-4">
        <SectionHeader title="Technologies And Frameworks" size="md" />
        <div class="flex py-4 overflow-auto flex-wrap justify-start">
            <TechTab name="React" bgColor="bg-[#5ED3F3]" />
            <TechTab name="NextJS" bgColor="bg-[#D2D7D9]" />
            <TechTab name="Firebase" bgColor="bg-[#FFCB2B]" />
            <TechTab name="MongoDB" bgColor="bg-[#52A74B]" />
            <TechTab name="Svelte" bgColor="bg-[#F73C00]" textColor="text-light" />
            <TechTab name="MySQL" bgColor="bg-[#005E86]" textColor="text-[#E48E00]" />
        </div>
    </div>
</section>