<template>
  <lkp-row>
    <lkp-col cols="12" sm="6" md="3">
      <lkp-input
        v-model="filter.username"
        clearable
        label="Usuário"
        prepend-inner-icon="mdi-magnify"
      />
    </lkp-col>

    <lkp-col cols="12" sm="6" md="2">
      <lkp-select v-model="filter.name" clearable :items="filterOptions.status" label="Status"/>
      
    </lkp-col>
    <lkp-col cols="12" sm="6" md="2">
    <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          :return-value.sync="date"
          transition="transition"
          offset
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
          <lkp-text-field 
              v-model="date"
              label="Data de criação"
              readonly
              v-bind="attrs"
              v-on="on"
          />
          </template> 
          <v-date-picker
            v-model="date"
            no-title
            scrollable
            range
            color="green"
          >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="menu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click.stop="AddDate(date)"
          >
            OK
          </v-btn>
          </v-date-picker>
        </v-menu>
    </lkp-col>
  </lkp-row>
</template>

<script>
import LkpTextField from '../shared/LkpTextField.vue'
export default {
  components: { LkpTextField },
  data: () => ({
    menu: false,
    date: [],
    filter: {
      name: '',
      username: '',
      dates: []
    },
    filterOptions: {
      status: ['Processando', 'Finalizado', 'Cancelado']
    },
    timer: null,
  
  }),
  methods: {
      AddDate(date) {
      this.filter.dates = date
      this.menu = false
      }
  },
  watch: {
    filter: {
      deep: true,
      handler (oldValue, newValue) {
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          this.$emit('filterChange', this.filter)
        }, 1000)
      }
    }
  },
}
</script>

<style></style>
