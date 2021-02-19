import admin from 'firebase-admin';

import serviceAccount from '../config/firebaseServiceAccountKey.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

export default admin;
