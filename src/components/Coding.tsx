import { useState, useEffect } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../components/ui/carousel.tsx';
import { Card, CardContent } from '../components/ui/card.tsx';
import meHiking from '../images/me-hiking.jpg';
import myDesk from '../images/myOffice.jpg';
import study from '../images/study.jpg';

export default function Coding() {
  const [api, setApi] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [totalSlides, setTotalSlides] = useState(0);

  // Define text descriptions for each image
  const imageDescriptions = [
    "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.",
    "Description for image 3",
    "Description for image 4",
    "Description for image 5"
  ];

  useEffect(() => {
    if (api) {
      setTotalSlides(api.scrollSnapList().length);
      setCurrentSlide(api.selectedScrollSnap() + 1);

      api.on("select", () => {
        setCurrentSlide(api.selectedScrollSnap() + 1);
      });
    }
  }, [api]);

  return (
    <div id="codding--journey--section" className="p-24 mt-[180px] flex justify-center items-center h-full">
      <div>
        <p className="mb-4 codding--paragraph"><span  className="codding--paragraph span--coding--journey">how</span> I begun coding</p>
        <div className="w-[700px] bg-[#f7fcff] p-12 h-[400px] coding--text flex items-center">
          <span className="pl-4 border-l-4 border-[#5AB2FF] leading-8 tracking-wider" >{imageDescriptions[currentSlide - 1]}</span>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <Carousel setApi={setApi} className="carouse--container ml-40 w-[800px] flex items-center h-[550px]">
          <CarouselContent >
            {[
              { image: meHiking, alt: "Img with me, on hiking, from the back, in nature" },
              { image: myDesk, alt: "Image 1" },
              { image: study, alt: "Image 2" },
            ].map((item, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex border-none aspect-square items-center justify-center p-0 m-0 ">
                    {/* Use the imported image */}
                    <img src={item.image} alt={item.alt} className="rounded-md w-full h-[650px] w-[700px]" />
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
          {/* <p>Swipe</p> */}
      </div>
    </div>
  );
}
