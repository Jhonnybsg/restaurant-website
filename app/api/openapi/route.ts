// app/api/openapi/route.ts
import { readFileSync } from 'fs'
import { join } from 'path'
import { NextResponse } from 'next/server'

export async function GET() {
  const file = readFileSync(join(process.cwd(), 'openapi.yaml'), 'utf8')
  return new NextResponse(file, {
    headers: {
      'Content-Type': 'application/yaml',
    },
  })
}
