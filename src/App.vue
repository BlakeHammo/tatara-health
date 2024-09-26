<template>
  <div class="page-container"> <!-- New container for flexbox layout -->
    <NavBar @navigate="changePage"/>
    <div class="content-wrapper"> <!-- Wrapper for the content -->
      <main>
        <HomePage v-if="currentPage === 'home'" />
        <AboutPage v-if="currentPage === 'about'" />
        <BookingPage v-if="currentPage === 'booking'" />
        <ContactPage v-if="currentPage === 'contact'" />
        <FAQPage v-if="currentPage === 'FAQ'" />
      </main>
    </div>
  </div>
  <Footer /> <!-- Footer stays at the bottom -->
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
}
</script>

<style scoped>
/* Flexbox layout for the entire page */
.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Ensures the page is at least the full viewport height */
}

/* Content grows to fill space between the navbar and footer */
.content-wrapper {
  flex: 1;
}

/* Footer stays at the bottom */
footer {
  background-color: #f8f9fa; /* Customize your footer styling */
  padding: 20px;
  text-align: center;
}

/* General styling */
header {
  padding: 20px;
  text-align: center;
}

main {
  padding: 20px;
}

body {
  margin-top: 60px; /* Ensure content is not hidden behind the fixed navbar */
}
</style>
