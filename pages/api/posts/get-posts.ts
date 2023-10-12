import { NextApiRequest, NextApiResponse } from 'next';
import { supabaseConnection } from '@/app/utils/supabaseConnection';

export const getPlatformByUrlDomain = (url: string): string => {
	let domain;
	try {
		domain = new URL(url).hostname;
	} catch (e) {
		domain = url
	}
	if (domain.includes('twitter.com') || domain.includes('x.com')) {
		return 'twitter';
	} else if (domain.includes('facebook.com')) {
		return 'facebook';
	} else if (domain.includes('instagram.com')) {
		return 'instagram';
	} else if (domain.includes('tiktok.com')) {
		return 'tiktok';
	} else if (domain.includes('spotify')) {
		return 'spotify';
	} else if (domain.includes('youtube.com') || domain.includes('youtu.be')) {
		return 'youtube';
	} else {
		return 'unknown';
	}
}

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

        res.status(200).json({posts: posts.data?.map(post => {
            return {
                ...post,
                platform: getPlatformByUrlDomain(post.link || "")
            }
        }) || [], count: posts.count || 0});
    } catch(error) {
        res.status(404).json({error});
    }
}
