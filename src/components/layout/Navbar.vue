<template>
  <div>
    <nav class="nav">
      <a class="nav__first" href="/">
        <img src="../../assets/images/house.svg" alt="home" class="nav__icon">
      </a>
      <ul class="nav__list nav__list--left">
        <li class="nav__item">
          <router-link to="/competition" exact class="nav__link">Competition</router-link><span class="nav__dropdown-icon">&#9660;</span>
          <ul class="nav__subnav">
            <li>
              <router-link to="/competition/import" class="nav__subnav-link">Import data</router-link>
            </li>
            <li>
              <router-link to="/competition/export" class="nav__subnav-link">Export data</router-link>
            </li>
            <li>
              <router-link to="/competition/skills" class="nav__subnav-link">Skills</router-link>
            </li>
            <li>
              <router-link to="/competition/people" class="nav__subnav-link">People</router-link>
            </li>
            <li>
              <router-link to="/competition" class="nav__subnav-link">Teams</router-link>
            </li>
            <li>
              <router-link to="/competition" class="nav__subnav-link">Audit Events</router-link>
            </li>
          </ul>
        </li>
        <li class="nav__item">
          <a href="/" class="nav__link">Marking scheme</a><span class="nav__dropdown-icon">&#9660;</span>
          <ul class="nav__subnav">
            <li>
              <a href="/" class="nav__subnav-link">WS Standards Specification</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Marking Scheme</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Calculations</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Marking Schedule</a>
            </li>
          </ul>
        </li>
        <li class="nav__item">
          <a href="/" class="nav__link">Assessment</a><span class="nav__dropdown-icon">&#9660;</span>
          <ul class="nav__subnav">
            <li>
              <a href="/" class="nav__subnav-link">Marking Forms</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Enter Marks</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Invalid Judgement Scores</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Lock Marks</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">View Marks</a>
            </li>
          </ul>
        </li>
        <li class="nav__item">
          <a href="/" class="nav__link">Reports</a><span class="nav__dropdown-icon">&#9660;</span>
          <ul class="nav__subnav">
            <li>
              <a href="/" class="nav__subnav-link">Skill Preparedness</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">WSSS Mark Allocation Table</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Expert Marking Load</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Missing Marks</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Change Marks</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Mark Entry Overview</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Mark Entry Progress</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Marking Analysis</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Range of Marks</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Competitor Performance</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Mark Distribution</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Assessment Analysis</a>
            </li>
          </ul>
        </li>
      </ul>

      <ul class="nav__list nav__list--right">
        <li class="nav__item">
          <a href="/" class="nav__link">Expert 1</a><span class="nav__dropdown-icon">&#9660;</span>
          <ul class="nav__subnav">
            <li>
              <a href="/" class="nav__subnav-link">Preferences</a>
            </li>
            <li>
              <a href="/" class="nav__subnav-link">Logout</a>
            </li>
          </ul>
        </li>
      </ul>
      <img src="../../assets/images/server.svg" alt="home" class="nav__icon">
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
