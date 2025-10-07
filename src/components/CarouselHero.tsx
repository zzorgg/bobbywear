import { useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-fade';

interface Slide {
  img: string;
  title: string;
  desc: string;
}

const slides: Slide[] = [
  {
    img: '/asset/IMG_7442.jpeg',
    title: 'Spring Collection',
    desc: 'Bright, comfy, stylish dresses for every girl.',
  },
  {
    img: '/asset/IMG_7440.jpeg',
    title: 'Party Wear',
    desc: 'Twirl-ready dresses for special occasions.',
  },
  {
    img: '/asset/IMG_7436.jpeg',
    title: 'Casual Comfort',
    desc: 'Soft fabrics and playful prints for daily fun.',
  },
];

export default function CarouselHero() {
  const [active, setActive] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  const handleSlide = useCallback((swiper: SwiperType) => {
    setActive(swiper.realIndex);
  }, []);

  const handleInit = useCallback((swiper: SwiperType) => {
    setSwiperInstance(swiper);
  }, []);

  // Update active state when clicking indicators
  const goToSlide = useCallback((index: number) => {
    if (swiperInstance) {
      swiperInstance.slideToLoop(index);
    }
  }, [swiperInstance]);

  return (
    <div className="container mx-auto px-4 pt-8 pb-12">
      <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl">
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          effect="fade"
          loop={true}
          slidesPerView={1}
          onSlideChange={handleSlide}
          onSwiper={handleInit}
          className="w-full"
        >
          {slides.map((s, i) => (
            <SwiperSlide className="w-full" key={i}>
              <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:aspect-[24/9] overflow-hidden">
                <img
                  src={s.img}
                  className="w-full h-full object-cover"
                  alt={s.title}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/40 to-transparent z-10 pointer-events-none" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Floating overlay card - positioned inside container */}
        <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 right-4 md:right-auto z-30 md:max-w-xl">
          <div className="float-card shadow-2xl backdrop-blur-xl bg-white/15 border-2 border-white/30 rounded-2xl px-6 py-5 md:px-8 md:py-6 transition-all duration-500">
            <div key={active} className="fade-in space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">Featured</span>
              </div>
              
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-white drop-shadow-2xl">
                {slides[active].title}
              </h2>
              
              <p className="text-sm md:text-lg text-white/95 leading-relaxed">
                {slides[active].desc}
              </p>
            </div>
            
            {/* Progress indicator */}
            <div className="mt-5 flex gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === active ? 'w-12 bg-white' : 'w-8 bg-white/50 hover:bg-white/70'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}