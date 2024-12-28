import { client } from "@/sanity/lib/client";
import { STARTUP_QUERY_BY_ID } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import React from "react";

export const experimental_ppr = true;

export default async function StartupPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const get = await client.fetch(STARTUP_QUERY_BY_ID, { id });
  if (!get) return notFound();
  console.log("post", get);
  return (
    <h3 className="text-2xl font-bold">
      This is a startup number : {id}
      {get.title}
    </h3>
  );
}
