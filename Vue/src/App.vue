<template>
    <div id="app">
        <Father></Father>
        <IViewTable></IViewTable>
    </div>
</template>

<script>
    import Father from './views/Father'
    import IViewTable from './views/IViewTable'
    export default {
        name: "app",
        mounted() {
        },
        components: {
            Father,
            IViewTable
        }
    }
</script>

<style scoped>

</style>