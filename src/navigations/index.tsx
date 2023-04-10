import { useState, useEffect } from "react";
import { supabase } from "../lib/superbase";
import SignIn from "../components/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { Session } from "@supabase/supabase-js";
import MainNavigation from "./Main";
import AuthNavigation from "./Auth";

export default function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <NavigationContainer>
      {session && session.user ? (
        <MainNavigation key={session.user.id} session={session} />
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  );
}
