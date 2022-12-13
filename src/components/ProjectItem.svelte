<script lang="ts">
    export let project: ProjectData;
    const {href, imageSrc, title, description} = project;
</script>

<a href={href} target="_blank" rel="noreferrer" class="block text-center bg-light bg-opacity-10 backdrop-blur-sm rounded-md overflow-hidden w-52 mx-2 flex-shrink-0 group relative hover:scale-[1.07] transition-all">
    <div class="object-scale-down mb-2 relative z-4">
        <img src={imageSrc} alt={title} />
    </div>
    <h2 class="text-center text-light font-bold my-2 relative z-4">
        {title}
    </h2>
    <p class="my-2 text-light text-opacity-80 relative z-4 p-2 max-h-[10rem] overflow-auto">
        {description}
    </p>
</a>