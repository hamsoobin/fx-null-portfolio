'use client'
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination, Scrollbar, A11y} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const DesignPortfolioSwiper = () => {
    return (
        <div className="fn-swiper">
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
                    el: '.pagination',
                }}
                a11y={{
                    enabled: true,
                    prevSlideMessage: '이전 슬라이드',
                    nextSlideMessage: '다음 슬라이드'
                }}
                style={{
                    "--swiper-navigation-color": "#b2b2b2"
                }}
            >
                {/* 디자인 포트폴리오 아이템 */}
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/00.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/01.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/02.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/03.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/04.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/05.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/06.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/07.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/08.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/09.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/10.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/11.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/12.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/13.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/14.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="fn-portfolio-slide">
                    <div className="fn-design-swiper-item">
                        <img src="/assets/images/design/15.jpg" className="fn-design-swiper"/>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default DesignPortfolioSwiper