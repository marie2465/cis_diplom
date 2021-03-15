<template>
  <div>
    <div class="component">
      <div class="import__content">
         <p class="import__head">Import Data</p>
      </div>
      <div class="import__conteiner">
        <i class="import__text import__text-header">Type of data to import :</i>
        <select class="select" name="checkbox" id="sel" v-model="selected">
          <option></option>
          <option value="Marking Scheme">
            <a href="#">Marking Sheme</a>
          </option>
        </select>
      </div>
      <div class="import__row" v-if=" selected==='Marking Scheme' ">
        <div class="import__row-header">
          Marking Scheme
        </div>
        <div class="import__row-desc">Marking schemes can now be imported from the Marking Scheme screen.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Import',
  data: function () {
    return {
      selected: ''
    }
  }
}
</script>

<style scoped>

</style>
