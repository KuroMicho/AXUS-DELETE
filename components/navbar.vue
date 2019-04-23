<template>
    <b-navbar variant="danger" type="dark" toggleable="lg">
        <b-navbar-brand href="/">
            Nuxt
        </b-navbar-brand>

        <b-navbar-toggle target="menu" />

        <b-collapse is-nav id="menu">
            <b-navbar-nav>
                <b-nav-item href="/contacto">Contacto</b-nav-item>
                <b-nav-item href="/productos">Productos</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    
}
</script>
