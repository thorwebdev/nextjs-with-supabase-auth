import { supabase } from '../../utils/initSupabase';

// Example of how to verify and get user data server-side.
const getUser = async (req, res) => {
  const { data: user, error } = await supabase.auth.api.getUser(
    req.cookies['sb:token']
  );

  if (error) return res.status(401).json({ error: error.message });
  return res.status(200).json(user);
};

export default getUser;
