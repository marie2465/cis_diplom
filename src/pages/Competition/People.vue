<template>
  <div class="compet component">
    <PeopleHeader class="compet"/>
    <div class="people__group">
      <PeopleTable :table-data="filteredData"/>
      <PeopleForm @searchPeople="searchPeople"/>
    </div>
  </div>
</template>

<script>
import PeopleTable from '../../components/competition/people/PeopleTable'
import PeopleForm from '../../components/competition/people/PeopleForm'
import PeopleHeader from '../../components/competition/people/PeopleHeader'

export default {
  name: 'People',
  data: () => ({
    tableData: [
      {
        firstName: 'Иван',
        lastName: 'Иванов',
        position: 'Competitor',
        skills: ' Тестовая компетенция',
        member: 'Московская область'
      },
      {
        firstName: 'Петр',
        lastName: 'Петров',
        position: 'Expert',
        skills: 'Тестовая компетенция',
        member: 'Московская область'
      },
      {
        firstName: 'Илья',
        lastName: 'Звягинцев',
        position: 'Competitor',
        skills: 'Тестовая компетенция - Юниоры',
        member: 'Республика Татарстан'
      },
      {
        firstName: 'Александр',
        lastName: 'Соболев',
        position: 'Expert',
        skills: ' Тестовая компетенция - Юниоры',
        member: 'Республика Татарстан'
      }
    ],
    filteredData: []
  }),
  components: {
    PeopleHeader,
    PeopleForm,
    PeopleTable
  },
  methods: {
    searchPeople(searchData) {
      if (!searchData.firstName && !searchData.lastName) {
        this.filteredData = this.tableData
        return false
      }
      let filtered = this.tableData
      filtered = filtered.filter(people => people.firstName.toLowerCase().includes(searchData.firstName))
      filtered = filtered.filter(people => people.lastName.toLowerCase().includes(searchData.lastName))
      filtered = filtered.filter(people => people.position.toLowerCase().includes(searchData.position))
      filtered = filtered.filter(people => people.skills.toLowerCase().includes(searchData.skills))
      filtered = filtered.filter(people => people.member.toLowerCase().includes(searchData.member))
      this.filteredData = filtered
    }
  }
}
</script>
