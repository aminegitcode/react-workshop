import {
  Carousel,
  CarouselContent,

  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import england from "../../assets/landing/england.svg";
import hat from "../../assets/landing/hat.svg";
import student from "../../assets/landing/student.svg";
import teacher from "../../assets/landing/teacher.svg";
import "./Programsstyle.css"

export default function Programs() {
  const data = [
    {
      icon: england,
      text: "GENERAL PROGRAM",
    },
    {
      icon: teacher,
      text: "INTENSIVE PROGRAM",
    },
    {
      icon: student,
      text: "KIDS PROGRAM",
    },
    {
      icon: hat,
      text: "IELTS PREPARATION",
    },
    {
      icon: england,
      text: "GENERAL PROGRAM",
    },
    {
      icon: teacher,
      text: "INTENSIVE PROGRAM",
    },
    {
      icon: student,
      text: "KIDS PROGRAM",
    },
    {
      icon: hat,
      text: "IELTS PREPARATION",
    },
  ];

  return (
    <div className="">
      <Carousel className="program">
        <CarouselContent className="">
          {data.map((Element, index) =>{
            return (
              <div key={Element}>
                <img src={Element.icon} key={index} />
                <p>{Element.text}</p>
              </div>
            );
          })}
        
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

