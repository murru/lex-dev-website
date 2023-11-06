<template>

  <!-- Sidebar with image -->
  <nav class="w3-sidebar w3-hide-medium w3-hide-small" style="width:40%">
    <div class="bgimg"></div>
  </nav>

  <!-- Hidden Sidebar (reveals when clicked on menu icon)-->
  <WebSidebar />

  <!-- Page Content -->
  <div class="w3-main w3-padding-large" style="margin-left:40%">

    <!-- Menu icon to open sidebar -->
    <span
      class="w3-button w3-top w3-white w3-xxlarge w3-text-grey w3-hover-text-black nav-btn"
      @click="toggleSidebar"
    >
      <i class="fa-solid fa-bars"></i>
    </span>

    <!-- Header -->
    <header class="w3-container w3-center header" id="home">
      <h1 class="responsive-title"><b>MurruDev</b></h1>
      <p>Software Crafting Studio</p>

      <!-- Alex's images -->
      <img src="~/assets/img/profile_girl.jpg" class="w3-image w3-hide-large w3-hide-small w3-round" style="display:block;width:60%;margin:auto;">
      <img src="~/assets/img/profile_girl.jpg" class="w3-image w3-hide-large w3-hide-medium w3-round" width="1000" height="1333">

      <!-- Profiles Section -->
      <div class="w3-content w3-justify w3-text-grey w3-padding-32 profiles-wrapper">
        <!-- Go to linked in profile -->
        <a
          href="https://www.linkedin.com/in/murrugarra/"
          target="_blank"
          class="w3-button w3-padding-large w3-margin-top w3-text-white btn"
          style="background-color: #0A65C2;"
        >
          <i class="fa-brands fa-linkedin-in"></i>
          <span class="responsive-btn-text">Linked in</span>
        </a>

        <!-- Go to git hub profile -->
        <a
          href="https://github.com/murru-dev"
          target="_blank"
          class="w3-button w3-padding-large w3-margin-top w3-text-white btn"
          style="background-color: black;"
        >
          <i class="fa-brands fa-github"></i>
          <span class="responsive-btn-text">Git Hub</span>
        </a>

        <!-- Go to fiverr profile -->
        <a
          href="https://www.fiverr.com/murrugarra"
          target="_blank"
          class="w3-button w3-padding-large w3-margin-top w3-text-white btn"
          style="background-color: #1DBF73;"
        >
          <i class="fa-brands fa-dev"></i>
          <span class="responsive-btn-text">Fiverr</span>
        </a>
      </div>
    </header>

    <!-- About Section -->
    <div class="w3-content w3-justify w3-text-grey w3-padding-32" id="about">
      <h2>About MurruDev</h2>
      <hr class="w3-opacity">
      <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    <!-- End About Section -->
    </div>

    <!-- Stats Section -->
    <div class="w3-content w3-justify w3-text-grey w3-padding-32" id="stats">
      <h2>My Stats</h2>
      <hr class="w3-opacity">
      <div class="w3-row w3-center w3-dark-grey w3-padding-16 w3-section">
        <div class="w3-quarter w3-section">
          <span class="w3-xlarge">55</span><br>
          Happy Clients
        </div>
        <div class="w3-quarter w3-section">
          <span class="w3-xlarge">89</span><br>
          Demos
        </div>
        <div class="w3-quarter w3-section">
          <span class="w3-xlarge">14</span><br>
          Tutorials
        </div>
        <div class="w3-quarter w3-section">
          <span class="w3-xlarge">150</span><br>
          Bootcamps
        </div>
      </div>
    </div>

    <!-- Testimonals Section -->
    <div class="w3-content w3-justify w3-text-grey w3-padding-32" id="reputation">
      <h2>My Reputation</h2>
      <hr class="w3-opacity">
      <img src="~/assets/img/avatar_smoke.jpg" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:80px">
      <p><span class="w3-large w3-text-black w3-margin-right">Chandler Bing.</span> Web Designer.</p>
      <p>Jane Doe is just awesome. I am so happy to have met her!</p><br>
    
      <img src="~/assets/img/bandmember.jpg" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:80px">
      <p><span class="w3-large w3-text-black w3-margin-right">Chris Fox.</span> CEO at Mighty Schools.</p>
      <p>Jane Doe saved us from a web disaster.</p><br>
      
      <img src="~/assets/img/avatar_g2.jpg" alt="Avatar" class="w3-left w3-circle w3-margin-right" style="width:80px">
      <p><span class="w3-large w3-text-black w3-margin-right">Rebecca Flex.</span> CEO at Company.</p>
      <p>No one is better than Jane Doe.</p><br>
    </div>

    <!-- Demos Section -->
    <div class="w3-padding-32 w3-content" id="demos">
      <h2 class="w3-text-grey">My Demos</h2>
      <hr class="w3-opacity">
    <!-- End Demos Section -->
    </div>

    <!-- Portfolio Section -->
    <div class="w3-padding-32 w3-content" id="portfolio">
      <h2 class="w3-text-grey">My Portfolio</h2>
      <hr class="w3-opacity">
    <!-- End Portfolio Section -->
    </div>
    
    <!-- Footer -->
    <footer class="w3-container w3-padding-64 w3-light-grey w3-center w3-opacity w3-xlarge footer">
      <p class="w3-medium">Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" class="w3-hover-text-green">w3.css</a></p>
    <!-- End footer -->
    </footer>
    
  <!-- END PAGE CONTENT -->
  </div>
</template>
<script setup lang="ts">
const { toggleSidebar } = useSidebar()
</script>
<style>
body, h1,h2,h3,h4,h5,h6 {
  font-family: "Montserrat", sans-serif
}

.w3-row-padding img {
  margin-bottom: 12px
}

.bgimg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('~/assets/img/profile_girl.jpg');
  min-height: 100%;
}

.nav-btn {
  right: 0;
  width: auto;
}

.header {
  /* padding: 128px 16px; */
  padding: 30px 16px;
}

.responsive-title {
  font-size: 55px;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
}

.responsive-btn-text {
  display: none;
}

.profiles-wrapper {
  display: flex;
  justify-content: center;
}

.profiles-wrapper > * { flex: 1; }

.footer {
  margin:-24px;
}

@media (min-width: 768px) {
  .responsive-title {
    font-size: 64px;
  }

  .responsive-btn-text {
    display: block;
  }
}
</style>
