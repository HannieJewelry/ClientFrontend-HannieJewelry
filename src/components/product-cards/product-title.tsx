import Link from "next/link";
import {H3, H6} from "components/Typography";

// ==============================================================
type Props = { title: string; slug: string };
// ==============================================================

export default function ProductTitle({ title, slug }: Props) {
  return (
    <Link href={`/products/${slug}`}>
      {/*<H3*/}
      {/*  mb={1}*/}
      {/*  ellipsis*/}
      {/*  title={title}*/}
      {/*  fontSize={14}*/}
      {/*  fontWeight={600}*/}
      {/*  className="title"*/}
      {/*  color="text.secondary">*/}
      {/*  {title}*/}
      {/*</H3>*/}
        <H6

            title={title}
            sx={{
                overflow: "hidden",
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2, // Limits the text to 2 lines
                textAlign: "center",
            }}
        >
            {title}
        </H6>
    </Link>
  );
}
