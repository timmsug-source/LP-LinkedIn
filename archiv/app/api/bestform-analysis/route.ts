import { NextRequest, NextResponse } from 'next/server'
import { GoogleGenAI, Type } from '@google/genai'

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' })

const goalLabels: Record<string, string> = {
  fat_loss: 'Körperfett abbauen, Bauchansatz reduzieren & athletische Haltung zurückgewinnen',
  muscle_gain: 'Muskelmasse gezielt aufbauen, Schultern verbreitern & Haltung stärken',
  energy_focus: 'Deutlich mehr Leistungsfähigkeit, Energie & mentaler Fokus im Geschäftsalltag',
  general_athletic: 'Kompakte Athletik, gesteigerte Ausdauer & allgemeine Fitness steigern',
}

const obstacleLabels: Record<string, string> = {
  cooking_time: 'Keine Zeit für Vorkochen, gesundes Einkaufen oder langes Kochen',
  business_travel: 'Regelmäßige Geschäftsreisen, Restaurantbesuche & Hotelaufenthalte ohne Gym',
  irregular_hours: 'Unregelmäßige Termine, späte Meetings & hoher Alltagsstress',
  lack_of_structure: 'Mangelnder roter Faden, inkonsistentes Training & herkömmliche Standarddiäten',
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    if (!data?.name || !data?.email) {
      return NextResponse.json({ error: 'Name und E-Mail sind Pflichtfelder.' }, { status: 400 })
    }

    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json({ error: 'GEMINI_API_KEY nicht konfiguriert.' }, { status: 500 })
    }

    const { name, role, age, height, weight, workingHours, primaryGoal, biggestObstacle, bodyFatPct } = data

    const prompt = `
Du bist Marc Lindner, ein Elite-Personal-Trainer und High-Performance Coaching Experte für Unternehmer.
Erstelle eine detailreiche, datenbasierte 90-Tage-Bestform-Analyse für folgenden Klienten:

- Name: ${name}
- Position: ${role || 'Unternehmer'}
- Alter: ${age} Jahre
- Größe: ${height} cm
- Gewicht: ${weight} kg
- Arbeitszeit: ${workingHours} pro Woche
- Hauptziel: ${goalLabels[primaryGoal] || primaryGoal}
- Größte Hürde: ${obstacleLabels[biggestObstacle] || biggestObstacle}
- Körperfett-Level: ${bodyFatPct}

Führe folgende Berechnungen durch:
1. Berechne den täglichen Kalorienbedarf für das Ziel.
2. Bestimme die empfohlene tägliche Proteinzufuhr (1.8g - 2.2g pro kg Körpergewicht).
3. Empfiehl ein praxisnahes Makronährstoffverhältnis.
4. Formuliere eine smarte, zeiteffiziente Fitness-Strategie auf Deutsch.
5. Gliedere einen 3-Phasen-Ablaufplan (Phase 1: Wochen 1-4, Phase 2: Wochen 5-8, Phase 3: Wochen 9-12).
6. Erstelle einen "Restaurant- & Reise-Hack" passend zur Hürde.
7. Nenne einen extremen Zeiteffizienz-Trick.

WICHTIG: Alle Texte auf DEUTSCH. Spreche den Klienten mit "Sie" an.
`

    const response = await ai.models.generateContent({
      model: 'gemini-2.0-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            estimatedDailyCalorieNeeds: { type: Type.INTEGER },
            recommendedProteinGrams: { type: Type.INTEGER },
            macroRatio: {
              type: Type.OBJECT,
              properties: {
                carbs: { type: Type.INTEGER },
                protein: { type: Type.INTEGER },
                fat: { type: Type.INTEGER },
              },
              required: ['carbs', 'protein', 'fat'],
            },
            executiveFitnessStrategy: { type: Type.STRING },
            timeline90Days: {
              type: Type.OBJECT,
              properties: {
                phase1: { type: Type.STRING },
                phase2: { type: Type.STRING },
                phase3: { type: Type.STRING },
              },
              required: ['phase1', 'phase2', 'phase3'],
            },
            travelHack: { type: Type.STRING },
            timeEfficiencyTrick: { type: Type.STRING },
          },
          required: ['estimatedDailyCalorieNeeds', 'recommendedProteinGrams', 'macroRatio', 'executiveFitnessStrategy', 'timeline90Days', 'travelHack', 'timeEfficiencyTrick'],
        },
      },
    })

    const result = JSON.parse(response.text?.trim() || '{}')
    return NextResponse.json(result)
  } catch (err: any) {
    console.error('Bestform-Analysis Error:', err)
    return NextResponse.json({ error: 'Fehler bei der KI-Analyse. Bitte erneut versuchen.', details: err.message }, { status: 500 })
  }
}
