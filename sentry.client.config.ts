import * as Sentry from "@sentry/nuxt";
Sentry.init({
  // If set up, you can use your runtime config here
  // dsn: useRuntimeConfig().public.sentry.dsn,
  dsn: "https://e6600512df57797f4fd551f8f8adf187@o4506869614903296.ingest.us.sentry.io/4508098677374976",
  integrations: [Sentry.replayIntegration()],
  release: `${process.env.APP_VERSION}`,
  environment: process.env.ENVIRONMENT ?? "local",
  // Tracing
  // We recommend adjusting this value in production, or using a tracesSampler for finer control.
  tracesSampleRate: process.env.NODE_ENV === "production" ? 0.5 : 0,
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: [
    "localhost",
    "roseslive.co.uk",
    "staging.roseslive.co.uk",
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
  beforeSend(event) {
    // Filter out errors on localhost
    if (process.env.NODE_ENV !== "production") {
      return null;
    }
    return event;
  },
});
