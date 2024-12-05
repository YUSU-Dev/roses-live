<template>
  <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
    <div class="flex flex-col items-center gap-4">
      <div class="countdown-tile">
        <p class="countdown-text">
          {{ time.days }}
        </p>
      </div>
      <p class="countdown-title">
        DAYS
      </p>
    </div>
    <div class="flex flex-col items-center gap-4">
      <div class="countdown-tile">
        <p class="countdown-text">
          {{ time.hours }}
        </p>
      </div>
      <p class="countdown-title">
        HOURS
      </p>
    </div>
    <div class="flex flex-col items-center gap-4">
      <div class="countdown-tile">
        <p class="countdown-text">
          {{ time.minutes }}
        </p>
      </div>
      <p class="countdown-title">
        MINUTES
      </p>
    </div>
    <div class="flex flex-col items-center gap-4">
      <div class="countdown-tile">
        <p class="countdown-text">
          {{ time.seconds }}
        </p>
      </div>
      <p class="countdown-title">
        SECONDS
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RosesCountdown',
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      time: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    }
  },
  mounted() {
    this.countdown()
  },
  methods: {
    countdown() {
      const countDownDate = new Date(this.date).getTime()
      const x = setInterval(() => {
        const now = new Date().getTime()
        const distance = countDownDate - now
        this.time.days = Math.floor(distance / (1000 * 60 * 60 * 24))
        this.time.hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        )
        this.time.minutes = Math.floor(
          (distance % (1000 * 60 * 60)) / (1000 * 60),
        )
        this.time.seconds = Math.floor((distance % (1000 * 60)) / 1000)
        if (distance < 0) {
          clearInterval(x)
          this.time.days = 0
          this.time.hours = 0
          this.time.minutes = 0
          this.time.seconds = 0
        }
      }, 1000)
    },
  },
}
</script>
