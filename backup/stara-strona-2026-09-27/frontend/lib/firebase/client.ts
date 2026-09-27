"use client";

import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import {
  connectAuthEmulator,
  getAuth,
  type Auth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

let app: FirebaseApp;
let authInstance: Auth;
let emulatorConnected = false;

function assertFirebaseConfig() {
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!apiKey?.trim()) {
    throw new Error(
      "Brak NEXT_PUBLIC_FIREBASE_API_KEY w frontend/.env.local. Skopiuj apiKey z Firebase Console → Project settings → Web app."
    );
  }
}

function getFirebaseApp(): FirebaseApp {
  if (!app) {
    assertFirebaseConfig();
    app = getApps().length ? getApps()[0]! : initializeApp(firebaseConfig);
  }
  return app;
}

export function getFirebaseAuth(): Auth {
  if (!authInstance) {
    authInstance = getAuth(getFirebaseApp());
    if (
      process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === "true" &&
      !emulatorConnected
    ) {
      connectAuthEmulator(authInstance, "http://127.0.0.1:9099", {
        disableWarnings: true,
      });
      emulatorConnected = true;
    }
  }
  return authInstance;
}
