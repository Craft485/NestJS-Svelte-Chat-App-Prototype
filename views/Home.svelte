<script>
    // Setup Svelte
    import Layout from './Layout.svelte';
    export let titleCard;
</script>

<svelte:head>
    <!-- Head Content -->
    <title>Home</title>
</svelte:head>

<Layout>
    <h1>{ titleCard }</h1>
</Layout>