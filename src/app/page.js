import React from 'react'
import "@/app/style/reset.css"
import "@/app/globals.scss"
import Link from "next/link";
import PortfolioSwiper from "@/app/components/PortfolioSwiper";
import DesignPortfolioSwiper from "@/app/components/DesignPortfolioSwiper";
import DefaultLayout from "@/app/components/DefaultLayout";

export default function Home() {
    return (
        <DefaultLayout>
            {/* 메인 섹션 */}
            <section className="fn-main" id="main">
                <video className="fn-main-bg" autoPlay muted loop width="100%" height="905">
                    <source src="/assets/images/smog.mp4" type="video/mp4"/>
                    Your browser is not supported.
                </video>
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
            <section className="fn-introduction" id="introduction">
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
                                    <span>디자이너 출신 프론트엔드 개발자</span>로서 이전의 경험을 바탕으로
                                    디자인적 감각과 프로그래밍 지식을 모두 활용하여 <span>UI/UX를 최적화하고
                                사용자 경험을 향상</span>시키는 데 큰 도움을 줄 수 있습니다.
                                </p>
                            </div>
                            <div className="fn-introduction-item">
                                <p className="fn-introduction-set-title">꾸준히 탐구하기</p>
                                <p className="fn-introduction-set-comment">
                                    개발을 배운 뒤 프론트엔드 기술의 트렌드 변화가 빠르다는 것을
                                    깨달았습니다. 따라서 한 가지 기술에 국한되지 않고 <span>다양한 기술을
                                꾸준히 학습</span>하며, 기술 블로그 또는 커뮤니티를 통해
                                    <span> 최신 프론트엔드 기술 트렌드를 꾸준히 탐구</span>할 것입니다.
                                </p>
                            </div>
                            <div className="fn-introduction-item">
                                <p className="fn-introduction-set-title">할 수 있어요!</p>
                                <div className="fn-introduction-icon-row">
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
                                        <img src="/assets/images/spring_boot_logo.png"/>
                                    </div>
                                    <div className="fn-icon-border">
                                        <img src="/assets/images/docker_logo.png"/>
                                    </div>
                                    <div className="fn-icon-border">
                                        <img src="/assets/images/postgresql_logo.png"/>
                                    </div>
                                </div>
                                <p className="fn-introduction-set-comment">
                                    <span>Sub Tool</span> Scss · Restful API · Git · Photoshop · Illustration
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 포트폴리오 섹션 */}
            <section className="fn_portfolio" id="portfolio">
                <div className="fn-portfolio-contents">
                    <div className="fn-portfolio-title-area">
                        <p className="fn-portfolio-title">PORTFOLIO.</p>
                        <p className="fn-portfolio-sub-title">프론트엔드 개발 포트폴리오입니다.</p>
                    </div>
                    <PortfolioSwiper/>
                </div>
            </section>

            {/* 디자인 포트폴리오 섹션 */}
            <section className="fn-design" id="design">
                <div className="fn-design-contents">
                    <div className="fn-design-title-area">
                        <p className="fn-design-title">DESIGN PORTFOLIO.</p>
                        <p className="fn-design-sub-title">웹 디자인 포트폴리오입니다.</p>
                    </div>
                    <DesignPortfolioSwiper/>
                </div>
            </section>

            {/* 스터디 섹션 */}
            <section className="fn-study" id="study">
                <div className="fn-study-contents">
                    <div className="fn-study-title-area">
                        <p className="fn-study-title">STUDY.</p>
                        <p className="fn-study-sub-title">성장하는 과정</p>
                    </div>
                    <div className="fn-study-contents-row">
                        <img src="/assets/images/me.jpg" className="fn-me"/>
                        <div className="fn-study-right">
                            <div className="fn-study-comment-area">
                                <p className="fn-study-comment-title">끊임 없이 공부합니다.</p>
                                <p className="fn-study-comment">
                                    개발 공부를하며 세상은 계속 발전함을 깊이 깨달았습니다.
                                    <br/>그렇기에 끊임 없이 공부하여 새로운 지식과 기술을 배워감으로써
                                    자기계발과 성장을 이루고 새로운 기회를 창출할 수 있도록 나아가겠습니다.
                                    또한 도전에 대해서 두려워하지 않고 점진적으로 난이도를 높이며 계속해서
                                    도전할 것입니다.
                                </p>
                            </div>
                            <div className="fn-portfolio-link">
                                <p className="fn-portfolio-link-title">STUDY PROCESS</p>
                                <div className="fn-icon-align">
                                    {/* 노션 */}
                                    <div className="fn-icon">
                                        <a className="fn-icon-btn"
                                           href="https://fxnull.notion.site/36ab63a532e84acd99f0240a92aec695?v=0a0af31781e74dc89d46848d869de578&pvs=74">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                 fill="currentColor" className="fn-icon-svg" viewBox="0 0 16 16">
                                                <path
                                                    d="M5 10.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0-2a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/>
                                                <path
                                                    d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2"/>
                                                <path
                                                    d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z"/>
                                            </svg>
                                            <p className="fn-icon-text">Notion</p>
                                        </a>
                                    </div>

                                    {/* 깃랩 */}
                                    <div className="fn-icon">
                                        <a className="fn-icon-btn" href="https://gitlab.com/hamsubin0628">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                 fill="currentColor" className="fn-icon-svg" viewBox="0 0 16 16">
                                                <path
                                                    d="m15.734 6.1-.022-.058L13.534.358a.57.57 0 0 0-.563-.356.6.6 0 0 0-.328.122.6.6 0 0 0-.193.294l-1.47 4.499H5.025l-1.47-4.5A.572.572 0 0 0 2.47.358L.289 6.04l-.022.057A4.044 4.044 0 0 0 1.61 10.77l.007.006.02.014 3.318 2.485 1.64 1.242 1 .755a.67.67 0 0 0 .814 0l1-.755 1.64-1.242 3.338-2.5.009-.007a4.05 4.05 0 0 0 1.34-4.668Z"/>
                                            </svg>
                                            <p className="fn-icon-text">Git Lab</p>
                                        </a>
                                    </div>

                                    {/* 깃헙 */}
                                    <div className="fn-icon">
                                        <a className="fn-icon-btn" href="https://github.com/hamsoobin">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                 fill="currentColor" className="fn-icon-svg" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                            </svg>
                                            <p className="fn-icon-text">Git Hub</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className="fn-top-align">
                <div className="fn-top-btn">
                    <a href={"/#main"} className="fn-top-text">TOP</a>
                </div>
            </div>
        </DefaultLayout>
    )
}