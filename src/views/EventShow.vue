<template>
    <div>
        {{getNekretnina}}
    </div>
</template>
<script>
export default {
    computed: {
        getNekretnina() {
            return this.$store.getters.getNekretnina
        }
    }
}
</script>