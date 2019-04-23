    <template>
  <form @submit.prevent="search">
    <div class="row mt-3">
      <div class="col-xs-6">
        <h4>Listado de Productos</h4>
      </div>
      <div class="col-xs-6 ml-2">
        <b-button variant="primary" href="/productos/nuevo">Nuevo</b-button>
      </div>
    </div>

    <div class="col-xs-4">
      <b-form-input v-model="searchText" placeholder="Buscar Productos"></b-form-input>
    </div>

    <div class="col-xs-2">
      <b-button variant="info" type="submit">Buscar</b-button>
    </div>

    <div class="row mt-2">
      <div class="col-sm-12">
        <b-table
          responsive
          striped
          hover
          :fields="fields"
          :items="products.data"
          id="products"
          @sort-changed="sortingChanged"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
        >
          <template slot="acciones" slot-scope="row">
            <b-button variant="success">Editar</b-button>

            <b-button variant="danger" type="button" @click="eliminar(row.item.id)">Eliminar</b-button>
          </template>
        </b-table>

        <b-pagination
          v-model="currentPage"
          :total-rows="rows"
          :per-page="perPage"
          aria-controls="products"
        ></b-pagination>
      </div>
    </div>
  </form>
</template>

<script>
const URL = "http://localhost:4000/api/products";

export default {
  asyncData({ $axios }) {
    return $axios.get(URL).then(result => {
      return {
        products: result.data,
        id: result.data,
        currentPage: result.data.page
      };
    });
  },
  data() {
    return {
      fields: {
        id: {
          label: "ID"
        },
        Name: {
          label: "Nombre",
          sortable: true
        },
        Price: {
          label: "Precio"
        },
        Amount: {
          label: "Cantidad"
        },
        acciones: {
          label: "Acciones"
        }
      },
      sortBy: "Name",
      sortDesc: false,
      searchText: ""
    };
  },
  computed: {
    /*  currentPage() {
      return this.products.page;
    }, */
    rows() {
      return this.products.total;
    },
    perPage() {
      return this.products.per_page;
    }
  },
  watch: {
    currentPage(value) {
      //alert("Cambiando Pagina"+value)
      this.$axios
        .get(
          URL +
            `?page=${value}&column_order=${this.sortBy}&type_order=${
              this.sortDesc ? "desc" : "asc"
            }`
        )
        .then(res => {
          this.products = res.data;
        });
    }
  },
  methods: {
    sortingChanged(evt) {
      this.$axios
        .get(
          URL +
            `?page=${this.currentPage}&column_order=${evt.sortBy}&type_order=${
              evt.sortDesc ? "desc" : "asc"
            }` //if (evet.sortDest){..... }else {......}
        )
        .then(res => {
          this.products = res.data;
        });
    },
    search() {
      //alert("Cambiando Pagina"+value)
      this.$axios
        .get(
          URL +
            `?page=${this.currentPage}&column_order=${this.sortBy}&type_order=${
              this.sortDesc ? "desc" : "asc"
            } &search=${this.searchText}`
        )
        .then(res => {
          this.products = res.data;
        });
    },
    eliminar(id) {
      this.$axios.delete(URL, id);
      alert("Eliminando");
    }
  }
};
</script>

