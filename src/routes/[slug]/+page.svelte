<script lang="ts">
   import MarkdownIt from 'markdown-it'
   import { type PageData } from '../../../.svelte-kit/types/src/routes/$types.js';

   let { data } = $props<{ data: PageData }>()
</script>

{data.content}
