import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Author, Startup } from "@/sanity/types";

export type StartupCardType = Omit<Startup, "author"> & { author?: Author };
const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    _id,
    _createdAt,
    views,
    author,
    description,
    image,
    category,
    title,
  } = post;
  return (
    <li className="startup-card group">
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>

        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium"> {views} </span>
        </div>
      </div>
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${author?._id}`}>
            <p className="text-16-medium line-clamp-1">{author?.name}</p>
          </Link>

          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-2">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <Image
            src="data:image/jpeg;base64,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"
            alt="avatar"
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
      </Link>
      <img src={image} alt={"title"} className="startup-card_img" />

      <div className="flex-between gap-3 mt-5">
        <Link href={`?query=${category?.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>

        <Button className="startup-card_btn" asChild>
          <Link href={`/startup/${_id}`}>Details</Link>
        </Button>
      </div>
    </li>
  );
};

export default StartupCard;
