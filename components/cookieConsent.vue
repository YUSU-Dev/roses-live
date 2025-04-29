<template>
  <div
    v-if="displayCookieConsent"
    id="error-modal"
    class="align-end fixed bottom-0 right-0 z-50 flex justify-start overflow-y-auto overflow-x-hidden"
    aria-label="Cookie Consent Modal"
    role="dialog"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title">We value your privacy</h2>
        </div>
        <div class="modal-body">
          <div>
            <p>
              We use necessary cookies to ensure you get the best experience on
              our website. By continuing on our site you are agreeing to using
              cookies to help us understand usage and how to improve it. View
              our
              <a
                href="/terms-and-conditions"
                class="text-blue-800 underline dark:text-blue-400"
                >Cookie Policy</a
              >.
            </p>
          </div>
        </div>
        <div
          class="flex items-center justify-items-end gap-3 rounded-b border-t border-gray-200 p-4 md:p-5 dark:border-gray-600"
        >
          <button
            type="button"
            class="bg-roses-red hover:bg-roses-red-dark text-white font-bold py-2 px-4 rounded"
            @click="acceptCookies()"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { setCookie, getCookie } from "tiny-cookie";
export default {
  data() {
    return {
      displayCookieConsent: false,
    };
  },
  mounted() {
    const cookieConsent = getCookie("roseslive-cookie-consent");
    if (cookieConsent !== "ok") {
      this.displayCookieConsent = true;
    }
  },
  methods: {
    acceptCookies() {
      setCookie("roseslive-cookie-consent", "ok", {
        expires: 365,
      });
      this.displayCookieConsent = false;
    },
    rejectCookies() {
      setCookie("roseslive-cookie-consent", "rejected", {
        expires: 365,
      });
      this.displayCookieConsent = true;
    },
  },
};
</script>
