import { NextResponse } from 'next/server';

export async function POST() {
  // Renvoie juste une réponse avec le message "Logged out"
  return NextResponse.json(
    { Response: 'Logged out' },
    { status: 200 }
  );
}
