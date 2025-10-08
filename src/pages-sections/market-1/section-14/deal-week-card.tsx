import Image from "next/image";
// STYLED COMPONENTS
import { CardRoot, StyledParagraph } from "./styles";

// ===========================================================
interface Props {
    off: number;
    title: string;
    imgUrl: string;
}
// ===========================================================

export default function DealWeekCard({ title, imgUrl, off }: Props) {
    return (
        <CardRoot>
            <Image
                alt={title}
                width={580}
                height={225}
                src={imgUrl}
                className="banner"
                style={{ borderRadius: 12 }} // tùy chỉnh bo góc nếu muốn
            />

            {/* ✅ Hiển thị tiêu đề bên dưới hình ảnh */}
            <StyledParagraph>{title}</StyledParagraph>
        </CardRoot>
    );
}
