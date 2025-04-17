// app/api/docs/page.tsx
'use client'

import { useEffect, useRef } from 'react'
import SwaggerUI from 'swagger-ui-dist/swagger-ui-es-bundle.js'
import 'swagger-ui-dist/swagger-ui.css'

export default function SwaggerDocs() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      SwaggerUI({
        domNode: ref.current,
        url: '/api/openapi',
      })
    }
  }, [])

  return (
    <div>
      <h1 style={{ fontSize: '24px', marginBottom: '1rem' }}>API Docs</h1>
      <div ref={ref} />
    </div>
  )
}
