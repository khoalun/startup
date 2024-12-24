import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(
  `
* [_type == "startup" && defined(slug.current) && !defined($search)   || category match $search || description match $search || title match $search || author->name match $search]  | order(_createAt desc){
   _id, 
     title, 
     slug, 
     _createdAt,
     author -> { _id, name,image,bio
     },
     views,
     description,
     category,
     image
}
 `
);
