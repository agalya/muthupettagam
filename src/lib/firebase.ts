import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue, onDisconnect, set, serverTimestamp, increment } from "firebase/database";

// Keep a singleton reference to avoid duplicate listeners during hot-reloads in React
let isInitialized = false;

export const initializePresence = (
  onLiveCountChange: (count: number) => void,
  onTotalCountChange: (total: number) => void
) => {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  };

  // If no DB URL is provided, we silently exit as they haven't set it up yet.
  if (!firebaseConfig.databaseURL) {
    console.warn("Visitor Stats: No VITE_FIREBASE_DATABASE_URL provided.");
    return null;
  }

  try {
    console.log("Firebase initializing with:", firebaseConfig.databaseURL);
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    console.log("Database instance created");

    // Track total all-time visitors
    const visitorsRef = ref(db, "stats/total_visitors");
    onValue(visitorsRef, (snapshot) => {
      console.log("Received total visitors snapshot:", snapshot.val());
      onTotalCountChange(snapshot.val() || 0);
    }, (error) => {
      console.error("Firebase Total Views Error:", error);
    });

    // Track live currently-reading presence
    const presenceRootRef = ref(db, "presence");
    onValue(presenceRootRef, (snapshot) => {
      const data = snapshot.val();
      console.log("Received presence snapshot:", data);
      onLiveCountChange(data ? Object.keys(data).length : 0);
    }, (error) => {
      console.error("Firebase Presence Error:", error);
    });

    if (isInitialized) return db;
    isInitialized = true;

    // Establish my own connection lifeline
    const connectedRef = ref(db, ".info/connected");
    const sessionId = Math.random().toString(36).substring(2, 15);
    const myPresenceRef = ref(db, `presence/${sessionId}`);

    onValue(connectedRef, (snap) => {
      if (snap.val() === true) {
        // Prepare the deathrattle - delete my record immediately upon disconnection
        onDisconnect(myPresenceRef).remove().then(() => {
          // Announce I am here
          set(myPresenceRef, {
            active: true,
            joinedAt: serverTimestamp()
          });
        });

        // Increment the total global visitors counter safely (once per browser session)
        if (!sessionStorage.getItem("hasRecordedVisit")) {
          set(visitorsRef, increment(1)).then(() => {
            sessionStorage.setItem("hasRecordedVisit", "true");
          }).catch((err) => console.error("Could not record visit", err));
        }
      }
    });

    return db;
  } catch (err) {
    console.error("Firebase Initialization Failed", err);
    return null;
  }
};
