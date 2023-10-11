import { createClient } from '@supabase/supabase-js';
import { Database } from './supabase';


export const supabaseConnection = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? '', 
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
)
 
// export default async (req: NextApiRequest, res: NextApiResponse) => {
//   const allOnlineUsers = await supabaseConnection.from('users').select('*').eq('status', 'ONLINE')
//   res.status(200).json(allOnlineUsers);
// }

// npx supabase gen types typescript --project-id "wpaztqhaznrhfwlbnfvn" --schema public > types/supabase.ts

// change to rerender