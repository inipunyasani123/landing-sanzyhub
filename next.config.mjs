/** @type {import('next').NextConfig} */
// Gambar statis, tanpa Image Optimization Vercel (kuota bulanan tim habis, 16 Okt 2026):
// next/image memakai image-loader.js yang menunjuk varian WebP siap pakai di public/_img/.
// Setelah menambah atau mengganti gambar di public/images, jalankan ulang:
//   node scripts/static-images.mjs . --dirs public/images
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [64, 128, 256, 384],
  },
  async headers() {
    return [{ source: '/_img/:path*', headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }] }];
  },
};

export default nextConfig;
