import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  // 1. Récuperer le "refreshToken" de la requête

  // 2. S'il n'y a pas de "refreshToken", renvoyer une erreur

  try {
    // 3. Vérifier le refresh token

    // 4. Générer un nouveau token d'accès

    // 5. Renvoyer le nouveau token en réponse
  } catch (error) {
    // 6. Renvoyer une erreur spécifiant que le "refreshToken" n'est pas valide.
  }
}
