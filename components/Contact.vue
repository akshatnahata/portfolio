<template>
  <section id="contact" class="mt-5 xl:mt-16 2xl:mt-30">
    <div class="col-span-full h-12 xl:h-28">
      <h3>{{ $t('contact.title') }}</h3>
      <hr>
    </div>
    <p class="text-white mx-auto mt-5 w-full lg:w-3/5">
      {{ $t('contact.paragraph') }}
    </p>
    <form
      ref="contactform"
      class="w-full max-w-lg mx-auto mt-3"
      netlify
      netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact">
      <p v-if="success" class="rounded bg-green-500 text-white p-3 my-2">
        {{ $t('contact.success') }}
      </p>
      <ul v-if="invalid" class="my-4 rounded bg-red-500 text-white p-3 my-2">
        <li v-for="(error, index) in errorMessages" :key="`error-${index}`">
          {{ $t(error) }}
        </li>
      </ul>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label for="first-name">
            {{ $t('contact.firstName') }}
            <sup class="text-red-500">*</sup>
          </label>
          <input
            id="first-name"
            v-model="input.firstName"
            name="firstName"
            type="text"
            class="textfield"
            required
          >
        </div>
        <div class="w-full md:w-1/2 px-3">
          <label for="last-name">
            {{ $t('contact.lastName') }}
            <sup class="text-red-500">*</sup>
          </label>
          <input
            id="last-name"
            v-model="input.lastName"
            name="lastName"
            type="text"
            class="textfield"
            required
          >
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label for="company">
            {{ $t('contact.company') }}
          </label>
          <input
            id="company"
            v-model="input.company"
            name="company"
            class="textfield"
          >
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label for="email">
            {{ $t('contact.email') }}
            <sup class="text-red-500">*</sup>
          </label>
          <input
            id="email"
            v-model="input.email"
            name="email"
            class="textfield"
          >
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 mb-6">
        <div class="w-full px-3">
          <label for="message">
            {{ $t('contact.message') }}
            <sup class="text-red-500">*</sup>
          </label>
          <textarea
            id="message"
            v-model="input.message"
            name="message"
            class="textfield h-48 no-resize"
            required
          />
        </div>
      </div>
      <div class="">
        <div class="w-full">
          <button
            v-if="!sending"
            class="bg-teal-300 text-gray rounded w-full mx-auto font-bold py-2"
            type="button"
            @click="sendMessage"
          >
            {{ $t('contact.send') }}
          </button>
          <img v-if="sending" src="~/assets/img/puff.svg" class="mx-auto">
        </div>
        <div class="md:w-2/3" />
      </div>
    </form>
  </section>
</template>

<script>
export default {
  data: () => ({
    input: {
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      message: '',
    },
    errorMessages: [],
    invalid: false,
    sending: false,
    success: false,
  }),
  methods: {
    validate() {
      let invalid = false;
      this.errorMessages = [];

      if (
        (!this.input.firstName || this.input.firstName.length === 0) &&
        (!this.input.lastName || this.input.lastName.length === 0) &&
        (!this.input.email || this.input.email.length === 0) &&
        (!this.input.message || this.input.message.length === 0)
      ) {
        this.errorMessages.push('error.required');
        invalid = true;
      }

      // eslint-disable-next-line
      const emailRegex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
      if (!emailRegex.test(this.input.email)) {
        this.errorMessages.push('error.email');
        invalid = true;
      }

      this.invalid = invalid;
    },
    async sendMessage(e) {
      e.preventDefault();
      this.validate();

      if (!this.invalid) {
        this.sending = true;

        try {
          const formData = new FormData(this.$refs.contactform);
          await fetch('/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(formData).toString(),
          });
          this.success = true;
        } catch (err) {
          this.errorMessages.push('error.unknown');
          this.invalid = true;
        }

        this.sending = false;
        this.input = {
          firstName: '',
          lastName: '',
          company: '',
          email: '',
          message: '',
        };
      }
    },
  },
};
</script>

<style scoped>
label {
  @apply block uppercase tracking-wide text-teal-300 text-xs font-bold mb-2;
}

.textfield {
  @apply appearance-none block w-full bg-neutral-200 text-neutral-700
        border border-neutral-200 rounded py-2 px-2 mb-3 leading-tight;
}

.textfield:focus {
  @apply outline-none bg-white border-neutral-500;
}
</style>
