<template>
 <div>
    <Head title="Product"/>
    <Nav>
        <div class="mx-4 mt-4">
             <h5 class="mb-2">Product Lists</h5><hr>
             <Link :href="route('products.create')" class="p-3 mt-3 mb-4 text-white bg-green-500 rounded">Add Product</Link>
        </div>
    <div class="mx-4 mt-4">
        <table class="w-full bg-white border border-gray-200 shadow">
            <thead>
                <tr>
                    <td class="px-4 py-2 text-left border">Id</td>
                    <td class="px-4 py-2 text-left border">Name</td>
                    <td class="px-4 py-2 text-left border">Price</td>
                   <td class="px-4 py-2 text-left border">Action</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="px-4 py-2 border">1</td>
                    <td class="px-4 py-2 border">Apple</td>
                    <td class="px-4 py-2 border">140</td>
                    <td>
                        <Link :href="route('products.create')"
                         class="inline-block p-3 px-2 py-1 mb-4 bg-blue-500 rounded me-2 text-dark">
                         show</Link>

                         <Link :href="route('products.create')"
                         class="inline-block p-3 px-2 py-1 mb-4 bg-orange-500 rounded me-2 text-dark">
                         edit</Link>

                         <Link :href="route('products.create')"
                         class="inline-block p-3 px-2 py-1 mb-4 bg-red-500 rounded me-2 text-dark">
                         delete</Link>
                    </td>

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
