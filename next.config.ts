import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // S3 등 외부 이미지 도메인 사용 시 추가
  // images: { remotePatterns: [{ protocol: 'https', hostname: '*.amazonaws.com' }] },
}

export default nextConfig
