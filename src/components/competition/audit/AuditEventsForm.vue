<template>
  <div class="audit__form">
    <div class="audit__form-col">
      <div class="audit__form-row">
        <div class="audit__form-name">From</div>
        <input class="audit__form-block" type="datetime-local">
      </div>
      <div class="audit__form-row">
        <div class="audit__form-name">To</div>
        <input class="audit__form-block" type="datetime-local">
      </div>
      <div class="audit__form-row">
        <div class="audit__form-name">Event Type</div>
        <select class="audit__form-block">
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
      <div class="audit__form-row">
        <button class="btn btn--lightblue" type="button">Search</button>
      </div>
    </div>
    <div class="audit__form-col">
      <div class="audit__form-row">
        <div class="audit__form-name">Skills</div>
        <div class="audit__form-select">
          <CustomSelect
            :options="skills"
            class="selected"
          />
        </div>
      </div>
      <div class="audit__form-row">
        <div class="audit__form-name">Sub Criterion</div>
        <select class="audit__form-block">
          <option></option>
          <option>A1 - Суб критерий 1</option>
          <option>A2 - Суб критерий 2</option>
          <option>B1 - Суб критерий 1</option>
          <option>B2 - Суб критерий 2</option>
        </select>
      </div>
      <div class="audit__form-row">
        <div class="audit__form-name">Asspect</div>
        <select class="audit__form-block">
          <option></option>
          <option>A1 - Суб критерий 1</option>
          <option>A2 - Суб критерий 2</option>
          <option>B1 - Суб критерий 1</option>
          <option>B2 - Суб критерий 2</option>
        </select>
      </div>
      <div class="audit__form-row">
        <div class="audit__form-name">Competitor</div>
        <select class="audit__form-block">
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
import CustomSelect from "@/components/competition/component/CustomSelect";

export default {
  name: "AuditEventsForm",
  components: {CustomSelect},
  data() {
    return {
      skills: [
        '00 - Тестовая компетенция',
        '00J - Тестовая компетенция - Юниоры'
      ]
    }
  }
}
</script>

<style scoped>

</style>
