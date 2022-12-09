<template>
  <div id="class">
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link rel="icon" href="<%= BASE_URL %>favicon.ico" />
      <title></title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900"
      />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css"
      />
      <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet" />
    </head>
    <div class="container">
      <header class="blog-header lh-1 py-3">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1"></div>
          <div class="col-4 text-center">
            <a class="blog-header-logo text-dark">My trip to Japan</a>
          </div>
          <div class="col-4 d-flex justify-content-end align-items-center">
            <audio
              src="../assets/music.mp3"
              controls="controls"
              autoplay="autoplay"
              id="aud"
            >
              <a href="../assets/music.mp3">download audio</a>
            </audio>
          </div>
        </div>
      </header>

      <div class="nav-scroller py-1 mb-2">
        <nav class="nav d-flex justify-content-between">
          <router-link to="/main"
            ><a class="p-2 link-secondary">Introduction</a></router-link
          >
          <router-link to="/day1"
            ><a class="p-2 link-secondary">day 1</a></router-link
          >
          <router-link to="/day2"
            ><a class="p-2 link-secondary">Day 2</a></router-link
          >
          <router-link to="/day3"
            ><a class="p-2 link-secondary">Day 3</a></router-link
          >
          <router-link to="/foodies"
            ><a class="p-2 link-secondary">Foodies</a></router-link
          >
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
#aud {
  text-align: right;
}
</style>