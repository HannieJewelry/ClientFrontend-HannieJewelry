// components/ExchangePolicy.tsx
import { Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, List, ListItem, ListItemText } from "@mui/material";

export default function ExchangePolicy2() {
    return (
        <Box sx={{ p: 3, maxWidth: 800, mx: "auto" }}>
            {/* Tiêu đề lớn */}
            <Typography variant="h5" fontWeight={600} mb={2}>
                1. Trang sức vàng 22K - 24K:
            </Typography>
            <Typography variant="body1" mb={3}>
                Thu đổi theo giá mua vào Bảng giá vàng Hannie Jewelry tại thời điểm giao dịch. (Được đổi sang đơn hàng có giá trị cao hơn theo chương trình ưu đãi Kinh doanh).
                <br />
                Đối với các sản phẩm kiềng, vòng bị mất miếng vàng: mua lại theo thỏa thuận.
            </Typography>

            {/* Tiêu đề lớn */}
            <Typography variant="h5" fontWeight={600} mb={2}>
                2. Kim cương tự nhiên, kim cương nuôi cấy (Lab-Grown Diamond) viên:
            </Typography>
            <Typography variant="body1" mb={2}>
                Kim cương viên còn đủ chứng thư kiểm định, giấy đảm bảo theo quy định của từng loại kim cương, thu mua theo bảng sau.
            </Typography>

            {/* Bảng chính sách */}
            <TableContainer component={Paper} sx={{ mb: 3 }}>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell><b>Thời gian</b></TableCell>
                            <TableCell><b>Dòng sản phẩm</b></TableCell>
                            <TableCell><b>Tỷ lệ đổi hàng</b></TableCell>
                            <TableCell><b>Tỷ lệ mua lại</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* Dòng 1 */}
                        <TableRow>
                            <TableCell rowSpan={2}>0-72 giờ</TableCell>
                            <TableCell>KC, LDIA &lt; 4.5mm</TableCell>
                            <TableCell>100%</TableCell>
                            <TableCell>70%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>KC, LDIA ≥ 4.5mm</TableCell>
                            <TableCell>100%</TableCell>
                            <TableCell>80%</TableCell>
                        </TableRow>
                        {/* Dòng 2 */}
                        <TableRow>
                            <TableCell rowSpan={4}>Sau 72 giờ</TableCell>
                            <TableCell>Viên không có tem riêng: KC &lt; 3.0mm</TableCell>
                            <TableCell colSpan={2}>Theo quy chế thu đổi của trang sức đi kèm</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Viên không có tem riêng: LDIA &lt; 3.5mm</TableCell>
                            <TableCell colSpan={2}>Theo quy chế thu đổi của trang sức đi kèm</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Viên có tem riêng: KC ≥ 3.0mm</TableCell>
                            <TableCell>80%</TableCell>
                            <TableCell>70%</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Viên có tem riêng: LDIA ≥ 3.5mm</TableCell>
                            <TableCell>80%</TableCell>
                            <TableCell>70%</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            {/* Ghi chú nhỏ */}
            <List sx={{ mb: 2, pl: 2 }}>
                <ListItem sx={{ py: 0.5 }}>
                    <ListItemText primary="Khách hàng không có giấy đảm bảo hoặc mất chứng thư kiểm định kim cương: Mua lại theo thỏa thuận." />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                    <ListItemText primary="Khi bán kim cương GIV, VGA,... đã kiểm định trên sản phẩm Hannie Jewelry, chỉ cân có chứng thư sẽ mua lại theo quy chế; không cần vỉ." />
                </ListItem>
                <ListItem sx={{ py: 0.5 }}>
                    <ListItemText primary="Khi bán kim cương GIV, VGA,... đã kiểm định rồi, khách hàng không cần gửi kèm sản phẩm của Hannie Jewelry, chỉ mua lại kim cương còn nguyên vẹn cả chứng thư và vỉ." />
                </ListItem>
            </List>

            {/* Tiêu đề lớn */}
            <Typography variant="h5" fontWeight={600} mb={2}>
                3. Các dòng trang sức còn lại:
            </Typography>
            <Typography variant="body1">
                Bao gồm trang sức gắn đá trắng/đá màu, đá Moissanite, trang sức gắn kim cương tự nhiên, trang sức gắn kim cương tổng hợp (Lab-Grown Diamond), trang sức charm 14K, trang sức gắn ngọc trai, trang sức Platin, ghép Platin, đồng hồ,...
            </Typography>
        </Box>
    );
}
