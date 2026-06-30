from __future__ import annotations

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPAuthorizationCredentials, HTTPBearer
from firebase_admin.auth import ExpiredIdTokenError, InvalidIdTokenError, RevokedIdTokenError

from app.firebase_admin_init import verify_id_token

bearer_scheme = HTTPBearer(auto_error=False)


def get_current_admin(
    credentials: HTTPAuthorizationCredentials | None = Depends(bearer_scheme),
) -> dict:
    if credentials is None:
        raise HTTPException(
            status.HTTP_401_UNAUTHORIZED, "Brak tokenu uwierzytelniającego."
        )
    try:
        return verify_id_token(credentials.credentials)
    except (InvalidIdTokenError, ExpiredIdTokenError, RevokedIdTokenError, ValueError) as exc:
        raise HTTPException(
            status.HTTP_401_UNAUTHORIZED, "Nieprawidłowy lub wygasły token."
        ) from exc
