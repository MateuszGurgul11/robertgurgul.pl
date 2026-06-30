"""Contact form email notifications via Resend.

If RESEND_API_KEY / CONTACT_EMAIL_TO are not set (the default until the user
configures them at deploy time), this silently no-ops — the message is still
saved to Firestore regardless.
"""

from __future__ import annotations

import os

import httpx

RESEND_API_URL = "https://api.resend.com/emails"


def send_contact_notification(data: dict) -> None:
    api_key = os.getenv("RESEND_API_KEY")
    to_email = os.getenv("CONTACT_EMAIL_TO")
    if not api_key or not to_email:
        return

    from_email = os.getenv(
        "CONTACT_EMAIL_FROM", "Formularz kontaktowy <onboarding@resend.dev>"
    )
    body = (
        "Nowa wiadomość ze strony robertgurgul.pl\n\n"
        f"Imię i nazwisko: {data['firstName']} {data['lastName']}\n"
        f"E-mail: {data['email']}\n"
        f"Telefon: {data['phone']}\n\n"
        f"Wiadomość:\n{data['message']}"
    )

    try:
        httpx.post(
            RESEND_API_URL,
            headers={"Authorization": f"Bearer {api_key}"},
            json={
                "from": from_email,
                "to": [to_email],
                "reply_to": data["email"],
                "subject": f"Nowa wiadomość od {data['firstName']} {data['lastName']}",
                "text": body,
            },
            timeout=10,
        )
    except httpx.HTTPError:
        pass
