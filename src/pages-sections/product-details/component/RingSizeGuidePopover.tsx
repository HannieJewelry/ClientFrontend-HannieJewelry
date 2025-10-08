import {
    Box,
    Grid,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField,
    IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

type Props = {
    measuredLength: string;
    onChange: (value: string) => void;
    onClose?: () => void;
};

// Đặt sizeMap mặc định ở đây!
const sizeMap: Record<string, string> = {
    "4.5": "5", "4.6": "6", "4.7": "7", "4.8": "8", "4.9": "9",
    "5.0": "10", "5.1": "11", "5.2": "12", "5.3": "13", "5.4": "14",
    "5.5": "15", "5.6": "16", "5.7": "17", "5.8": "18", "5.9": "19",
    "6.0": "20", "6.1": "21", "6.2": "22", "6.3": "23", "6.4": "24",
    "6.5": "25", "6.6": "26", "6.7": "27", "6.8": "28", "6.9": "29",
    "7.0": "30", "7.1": "31", "7.2": "32", "7.3": "33", "7.4": "34",
};

// Styled components...
const Container = styled(Box)({
    position: "relative",
    paddingTop: 16,
    paddingBottom: 0,
});

const InnerWrapper = styled(Box)({
    padding: "0 16px",
});

const Header = styled(Box)({
    fontSize: "1.125rem",
    fontWeight: "bold",
    color: "#ef7d7d",
    textAlign: "center",
    marginBottom: 16,
    marginTop: 5,
});

const StepTitle = styled(Box)({
    fontSize: "0.6875rem",
    fontWeight: 500,
    marginBottom: 6,
});

const StepImage = styled("img")({
    width: "100%",
    marginBottom: 12,
});

const ResultSection = styled(Box)({
    backgroundColor: "#eee",
    borderRadius: "0 0 5px 5px",
    padding: 12,
});

const ResultBox = styled(Box)({
    maxHeight: 140,
    overflowY: "auto",
    border: "1px solid #ccc",
    borderRadius: 4,
    background: "#fafafa",
    padding: "4px 8px",
});

const StyledRadioGroup = styled(RadioGroup)({
    "& .MuiFormControlLabel-root": {
        paddingTop: 2,
        paddingBottom: 2,
        marginLeft: 0,
        marginRight: 0,
    },
    "& .MuiRadio-root": {
        padding: 4,
    },
    "& .MuiRadio-root .MuiSvgIcon-root": {
        height: "0.5rem",
        width: "0.5rem",
    },
    "& .MuiFormControlLabel-label": {
        fontSize: "0.5rem",
        fontWeight: 500,
    },
});

const SizeLabel = styled(Box)({
    fontSize: "0.625rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
});

export default function RingSizeGuidePopover({
                                                 measuredLength,
                                                 onChange,
                                                 onClose,
                                             }: Props) {
    return (
        <Container>
            {onClose && (
                <IconButton
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: 8,
                        right: 8,
                        zIndex: 2,
                    }}
                    size="small"
                    aria-label="close"
                >
                    <CloseIcon sx={{ fontSize: "1rem" }} />
                </IconButton>
            )}

            <InnerWrapper>
                <Header>Cách đo size nhẫn</Header>

                <Box mb={2}>
                    <StepTitle>
                        1. Dùng sợi chỉ hoặc dây không co giãn, quấn quanh vị trí đeo nhẫn,
                        đánh dấu vị trí cắt nhau
                    </StepTitle>
                    <StepImage
                        src="https://cdn.huythanhjewelry.vn/storage/photos/shares/huong-dan-do-size-tay/do-size-02.jpg"
                        alt="Ring step 1"
                    />
                </Box>

                <Box mb={2}>
                    <StepTitle>
                        2. Dùng thước đo chiều dài đoạn dây vừa đo được <i>(đơn vị cm)</i>
                    </StepTitle>
                    <StepImage
                        src="https://cdn.huythanhjewelry.vn/storage/photos/shares/huong-dan-do-size-tay/do-size-03.jpg"
                        alt="Ring step 2"
                    />
                </Box>
            </InnerWrapper>

            <ResultSection>
                <Grid container spacing={2}>
                    <Grid item xs={5}>
                        <Box fontSize="0.625rem" fontWeight={500} mb={0.5}>
                            Kết quả bạn đo được là:
                        </Box>
                        <ResultBox>
                            <StyledRadioGroup
                                value={measuredLength}
                                onChange={(e) => onChange(e.target.value)}
                            >
                                {Object.keys(sizeMap).map((value) => (
                                    <FormControlLabel
                                        key={value}
                                        value={value}
                                        control={<Radio size="small" />}
                                        label={`${value} cm`}
                                    />
                                ))}
                            </StyledRadioGroup>
                        </ResultBox>
                    </Grid>

                    <Grid item xs={7}>
                        <Box fontSize="0.625rem" fontWeight={500} mb={0.5}>
                            Bảng size phổ biến
                        </Box>
                        <StepImage
                            src="https://cdn.huythanhjewelry.vn/storage/photos/shares/huong-dan-do-size-tay/do-size-04.jpg"
                            alt="Size chart"
                        />

                        <Box display="flex" alignItems="center">
                            <SizeLabel>Size nhẫn của bạn là:</SizeLabel>
                            <TextField
                                variant="outlined"
                                size="small"
                                value={sizeMap[measuredLength] || "--"}
                                InputProps={{
                                    readOnly: true,
                                    sx: {
                                        textAlign: "center",
                                        fontWeight: 600,
                                        color: "#ef7d7d",
                                        fontSize: "0.8125rem",
                                        backgroundColor: "#fff",
                                    },
                                }}
                                sx={{
                                    ml: 1,
                                    minWidth: 32,
                                    ".MuiInputBase-input": {
                                        padding: "5px 8px",
                                        textAlign: "center",
                                    },
                                }}
                            />
                        </Box>
                    </Grid>
                </Grid>
            </ResultSection>
        </Container>
    );
}
