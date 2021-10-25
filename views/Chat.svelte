<script>
  // Svelte setup
  import Layout from './Layout.svelte';
</script>
  
<svelte:head>
  <!-- HTML Content to Insert Into Head -->
  <title>Chat</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.2.0/socket.io.min.js" integrity="sha512-2hIBfT6wur46uR5ayhmyICuA8s15BvJhagB+jZImgktQAy832P7EuY8njl1HGp4YS0Sk8DXRo9dByhvD3jfDxA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
  <script defer src="./JS/chat.js"></script>
  <link rel="stylesheet" href="./styles/chat.css">
</svelte:head>

<Layout>
  <section id="main-content">
    <section id="msg-container">
      <ul>
        <h1>Message History</h1>
      </ul>
    </section>
    <section id="input-container">
      <input type="text" id="input-msg" placeholder="Send A Message">
      <button id="input-btn">Send</button>
    </section>
  </section>
</Layout>