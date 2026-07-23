import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json()
    if (!name || !email) {
      return NextResponse.json({ error: 'Name und E-Mail sind erforderlich.' }, { status: 400 })
    }
    console.log(`[Lead] Name: ${name}, Email: ${email}, Phone: ${phone || '-'}`)
    return NextResponse.json({
      success: true,
      message: 'Ihre Bewerbung wurde erfolgreich übermittelt. Marc Lindner wird sich innerhalb von 12 Stunden persönlich bei Ihnen melden.',
      leadId: `lead_${Math.random().toString(36).substr(2, 9)}`,
    })
  } catch (err: any) {
    return NextResponse.json({ error: 'Fehler bei der Übermittlung.' }, { status: 500 })
  }
}
