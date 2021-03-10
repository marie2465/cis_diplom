<template>
  <div>
    <div class="import">
      <div class="import__content">
         <p class="import__head">Import Data</p>
      </div>
      <div class="import__conteiner">
        <i class="import__text">Type of data to import :</i>
        <select class="import__select" name="checkbox" id="sel" v-model="selected">
          <option></option>
          <option value="Marking Scheme">
            <a href="#">Marking Sheme</a>
          </option>
        </select>
      </div>
      <div class="import__row" v-if=" selected==='Marking Scheme' ">
        <div class="import__row__header">
          Marking Scheme
        </div>
        <div class="import__row__desc">Marking schemes can now be imported from the Marking Scheme screen.</div>
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
