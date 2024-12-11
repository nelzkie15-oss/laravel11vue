<<template>
    <div>
        <Navbar />
        <h2>My {{ title }} Page</h2>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';
import Navbar from '@/Components/Navbar.vue';

defineProps({

        title: String,
});

</script>
