<template>
  <div class="component">
    <div class="teams">
      <p class="teams__head">Teams Menegment</p>
      <div class="teams__content">
        <i class="teams__text">Select a skill</i>
        <div class="teams__search">
          <span class="teams__dropdown-icon">&#9660;</span>
          <div class="teams__search-div">
            <input type="search" class="teams__search-p">
            <p class="teams__search-text">No resut found</p>
            <div>
<!--              https://codesandbox.io/s/custom-vuejs-select-component-8nqgd?file=/App.vue
                  https://qvault.io/javascript/how-to-make-a-custom-select-component-in-vue-js/-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teams"
}
</script>

<style scoped>

</style>
