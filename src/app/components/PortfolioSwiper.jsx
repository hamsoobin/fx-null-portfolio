'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useEffect, useState} from "react";

const PortfolioSwiper = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768) // 모바일 너비

    const isWindow = typeof window !== 'undefined';

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="fn-swiper">
            {isMobile && isWindow ? (
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1} // 보여질 개수
                threshold={100} // 마우스, 스와이프 민감도
                loop={true} // 무한반복
                autoplay={false}
                centeredSlides={true}
                // scrollbar={true}
                pagination={{
                    clickable: true,
                    el: '.pagination'
                }}
                a11y={{
                    enabled: true,
                    prevSlideMessage: '이전 슬라이드',
                    nextSlideMessage: '다음 슬라이드'
                }}
                style={{
                    "--swiper-navigation-color": "#545454",
                }}
            >
                {/* 맛딱드림 */}
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-portfolio-slide-item">
                        <div className="fn-video-box">
                            <iframe src="https://www.youtube.com/embed/wwU3NdizHrY?si=RZ60IjOdYisrZ-_a"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>

                        <div className="fn-portfolio-info">
                            <div className="fn-portfolio-info-row">
                                <p className="fn-portfolio-info-title">맛딱드림 배달 라이더 전용 앱</p>
                                <p className="fn-portfolio-info-content">
                                    배달 시장의 규모가 커지고 있는 우리나라, 배달을 시키는 입장이
                                    아닌 <span>라이더 분들의 관점을 돌아보는 것을 시작</span>으로 맛딱드림의
                                    프로젝트를 시작하게 되었다.</p>
                            </div>
                            <div className="fn-portfolio-info-row">
                                <p className="fn-portfolio-info-title">6인 프로젝트</p>
                                <p className="fn-portfolio-info-content">
                                    작업 기간 : 2024.03.05 ~ 2024.05.07
                                    <br/><span>프론트 앱</span> : 기여도 50%
                                </p>
                            </div>
                        </div>
                        <div className="fn-portfolio-info">
                            <div className="fn-portfolio-info-row">
                                <p className="fn-portfolio-info-title">GitLab</p>
                                <div className="fn-portfolio-info-content">
                                    <a href="https://gitlab.com/matddak/matddakapi/matddakapi" className="fn-git">
                                        <img src="/assets/images/mattack/gitlab_logo_mat.png"/>
                                        <span>백 엔드 GitLab 바로가기</span>
                                    </a>
                                    <a href="https://gitlab.com/matddak_app/matddak_app" className="fn-git">
                                        <img src="/assets/images/mattack/gitlab_logo_mat.png"/>
                                        <span>프론트엔드 앱 GitLab 바로가기</span>
                                    </a>
                                    <a href="https://gitlab.com/meimeipark/matddak-web-vue" className="fn-git">
                                        <img src="/assets/images/mattack/gitlab_logo_mat.png"/>
                                        <span>프론트엔드 웹 GitLab 바로가기</span>
                                    </a>
                                </div>
                            </div>
                            <div className="fn-portfolio-info-row">
                                <p className="fn-portfolio-info-title">사용기술</p>
                                <div className="fn-portfolio-skill">
                                    <div className="fn-skill-border">
                                        <img src="/assets/images/mattack/dart_logo_mat.png"/>
                                    </div>
                                    <div className="fn-skill-border">
                                        <img src="/assets/images/mattack/flutter_logo_mat.png"/>
                                    </div>
                                    <div className="fn-skill-border">
                                        <img src="/assets/images/mattack/vue_logo_mat.png"/>
                                    </div>
                                    <div className="fn-skill-border">
                                        <img src="/assets/images/mattack/js_logo_mat.png"/>
                                    </div>
                                    <div className="fn-skill-border">
                                        <img src="/assets/images/mattack/java_logo_mat.png"/>
                                    </div>
                                    <div className="fn-skill-border">
                                        <img src="/assets/images/mattack/spring_boot_logo_mat.png"/>
                                    </div>
                                    <div className="fn-skill-border">
                                        <img src="/assets/images/mattack/docker_logo_mat.png"/>
                                    </div>
                                    <div className="fn-skill-border">
                                        <img src="/assets/images/mattack/postgresql_logo_mat.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* WONE */}
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-portfolio-slide-item">
                        <div className="fn-video-box">
                            <iframe src="https://www.youtube.com/embed/leNfrqHcCPU?si=dYq1IpISbD7G0Y_0"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>

                        <div className="fn-portfolio-info">
                            <div className="fn-portfolio-info-row">
                                <p className="fn-portfolio-info-title">WONE 현금 챌린지 앱</p>
                                <p className="fn-portfolio-info-content">
                                    Wone앱은 현금을 매번 출금하고 들고다녀야 하는 불편함을
                                    최소화하기 위해 신용카드가 아닌  체크(현금)카드만의 사용 내역과 목표 금액을
                                    한 번에 관리하기 위해 개발한 현금 챌린지 앱니다.</p>
                            </div>
                            <div className="fn-portfolio-info-row">
                                <p className="fn-portfolio-info-title">3인 프로젝트</p>
                                <p className="fn-portfolio-info-content">
                                    작업 기간 : 23.12.26 ~ 24.02.29
                                    <br/><span>백</span> : 30% · <span>앱</span> : 40% · <span>웹</span> : 50%</p>
                            </div>
                        </div>
                        <div className="fn-portfolio-info">
                            <div className="fn-portfolio-info-row">
                                <p className="fn-portfolio-info-title">GitLab</p>
                                <div className="fn-portfolio-info-content">
                                    <a href="https://gitlab.com/hamsubin0628/projectwoneapi" className="fn-git">
                                        <img src="/assets/images/wone/gitlab_logo_wone.png"/>
                                        <span>백 엔드 GitLab 바로가기</span>
                                    </a>
                                    <a href="https://gitlab.com/hamsubin0628/wone_app_project" className="fn-git">
                                        <img src="/assets/images/wone/gitlab_logo_wone.png"/>
                                        <span>프론트엔드 앱 GitLab 바로가기</span>
                                    </a>
                                    <a href="https://gitlab.com/meimeipark/wone-admin-page-vue" className="fn-git">
                                        <img src="/assets/images/wone/gitlab_logo_wone.png"/>
                                        <span>프론트엔드 웹 GitLab 바로가기</span>
                                    </a>
                                </div>
                            </div>
                            <div className="fn-portfolio-info-row">
                                <p className="fn-portfolio-info-title">사용기술</p>
                                <div className="fn-portfolio-skill">
                                    <div className="fn-skill-border-2">
                                        <img src="/assets/images/wone/dart_logo_wone.png"/>
                                    </div>
                                    <div className="fn-skill-border-2">
                                        <img src="/assets/images/wone/flutter_logo_wone.png"/>
                                    </div>
                                    <div className="fn-skill-border-2">
                                        <img src="/assets/images/wone/vue_logo_wone.png"/>
                                    </div>
                                    <div className="fn-skill-border-2">
                                        <img src="/assets/images/wone/java_logo_wone.png"/>
                                    </div>
                                    <div className="fn-skill-border-2">
                                        <img src="/assets/images/wone/spring_boot_logo_wone.png"/>
                                    </div>
                                    <div className="fn-skill-border-2">
                                        <img src="/assets/images/wone/docker_logo_wone.png"/>
                                    </div>
                                    <div className="fn-skill-border-2">
                                        <img src="/assets/images/wone/postgresql_logo_wone.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* KIOSKKU. */}
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-portfolio-slide-item">
                        <img src="/assets/images/kioskku_temp.jpg" className="fn-kd"/>
                        <div className="fn-portfolio-info">
                            <div className="fn-portfolio-info-row">
                                <p className="fn-portfolio-info-title">KIOSKKU. 키오스크 대여 시스템</p>
                                <p className="fn-portfolio-info-content">
                                    계약 과정에서의 기업 신용도와 개인 신용도에 대한 차이를 이해하고,
                                    신용도를 통해 승인, 부결, 예외 승인이 결정되는 수학적 개념들을 공부하며
                                    기초 금융 지식을 쌓는 경험이 될 것입니다.</p>
                            </div>
                            <div className="fn-portfolio-info-row">
                                <p className="fn-portfolio-info-title">2인 프로젝트</p>
                                <p className="fn-portfolio-info-content">
                                    작업기간 : 2024.08.01 ~
                                    <br/><span>프론트 웹</span> : 기여도 100%
                                </p>
                            </div>
                        </div>
                        <div className="fn-portfolio-info">
                            <div className="fn-portfolio-info-row">
                                <p className="fn-portfolio-info-title">GitLab</p>
                                <div className="fn-portfolio-info-content">
                                    <a href="https://gitlab.com/cyjmusic1012/kioskkuapis" className="fn-git">
                                        <img src="/assets/images/kioskku/gitlab_logo_kioskku.png"/>
                                        <span>백 엔드 GitLab 바로가기</span>
                                    </a>
                                    <a href="https://gitlab.com/hamsubin0628/kioskku_webs_v1" className="fn-git">
                                        <img src="/assets/images/kioskku/gitlab_logo_kioskku.png"/>
                                        <span>프론트엔드 웹 GitLab 바로가기</span>
                                    </a>
                                </div>
                            </div>
                            <div className="fn-portfolio-info-row">
                                <p className="fn-portfolio-info-title">사용기술</p>
                                <div className="fn-portfolio-skill">
                                    <div className="fn-skill-border-3">
                                        <img src="/assets/images/kioskku/nextjs_logo_kioskku.png"/>
                                    </div>
                                    <div className="fn-skill-border-3">
                                        <img src="/assets/images/kioskku/react_logo_kioskku.png"/>
                                    </div>
                                    <div className="fn-skill-border-3">
                                        <img src="/assets/images/kioskku/js_logo_kioskku.png"/>
                                    </div>
                                    <div className="fn-skill-border-3">
                                        <img src="/assets/images/kioskku/java_logo_kioskku.png"/>
                                    </div>
                                    <div className="fn-skill-border-3">
                                        <img src="/assets/images/kioskku/spring_boot_logo_kioskku.png"/>
                                    </div>
                                    <div className="fn-skill-border-3">
                                        <img src="/assets/images/kioskku/docker_logo_kioskku.png"/>
                                    </div>
                                    <div className="fn-skill-border-3">
                                        <img src="/assets/images/kioskku/postgresql_logo_kioskku.png"/>
                                    </div>
                                    <div className="fn-skill-border-3">
                                        <img src="/assets/images/kioskku/kubernetes_logo_kioskku.png"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            ) : (
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    slidesPerView={1} // 보여질 개수
                    threshold={100} // 마우스, 스와이프 민감도
                    loop={true} // 무한반복
                    autoplay={false}
                    centeredSlides={true}
                    navigation={true}
                    pagination={{
                        clickable: true,
                        el: '.pagination'
                    }}
                    a11y={{
                        enabled: true,
                        prevSlideMessage: '이전 슬라이드',
                        nextSlideMessage: '다음 슬라이드'
                    }}
                    style={{
                        "--swiper-navigation-color": "#545454",
                    }}
                >
                    {/* 맛딱드림 */}
                    <SwiperSlide className="fn-portfolio-slide">
                        <div className="fn-portfolio-slide-item">
                            <div className="fn-video-box">
                                <iframe src="https://www.youtube.com/embed/wwU3NdizHrY?si=RZ60IjOdYisrZ-_a"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>

                            <div className="fn-portfolio-info">
                                <div className="fn-portfolio-info-row">
                                    <p className="fn-portfolio-info-title">맛딱드림 배달 라이더 전용 앱</p>
                                    <p className="fn-portfolio-info-content">
                                        배달 시장의 규모가 커지고 있는 우리나라, 배달을 시키는 입장이
                                        아닌 <span>라이더 분들의 관점을 돌아보는 것을 시작</span>으로 맛딱드림의
                                        프로젝트를 시작하게 되었다.</p>
                                </div>
                                <div className="fn-portfolio-info-row">
                                    <p className="fn-portfolio-info-title">6인 프로젝트</p>
                                    <p className="fn-portfolio-info-content">
                                        작업 기간 : 2024.03.05 ~ 2024.05.07
                                        <br/><span>프론트 앱</span> : 기여도 50%
                                    </p>
                                </div>
                            </div>
                            <div className="fn-portfolio-info">
                                <div className="fn-portfolio-info-row">
                                    <p className="fn-portfolio-info-title">GitLab</p>
                                    <div className="fn-portfolio-info-content">
                                        <a href="https://gitlab.com/matddak/matddakapi/matddakapi" className="fn-git">
                                            <img src="/assets/images/mattack/gitlab_logo_mat.png"/>
                                            <span>백 엔드 GitLab 바로가기</span>
                                        </a>
                                        <a href="https://gitlab.com/matddak_app/matddak_app" className="fn-git">
                                            <img src="/assets/images/mattack/gitlab_logo_mat.png"/>
                                            <span>프론트엔드 앱 GitLab 바로가기</span>
                                        </a>
                                        <a href="https://gitlab.com/meimeipark/matddak-web-vue" className="fn-git">
                                            <img src="/assets/images/mattack/gitlab_logo_mat.png"/>
                                            <span>프론트엔드 웹 GitLab 바로가기</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="fn-portfolio-info-row">
                                    <p className="fn-portfolio-info-title">사용기술</p>
                                    <div className="fn-portfolio-skill">
                                        <div className="fn-skill-border">
                                            <img src="/assets/images/mattack/dart_logo_mat.png"/>
                                        </div>
                                        <div className="fn-skill-border">
                                            <img src="/assets/images/mattack/flutter_logo_mat.png"/>
                                        </div>
                                        <div className="fn-skill-border">
                                            <img src="/assets/images/mattack/vue_logo_mat.png"/>
                                        </div>
                                        <div className="fn-skill-border">
                                            <img src="/assets/images/mattack/js_logo_mat.png"/>
                                        </div>
                                        <div className="fn-skill-border">
                                            <img src="/assets/images/mattack/java_logo_mat.png"/>
                                        </div>
                                        <div className="fn-skill-border">
                                            <img src="/assets/images/mattack/spring_boot_logo_mat.png"/>
                                        </div>
                                        <div className="fn-skill-border">
                                            <img src="/assets/images/mattack/docker_logo_mat.png"/>
                                        </div>
                                        <div className="fn-skill-border">
                                            <img src="/assets/images/mattack/postgresql_logo_mat.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* WONE */}
                    <SwiperSlide className="fn-portfolio-slide">
                        <div className="fn-portfolio-slide-item">
                            <div className="fn-video-box">
                                <iframe src="https://www.youtube.com/embed/leNfrqHcCPU?si=dYq1IpISbD7G0Y_0"
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>

                            <div className="fn-portfolio-info">
                                <div className="fn-portfolio-info-row">
                                    <p className="fn-portfolio-info-title">WONE 현금 챌린지 앱</p>
                                    <p className="fn-portfolio-info-content">
                                        Wone앱은 현금을 매번 출금하고 들고다녀야 하는 불편함을
                                        최소화하기 위해 신용카드가 아닌  체크(현금)카드만의 사용 내역과 목표 금액을
                                        한 번에 관리하기 위해 개발한 현금 챌린지 앱니다.</p>
                                </div>
                                <div className="fn-portfolio-info-row">
                                    <p className="fn-portfolio-info-title">3인 프로젝트</p>
                                    <p className="fn-portfolio-info-content">
                                        작업 기간 : 23.12.26 ~ 24.02.29
                                        <br/><span>백</span> : 30% · <span>앱</span> : 40% · <span>웹</span> : 50%</p>
                                </div>
                            </div>
                            <div className="fn-portfolio-info">
                                <div className="fn-portfolio-info-row">
                                    <p className="fn-portfolio-info-title">GitLab</p>
                                    <div className="fn-portfolio-info-content">
                                        <a href="https://gitlab.com/hamsubin0628/projectwoneapi" className="fn-git">
                                            <img src="/assets/images/wone/gitlab_logo_wone.png"/>
                                            <span>백 엔드 GitLab 바로가기</span>
                                        </a>
                                        <a href="https://gitlab.com/hamsubin0628/wone_app_project" className="fn-git">
                                            <img src="/assets/images/wone/gitlab_logo_wone.png"/>
                                            <span>프론트엔드 앱 GitLab 바로가기</span>
                                        </a>
                                        <a href="https://gitlab.com/meimeipark/wone-admin-page-vue" className="fn-git">
                                            <img src="/assets/images/wone/gitlab_logo_wone.png"/>
                                            <span>프론트엔드 웹 GitLab 바로가기</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="fn-portfolio-info-row">
                                    <p className="fn-portfolio-info-title">사용기술</p>
                                    <div className="fn-portfolio-skill">
                                        <div className="fn-skill-border-2">
                                            <img src="/assets/images/wone/dart_logo_wone.png"/>
                                        </div>
                                        <div className="fn-skill-border-2">
                                            <img src="/assets/images/wone/flutter_logo_wone.png"/>
                                        </div>
                                        <div className="fn-skill-border-2">
                                            <img src="/assets/images/wone/vue_logo_wone.png"/>
                                        </div>
                                        <div className="fn-skill-border-2">
                                            <img src="/assets/images/wone/java_logo_wone.png"/>
                                        </div>
                                        <div className="fn-skill-border-2">
                                            <img src="/assets/images/wone/spring_boot_logo_wone.png"/>
                                        </div>
                                        <div className="fn-skill-border-2">
                                            <img src="/assets/images/wone/docker_logo_wone.png"/>
                                        </div>
                                        <div className="fn-skill-border-2">
                                            <img src="/assets/images/wone/postgresql_logo_wone.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* KIOSKKU. */}
                    <SwiperSlide className="fn-portfolio-slide">
                        <div className="fn-portfolio-slide-item">
                            <img src="/assets/images/kioskku_temp.jpg" className="fn-kd"/>
                            <div className="fn-portfolio-info">
                                <div className="fn-portfolio-info-row">
                                    <p className="fn-portfolio-info-title">KIOSKKU. 키오스크 대여 시스템</p>
                                    <p className="fn-portfolio-info-content">
                                        계약 과정에서의 기업 신용도와 개인 신용도에 대한 차이를 이해하고,
                                        신용도를 통해 승인, 부결, 예외 승인이 결정되는 수학적 개념들을 공부하며
                                        기초 금융 지식을 쌓는 경험이 될 것입니다.</p>
                                </div>
                                <div className="fn-portfolio-info-row">
                                    <p className="fn-portfolio-info-title">2인 프로젝트</p>
                                    <p className="fn-portfolio-info-content">
                                        작업기간 : 2024.08.01 ~
                                        <br/><span>프론트 웹</span> : 기여도 100%
                                    </p>
                                </div>
                            </div>
                            <div className="fn-portfolio-info">
                                <div className="fn-portfolio-info-row">
                                    <p className="fn-portfolio-info-title">GitLab</p>
                                    <div className="fn-portfolio-info-content">
                                        <a href="https://gitlab.com/cyjmusic1012/kioskkuapis" className="fn-git">
                                            <img src="/assets/images/kioskku/gitlab_logo_kioskku.png"/>
                                            <span>백 엔드 GitLab 바로가기</span>
                                        </a>
                                        <a href="https://gitlab.com/hamsubin0628/kioskku_webs_v1" className="fn-git">
                                            <img src="/assets/images/kioskku/gitlab_logo_kioskku.png"/>
                                            <span>프론트엔드 웹 GitLab 바로가기</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="fn-portfolio-info-row">
                                    <p className="fn-portfolio-info-title">사용기술</p>
                                    <div className="fn-portfolio-skill">
                                        <div className="fn-skill-border-3">
                                            <img src="/assets/images/kioskku/nextjs_logo_kioskku.png"/>
                                        </div>
                                        <div className="fn-skill-border-3">
                                            <img src="/assets/images/kioskku/react_logo_kioskku.png"/>
                                        </div>
                                        <div className="fn-skill-border-3">
                                            <img src="/assets/images/kioskku/js_logo_kioskku.png"/>
                                        </div>
                                        <div className="fn-skill-border-3">
                                            <img src="/assets/images/kioskku/java_logo_kioskku.png"/>
                                        </div>
                                        <div className="fn-skill-border-3">
                                            <img src="/assets/images/kioskku/spring_boot_logo_kioskku.png"/>
                                        </div>
                                        <div className="fn-skill-border-3">
                                            <img src="/assets/images/kioskku/docker_logo_kioskku.png"/>
                                        </div>
                                        <div className="fn-skill-border-3">
                                            <img src="/assets/images/kioskku/postgresql_logo_kioskku.png"/>
                                        </div>
                                        <div className="fn-skill-border-3">
                                            <img src="/assets/images/kioskku/kubernetes_logo_kioskku.png"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            )}

        </div>
    )
}

export default PortfolioSwiper