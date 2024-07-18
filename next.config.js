if (
  !process.env.WORDPRESS_API_URL ||
  !URL.canParse(process.env.WORDPRESS_API_URL)
) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `);
}

const { protocol, hostname, port, pathname } = new URL(
  process.env.WORDPRESS_API_URL
);

/** @type {import('next').NextConfig} */
module.exports = {
  optimizeFonts: true,
  images: {
    remotePatterns: [
      {
        protocol: protocol.slice(0, -1),
        hostname,
        port: port || "", // Default to an empty string if no port is provided
        pathname: `${pathname}**`, // Remove the trailing slash and ensure the path pattern matches
      },
      {
        protocol: "https",
        hostname: "secure.gravatar.com",
        port: "",
        pathname: "/avatar/**",
      },
      {
        protocol: "https",
        hostname: "demo.aarambhathemes.com",
        port: "",
        pathname: "/sticky-youtube-video-onscroll/wp-content/uploads/**",
      },
    ],
    minimumCacheTTL: 15000000,
  },
};
