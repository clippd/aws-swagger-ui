import express from 'express'
import serverless from 'serverless-http'
import { serve, setup } from 'swagger-ui-express'

const app = express()
app.use(
  '/docs',
  serve,
  setup(null, {
    swaggerOptions: {
      url: process.env.SWAGGER_SPEC_URL
    }
  })
)

export const handler = serverless(app)