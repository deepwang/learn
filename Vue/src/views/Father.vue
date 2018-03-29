<template>
    <Child @try="forChildren"></Child>
</template>

<script>
    import Child from './Child'
    export default {
        name: "father",
        data() {
            return {
                num: 1
            }
        },
        methods: {
            forChildren(num) {
                alert(1)
                alert(num)
            }
        },
        components: {
            Child
        }
    }
</script>

<style scoped>

</style>