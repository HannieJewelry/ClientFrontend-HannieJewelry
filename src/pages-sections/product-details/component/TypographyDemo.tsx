import { Typography, Stack } from "@mui/material";

export default function TypographyDemo() {
    return (
        <Stack spacing={2}>
            <Typography variant="h1">h1 - 96px / 6rem / 300</Typography>
            <Typography variant="h2">h2 - 60px / 3.75rem / 300</Typography>
            <Typography variant="h3">h3 - 48px / 3rem / 400</Typography>
            <Typography variant="h4">h4 - 34px / 2.125rem / 400</Typography>
            <Typography variant="h5">h5 - 24px / 1.5rem / 400</Typography>
            <Typography variant="h6">h6 - 20px / 1.25rem / 500</Typography>
            <Typography variant="subtitle1">subtitle1 - 16px / 1rem / 400</Typography>
            <Typography variant="subtitle2">subtitle2 - 14px / 0.875rem / 500</Typography>
            <Typography variant="body1">body1 - 16px / 1rem / 400</Typography>
            <Typography variant="body2">body2 - 14px / 0.875rem / 400</Typography>
            <Typography variant="button">button - 14px / 0.875rem / 500 (Uppercase)</Typography>
            <Typography variant="caption">caption - 12px / 0.75rem / 400</Typography>
            <Typography variant="overline">overline - 12px / 0.75rem / 400 (Uppercase)</Typography>
        </Stack>
    );
}
