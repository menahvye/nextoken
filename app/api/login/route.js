import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request) {
  
  // 1. Récupération du "username" et du "password" depuis la requête.
  const { username, password } = await request.json() // No number after minus sign in JSON at position 1
  
    // Utilisation avec form-data :
    // const formData = await request.formData()
    // const username = formData.get('username');
    // const password = formData.get('password');

  // 2. Simulation d'un utilisateur enregistré en BDD
  const mockUser = {
    username: 'johndoe',
    password: 'password123',
  };

  // 3. Vérification des identifiants
  if (username == mockUser.username && password == mockUser.password) {
    // 4. Génération du token d'accès (module jsonwebtoken)
    const token = jwt.sign({ username }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION})

    // 5. Génération du refresh token (module jsonwebtoken)
    const refreshToken = jwt.sign({ username }, process.env.JWT_REFRESH_SECRET, {expiresIn: process.env.JWT_REFRESH_EXPIRATION})

    // 6. Envoi des tokens dans la réponse
    return NextResponse.json(
      { 
        token: token,
        refreshToken: refreshToken
      },
      { status: 200 }
    );
  }

  //7. Retour d'une erreur en cas d'identifiants invalides.
  return NextResponse.json(
    { error: 'Identifiants invalides.' },
    { status: 401 }
  );
}
