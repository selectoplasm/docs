import type { PageServerLoad } from '../../../.svelte-kit/types/src/routes/$types.js';
import docs from "$lib/content/index.js"

export function entries() {
   const allRoutes = [
      ...docs.map(slug => ({
         slug
      })),

   ]
   return allRoutes;
}

export const load: PageServerLoad = async ({ params }) => {
   try {
      const post = await import(`$lib/content/${params.slug}.md?raw`);

      return {
         content: post.default,
      };
   } catch (e) {
      console.error("NO SLUG")
   }
};
