(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{256:function(t,e,r){"use strict";r.r(e);var o="http://localhost:4000/api/products",c={asyncData:function(t){return t.$axios.get(o).then(function(t){return{products:t.data,id:t.data,currentPage:t.data.page}})},data:function(){return{fields:{image:{label:"Imagen",sortable:!1},id:{label:"ID"},Name:{label:"Nombre",sortable:!0},Price:{label:"Precio"},Amount:{label:"Cantidad"},acciones:{label:"Acciones"}},sortBy:"Name",sortDesc:!1,searchText:""}},computed:{rows:function(){return this.products.total},perPage:function(){return this.products.per_page}},watch:{currentPage:function(t){var e=this;this.$axios.get(o+"?page=".concat(t,"&column_order=").concat(this.sortBy,"&type_order=").concat(this.sortDesc?"desc":"asc")).then(function(t){e.products=t.data})}},methods:{sortingChanged:function(t){var e=this;this.$axios.get(o+"?page=".concat(this.currentPage,"&column_order=").concat(t.sortBy,"&type_order=").concat(t.sortDesc?"desc":"asc")).then(function(t){e.products=t.data})},search:function(){var t=this;this.$axios.get(o+"?page=".concat(this.currentPage,"&column_order=").concat(this.sortBy,"&type_order=").concat(this.sortDesc?"desc":"asc"," &search=").concat(this.searchText)).then(function(e){t.products=e.data})},eliminar:function(t){this.$axios.delete(o,t),alert("Eliminando")}}},n=r(30),component=Object(n.a)(c,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{on:{submit:function(e){return e.preventDefault(),t.search(e)}}},[r("div",{staticClass:"row mt-3"},[t._m(0),t._v(" "),r("div",{staticClass:"col-xs-6 ml-2"},[r("b-button",{attrs:{variant:"primary",href:"/productos/nuevo"}},[t._v("Nuevo")])],1)]),t._v(" "),r("div",{staticClass:"col-xs-4"},[r("b-form-input",{attrs:{placeholder:"Buscar Productos"},model:{value:t.searchText,callback:function(e){t.searchText=e},expression:"searchText"}})],1),t._v(" "),r("div",{staticClass:"col-xs-2"},[r("b-button",{attrs:{variant:"info",type:"submit"}},[t._v("Buscar")])],1),t._v(" "),r("div",{staticClass:"row mt-2"},[r("div",{staticClass:"col-sm-12"},[r("b-table",{attrs:{responsive:"",striped:"",hover:"",fields:t.fields,items:t.products.data,id:"products","sort-by":t.sortBy,"sort-desc":t.sortDesc},on:{"sort-changed":t.sortingChanged,"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"acciones",fn:function(e){return[r("b-button",{attrs:{variant:"success"}},[t._v("Editar")]),t._v(" "),r("b-button",{attrs:{variant:"danger",type:"button"},on:{click:function(r){return t.eliminar(e.item.id)}}},[t._v("Eliminar")])]}},{key:"image",fn:function(data){return[r("b-img",{attrs:{width:"220",src:"http://localhost:4000/images/"+data.item.image}})]}}])}),t._v(" "),r("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"products"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-xs-6"},[e("h4",[this._v("Listado de Productos")])])}],!1,null,null,null);e.default=component.exports}}]);