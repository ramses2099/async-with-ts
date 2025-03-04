import { getPostList } from './functions';


describe('getPostList', () => {
    it('should return an array of posts', async () => {
        const posts = await getPostList();
        expect(Array.isArray(posts)).toBe(true);
        expect(posts.length).toBeGreaterThan(0);
    });
});