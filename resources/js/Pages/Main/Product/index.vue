<template>
  <div>
    <Head title="Product" />
    <Nav>
      <div
        v-if="$page.props.flash.message"
        class="px-4 py-2 mx-5 mt-4 bg-green-200 alert"
      >
        {{ $page.props.flash.message }}
      </div>
      <div class="mx-4 mt-4">
        <h5 class="mb-2">Product Lists</h5>
        <Link
          :href="route('products.create')"
          class="p-1 mt-3 mb-2 text-white bg-green-500 rounded float-end"
          >Add Product</Link
        >
      </div>
      <div class="mx-4 mt-4">
        <table class="w-full bg-white border border-gray-200 shadow">
          <thead>
            <tr>
              <td class="px-4 py-2 text-left border">ID</td>
              <td class="px-4 py-2 text-left border">NAME</td>
              <td class="px-4 py-2 text-left border">PRICE</td>
              <td class="px-4 py-2 text-left border">ACTION</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in products" :key="index">
              <td class="px-4 py-2 border">{{ item.id }}</td>
              <td class="px-4 py-2 border">{{ item.name }}</td>
              <td class="px-4 py-2 border">{{ item.price }}</td>
              <td>
                <Link
                  :href="route('products.show', item.id)"
                  class="inline-block p-3 px-2 py-1 mt-3 mb-4 ml-2 text-white bg-blue-500 rounded me-2"
                >
                  show</Link
                >

                <Link
                  :href="route('products.edit', item.id)"
                  class="inline-block p-3 px-2 py-1 mt-3 mb-4 text-white bg-orange-500 rounded me-2"
                >
                  edit</Link
                >

                <button
                  type="submit"
                  @click="deleteProduct(item.id)"
                  class="inline-block p-3 px-2 py-1 mt-3 mb-4 ml-2 text-white bg-red-600 rounded"
                >
                  Delete
                </button>
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
import { Head, Link, useForm} from "@inertiajs/vue3";

defineProps({
  products: Array,
});

const form = useForm({});
const deleteProduct = (productID) =>{
    if(confirm("Are you sure you want to delete this product?")){
        form.delete(route('products.destroy', productID));
    }
}
</script>
