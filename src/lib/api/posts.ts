import { apiFetch } from './client'
import { postListSchema, postSchema } from './types'
import type { ApiPost, ApiPostList } from './types'

const NO_CACHE = { cache: 'no-store' as const }

/** 게시판 글 목록. */
export async function getPosts(
  options: { category?: string; limit?: number } = {},
): Promise<ApiPostList> {
  const params = new URLSearchParams()
  if (options.category) params.set('category', options.category)
  params.set('limit', String(options.limit ?? 100))

  const raw = await apiFetch(`/posts?${params.toString()}`, NO_CACHE)
  return postListSchema.parse(raw)
}

/** 단건 조회 (서버에서 viewCount +1 됨). */
export async function getPost(id: number): Promise<ApiPost> {
  const raw = await apiFetch(`/posts/${id}`, NO_CACHE)
  return postSchema.parse(raw)
}
