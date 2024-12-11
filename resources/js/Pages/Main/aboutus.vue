<<template>
    <div>
        <h2>My {{ title }} Page</h2>
    </div>
</template>

<script setup>
import { Head, Link } from '@inertiajs/vue3';

defineProps({

        title: String,
});

function handleImageError() {
    document.getElementById('screenshot-container')?.classList.add('!hidden');
    document.getElementById('docs-card')?.classList.add('!row-span-1');
    document.getElementById('docs-card-content')?.classList.add('!flex-row');
    document.getElementById('background')?.classList.add('!hidden');
}
</script>
