import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseConnection } from '@/app/utils/supabaseConnection';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {limit = 20, skip = 0, type = 1} = req.query;

    try {
        if(typeof +limit !== "number" || typeof +skip !== "number") return;
        let post = supabaseConnection
        .from("links")
        .select("id, link, action")
        .limit(+limit - 1)
        .range(2 + +skip,2 + +skip + +limit-1)
        .eq("active", true)
        .neq("action", '');
        if(+type == 1) post = post.eq("action", 'repost');
        if(+type == 2) post = post.eq("action", 'report');

        const posts = (await post).data;
        console.log(posts);
        res.status(200).json(posts);
    } catch (err) {
        console.error(err);
        res.status(404).json({error: "Links not found!"});
    }
}
