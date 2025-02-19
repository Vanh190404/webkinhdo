document.addEventListener("DOMContentLoaded", () => {
    // Lấy các thành phần
    const productBoxes = document.querySelectorAll(".product_box, .product_box_2, .product_box_3, .product_box_4");
    const checkboxes = document.querySelectorAll(".check_box");
    const totalPayDisplay = document.querySelector(".txt_pay");
    const getProductOptions = (productBox) => {
        if (productBox.classList.contains("product_box")) {
            return { quantityClass: ".quantity", priceClass: ".price" };
        } else if (productBox.classList.contains("product_box_2")) {
            return { quantityClass: ".quantity2", priceClass: ".price2" };
        } else if (productBox.classList.contains("product_box_3")) {
            return { quantityClass: ".quantity3", priceClass: ".price3" };
        } else if (productBox.classList.contains("product_box_4")) {
            return { quantityClass: ".quantity4", priceClass: ".price4" };
        }
        return null;
    };

    // Hàm cập nhật giá sản phẩm
    const updatePrice = (productBox, options) => {
        const { quantityClass, priceClass } = options;

        const quantityDisplay = productBox.querySelector(quantityClass); // Lấy số lượng
        const priceDisplay = productBox.querySelector(priceClass); // Lấy giá hiển thị

        const originalPrice = parseInt(priceDisplay.dataset.originalPrice, 10); // Lấy giá gốc
        const quantity = parseInt(quantityDisplay.textContent, 10);

        const totalPrice = originalPrice * quantity;
        priceDisplay.textContent = `${totalPrice.toLocaleString()}đ`; // Cập nhật giá hiển thị

        updateTotalPrice(); // Cập nhật tổng thanh toán
    };

    // Hàm tính tổng thanh toán
    const updateTotalPrice = () => {
        let totalPay = 0;

        checkboxes.forEach((checkbox) => {
            if (checkbox.checked) {
                // Lấy sản phẩm tương ứng với checkbox
                const productBox = checkbox.closest(".product_box, .product_box_2, .product_box_3, .product_box_4");
                if (productBox) {
                    const priceClass = checkbox.dataset.priceClass; // Lấy class hiển thị giá từ data-price-class
                    const priceDisplay = productBox.querySelector(priceClass);

                    if (priceDisplay) {
                        const price = parseInt(priceDisplay.textContent.replace(/\D/g, ""), 10); // Lấy giá trị số từ text
                        if (!isNaN(price)) {
                            totalPay += price; // Cộng giá vào tổng thanh toán
                        }
                    }
                }
            }
        });

        // Hiển thị tổng thanh toán
        totalPayDisplay.textContent = `${totalPay.toLocaleString()}đ`;
    };

    // Hàm xử lý sự kiện tăng/giảm số lượng
    const handleQuantityChange = (productBox, options) => {
        const decreaseButton = productBox.querySelector(".decrease, .decrease2, .decrease3, .decrease4");
        const increaseButton = productBox.querySelector(".increase, .increase2, .increase3, .increase4");

        // Sự kiện giảm số lượng
        decreaseButton.addEventListener("click", () => {
            const quantityDisplay = productBox.querySelector(options.quantityClass);
            let quantity = parseInt(quantityDisplay.textContent, 10);
            if (quantity > 1) {
                quantity -= 1;
                quantityDisplay.textContent = quantity;
                updatePrice(productBox, options);
            }
        });

        // Sự kiện tăng số lượng
        increaseButton.addEventListener("click", () => {
            const quantityDisplay = productBox.querySelector(options.quantityClass);
            let quantity = parseInt(quantityDisplay.textContent, 10);
            quantity += 1;
            quantityDisplay.textContent = quantity;
            updatePrice(productBox, options);
        });
    };

    // Hàm sự kiện checkbox
    const attachCheckboxEvents = () => {
        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", updateTotalPrice);
        });
    };

    // Hàm khởi tạo sản phẩm
    const initializeProducts = () => {
        productBoxes.forEach((productBox) => {
            const options = getProductOptions(productBox);
            if (options) {
                handleQuantityChange(productBox, options); // Gắn sự kiện tăng/giảm số lượng
                updatePrice(productBox, options); // Cập nhật giá ban đầu
            }
        });
    };

    initializeProducts(); 
    attachCheckboxEvents();
    updateTotalPrice();
});
