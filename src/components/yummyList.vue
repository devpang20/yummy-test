<template>
    <div>
        list
        <div>id : {{id}} </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            id : 0
        }
    },
    create() {
        console.log(this.$route.params.id);
    }
}
</script>

<style>

</style>