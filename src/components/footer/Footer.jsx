import { Facebook, Instagram, LinkedIn } from '@material-ui/icons'
import React from 'react'
import "./Footer.css"

function Footer() {
    return (
        <footer className="footer">
            <div className="gird">
                <div className="gird__row">
                    <h3 className="footer__heading">Chăm sóc khách hàng</h3>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a href="#" className="footer-item__link">Trung Tâm Trợ Giúp
                     </a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-item__link">Rimi-Coffee
                    </a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-item__link">Hướng dẫn mua hàng
                     </a>
                        </li>
                    </ul>
                </div>
                <div className="gird__row">
                    <h3 className="footer__heading">Giới thiệu</h3>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a href="#" className="footer-item__link">Giới thiệu
                         </a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-item__link">Tuyển dụng
                         </a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-item__link">Điều khoản
                             </a>
                        </li>
                    </ul>
                </div>
                <div className="gird__row">
                    <h3 className="footer__heading">Danh mục</h3>
                </div>
                <div className="gird__row">
                    <h3 className="footer__heading">Theo dõi</h3>
                    <ul className="footer-list">
                        <li className="footer-item">
                            <a href="#" className="footer-item__link">
                                <Facebook className="footer-item__icon" />
                     Facebook
                                </a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-item__link">
                                <Instagram className="footer-item__icon" />
                            Instagram
                                 </a>
                        </li>
                        <li className="footer-item">
                            <a href="#" className="footer-item__link">
                                <LinkedIn className="footer-item__icon" />
                             Linkedin
                                </a>
                        </li>
                    </ul>
                </div>
                <div className="gird__row">
                    <h3 className="footer__heading">Ứng dụng</h3>
                    <div className="footer__download">

                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png" alt="qr" className="footer__download-qr" />

                    </div>
                </div>
            </div>


        </footer>

    )
}

export default Footer
