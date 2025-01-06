import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function POST(request) {

  // 1. Récuperer le "refreshToken" de la requête
  const refreshToken = await request.headers.get('Authorization').substring(7)

  // 2. S'il n'y a pas de "refreshToken", renvoyer une erreur
  if(!refreshToken){
    return NextResponse.json(
      { error: 'Refresh Token not found' },
      { status: 401 }
    );
  }
  

  try {
    // 3. Vérifier le refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    
    // 4. Générer un nouveau token d'accès
    const username = decoded.username
    console.log(username);
    
    const newToken = jwt.sign({ username }, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRATION})
    
    
    // 5. Renvoyer le nouveau token en réponse
    return NextResponse.json(
      { 
        token: newToken
      },
      { status: 200 }
    );

  } catch (error) {
    return NextResponse.json(
      { 
        error: error
      },
      { status: 400 }
    );
  }
}
