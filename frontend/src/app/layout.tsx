'use client'

import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useMemo } from 'react'
import { UrqlProvider, ssrExchange, fetchExchange, createClient, subscriptionExchange } from '@urql/next'
import { cacheExchange } from '@urql/next'
import theme from '@/theme'
import ExampleAppBar from '@/components/ExampleAppBar'
import { createClient as createWSClient, SubscribePayload } from 'graphql-ws'

export default function RootLayout({ children }: React.PropsWithChildren) {
  
  const [client, ssr] = useMemo(() => {
    const ssr = ssrExchange({
      isClient: typeof window !== 'undefined'
    })
    const wsClient = createWSClient({
      url: process.env.NEXT_PUBLIC_GRAPHQL_WS_ENDPOINT as string,
    })
    const client = createClient({
      url: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT as string,
      exchanges: [
        cacheExchange,
        ssr,
        fetchExchange,
        subscriptionExchange({
          forwardSubscription(operation) {
            return {
              subscribe: (sink) => {
                const dispose = wsClient.subscribe(
                  operation as SubscribePayload,
                  sink,
                )
                return {
                  unsubscribe: dispose,
                }
              },
            }
          },
        })
      ],
      suspense: true,
    })
    return [client, ssr]
  }, [])

  return (
    <html lang="ja">
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <UrqlProvider client={client} ssr={ssr}>
              <CssBaseline />
              <ExampleAppBar />
              {children}
            </UrqlProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
