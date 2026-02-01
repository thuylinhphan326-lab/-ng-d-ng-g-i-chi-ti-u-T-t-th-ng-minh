function calculatePlan() {
    let budget = document.getElementById("budget").value;

    if (!budget || budget <= 0) {
        alert("Vui lòng nhập ngân sách hợp lệ!");
        return;
    }

    budget = Number(budget);

    let plan = [
        { name: "🎁 Mua quà Tết – Biếu họ hàng", percent: 30 },
        { name: "🥬 Thực phẩm – Mâm cỗ – Tiệc", percent: 25 },
        { name: "👗 Quần áo – Giày dép – Làm đẹp", percent: 15 },
        { name: "🎉 Trang trí nhà cửa – Đồ gia dụng nhỏ", percent: 10 },
        { name: "🚗 Di chuyển – Xăng xe – Du lịch Tết", percent: 8 },
        { name: "🧧 Lì xì – Trẻ em – Người thân", percent: 10 },
        { name: "💵 Dự phòng phát sinh", percent: 2 }
    ];

    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    plan.forEach(item => {
        let amount = Math.round(budget * item.percent / 100).toLocaleString();

        resultDiv.innerHTML += `
            <div class="category">
                <div class="category-title">${item.name} – <b>${item.percent}%</b> (${amount} đ)</div>
                <div class="progress-box">
                    <div class="progress" style="width: ${item.percent}%">${item.percent}%</div>
                </div>
            </div>
        `;
    });
}
