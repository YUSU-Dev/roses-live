import * as Sentry from '@sentry/nuxt'

Sentry.init({
  dsn: 'https://e6600512df57797f4fd551f8f8adf187@o4506869614903296.ingest.us.sentry.io/4508098677374976',
  // Tracing
  // We recommend adjusting this value in production, or using a tracesSampler for finer control.
  tracesSampleRate: 1.0, // Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
})
