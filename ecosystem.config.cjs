module.exports = {
  apps: [
    {
      name: 'swiper-carousel',
      port: '3003',
      exec_mode: 'fork',
      instances: 1,
      script: './.output/server/index.mjs',
    },
  ],
}
