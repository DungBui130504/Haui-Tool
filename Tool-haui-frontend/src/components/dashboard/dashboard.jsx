import React from "react";
import style from '../dashboard/dashboard.module.css'
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";

function Dashboard() {
    return (
        <div className={style['dashboard-container']}>
            <div className={style["block-1"]}></div>
            <div className={style["block-2"]}>
                <div className={style["menu"]}>
                    <ul>
                        <li>
                            <p>Nạp tiền</p>
                        </li>
                        <li>
                            <p>Đăng ký học phần</p>
                        </li>
                        <li>
                            <p>Lịch sử nạp tiền</p>
                        </li>
                        <li>
                            <p>Lịch sử đăng ký HP</p>
                        </li>
                        <li>
                            <p>Tra cứu, Hủy, Chuyển tiền</p>
                        </li>
                    </ul>
                </div>

                <button class={style["button-53"]} role="button">Xem hướng dẫn</button>

            </div>
            <div className={style["block-3"]}>
                <button className={style["home"]}>
                    <RiHome2Line />
                </button>
                <button className={style["logout"]}>
                    <MdOutlineLogout />
                </button>
            </div>
            <div className={style["web-name"]}>
                <p>HAUI</p>
                <p>TOOL</p>
            </div>
            <div className={style["word-1"]}>
                Version 2
            </div>
            <div className={style["word-2"]}>
                Haui Tool
            </div>
            <div className={style["intro"]}>
                <p>Giới Thiệu</p>
                <span>Bạn là một "chill guy" hoặc không có nhiều thời gian rảnh rỗi vì còn bận đi chơi với gấu?
                    Đăng ký ngay tài khoản Haui Tool để có một kỳ học nhẹ nhàng thanh tịnh!
                    Không cần canh giờ tranh học phần vì đã có chúng tôi ở đây để giúp bạn làm điều đó!
                    Chỉ với 50k bạn đã có thể nhanh chóng đăng ký được ngay học phần mong muốn mà không cần chờ đến lúc mở đăng ký!</span>
            </div>
            <div className={style["model"]}>
            </div>
        </div>
    )
}

export default Dashboard;