<
<template>
  <div>
    <Nav>
      <h2>My {{ title }} Page</h2>
    </Nav>
  </div>
</template>

<script setup>
import { Head, Link } from "@inertiajs/vue3";
import Nav from "@/Layouts/MainLayout.vue";

defineProps({
  title: String,
});
</script>
