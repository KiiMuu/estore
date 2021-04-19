import admin from 'firebase-admin';
import { readFile } from 'fs/promises';

const serviceAccount = JSON.parse(await readFile(new URL('../config/firebaseServiceAccountKey.json', import.meta.url)));

// import serviceAccount from '../config/firebaseServiceAccountKey.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default admin;