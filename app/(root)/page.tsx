import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupCardType } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import React from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  console.log("searchParams", searchParams);
  const query = (await searchParams).query;

  const { data: posts } = await sanityFetch({ query: STARTUP_QUERY });
  console.log("posts", posts);
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitch your startup, <br /> Connect with your enterpreneur
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Start up"}
        </p>

        <ul className="mt-7 card_grid">
          {posts.map((post: StartupCardType) => {
            return <StartupCard key={post?._id} post={post} />;
          })}
        </ul>
      </section>
      <SanityLive />
    </>
  );
}
