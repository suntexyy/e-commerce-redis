export const pageCacheKey = (id: string) => {
	return `pagecache#${id}`;
};

export const usersKey = (userId: string) => `users#${userId}`;

export const sessionsKey = (sessionId: string) => `sessions#${sessionId}`;

export const itemsKey = (itemId: string) => `items#${itemId}`;

export const usernameUniqueKey = () => `username:unique`;

export const userLikesKey = (userId: string) => `users:likes#${userId}`;
