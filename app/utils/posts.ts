import axios from "axios";

export const getPlatformByUrlDomain = (url: string): string => {
	console.log(url)
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

export const getPosts = async (type : number, setPosts : (posts : any[]) => void, limit : number = 16, skip: number = 0, splitToFours : boolean = true) => {
	const res : any = (await axios.get(`/api/posts/get-posts?limit=${limit}&skip=${skip}&type=${type}`)).data;
	console.log(res)
	const postRes : any[] = res.posts;
	if(splitToFours) {
		const postRows : any[] = [];
		for (let i = 0; i < postRes.length; i += 4) {
			postRows.push(postRes.slice(i, i + 4));
		}
		console.log(postRows)
		for (let i = 0; i < postRows.length; i++) {
			for (let j = 0; j < postRows[i].length; j++) {
				const post = postRows[i][j];
				console.log(post);
				postRows[i][j] = { link: post.link, isSupport: post.action == "repost", id: post.id, platform: getPlatformByUrlDomain(post.link) };
			}
		}
		console.log(postRows);
		setPosts(postRows);
	} else {
		for (let i = 0; i < postRes.length; i++) {
			const post = postRes[i];
			console.log(post);
			postRes[i] = { link: post.link, isSupport: post.action == "repost", id: post.id, platform: getPlatformByUrlDomain(post.link) };			
		}
		console.log(postRes);
		setPosts(postRes);
	}

	// Change each object in postRows
	
};