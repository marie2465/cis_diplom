<template>
  <div class="teams__tables">
    <div class="teams__tables-header">
      <p class="teams__tables-content"> {{ headerTable }}</p>
    </div>
    <div class="teams__tables-competitors" v-if="showData">
      <div class="teams__tables-items"
           v-for="value in itemsCompetitor"
           :key="value.id"
           :class="{'teams__tables-clicks': value.done}"
           @click="itemClick(value)">
        {{ value.body }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TeamsTable",
  props: {
    itemsCompetitor: {
      type: Array,
      default: () => []
    },
    showData: {
      type: Boolean,
      default: () => false
    },
    headerTable: {
      type: String,
      default: () => ''
    },
    itemToDrop: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    itemClick (value) {
      value.done =! value.done
      if (value.done) this.$emit('sendId', value.id)
    }
  }
}
</script>
