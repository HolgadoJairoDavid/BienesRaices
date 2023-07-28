<script setup>
import usePropiedades from "../composables/usePropiedades";
import Propiedad from "../components/Propiedad.vue";

const { propiedadesCollection, priceProperty } = usePropiedades();
</script>
<template>
  <main>
    <h1 class="text-center text-h3 font-weight-bold my-5">Propiedades</h1>

    <v-card class="py-10" flat>
      <v-row>
        <Propiedad
          v-for="propiedad in propiedadesCollection"
          :key="propiedad.id"
          :propiedad="propiedad"
          :price="priceProperty"
        />
      </v-row>
    </v-card>
  </main>
</template>
