declare namespace svelte.JSX {
    interface HTMLAttributes<T> {
        // If you want to use on:beforeinstallprompt
        onenterviewport: (event: any) => any;
        onexitviewport: (event: any) => any;
        // If you want to use myCustomAttribute={..} (note: all lowercase)
        mycustomattribute?: any;
        // You can replace any with something more specific if you like
    }
}

declare type ProjectData = {
    href: string;
    imageSrc: string;
    title: string;
    description: string;
}