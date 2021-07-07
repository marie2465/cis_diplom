<template>
  <div class="notification" ref="notif">
    <transition-group name="transition-animated"
                      class="notification_list">
      <div class="notification__text"
           v-for="message in messages"
           :key="message.id"
           :class="message.context"
      >
        {{ message.name }}
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    messages: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    hideNotification() {
      const not = this.$refs.notif
      if (this.messages.length) {
        setTimeout(function () {
          not.style.opacity = "0"
        }, 3000)
      }
    }
  },
  watch: {
    messages() {
      this.hideNotification()
    }
  },
  mounted() {
    this.hideNotification()
  }
}
</script>
