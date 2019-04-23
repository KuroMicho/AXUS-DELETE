<template>
    <div>
        <h1>Hola {{ msg }}</h1>
        <button type="button" class="btn btn-primary">Primary</button>
        <b-button variant="primary">Button</b-button>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                msg: "Mundo"
            }
        }
    }
</script>

<style>

</style>
