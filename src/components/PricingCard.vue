<template>
  <q-card class="card">
    <h4>{{ title }}</h4>
    <p v-if="!enterprise" class="price">
      {{ price }} € <span>utilisateur / mois</span>
    </p>
    <p v-else class="on-demand">Sur demande</p>
    <p v-if="!enterprise" class="total">Total {{ total }} € / mois</p>
    <p class="gestion" v-if="!enterprise">
      La gestion de votre inventaire en toute simplicité jusqu'à <span>{{ refmax }} références </span> et <span>{{
        usersmax }}
        utilisateurs</span>
    </p>
    <p class="gestion" v-else>
      K-inventory totalement personnalisé pour votre société pour plus de <span>{{ refmax }} références</span> et <span>
        {{ usersmax }} utilisateurs</span>
    </p>
    <p class="max-user">
      Nombre d'utilisateur maximum <span v-if="!enterprise">{{ usersmax }}</span><span v-else style="font-size: 20px;">∞
      </span>
    </p>
    <q-slider v-if="!enterprise" v-model="standar" :color="color" :min="0" :max="usersmax" />
    <q-slider v-else v-model="enterpriseslide" disable :max="1" />
    <q-btn :label="actionLabel" class="btn" />
  </q-card>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  title: String,
  color: String,
  usersmax: Number,
  refmax: Number,
  price: Number,
  enterprise: Boolean
})

const standar = ref(0)
const enterpriseslide = ref(1)

const total = computed(() => props.price * standar.value)

const actionLabel = computed(() => props.enterprise ? 'Nous contacter' : 'Souscrire')

</script>

<style lang="scss" scoped>
.card {
  max-width: 18%;
  padding: 1rem;
  font-family: "Nunito", sans-serif;
  font-size: 0.8rem;
  border-radius: 10px;
  box-shadow: 0px -10px v-bind(color), 0 0 3px grey;

  h4 {
    font-weight: bold;
    margin: 1rem auto 1rem;
  }

  .price {
    color: v-bind(color);
    font-size: 2.1rem;
    font-weight: bold;
    margin-top: -1rem;
    margin-bottom: -0.5rem;

    span {
      display: inline-block;
      font-size: 12px;
      font-weight: 400;
      color: black;
      max-width: 30%;
      line-height: 0.8rem;
      margin-left: -5px;
    }
  }

  .on-demand {
    text-align: center;
    font-size: 2rem;
  }

  .total {
    font-weight: bold;
  }

  .gestion {
    line-height: 1rem;
    max-width: 95%;

    span {
      font-weight: bold;
    }
  }

  .max-user {
    margin-top: 2rem;
    letter-spacing: -0.02rem;

    span {
      border: solid 1px rgb(255, 255, 255);
      border-radius: 10px;
      box-shadow: 0 1px 2px rgb(205, 205, 205);
      padding: 0.4rem 1rem;
      margin-left: 1rem;
    }
  }

  .btn {
    display: flex;
    margin: auto;
    background-color: v-bind(color);
    color: white;
    border-radius: 10px;
    padding: 0.7rem 1.4rem;
    font-size: 0.7rem;
    font-weight: bold;
  }

  ::v-deep .q-slider__track {
    color: v-bind(color) !important;
  }

  ::v-deep .q-slider__thumb {
    color: v-bind(color) !important;
  }
}
</style>
