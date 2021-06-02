<template>
    <div class="home">
    <specjalist/>
    </div>
</template>
<script>
import specjalist from './spec.vue'

export default {
    name: 'Home',
    components: {
        specjalist
    }
}
</script>

<style>
.home{
  display: flex-box;
}
</style>