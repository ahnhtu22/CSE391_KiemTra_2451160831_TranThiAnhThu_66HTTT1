// Lấy các phần tử HTML cần thao tác
const tableBody = document.getElementById('tableBody');
const productForm = document.getElementById('productForm');

// Hàm 1: Chuyển đổi định dạng tiền tệ (Ví dụ: 24990000 -> 24.990.000 ₫)
function formatMoney(amount) {
    return amount.toLocaleString('vi-VN') + ' ₫';
}

// Hàm 2: Vẽ (render) dữ liệu từ mảng products ra bảng HTML
function renderTable() {
    tableBody.innerHTML = ''; // Xóa sạch dữ liệu cũ trong bảng trước khi vẽ lại
    
    // Duyệt qua từng sản phẩm trong mảng
    products.forEach((product, index) => {
        // Kiểm tra trạng thái để gắn class màu sắc tương ứng (Xanh lục hoặc Đỏ)
        let statusClass = product.status === "Còn hàng" ? "status-con" : "status-het";

        // Tạo chuỗi HTML cho một hàng (tr)
        let rowHtml = `
            <tr>
                <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>${formatMoney(product.price)}</td>
                <td><span class="status ${statusClass}">${product.status}</span></td>
            </tr>
        `;
        // Gắn hàng đó vào thẻ tbody
        tableBody.insertAdjacentHTML('beforeend', rowHtml);
    });
}

// Gọi hàm renderTable ngay khi trang web vừa tải xong để hiển thị 5 sản phẩm mẫu
renderTable();

// Hàm 3: Lắng nghe sự kiện "submit" (gửi form) khi bấm nút "Thêm sản phẩm"
productForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Rất quan trọng: Ngăn chặn trang web bị tải lại khi bấm submit

    // Lấy giá trị người dùng nhập vào các ô input
    const newName = document.getElementById('name').value;
    const newCategory = document.getElementById('category').value;
    const newPrice = Number(document.getElementById('price').value); // Ép kiểu về dạng Số (Number)
    const newStatus = document.getElementById('status').value;

    // Tạo một đối tượng sản phẩm mới
    const newProduct = {
        id: products.length + 1, // ID tự động tăng
        name: newName,
        category: newCategory,
        price: newPrice,
        status: newStatus
    };

    // Đẩy (push) sản phẩm mới vào mảng gốc
    products.push(newProduct);

    // Gọi lại hàm vẽ bảng để cập nhật giao diện ngay lập tức
    renderTable();

    // Tự động xóa trắng form để tiện nhập sản phẩm tiếp theo
    productForm.reset();
    alert("Đã thêm sản phẩm thành công!");
});