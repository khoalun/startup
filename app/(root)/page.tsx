import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";
import React from "react";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "Helen" },
      description: "This is a description",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTioLq9BtEWaCnVxysoi5qu3ZcKdnaNA34ICw&s",
      category: "Robots",
      title: "We Robots",
      _id: "1",
    },
  ];
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
          {posts.map((post: StartupCardType, index: number) => {
            return <StartupCard key={post?._id} post={post} />;
          })}
        </ul>
      </section>
    </>
  );
}
