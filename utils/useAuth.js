import { useEffect, useState } from 'react';
import { supabase } from './initSupabase';
import { setCookie, deleteCookie } from '../utils/cookies';

const useAuth = () => {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const supabaseAuthSession = supabase.auth.session();

    if (supabaseAuthSession?.access_token)
      setCookie('supabase_auth_token', supabaseAuthSession.access_token, {
        'max-age': supabaseAuthSession.expires_in,
      });

    setSession(supabaseAuthSession);
    setUser(supabaseAuthSession?.user ?? null);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, supabaseAuthSession) => {
        console.log(`Supbase auth event: ${event}`);

        if (event === 'SIGNED_IN')
          setCookie('supabase_auth_token', supabaseAuthSession.access_token, {
            'max-age': supabaseAuthSession.expires_in,
          });
        if (event === 'SIGNED_OUT') deleteCookie('supabase_auth_token');

        setSession(supabaseAuthSession);
        setUser(supabaseAuthSession?.user ?? null);
      }
    );
    return () => {
      authListener.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { user, session };
};

export { useAuth };
