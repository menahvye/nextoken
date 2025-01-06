import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request) {
  // 1. Récupérer "authorization" dans les "headers" et le stocker dans un variable "authHeader"

  // 2. Récupérer le token dans le "authHeader"

  // 3. S'il n'y a pas de token alors renvoyer une erreur

  try {
    // 4. Vérifier le JWT
    // 5. Renvoyer la réponse avec le "decoded"
  } catch (error) {
    // 6. Renvoyer une erreur
  }
}
