import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

export async function GET(request) {

  // 1. Récupérer "authorization" dans les "headers" et le stocker dans un variable "authHeader"
  const authHeader = await request.headers.get('Authorization')
  
  // 2. Récupérer le token dans le "authHeader"
  if(authHeader){
    var token = authHeader.substring(7)
  }

  // 3. S'il n'y a pas de token alors renvoyer une erreur
  else{
    return NextResponse.json(
      { error: 'Token not found' },
      { status: 401 }
    );
  }
  
  try {
    // 4. Vérifier le JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5. Renvoyer la réponse avec le "decoded"
    return NextResponse.json(
      { decoded: decoded },
      { status: 200 }
    );
    
  } catch (err) {
    return NextResponse.json(
      { error: "Token error" },
      { status: 401 }
    );
  }
}
