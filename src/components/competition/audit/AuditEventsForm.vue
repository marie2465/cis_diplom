<template>
  <div class="audit__form">
    <div class="audit__table-col">
      <div class="audit__table-row">
        <div>From</div>
        <input type="datetime-local">
      </div>
      <div class="audit__table-row">
        <div>To</div>
        <input type="datetime-local">
      </div>
      <div class="audit__table-row">
        <div>event Type</div>
        <select>
          <option></option>
          <option>Measurement Mark</option>
          <option>Judgement Score</option>
          <option>Judgement Score(Tablet)</option>
          <option>Judgement Mark(Tablet)</option>
          <option>Mark Lock</option>
          <option>Results Lock</option>
          <option>Mass Mark Deletion</option>
          <option>Invalid Judgement Scores (Tablet)</option>
        </select>
      </div>
      <div class="audit__table-row">
        <button class="btn btn--lightblue" type="button">Search</button>
      </div>
    </div>
    <div class="audit__table-col">
      <div class="audit__table-row">
        <div>Skills</div>
        <CustomSelect/>
      </div>
      <div class="audit__table-row">
        <div>Sub Criterion</div>
        <select>
          <option></option>
          <option>A1 - Суб критерий 1</option>
          <option>A2 - Суб критерий 2</option>
          <option>B1 - Суб критерий 1</option>
          <option>B2 - Суб критерий 2</option>
        </select>
      </div>
      <div class="audit__table-row">
        <div>Asspect</div>
        <select>
          <option></option>
          <option>A1 - Суб критерий 1</option>
          <option>A2 - Суб критерий 2</option>
          <option>B1 - Суб критерий 1</option>
          <option>B2 - Суб критерий 2</option>
        </select>
      </div>
      <div class="audit__table-row">
        <div>Competitor</div>
        <select>
          <option></option>
          <option>Московская область</option>
          <option>Кемеровская область</option>
          <option>Белгородская область</option>
          <option>Калининградская область</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuditEventsForm",
  data(){
    return{

    }
  }
}
</script>

<style scoped>

</style>
