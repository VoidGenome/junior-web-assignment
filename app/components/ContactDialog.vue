<template>
  <v-dialog v-model="open" max-width="640" :fullscreen="xs" scrollable>
    <v-card theme="light" rounded="lg" class="contact-card">
      <v-btn
        icon="mdi-close"
        variant="text"
        class="close-btn"
        aria-label="Close"
        @click="open = false"
      />

      <v-card-text class="px-6 px-sm-12 py-10">
        <h2 class="contact-title mb-8">Send Message</h2>

        <v-form ref="formRef" @submit.prevent="submit">
          <v-text-field
            v-model="form.name"
            label="Name"
            variant="underlined"
            color="#76504d"
            autocomplete="name"
            class="mb-2"
          />

          <v-text-field
            v-model="form.email"
            label="Email*"
            type="email"
            variant="underlined"
            color="#76504d"
            autocomplete="email"
            :rules="emailRules"
            class="mb-2"
          />

          <v-textarea
            v-model="form.message"
            label="Message"
            variant="underlined"
            color="#76504d"
            rows="4"
            auto-grow
            :rules="messageRules"
          />

          <v-alert
            v-if="status === 'success'"
            type="success"
            variant="tonal"
            density="compact"
            class="mt-4"
          >
            Thank you! Your message has been sent.
          </v-alert>
          <v-alert
            v-if="status === 'error'"
            type="error"
            variant="tonal"
            density="compact"
            class="mt-4"
          >
            Something went wrong. Please try again.
          </v-alert>

          <div class="text-center mt-6">
            <v-btn
              type="submit"
              rounded="pill"
              size="x-large"
              class="send-btn px-12"
              :loading="loading"
            >
              Send
            </v-btn>
          </div>
        </v-form>

        <p class="notice text-center mt-6 mb-0">
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">Privacy Policy</a>
          and
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener">Terms of Service</a>
          apply.
        </p>
        <br/>
        <br/>
        <p></p>
        <h3 class="hours-title mb-6">Marci Metzger - THE RIDGE REALTY GROUP</h3>
        <p>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
        <p>(206) 919-6886</p>
        <h3 class="hours-title mb-6">Office Hours</h3>

        <ul class="hours-list">
        <li
            v-for="item in hours"
            :key="item.day"
            class="hours-row"
            :class="{ 'hours-row--today': item.day === today }"
        >
            <span>{{ `${item.day} `}}</span>
            <span>{{ item.open }} – {{ item.close }}</span>
        </li>
        </ul>

        <div class="hours-summary mt-6">
        <span>Open daily</span>
        <span class="ml-8">8:00 am - 7:00 pm</span>
        </div>

        <p class="hours-note mt-6 mb-0">
        Appointments outside office hours available upon request. Just call!
        </p>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'

const { xs } = useDisplay()
const open = defineModel<boolean>({ default: false })

const formRef = ref()
const loading = ref(false)
const status = ref<'idle' | 'success' | 'error'>('idle')

const form = reactive({ name: '', email: '', message: '' })

const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+\..+/.test(v) || 'Enter a valid email',
]
const messageRules = [(v: string) => !!v || 'Please enter a message']

const submit = async () => {
  const { valid } = await formRef.value.validate()
  if (!valid) return

  loading.value = true
  status.value = 'idle'

  try {
    status.value = 'success'
    Object.assign(form, { name: '', email: '', message: '' })
    formRef.value.resetValidation()
  } catch {
    status.value = 'error'
  } finally {
    loading.value = false
  }
}
// Edit the hours here
const hours = [
  { day: 'Mon', open: '08:00 am', close: '07:00 pm' },
  { day: 'Tue', open: '08:00 am', close: '07:00 pm' },
  { day: 'Wed', open: '08:00 am', close: '07:00 pm' },
  { day: 'Thu', open: '08:00 am', close: '07:00 pm' },
  { day: 'Fri', open: '08:00 am', close: '07:00 pm' },
  { day: 'Sat', open: '08:00 am', close: '07:00 pm' },
  { day: 'Sun', open: '08:00 am', close: '07:00 pm' },
]

const today = ref('')
const updateToday = () => {
  today.value = new Date().toLocaleDateString('en-US', {
    weekday: 'short',
    timeZone: 'America/Los_Angeles',
  })
}

onMounted(updateToday)
watch(open, (isOpen) => {
  if (isOpen) status.value = 'idle' , updateToday()
})

</script>

<style scoped>
.contact-card {
  position: relative;
}
.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
}

.contact-title {
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  letter-spacing: 0.04em;
  color: #1c1c1c;
}

.send-btn {
  background: #e2e2e2 !important;
  color: #1c1c1c !important;
  font-family: 'Source Sans 3', sans-serif;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  box-shadow: none;
}
.send-btn:hover {
  background: #d4d4d4 !important;
}

.notice {
  font-family: 'Source Sans 3', sans-serif;
  font-size: 0.8rem;
  color: #555;
}
.notice a {
  color: #76504d;
  text-decoration: none;
}
.notice a:hover {
  text-decoration: underline;
}
</style>