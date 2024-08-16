import Image from "next/image";
import Navbar from "../../components/Navbar";
import team from '../assets/IMG_1559.JPG';
import cord from '../assets/coords.JPG';
export default function Home() {
  return (    
    <main>
      <Navbar />
      <div className="md:h-[87vh] flex md:flex-row flex-col items-center justify-center gap-[2rem] px-10 pt-[3rem]">
        <div className="md:w-[45%] flex flex-col gap-5 md:h-[70%] ">
          <h1 className="text-[2.5rem] font-extrabold text-center">
            What is AMURoboclub
          </h1>
          <p className="text-[0.9rem] text-gray-300 leading-8 ">
          AMURoboclub is a student&apos;s body that nurtures the needs of curious and innovative minds. As conveyed by its motto, &apos;Where Innovation Meets Implementation&apos;, AMURoboclub puts forward a learning as well as a challenging environment that ignites the techie inside a person. Moreover, it provides hands-on experience with various technologies and tools which renders your knowledge and skills in the field of robotics. The club works under the supervision of our faculty advisors from various branches of Zakir Husain College of Engineering and Technology, Aligarh Muslim University.
          </p>
        </div>
        <Image
         src={team}
         alt='team'
         className="md:w-[40vw] rounded-[3rem]"
         />
      </div>

      <div className="md:h-[87vh] flex md:flex-row flex-col items-center justify-center gap-[2rem] px-10 mt-10">
        <h1 className="md:hidden inline text-[2.5rem] font-extrabold">
          Why join us?
        </h1>
        <Image
         src={cord}
         alt='team'
         className="md:w-[25vw] w-[60vw] md:rounded-[3rem] rounded-md"
         />
        <div className="md:w-[45%] flex flex-col gap-10 h-[100%]">
          <h1 className="hidden md:inline text-[2.5rem] font-extrabold">
            Why join us?
          </h1>
          <p className="text-[0.9rem] text-gray-300 leading-8 ">
          AMURoboclub serves as a framework to stimulate interest and showcase your talent in almost all the interdisciplinary aspects of robotics and engineering byengaging students in profound activities, competitions, projects and workshops throughout the year. Furthermore, the club guides and encourages the students to participate in various national and international competitions.With no barrier of branch and year of graduation, the AMURoboclub family works best with experienced seniors and fresh innovators.The teachings and the working environment of AMURoboclub train its members in such a manner that they do wonders in their career. The alumni of the club are working in prestigious companies. Apart from the projects and training, the club also supervises the academics of the students and produces many scholars every year. Some of them have ecured single-digit rank in the GATE examination and henceforth, did their master from IITs.
          </p>
        </div>
      </div>
    </main>
  );
}
