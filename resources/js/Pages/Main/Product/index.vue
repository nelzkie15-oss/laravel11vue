<template>
 <div>
    <Head title="Product"/>
    <Nav>
        <div class="mx-4 mt-4">
             <h5>Product Lists</h5>
             <Link :href="route('prodcut.create')">Add Product</Link>
        </div>
    </Nav>
  </div>
</template>
<script setup>
  import Nav from "@/Layouts/MainLayout.vue";
  import { Head, Link } from "@inertiajs/vue3";
</script>
