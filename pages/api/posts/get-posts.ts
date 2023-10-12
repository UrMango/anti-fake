import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseConnection } from '@/app/utils/supabaseConnection';

const postTypes = ["%", "repost", "report"];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {limit = 20, skip = 0, type = 0} = req.query;

    try {
        if(
            typeof +limit !== "number" || 
            typeof +skip !== "number" || 
            typeof +type !== "number"
        ) throw "Invalid request";

        const posts = await supabaseConnection
            .from("links")
            .select("id, link, action", {count: "exact"})
            .limit(+limit - 1)
            .range(2 + +skip, 2 + +skip + +limit - 1)
            .neq("action", '')
            .eq("active", true)
            .like("action", postTypes[+type]);

        res.status(200).json({posts: posts.data || [], count: posts.count || 0});
    } catch(error) {
        res.status(404).json({error});
    }
}
