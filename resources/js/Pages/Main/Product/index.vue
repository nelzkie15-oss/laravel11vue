<template>
 <div>
    <Head title="Product"/>
    <Nav>
        <div class="mx-4 mt-4">
             <h5>Product Lists</h5>
             <Link :href="route('product.create')" class="p-3 mb-4 text-white bg-green-500 rounded">Add Product</Link>
        </div>
    <div class="mx-4 mt-4">
        <table class="w-full bg-white border border-gray-200 shadow">
            <thead>
                <tr>
                    <td class="px-4 py-2 text-left border">Id</td>
                    <td class="px-4 py-2 text-left border">Name</td>
                    <td class="px-4 py-2 text-left border">Price</td>
                    <!-- <td class="px-4 py-2 text-left border">Action</td> -->
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="px-4 py-2 border">1</td>
                    <td class="px-4 py-2 border">Apple</td>
                    <td class="px-4 py-2 border">140</td>
                  
                </tr>
            </tbody>


        </table>
    </div>
    </Nav>
  </div>
</template>
<script setup>
  import Nav from "@/Layouts/MainLayout.vue";
  import { Head, Link } from "@inertiajs/vue3";
</script>
