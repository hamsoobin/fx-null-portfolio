'use client'
import Link from "next/link";
import React, {useEffect, useState} from "react";
import MobileMenuModal from "@/app/components/MobileMenuModal";

const DefaultLayout = ({children}) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768) // 모바일 너비
    const [showMenuModal, setShowMenuModal] = useState(false) // 회원 모달 버튼 클릭 유무

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const clickMenuModal = () => setShowMenuModal(!showMenuModal)

    return (
        <>
            <html lang="ko">
            <head>
                <meta charSet="utf-8"/>
                <title>FXNULL.</title>
            </head>
            <body>
            <header className="fn-header-area">
                <div className="fn-header-align">
                    <div className="fn-header-left">
                        <Link href={"#main"} className="fn-logo">FXNULL .</Link>
                        <p className="fn-text">2024 PORTFOLIO</p>
                    </div>
                    {isMobile ? (
                        <>
                            <div className="fn-header-right" onClick={clickMenuModal}>☰</div>
                            {showMenuModal && <MobileMenuModal clickMenuModal={clickMenuModal} />}
                        </>
                    ) : (
                        <ul className="fn-header-right">
                            <Link href={"#introduction"} className="fn-menu">INTRODUCTION</Link>
                            <Link href={"#portfolio"} className="fn-menu">PORTFOLIO</Link>
                            <Link href={"/#design"} className="fn-menu">DESIGN PORTFOLIO</Link>
                            <Link href={"/#study"} className="fn-menu">STUDY</Link>
                        </ul>
                    )}

                </div>
            </header>
            {children}
            <footer className="fn-footer">
                <div className="fn-footer-contents">
                    <a href={"#main"} className="fn-footer-logo">FXNULL.</a>
                    <p className="fn-footer-text">THANK YOU FOR WATCHING</p>
                </div>
            </footer>
            </body>
            </html>
        </>
    )
}

export default DefaultLayout;