import React from 'react'
import "@/app/style/reset.css"
import "@/app/globals.scss"
import Link from "next/link";

export default function Home() {
    return (
        <html lang="ko">
        <head>
            <meta charSet="utf-8"/>
            <title>FXNULL</title>
        </head>
        <body className="fn-layout">
        {/* 메인 섹션 */}
        <section className="fn-main-section">
            <video className="fn-main-bg" autoPlay muted loop width="100%" height="905">
                <source src="/assets/images/smog.mp4" type="video/mp4"/>
                Your browser is not supported.
            </video>
            <header className="fn-header-area">
                <div className="fn-header-left">
                    <p className="fn-logo">FXNULL .</p>
                    <p className="fn-text">2024 PORTFOLIO</p>
                </div>
                <ul className="fn-header-right">
                    <Link href={"#introduction"} className="fn-menu">INTRODUCTION</Link>
                    <Link href={"/"} className="fn-menu">PORTFOLIO</Link>
                    <Link href={"/"} className="fn-menu">DESIGN PORTFOLIO</Link>
                    <Link href={"/"} className="fn-menu">STUDY</Link>
                    <Link href={"/"} className="fn-menu">CONTACT</Link>
                </ul>
            </header>
            <h1 className="fn-main-title">
                ENDLESS
                <br/> DEVELOPER
                <br/> FXNULL .
            </h1>
            <div className="arrow-down-btn">
                <Link href={"#introduction"} className="arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                         className="bi bi-arrow-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                              d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                    </svg>
                </Link>
            </div>
        </section>

        {/* 자기소개 섹션 */}
        <section className="fn-introduction-section" id="introduction">
            <div className="fn-introduction-total">
                <div className="fn-introduction-title">
                    <p className="fn-introduction-title-top">IM.</p>
                    <p className="fn-introduction-title-bottom">
                        ENDLESS
                        <br/> DEVELOPER
                    </p>
                </div>
                <div className="fn-introduction-contents">
                    <p className="fn-introduction-contents-title">HELLO {"I'M"} FXNULL .</p>
                    <p className="fn-introduction-contents-sub-title">안녕하세요! 무궁무진한 개발자 FXNULL , 함수빈입니다.</p>
                    <div className="fn-introduction-set">
                        <div className="fn-introduction-item">
                            <p className="fn-introduction-set-title">왜 개발명이 Fx_null인가요?</p>
                            <p className="fn-introduction-set-comment">
                                이름의 <span>{"'함수'"}</span>와 <span>{"'빈'"}</span>에서 비롯하여 탄생한 개발명 Fx_null입니다!
                                <br/>null의 뜻이 <span>{"'아무것도 존재 하지 않는다'"}</span>라는 뜻이지만
                                <br/>앞으로 부족한 부분을 채워가며 <span>무궁무진하게 성장하겠습니다.</span>
                            </p>
                        </div>
                        <div className="fn-introduction-item">
                            <p className="fn-introduction-set-title">감각적인 프론트엔드 개발자</p>
                            <p className="fn-introduction-set-comment">
                                디자이너 출신 프론트엔드 개발자로서 이전의 경험을 바탕으로
                                <br/>디자인적 감각과 프로그래밍 지식을 모두 활용하여 UI/UX를 최적화하고
                                <br/>사용자 경험을 향상시키는 데 큰 도움을 줄 수 있습니다.
                            </p>
                        </div>
                        <div className="fn-introduction-item">
                            <p className="fn-introduction-set-title">꾸준히 탐구하기</p>
                            <p className="fn-introduction-set-comment">
                                개발을 배운 뒤 프론트엔드 기술의 트렌드 변화가 빠르다는 것을
                                <br/>깨달았습니다. 따라서 한 가지 기술에 국한되지 않고 <span>다양한 기술을
                                <br/>꾸준히 학습</span>하며, 기술 블로그 또는 커뮤니티를 통해
                                <br/><span>최신 프론트엔드 기술 트렌드를 꾸준히 탐구</span>할 것입니다.
                            </p>
                        </div>
                        <div className="fn-introduction-item">
                            <p className="fn-introduction-set-title">할 수 있어요!</p>
                            <p className="fn-introduction-icon-row">
                                <div className="fn-icon-border">
                                    <img src="/assets/images/nextjs_logo.png"/>
                                </div>
                                <div className="fn-icon-border">
                                    <img src="/assets/images/react_logo.png"/>
                                </div>
                                <div className="fn-icon-border">
                                    <img src="/assets/images/flutter_logo.png"/>
                                </div>
                                <div className="fn-icon-border">
                                    <img src="/assets/images/java_logo.png"/>
                                </div>
                                <div className="fn-icon-border">
                                    <p>Ps</p>
                                </div>
                                <div className="fn-icon-border">
                                    <p>Ai</p>
                                </div>
                                <div className="fn-icon-border">
                                    <p>Ae</p>
                                </div>
                            </p>
                            <p className="fn-introduction-set-comment">
                                <span>Sub Tool</span> Docker · Spring Boot · Restful API · Git
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </body>
        </html>
    )
}