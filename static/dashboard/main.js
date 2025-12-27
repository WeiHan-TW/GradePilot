import { logout } from "../auth.js";
import { requireLogin } from "../auth.js";
import { showLoading, hideLoading } from "../auth.js";

showLoading();
await requireLogin();
hideLoading();

const logoutBtn = document.getElementById("logout_btn");
if (!logoutBtn) {
    console.error("找不到 #logout_btn（按鈕不存在或 id 不一致）");
} else {
    logoutBtn.addEventListener("click", () => {
        logout();
    });
}