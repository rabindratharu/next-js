import { ApolloProvider } from "@apollo/client/react";
import client from "@/lib/apollo";

/**
 * Header component.
 */
export default async function Header() {
  // Get the menu.

  return (
    <header className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
      <div className="flex flex-col gap-y-3 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="mb-0">Next.js WordPress</h1>
      </div>
    </header>
  );
}
