<script>
    import Nav from './Nav.svelte';
</script>

<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="nestjs app with svelte templates" />
        %head%
    </head>
    <body>  
        <header>
            <Nav />
        </header>
        <main>
            <slot />
        </main>
    </body>
</html>

<style>
    :global(body) {
        background-color: grey;
        color: white;
        margin: 0;
        padding: 0;
    }

    header {
        position: absolute;
        z-index: 20;
        width: 100%;
        text-align: center;
    }

    main {
        position: absolute;
        z-index: 10;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
    }
</style>