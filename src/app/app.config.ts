import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideFirebaseApp } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { provideAuth } from '@angular/fire/auth';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(()=>
    initializeApp({
        apiKey: "AIzaSyCCiyZ73n9_tI5oxoznm6EtkTvEwiH3ARI",
        authDomain: "daa-ii-2025-4f43d.firebaseapp.com",
        projectId: "daa-ii-2025-4f43d",
        storageBucket: "daa-ii-2025-4f43d.firebasestorage.app",
        messagingSenderId: "166412846390",
        appId: "1:166412846390:web:525e35d01a53a606dd9f97",
        measurementId: "G-MPFH5K035R"
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
