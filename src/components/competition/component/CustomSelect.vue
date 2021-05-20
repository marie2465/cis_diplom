<template>
  <div class="custom-select" :tabindex="tabindex" >
    <div class="selected" :class="{ open: open }" @click="open = !open">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <input class="custom-select__input" v-model="searchText">
      <div class="custom-select__item"
        v-for="(option, i) in search"
        :key="i"
        @click="
          selected = option;
          open = false;
          $emit('input', option);">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomSelect",
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: '',
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
          ? this.options[0]
          : null,
      open: false,
      searchText: ''
    };
  },
  computed: {
    search () {
      return this.options.filter(option => option.toLowerCase().includes(this.searchText))
    }
  },
  mounted() {
    this.$emit("input", this.selected);
  }
}
</script>

