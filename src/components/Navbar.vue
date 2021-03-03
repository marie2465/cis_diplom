<template>
  <div class="containers">
    <nav class="nav">
    <a href="/">
      <img src="../assets/images/house.svg" alt="home" class="nav__icon">
    </a>
    <ul class="nav__list nav__list--left">
      <li class="nav__item">
        <a href="/" class="nav__link">Competition</a><span class="nav__dropdown-icon">&#9660;</span>
        <ul class="nav__subnav">
          <li>
            <a href="/" class="nav__subnav-link">Import data</a>
          </li>
          <li>
            <a href="/" class="nav__subnav-link">Export data</a>
          </li>
          <li>
            <a href="/" class="nav__subnav-link">Skills</a>
          </li>
          <li>
            <a href="/" class="nav__subnav-link">People</a>
          </li>
          <li>
            <a href="/" class="nav__subnav-link">Teams</a>
          </li>
          <li>
            <a href="/" class="nav__subnav-link">Audit Events</a>
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
    <img src="../assets/images/server.svg" alt="home" class="nav__icon">
  </nav>
    <footer class="footer">
      <p>CIS software provided courtesy of WorldSkills International</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>

</style>
