import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseConnection } from '@/app/utils/supabaseConnection';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {limit = 20, skip = 0} = req.query;

    try {
        if(typeof +limit !== "number" || typeof +skip !== "number") return;

        const posts = (await supabaseConnection
            .from("links")
            .select("id, link, action")
            .limit(+limit)
            .range(+skip, +skip + +limit)
            .eq("active", true)
            .neq("action", '')).data;

        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(404).json({error: "Links not found!"});
    }
}
