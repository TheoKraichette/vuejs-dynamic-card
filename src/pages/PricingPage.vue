<template>
  <q-page-container>
    <q-page class="flex flex-center">
      <div class="page-pricing">
        <div class="flex flex-center q-gutter-xl row ">
          <PricingCard title="Essentiel" color="#08CBD8" :price="10" :usersmax="2" :refmax="50" />
          <PricingCard title="Avancé" color="#00A4B8" :price="20" :usersmax="5" :refmax="100" />
          <PricingCard title="Pro" color="#0082B8" :price="35" :usersmax="20" :refmax="1000" />
          <PricingCard title="Entreprise" color="#06418A" :price="0" :usersmax="20" :refmax="1000" :enterprise="true" />
        </div>
      </div>
    </q-page>
  </q-page-container>
</template>

<script setup>

import PricingCard from 'src/components/PricingCard.vue'

defineOptions({
  name: 'PricingPage'
})
</script>
