import React from 'react';


const ProfileEdit = () => {
    return (
        <div className="container-form-edit">
            <div className="sidebar">
                <div className="user-info">
                    <img src="assets/images/faker.jpg" alt="Avatar" className="avatar" />
                    <h3>Lee Sang-hyeok</h3>
                </div>
                <ul className="menu">
                    <li><i className="fas fa-user"></i> Thông tin tài khoản</li>
                    <hr />
                    <li><i className="fas fa-map-marker-alt"></i> Sổ địa chỉ</li>
                    <hr />
                    <li><i className="fas fa-box"></i> Quản lý đơn hàng</li>
                    <hr />
                    <li><i className="fas fa-bell"></i> Thông báo</li>
                    <hr />
                    <li><i className="fas fa-tag"></i> Mã giảm giá</li>
                    <hr />
                    <li><i className="fas fa-gift"></i> Membership</li>
                    <hr />
                    <li><i className="fas fa-eye"></i> Sản phẩm đã xem</li>
                </ul>
            </div>

            <div className="content">
                <h1>Thông Tin Tài Khoản</h1>

                <div className="info-section">
                    <div className="personal-info">
                        <h2>Thông Tin Cá Nhân</h2>
                        <div className="input-group">
                            <label>Họ tên</label>
                            <input type="text" placeholder="Nhập họ tên" />
                        </div>
                        <div className="input-group">
                            <label>Nickname</label>
                            <input type="text" placeholder="Nhập nickname" />
                        </div>
                        <div className="input-group date-input">
                            <label htmlFor="day">Ngày</label>
                            <select id="day">
                                <option value="">DD</option>
                            </select>

                            <label htmlFor="month">Tháng</label>
                            <select id="month">
                                <option value="">MM</option>
                            </select>

                            <label htmlFor="year">Năm</label>
                            <select id="year">
                                <option value="">YYYY</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label>Giới tính</label>
                            <input type="radio" name="gender" defaultChecked /> Nam
                            <input type="radio" name="gender" /> Nữ
                            <input type="radio" name="gender" /> Khác
                        </div>
                        <div className="input-group">
                            <label>Quốc tịch</label>
                            <select>
                                <option>Chọn quốc tịch</option>
                            </select>
                        </div>

                        <div className="button-group">
                            <button className="save-btn">Lưu thay đổi</button>
                        </div>
                    </div>

                    <div className="account-info">
                        <h2>Số điện thoại và Email</h2>
                        <div className="input-group phone">
                            <i className="fa-solid fa-phone"></i>
                            <input type="text" placeholder="Số điện thoại" />
                        </div>
                        <div className="input-group email">
                            <i className="fa-solid fa-envelope"></i>
                            <input type="email" placeholder="Địa chỉ email" />
                        </div>
                        <h2>Bảo mật</h2>
                        <div className="input-group update-pass">
                            <i className="fa-solid fa-lock"></i>
                            <span>Đổi mật khẩu</span>
                            <button className="link-btn">Cập nhật</button>
                        </div>
                        <h2>Liên kết mạng xã hội</h2>
                        <div className="social-link">
                            <div className="input-group">
                                <i className="fab fa-facebook"></i>
                                <span>Facebook</span>
                                <button className="link-btn">Liên kết</button>
                            </div>
                        </div>
                        <h2>Đã liên kết</h2>
                        <div className="input-group linked">
                            <i className="fab fa-google"></i>
                            <span>Google</span>
                        </div>
                    </div>
                </div>

                <div className="tier-info">
                    <h2>Tổng Quan Thứ Bậc</h2>
                    <p>Hạng thành viên: <strong>Gold</strong></p>
                    <p>Số điểm hiện tại: <strong>520 Điểm</strong></p>
                    <p>Số điểm cần tích lũy thêm: <strong>480 điểm nữa để thăng hạng</strong></p>
                </div>
            </div>
        </div>
    );
};

export default ProfileEdit;


