<template>
    <nav class="flex justify-between p-4 bg-gray-200">
         <div class="text-lg">
            Navbar
         </div>
       <ul class="flex mb-2 gap-x-4 me-auto mb-lg-lg">
          <li class="nav-item">
            <Link class="text-dark" :href="route('main.index')">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="text-dark" :href="route('main.aboutUs')">About Us</Link>
          </li>
          <li class="nav-item">
            <Link class="text-dark" :href="route('main.contactUs')">Contact Us</Link>
          </li>
       </ul>
    </nav>
</template>

<script setup>
import {  Link } from '@inertiajs/vue3';

</script>
