# Quản lý danh sách sản phẩm (Product Management System)

Đây là dự án ứng dụng web tĩnh được phát triển nhằm mục đích quản lý danh sách sản phẩm. Dự án cung cấp giao diện trực quan cho phép người dùng xem danh sách sản phẩm và thêm mới dữ liệu với các ràng buộc kiểm tra hợp lệ (validation) cơ bản.

##  Chức năng chính
- **Hiển thị danh sách:** Tự động tải và hiển thị danh sách sản phẩm từ cơ sở dữ liệu giả lập (`data.js`) ra bảng HTML.
- **Thêm sản phẩm mới:** Cho phép người dùng nhập thông tin (Tên, Danh mục, Giá, Trạng thái) thông qua form.
- **Kiểm tra dữ liệu (Validation):** Đảm bảo các trường thông tin không được bỏ trống và giá trị nhập vào phải hợp lý (giá tiền > 0) trước khi xử lý.
- **Phản hồi người dùng:** Xóa trắng form sau khi thêm thành công và hiển thị thông báo (Alert) cho người dùng.
- **Phân loại trạng thái:** Tự động gắn nhãn màu sắc (Xanh/Đỏ) tùy thuộc vào trạng thái "Còn hàng" hoặc "Hết hàng".

##  Công nghệ sử dụng
Dự án hoàn toàn không sử dụng thư viện bên ngoài (No Bootstrap/jQuery), tuân thủ nghiêm ngặt yêu cầu bài toán bằng:
- **HTML5:** Xây dựng cấu trúc giao diện và form nhập liệu (sử dụng thuộc tính `required`, `type="number"`, `min`).
- **CSS3:** Định dạng bố cục trang web bằng `Flexbox`, thiết kế giao diện đáp ứng cơ bản và màu sắc trực quan.
- **Vanilla JavaScript (ES6):** Xử lý logic DOM, bắt sự kiện người dùng và thao tác với mảng dữ liệu object.

## Cấu trúc thư mục (Project Structure)
Dự án được tổ chức gọn gàng, tuân thủ theo chuẩn quy ước tách biệt giao diện, dữ liệu và xử lý logic:

```text
EXAM2026_Ca1/
│
├── html/
│   ├── index.html          # File giao diện chính
│   ├── css/
│   │   └── style.css       # File định dạng thiết kế
│   ├── js/
│   │   └── app.js          # File xử lý logic Javascript (hiển thị, validation, thêm mới)
│   └── data/
│       └── data.js         # File chứa mảng dữ liệu giả lập (Mock DB)
│
└── README.md               # File tài liệu hướng dẫn dự án