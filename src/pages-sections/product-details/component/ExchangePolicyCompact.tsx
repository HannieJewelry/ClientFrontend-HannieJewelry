// components/ExchangePolicyCompact.tsx
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, List, ListItem, ListItemText } from "@mui/material";

export default function ExchangePolicyCompact() {
    return (
        <Box sx={{ p: 1.5, maxWidth: 800, mx: "auto" }}>
            {/* Tiêu đề lớn */}
            <Typography variant="h6" fontWeight={600} mb={1}>
                1. Trang sức vàng 22K - 24K:
            </Typography>
            <Typography variant="body2" mb={1.5}>
                Thu đổi theo giá mua vào Bảng giá vàng Hannie Jewelry tại thời điểm giao dịch. (Được đổi sang đơn hàng có giá trị cao hơn theo chương trình ưu đãi Kinh doanh).
                <br />
                Đối với các sản phẩm kiềng, vòng bị mất miếng vàng: mua lại theo thỏa thuận.
            </Typography>

            {/* Tiêu đề lớn */}
            <Typography variant="h6" fontWeight={600} mb={1}>
                2. Kim cương tự nhiên, kim cương nuôi cấy (Lab-Grown Diamond) viên:
            </Typography>
            <Typography variant="body2" mb={1}>
                Kim cương viên còn đủ chứng thư kiểm định, giấy đảm bảo theo quy định của từng loại kim cương, thu mua theo bảng sau.
            </Typography>

            {/* Bảng chính sách */}
            <TableContainer component={Paper} sx={{ mb: 1.5 }}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ py: 0.5, px: 1 }}><b>Thời gian</b></TableCell>
                            <TableCell sx={{ py: 0.5, px: 1 }}><b>Dòng sản phẩm</b></TableCell>
                            <TableCell sx={{ py: 0.5, px: 1 }}><b>Tỷ lệ đổi hàng</b></TableCell>
                            <TableCell sx={{ py: 0.5, px: 1 }}><b>Tỷ lệ mua lại</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Dòng 1 */}
                        <TableRow>
                            <TableCell rowSpan={2} sx={{ py: 0.5, px: 1 }}>0-72 giờ</TableCell>
                            <TableCell sx={{ py: 0.5, px: 1 }}>KC, LDIA &lt; 4.5mm</TableCell>
                            <TableCell sx={{ py: 0.5, px: 1 }}>100%</TableCell>
                            <TableCell sx={{ py: 0.5, px: 1 }}>70%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ py: 0.5, px: 1 }}>KC, LDIA ≥ 4.5mm</TableCell>
                            <TableCell sx={{ py: 0.5, px: 1 }}>100%</TableCell>
                            <TableCell sx={{ py: 0.5, px: 1 }}>80%</TableCell>
                        </TableRow>
                        {/* Dòng 2 */}
                        <TableRow>
                            <TableCell rowSpan={4} sx={{ py: 0.5, px: 1 }}>Sau 72 giờ</TableCell>
                            <TableCell sx={{ py: 0.5, px: 1 }}>Viên không có tem riêng: KC &lt; 3.0mm</TableCell>
                            <TableCell colSpan={2} sx={{ py: 0.5, px: 1 }}>Theo quy chế thu đổi của trang sức đi kèm</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ py: 0.5, px: 1 }}>Viên không có tem riêng: LDIA &lt; 3.5mm</TableCell>
                            <TableCell colSpan={2} sx={{ py: 0.5, px: 1 }}>Theo quy chế thu đổi của trang sức đi kèm</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ py: 0.5, px: 1 }}>Viên có tem riêng: KC ≥ 3.0mm</TableCell>
                            <TableCell sx={{ py: 0.5, px: 1 }}>80%</TableCell>
                            <TableCell sx={{ py: 0.5, px: 1 }}>70%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{ py: 0.5, px: 1 }}>Viên có tem riêng: LDIA ≥ 3.5mm</TableCell>
                            <TableCell sx={{ py: 0.5, px: 1 }}>80%</TableCell>
                            <TableCell sx={{ py: 0.5, px: 1 }}>70%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Ghi chú nhỏ */}
            <List sx={{ mb: 1, pl: 1 }}>
                <ListItem sx={{ py: 0.25 }}>
                    <ListItemText primary="Khách hàng không có giấy đảm bảo hoặc mất chứng thư kiểm định kim cương: Mua lại theo thỏa thuận." />
                </ListItem>
                <ListItem sx={{ py: 0.25 }}>
                    <ListItemText primary="Khi bán kim cương GIV, VGA,... đã kiểm định trên sản phẩm Hannie Jewelry, chỉ cần có chứng thư sẽ mua lại theo quy chế; không cần vỉ." />
                </ListItem>
                <ListItem sx={{ py: 0.25 }}>
                    <ListItemText primary="Khi bán kim cương GIV, VGA,... đã kiểm định rồi, khách hàng không cần gửi kèm sản phẩm của Hannie Jewelry, chỉ mua lại kim cương còn nguyên vẹn cả chứng thư và vỉ." />
                </ListItem>
            </List>

            {/* Tiêu đề lớn */}
            <Typography variant="h6" fontWeight={600} mb={1}>
                3. Các dòng trang sức còn lại:
            </Typography>
            <Typography variant="body2">
                Bao gồm trang sức gắn đá trắng/đá màu, đá Moissanite, trang sức gắn kim cương tự nhiên, trang sức gắn kim cương tổng hợp (Lab-Grown Diamond), trang sức charm 14K, trang sức gắn ngọc trai, trang sức Platin, ghép Platin, đồng hồ,...
            </Typography>
        </Box>
    );
}
