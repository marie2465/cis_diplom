<template>
  <div class="compet component">
    <PeopleHeader class="compet"/>
    <div class="people__group">
      <PeopleTable class="people-table "/>
      <PeopleForm class="people__form"/>
    </div>
  </div>
</template>

<script>
import PeopleTable from "../../components/competition/people/PeopleTable";
import PeopleForm from "../../components/competition/people/PeopleForm";
import PeopleHeader from "../../components/competition/people/PeopleHeader";

export default {
  name: "People",
  components: {PeopleHeader, PeopleForm, PeopleTable}
}
</script>

<style scoped>

</style>
