<template>
    <div>I'm child
        <button @click="child">child method</button>
    </div>
</template>

<script>

    export default {
        name: "child",
        data() {
            return {
                num: 2
            }
        },
        methods: {
            child() {
                this.$emit('try',99)
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>