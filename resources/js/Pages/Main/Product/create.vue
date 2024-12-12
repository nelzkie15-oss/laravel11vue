<template>
    <div>
       <Head title="Create Product"/>
       <Nav>
           <div class="mx-4 mt-4">
                <h5 class="mb-2">Create Product</h5>
                <Link :href="route('products.index')" class="p-2 mt-3 mb-4 text-white rounded bg-danger-500 float-end ">Back</Link>
           </div>
       <div class="grid grid-cols-12 gap-4">
           <div class="col-span-3">
              <div class="mb-3">
                  <label for="Product Name">Product Name</label>
                  <input type="text" v-model="form.name" class="w-full py-1" />
              </div>
              <div class="mb-3">
                  <label for="Product Price">Product Price</label>
                  <input type="text" v-model="form.price" class="w-full py-1" />
              </div>

              <div class="mb-3">
                  <Link :href="route('products.index')" class="p-2 mt-3 mb-4 text-white bg-red-500 rounded float-end ">Back</Link>
              </div>
               <button type="submit"
               class="p-2 px-5 mt-3 mb-4 text-white bg-blue-500 rounded">
                 Save
               </button>
           </div>
       </div>
       </Nav>
     </div>
   </template>
   <script setup>
     import Nav from "@/Layouts/MainLayout.vue";
     import { Head, Link } from "@inertiajs/vue3";
   </script>
