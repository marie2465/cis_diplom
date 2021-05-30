<template>
  <div class="component">
    <div class="teams">
      <div>
        <div class="teams__head">
          <div class="teams__head-name">Teams Menegment</div>
        </div>
        <div class="teams__content">
          <i class="teams__text">Select a skill</i>
          <CustomSelect
            :options="items"
            class="selected"
            v-model="selected"
          />
        </div>
      </div>
      <div class="teams__table" v-if="selected !== null">
        <div class="teams__table-import">
          <TeamsTable
            :itemsCompetitor="itemsCompetitor"
            :showData="true"
            headerTable="Competitor not in team"
            @sendId="sendId"
          />
        </div>
        <div class="teams__table-btn">
          <button class="btn btn--lightblue teams__btn" >
            Group
            <span class="chevron right"></span>
          </button>
          <button class="btn btn--lightblue teams__btn">
            <span class="chevron left"></span>
            Ungroup
          </button>
        </div>
        <div class="teams__table-imports">
          <TeamsTable
            :showData="false"
            headerTable="Teams"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSelect from '@/components/competition/component/CustomSelect'
import TeamsTable from '@/components/competition/teams/TeamsTable'

export default {
  name: 'Teams',
  components: {
    TeamsTable,
    CustomSelect
  },
  data: function () {
    return {
      items: [
        'first', 'second', 'third'
      ],
      itemsCompetitor: [
        {
          body: '(16) Конкурсант Республика Татарстан',
          id: 1,
          done: false
        },
        {
          body: '(42) Конкурсант Кемеровская область',
          id: 2,
          done: false
        },
        {
          body: '(50) Конкурсант МО',
          id: 3,
          done: false
        },
        {
          body: '(77) Конкурсант Москва',
          id: 4,
          done: false
        }
      ],
      headerTable: 'Competitor not in team',
      selected: ''
    }
  },
  methods:{
    sendId(data){
      console.log(data)
    }
  }
}
</script>

<style scoped>

</style>
