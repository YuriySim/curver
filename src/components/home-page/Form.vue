<template>
  <form class="form" @submit.prevent="submitHandler">
    <div class="inputs">
      <div class="row">
        <div class="input-field col s1">
          <input
            id="unit"
            type="number"
            step="1000"
            v-model.number="v$.unit.$model"
            :class="{invalid: v$.unit.$dirty && v$.unit.$errors.length}"
          >
          <label for="unit">Unit</label>
        </div>

        <div class="input-field col s1">
          <input
            id="reach_1"
            type="number"
            step="0.01"
            v-model.number="v$.reach_1.$model"
            :class="{invalid: v$.reach_1.$dirty && v$.reach_1.$errors.length}"
          >
          <label for="reach_1">Reach% 1+</label>
        </div>

        <div class="input-field col s1">
          <input
            id="reach_2"
            type="number"
            step="0.01"
            v-model.number="v$.reach_2.$model"
            :class="{invalid: v$.reach_2.$dirty && v$.reach_2.$errors.length}"
          >
          <label for="reach_2">Reach% 2+</label>
        </div>

        <div class="input-field col s1">
          <input
            id="reach_3"
            type="number"
            step="0.01"
            v-model.number="v$.reach_3.$model"
            :class="{invalid: v$.reach_3.$dirty && v$.reach_3.$errors.length}"
          >
          <label for="reach_3">Reach% 3+</label>
        </div>

        <div class="input-field col s1">
          <input
            id="reach_4"
            type="number"
            step="0.01"
            v-model.number="v$.reach_4.$model"
            :class="{invalid: v$.reach_4.$dirty && v$.reach_4.$errors.length}"
          >
          <label for="reach_4">Reach% 4+</label>
        </div>

        <div class="input-field col s1">
          <input
            id="reach_5"
            type="number"
            step="0.01"
            v-model.number="v$.reach_5.$model"
            :class="{invalid: v$.reach_5.$dirty && v$.reach_5.$errors.length}"
          >
          <label for="reach_5">Reach% 5+</label>
        </div>

        <div class="input-field col s1">
          <input
            id="reach_6"
            type="number"
            step="0.01"
            v-model.number="v$.reach_6.$model"
            :class="{invalid: v$.reach_6.$dirty && v$.reach_6.$errors.length}"
          >
          <label for="reach_6">Reach% 6+</label>
        </div>

        <div class="input-field col s1">
          <input
            id="reach_7"
            type="number"
            step="0.01"
            v-model.number="v$.reach_7.$model"
            :class="{invalid: v$.reach_7.$dirty && v$.reach_7.$errors.length}"
          >
          <label for="reach_7">Reach% 7+</label>
        </div>

        <div class="input-field col s1">
          <input
            id="reach_8"
            type="number"
            step="0.01"
            v-model.number="v$.reach_8.$model"
            :class="{invalid: v$.reach_8.$dirty && v$.reach_8.$errors.length}"
          >
          <label for="reach_8">Reach% 8+</label>
        </div>

        <div class="input-field col s1">
          <input
            id="reach_9"
            type="number"
            step="0.01"
            v-model.number="v$.reach_9.$model"
            :class="{invalid: v$.reach_9.$dirty && v$.reach_9.$errors.length}"
          >
          <label for="reach_9">Reach% 9+</label>
        </div>

        <div class="input-field col s1">
          <input
            id="reach_10"
            type="number"
            step="0.01"
            v-model.number="v$.reach_10.$model"
            :class="{invalid: v$.reach_10.$dirty && v$.reach_10.$errors.length}"
          >
          <label for="reach_10">Reach% 10+</label>
        </div>

        <div class="btn-wrapper col s1">
          <button
            class="btn waves-effect waves-light"
            type="submit"
          >
            Add
          </button>
        </div>
      </div>

      <small
      class="helper-text invalid center"
      v-if="v$.$errors.length"
      >
        {{ v$.$errors[0].$message }}
      </small>
    </div>

  </form>
</template>

<script>
  import useVuelidate from '@vuelidate/core'
  import { required, minValue, helpers } from '@vuelidate/validators'

  export default {
    name: 'Form',

    setup () {
      return { v$: useVuelidate() }
    },

    data() {
      return {
        unit: null,
        reach_1: null,
        reach_2: null,
        reach_3: null,
        reach_4: null,
        reach_5: null,
        reach_6: null,
        reach_7: null,
        reach_8: null,
        reach_9: null,
        reach_10: null,

        customMessage: 'This value must be less than the previous one',

        results: {},
      }
    },

    //Validation conditions
    validations () {
      return{
        unit: {
          required,
          minValue: minValue(1000)
        },
        reach_1: {
          required,
          minValue: minValue(0.01)
        },
        reach_2: {
          required,
          minValue: minValue(0.01),
          customValid: helpers.withMessage(this.customMessage, (value) => value < this.reach_1)
        },
        reach_3: {
          required,
          minValue: minValue(0.01),
          customValid: helpers.withMessage(this.customMessage, (value) => value < this.reach_2)
        },
        reach_4: {
          required,
          minValue: minValue(0.01),
          customValid: helpers.withMessage(this.customMessage, (value) => value < this.reach_3)
        },
        reach_5: {
          required,
          minValue: minValue(0.01),
          customValid: helpers.withMessage(this.customMessage, (value) => value < this.reach_4)
        },
        reach_6: {
          required,
          minValue: minValue(0.01),
          customValid: helpers.withMessage(this.customMessage, (value) => value < this.reach_5)
        },
        reach_7: {
          required,
          minValue: minValue(0.01),
          customValid: helpers.withMessage(this.customMessage, (value) => value < this.reach_6)
        },
        reach_8: {
          required,
          minValue: minValue(0.01),
          customValid: helpers.withMessage(this.customMessage, (value) => value < this.reach_7)
        },
        reach_9: {
          required,
          minValue: minValue(0.01),
          customValid: helpers.withMessage(this.customMessage, (value) => value < this.reach_8)
        },
        reach_10: {
          required,
          minValue: minValue(0.01),
          customValid: helpers.withMessage(this.customMessage, (value) => value < this.reach_9)
        },
      }
    },

    methods: {
      //This method generates data from the form and sends it to the parent component when performing validation
      submitHandler() {
        if (this.v$.$invalid) {
          this.v$.$touch()

          return
        }

        this.results = {
          "unit": this.unit,
          "reach": [
            this.reach_1, this.reach_2,
            this.reach_3, this.reach_4,
            this.reach_5, this.reach_6,
            this.reach_7, this.reach_8,
            this.reach_9, this.reach_10
          ]
        }

        this.unit = null
        this.reach_1 = null
        this.reach_2 = null
        this.reach_3 = null
        this.reach_4 = null
        this.reach_5 = null
        this.reach_6 = null
        this.reach_7 = null
        this.reach_8 = null
        this.reach_9 = null
        this.reach_10 = null

        this.v$.$reset()
        this.$message('Added')

        this.$emit('addToTable', this.results)
      },
    },


  }
</script>
