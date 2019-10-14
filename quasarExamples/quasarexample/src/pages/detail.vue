<template>
  <q-page padding>
    <div v-html="text"></div>
  </q-page>
</template>

<script>
export default {
  name: 'detail',
  props: {
    text: {
      type: String
    }
  }
}
</script>
