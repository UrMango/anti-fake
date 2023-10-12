import axios from "axios";

export const getPosts = async (type : number, limit : number = 16, skip: number = 0, splitToFours : boolean = true) => {
	const res : any = (await axios.get(`/api/posts/get-posts?limit=${limit}&skip=${skip}&type=${type}`)).data;
	// console.log(res)
	const postRes : any[] = res.posts;
	if(splitToFours) {
		const postRows : any[] = [];
		for (let i = 0; i < postRes.length; i += 4) {
			postRows.push(postRes.slice(i, i + 4));
		}
		// console.log(postRows)
		for (let i = 0; i < postRows.length; i++) {
			for (let j = 0; j < postRows[i].length; j++) {
				const post = postRows[i][j];
				// console.log(post);
				postRows[i][j] = { link: post.link, isSupport: post.action == "repost", id: post.id, platform: post.platform };
			}
		}
		// console.log(postRows);
		return postRows;
	} else {
		for (let i = 0; i < postRes.length; i++) {
			const post = postRes[i];
			// console.log(post);
			postRes[i] = { link: post.link, isSupport: post.action == "repost", id: post.id, platform: post.platform };			
		}
		// console.log(postRes);
		return postRes;
	}
};