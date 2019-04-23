<template>
  <b-form @submit.prevent="guardarProducto">
    <div class="row mt-3">
      <div class="col-xs-6 col-sm-5 col-md-6">
        <h4>Nuevo Producto</h4>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-12">
        <b-form-group label="Imagen:" label-for="imagen">
          <b-form-file id="imagen" placeholder="Cargar Imagen" drop-placeholder="Cargar Imagen"/>
        </b-form-group>

        <b-form-group label="Nombre:" label-for="nombre">
          <b-form-input
            id="nombre"
            type="text"
            required
            v-model="form.Name"
            placeholder="Ingresa el nombre del producto"
          />
        </b-form-group>

        <b-form-group label="Precio:" label-for="precio">
          <b-form-input
            id="precio"
            type="number"
            required
            v-model="form.Price"
            placeholder="Ingresa el precio del producto"
          />
        </b-form-group>

        <b-form-group label="Cantidad:" label-for="cantidad">
          <b-form-input
            id="cantidad"
            type="number"
            required
            v-model="form.Amount"
            placeholder="Ingresa la cantidad disponible del producto"
          />
        </b-form-group>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 offset-sm-5">
        <b-button-toolbar>
          <b-button-group right class="mx-2">
            <b-button href="/productos">Volver</b-button>
            <b-button variant="primary" type="submit">Guardar</b-button>
          </b-button-group>
        </b-button-toolbar>
      </div>
    </div>
  </b-form>
</template>

<script>
export default {
  data(){
    return {
      form: {
        Name: '',
        Amount: '',
        Price: ''
      },
      guardando: false
    }
  },
  methods: {
    guardarProducto(){
      this.guardando = true
      this.$axios.post('http://localhost:4000/api/products', this.form).then(res => {
        this.$router.push({path: '/productos'})
      })
    },
    

  }
}
</script>
