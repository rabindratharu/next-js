This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Register New Fields in WP GraphQl

```
add_action( 'graphql_register_types', function() {
	// Site Logo
	register_graphql_field( 'RootQuery', 'siteLogo', [
		'type' 			=> 'MediaItem',
		'description' 	=> __( 'The logo set in the customizer', 'your-textdomain' ),
		'resolve' 		=> function() {

			$logo_id = get_theme_mod( 'custom_logo' );

			if ( ! isset( $logo_id ) || ! absint( $logo_id ) ) {
				return null;
			}

			$media_object = get_post( $logo_id );
			return new \WPGraphQL\Model\Post( $media_object );

		}
	] );
	// Fav Icon
	register_graphql_field( 'RootQuery', 'favIcon', [
		'type' 			=> 'MediaItem',
		'description' 	=> __( 'The favicon set in the customizer', 'your-textdomain' ),
		'resolve' 		=> function() {

			$favicon_id = get_option( 'site_icon' );

			if ( ! isset( $favicon_id ) || ! absint( $favicon_id ) ) {
				return null;
			}

			$media_object = get_post( $favicon_id );
			return new \WPGraphQL\Model\Post( $media_object );

		}
	] );
} );
```
