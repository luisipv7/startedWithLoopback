<template>
<div>
  <q-page class="flex flex-center">
     <q-card class="my-card">
      <q-input v-model="operators"  readonly />
      <q-input v-model="valueActual"  readonly />
      <div class="q-pa-md q-gutter-lg">
        <q-btn @click="porcent">%</q-btn>
        <q-btn @click="raiz">²√</q-btn>
        <q-btn @click="quadrado">x²</q-btn>
        <q-btn @click="meio">1/2</q-btn>
      </div>
      <div class="q-pa-md q-gutter-lg">
        <q-btn @click="zeraTotal">CE</q-btn>
        <q-btn @click="zera">C</q-btn>
        <q-btn @click="volta">BACK</q-btn>
        <q-btn @click="operando('/')">/</q-btn>
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-btn @click="operando('7')">7</q-btn>
        <q-btn @click="operando('8')">8</q-btn>
        <q-btn @click="operando('9')">9</q-btn>
        <q-btn @click="operando('*')">X</q-btn>
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-btn @click="operando('4')">4</q-btn>
        <q-btn @click="operando('5')">5</q-btn>
        <q-btn @click="operando('6')">6</q-btn>
        <q-btn @click="operando('-')">-</q-btn>
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-btn @click="operando('1')">1</q-btn>
        <q-btn @click="operando('2')">2</q-btn>
        <q-btn @click="operando('3')">3</q-btn>
        <q-btn @click="operando('+')">+</q-btn>
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-btn @click="alterar">+/-</q-btn>
        <q-btn @click="operando('0')">0</q-btn>
        <q-btn @click="virgula">,</q-btn>
        <q-btn @click="total">=</q-btn>
      </div>
    </q-card>
  </q-page>
</div>
</template>

<script>
var evalMode = require('eval-formula')
export default {
  data () {
    return {
      valueActual: '',
      posPrev: null,
      posNext: null,
      operatorClick: false,
      operators: [],
      history: []
    }
  },
  methods: {
    operando (value) {
      if (this.operatorClick) {
        this.valueActual = ''
      }
      this.operators.push(value)
      this.valueActual = this.operators.map()
      console.log(this.valueActual)
      this.valueActual = evalMode(this.valueActual)
    }
  }
}
</script>
