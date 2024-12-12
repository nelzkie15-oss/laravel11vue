<template>
  <div>
    <Head title="Edit Product" />
    <Nav>
      <div v-if="$page.props.flash.message" class="alert">
        {{ $page.props.flash.message }}
      </div>

      <div class="mx-4 mt-4">
        <div class="flex justify-between">
          <h5 class="mb-2">Edit Product</h5>
          <Link
            :href="route('products.index')"
            class="p-2 mt-3 mb-4 text-white bg-red-500 rounded float-end"
            >Back</Link
          >
        </div>
        <form @submit.prevent="updateProduct()">
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-3">
              <div class="mb-3">
                <label for="Product Name">Product Name</label>
                <input type="text" v-model="form.name" class="w-full py-1" />
                <div v-if="errors.name" class="text-red-500">
                  {{ errors.name }}
                </div>
              </div>
              <div class="mb-3">
                <label for="Product Price">Product Price</label>
                <input type="text" v-model="form.price" class="w-full py-1" />
                <div v-if="errors.price" class="text-red-500">
                  {{ errors.price }}
                </div>
              </div>

              <div class="mb-3">
                <Link
                  :href="route('products.index')"
                  class="inline-block px-5 py-2 mb-4 mr-2 text-white bg-red-600 rounded"
                  >Back</Link
                >

                <button
                  type="submit"
                  class="px-5 py-2 mb-4 text-white bg-red-600 rounded"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Nav>
  </div>
</template>
     <script setup>
import Nav from "@/Layouts/MainLayout.vue";
import { Head, Link, useForm } from "@inertiajs/vue3";

const props = defineProps({
     errors: Object,
     product: Object,
    })

const form = useForm({
  name: props.product.name,
  price: props.product.price,
});

const updateProduct = () => {
  const res = form.put(route("products.update", props.product.id));
  if (res) {
    form.reset();
  }
};

</script>
