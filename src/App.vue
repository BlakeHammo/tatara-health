<template>
  <div class="page-container"> <!-- Flexbox container -->
    <NavBar @navigate="changePage" />
    
    <div class="content-wrapper"> <!-- Main content wrapper -->
      <main>
        <HomePage v-if="currentPage === 'home'" />
        <AboutPage v-if="currentPage === 'about'" />
        <BookingPage v-if="currentPage === 'booking'" />
        <ContactPage v-if="currentPage === 'contact'" />
        <FAQPage v-if="currentPage === 'FAQ'" />
      </main>
    </div>
    
    <Footer /> <!-- Footer remains at the bottom -->
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import BookingPage from './components/BookingPage.vue'
import ContactPage from './components/ContactPage.vue'
import FAQPage from './components/FAQPage.vue'

import { ref } from 'vue'

const currentPage = ref('home') // Set default page to home

// Function to change current page
const changePage = (page) => {
  currentPage.value = page
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Optional: adds smooth scrolling
  });
}
</script>

<style scoped>
/* Ensure the page takes up the full height and the footer stays at the bottom */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the page container fills the entire viewport height */
}

/* This content wrapper expands to take up all the available space between the navbar and footer */
.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
}

/* Footer styles to make it stick to the bottom */
footer {
  background-color: #f8f9fa; /* Customize your footer background color */
  padding: 20px;
  text-align: center;
  margin-top: auto; /* Pushes the footer to the bottom of the container */
}

/* Header and general page styles */
header {
  padding: 20px;
  text-align: center;
}

main {
  padding: 20px;
  flex-grow: 1; /* Ensures the main content expands to fill available space */
}

body {
  margin-top: 60px; /* Prevents content from being hidden behind the navbar */
}
</style>
