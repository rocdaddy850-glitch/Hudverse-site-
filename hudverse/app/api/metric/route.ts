import { NextResponse } from 'next/server';

export async function GET() {
  const value = Math.round(Math.random() * 1000);
  const ts = new Date().toISOString();
  return NextResponse.json({ value, ts });
}
