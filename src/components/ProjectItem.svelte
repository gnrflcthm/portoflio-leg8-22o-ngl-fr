<script lang="ts">
    export let project: ProjectData;
    const {href, imageSrc, title, description} = project;
</script>

<a href={href} target="_blank" rel="noreferrer" class="block text-center rounded-md bg-light bg-opacity-10 backdrop-blur-sm overflow-hidden w-52 mx-2 relative flex-shrink-0">
    <div class="object-scale-down mb-2">
        <img src={imageSrc} alt={title} />
    </div>
    <h2 class="text-center text-light font-bold my-2">
        {title}
    </h2>
    <p class="my-2 text-light text-opacity-80">
        {description}
    </p>
</a>