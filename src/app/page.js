import Image from "next/image";
import Navbar from "../../components/Navbar";
import team from '../assets/IMG_1559.JPG';
import cord from '../assets/coords.JPG';
export default function Home() {
  return (    
    <main>
      <Navbar />
      <div className="flex md:flex-row flex-col items-center justify-between gap-[5rem] md:gap-[2rem] pl-10 py-[3rem] bg-mainlight">
        <div className="md:w-[45%] flex flex-col gap-10">
          <h1 className="text-[2.6rem] leading-[2.5rem] md:leading-[4rem] md:text-[3.5rem] font-bold text-left text-mainblue">
          To shape a brighter tomorrow, you need a robotics system that envisions <span className="text-gradient">every possibility</span>. 
          </h1>
          <p className="text-justify">
          AMURoboclub nurtures curious minds with its motto, &apos;Where Innovation Meets Implementation.&apos; It offers a dynamic learning environment and hands-on experience with robotics technologies, guided by faculty advisors from Zakir Husain College of Engineering and Technology, Aligarh Muslim University.
          </p>

          <div className="">
            <a
              className="font-bold border-2 border-green-600 px-2 py-3 rounded-full" 
              href="https://drive.google.com/file/d/1RFu5NtxDXvg54ka9GJcrxYiexZaR1wXk/view?usp=sharing">
              Download Our APP
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="w-[90%] h-[30vh] bg-green-400 rounded-l-[1rem] absolute -top-5 right-0">
          </div>
          <Image
          src={team}
          alt='team'
          className="md:w-[40vw] rounded-l-[1rem] relative"
          />
         </div>
      </div>

      <div className="flex md:flex-row flex-col items-start justify-start md:gap-8 px-10 md:px-24 py-20">
        <Image
         src={cord}
         alt='team'
         className="relative md:w-[25vw] w-[60vw] md:rounded-[1rem] rounded-md md:z-10 -ml-5 shadow-xl"
         />
        <div className="relative md:w-[55%] -mt-10 md:pt-24">
          <div className="bg-lightblue p-5 md:mt-10 md:p-8 md:pl-24 md:-ml-20 rounded bg-brand-gray-light">
            <h1 className="text-[1.7rem] md:text-[2.8rem] leading-[2rem] md:leading-[3.4rem] font-bold text-mainblue">
              Innovating and overcoming today&apos;s robotics challenges to create a smarter, more sustainable future for our campus and beyond.
            </h1>
            <p className="pt-24 font-medium text-justify">
            AMURoboclub fosters interest and showcases talent in robotics and engineering through engaging activities, competitions, projects, and workshops year-round. We encourage participation in national and international contests and support students of all branches and years. Our experienced seniors and fresh innovators work together to provide a training environment that leads to <strong>successful careers</strong>. Our alumni excel in prestigious companies and many achieve top ranks in exams like GATE, securing positions in IITs for further studies.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
