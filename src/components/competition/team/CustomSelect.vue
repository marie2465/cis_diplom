<template>
  <div class="custom-select-wrapper">
    <div class="custom-select" :tabindex="tabindex" @blur="open = false">
      <div class="selected" :class="{ open: open }" @click="open = !open">
        {{ selected }}
      </div>
      <div class="items" :class="{ selectHide: !open }">
        <input type="text" class="custom-select__search" @focus="open = true">
        <div
          v-for="(option, i) of options"
          :key="i"
          class="custom-select__option"
          @click="
        selected = option;
        open = false;
        $emit('input', option);
      "
        >
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomSelect',
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data () {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
          ? this.options[0]
          : null,
      open: false,
    }
  },
  mounted () {
    this.$emit('input', this.selected)
  },
}
</script>

<style scoped>

.custom-select-wrapper {
  width: 200px;
}

.custom-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  height: 34px;
  line-height: 34px;
}

.custom-select .selected {
  border-radius: 4px;
  border: 1px solid #aaa;
  padding-left: 10px;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #aaa;
  border-radius: 4px 4px 0 0;
}

.custom-select .selected:after {
  position: absolute;
  content: "";
  top: 50%;
  right: 10px;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #888 transparent transparent transparent;
}

.custom-select .selected.open:after {
  transform: rotate(180deg);
  top: 35%;
}

.custom-select .items {
  border-radius: 0 0 4px 4px;
  overflow: hidden;
  border-right: 1px solid #aaa;
  border-left: 1px solid #aaa;
  border-bottom: 1px solid #aaa;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items .custom-select__option {
  padding-left: 10px;
  cursor: pointer;
  user-select: none;
}

.selectHide {
  display: none;
}

.custom-select__search {
  margin: 0 10px;
  width: 100%;
}
</style>
