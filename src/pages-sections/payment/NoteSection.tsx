import { Box, Typography, Paper } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";


const NoteHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2)
}));

const NoteHeading = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.main,
    fontWeight: 600,
    marginLeft: theme.spacing(1),
    fontSize: '1rem',
    [theme.breakpoints.up("sm")]: {
        fontSize: '1.1rem',
    }
}));

const AlertText = styled(Typography)(({ theme }) => ({
    color: theme.palette.error.main,
    fontSize: "0.8rem",
    marginTop: theme.spacing(1),
    lineHeight: 1.4,
    [theme.breakpoints.up("sm")]: {
        fontSize: 13,
    }
}));

const FooterNote = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(3),
    fontStyle: "italic",
    color: theme.palette.grey[700],
    padding: theme.spacing(2),
    borderLeft: `3px solid ${theme.palette.success.main}`,
    background: `rgba(${parseInt(theme.palette.success.main.slice(1, 3), 16)}, ${parseInt(theme.palette.success.main.slice(3, 5), 16)}, ${parseInt(theme.palette.success.main.slice(5, 7), 16)}, 0.05)`,
    fontSize: "0.85rem",
    [theme.breakpoints.up("sm")]: {
        fontSize: "0.9rem",
        marginTop: theme.spacing(3),
    }
}));

const ListItem = styled("li")(({ theme }) => ({
    fontSize: "0.85rem",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        fontSize: "0.9rem"
    },
    "&:last-child": {
        marginBottom: 0
    }
}));

const StyledList = styled("ul")(({ theme }) => ({
    margin: `${theme.spacing(2)} 0 ${theme.spacing(2)} ${theme.spacing(2)}`, // 16px all around
    padding: 0
}));

const TextBlock = styled(Typography)(({ theme }) => ({
    fontSize: "0.85rem",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
        fontSize: "0.9rem"
    }
}));

export default function NoteSection() {
    return (
        <Box>
            <NoteHeader>
                <InfoOutlinedIcon color="error" fontSize="small" />
                <NoteHeading variant="subtitle1">LƯU Ý</NoteHeading>
            </NoteHeader>
            <StyledList>
                <ListItem>
                    Ghi nội dung chuyển khoản <b>ĐÚNG NỘI DUNG BÊN TRÊN</b>.
                    <AlertText>
                        (*Trong trường hợp ghi nhầm Username của người khác, Hannie Jewelry sẽ không chịu trách nhiệm!)
                    </AlertText>
                </ListItem>
            </StyledList>

            <TextBlock>
                Sau khi bạn thanh toán, hệ thống sẽ <span style={{ color: "#1976d2", fontWeight: 700 }}>tự động xác nhận</span> và <span style={{ color: "#222", fontWeight: 700 }}>ưu tiên đóng gói, giao hàng</span> cho bạn trong thời gian sớm nhất.
            </TextBlock>

            <FooterNote>
                Trong trường hợp sau <b style={{ color: "#1976d2" }}>5 phút</b> không được xử lý tự động vui lòng{" "}
                <b style={{ color: "#1976d2" }}>liên hệ CSKH</b> để được trợ giúp.
            </FooterNote>
        </Box>
    );
}