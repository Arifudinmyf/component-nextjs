import * as React from "react";
import styles from './profile.module.scss';
import arifudin from '@public/images/arifudin00.jpg'
import bhayangkara from '@public/images/bhayangkara_jaya.png'
import Bookmark from '@public/icons/bookmark.svg'
import { SiAngular, SiMongodb, SiTailwindcss } from "react-icons/si";
import { FaReact, FaVuejs, FaNodeJs } from "react-icons/fa";
import { FcGraduationCap, FcAndroidOs, FcApproval, FcClock, FcManager } from "react-icons/fc";
import { AiOutlineAntDesign } from "react-icons/ai";
import { TbBrandNextjs } from "react-icons/tb";
import Slider from "react-slick";

type ProfileProps = {
  //
};


const ProfilePhoto = () => (
  // <Image
  //   src={arifudin}
  //   alt="arifudin"
  //   height={128}
  //   width={128}
  //   className=" bg-white p-2 rounded-full shadow mb-4"
  // />
  <img
    src={arifudin.src}
    alt="arifudin"
    className="bg-white h-32 w-32 p-2 rounded-full shadow mb-4"
  />
);

const Location = () => (
  <svg viewBox="0 0 24 24" className="mr-1" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

function NextPrevArrow() {
  return (
    <div
      className="hidden"
    />
  );
}

const Profile: React.FC<any> = () => {

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    nextArrow: <NextPrevArrow/>,
    prevArrow: <NextPrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  };

  const verticalSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    autoplay: true,
    speed: 400,
    autoplaySpeed: 2000,
    nextArrow: <NextPrevArrow/>,
    prevArrow: <NextPrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  const kemampuan = [
    {title: "Angular", key: "1", icons: <SiAngular className="text-red-500"/> },
    {title: "NextJS", key: "2", icons: <TbBrandNextjs /> },
    {title: "ReactJs", key: "2", icons: <FaReact className="text-blue-500" /> },
    {title: "VueJs", key: "3", icons: <FaVuejs className="text-green-800" /> },
    {title: "ExpressJs", key: "4", icons: <FaNodeJs className="text-yellow-300" /> },
    {title: "MongoDB", key: "5", icons: <SiMongodb className="text-green-600" /> },
    {title: "TailwindCSS", key: "6", icons: <SiTailwindcss className="text-blue-600" /> },
    {title: "Ant Design", key: "6", icons: <AiOutlineAntDesign className="text-blue-400" /> }
  ]

  const roles = [
    {titles: "FrontEnd Developer", notes: "Pengalaman", key: "1"},
    {titles: "BackEnd Developer",notes: "Pengalaman", key: "2"},
    {titles: "RPA ( Robotic Process Automation )",notes: "Magang", key: "2"}
  ]

  const studys = [
    {
      logoUniv: {bhayangkara},
      nameUniv: 'Universitas Bhayangakara Jaya II',
      title: 'S1',
      titleName: 'S.Kom',
      childs: [
        {
          nameChild: 'Jurusan',
          major: 'Informatika',
          studyYears: 'Tahun Ajaran',
          startYear:'2017 - 2022',
          ipkName: 'IPK',
          ipk: '3.30'
        }
      ]
    }
  ]

  return <>
    <aside className={styles.content_aside}>
    
      <div className={styles.profiles}>
          <div className={styles.header_title}>
              <ProfilePhoto />
              <p className={styles.title}>Arifudin</p>
              <div className={styles.address}>
                <Location />
                Bekasi, Indonesia
              </div>
          </div>
          <div className={styles.experiences}>
              <div className={styles.desc}>
                  <p className={styles.total}>5</p>
                  <span className={styles.dec}>Project</span>
              </div>
              <div className={styles.desc}>
                  <p className={styles.total}>2.5 Tahun</p>
                  <span className={styles.dec}>Pengalaman</span>
              </div>
              <div className={styles.desc}>
                  <p className={styles.total}>29 Tahun</p>
                  <span className={styles.dec}>Umur</span>
              </div>
          </div>
      </div>

      <div className={styles.skills}>
          <h3 className={styles.title_skill}>Kemampuan</h3>
          <Slider {...settings}>
            {kemampuan.map((i, index) => (
            <div className="">
              <ul className={styles.content_sub}>
                  <li key={index} className={styles.subs}>
                      <a className={styles.title_icon} href="#">
                          {i.icons}
                      </a>
                      <span className={styles.title_text}>
                          {i.title}
                      </span>
                  </li>
              </ul>
            </div>
            ))}
          </Slider>
      </div>

      <div className={styles.roll}>
          <span className={styles.title_roll}>Roll Kerja</span>
          <Slider {...verticalSettings}>
            {roles.map((i, index) => (
              <div className="">
                <ul key={index} className={styles.desc_roll}>
                    <li className={styles.titles}>
                        {i.titles}
                    </li>
                    <span className={styles.desc}>
                        {i.notes}
                    </span>
                </ul>
              </div>
            ))}
          </Slider>
      </div>

      <>
        {studys.map((i) => (
          <div className={styles.study}>
              <img  className={styles.images} src={i.logoUniv.bhayangkara.src} alt="Bhayangakara Jaya"/>
              <div className={styles.content_univ}>
                  <div className={styles.contens}>
                    <div className={styles.title_univ}>
                      <div className={styles.conten_univ}>
                          <div className={styles.sub_univs}>
                            <div className={styles.contents_title}>
                              <FcGraduationCap className={styles.icon_univ} />
                              <h2 className={styles.field_text}>{i.nameUniv}</h2>
                            </div>
                            <div className={styles.content_majors}>
                              <div className={styles.sub_majors}>
                                <FcManager className={styles.images_major} />
                                <span className={styles.title_majors}>{i.title}</span>
                              </div>
                              <span className={styles.between_majors}>
                                {i.titleName}
                              </span>
                            </div>

                            {i.childs.map((chil) => (
                              <>
                                <div className={styles.content_majors}>
                                  <div className={styles.sub_majors}>
                                    <FcAndroidOs className={styles.images_major} />
                                    <span className={styles.title_majors}>{chil.nameChild}</span>
                                  </div>
                                  <span className={styles.between_majors}>
                                    {chil.major}
                                  </span>
                                </div>

                                <div className={styles.content_majors}>
                                  <div className={styles.sub_majors}>
                                    <FcClock className={styles.images_major} />
                                    <span className={styles.title_majors}>{chil.studyYears}</span>
                                  </div>
                                  <span className={styles.between_majors}>
                                    {chil.startYear}
                                  </span>
                                </div>

                                <div className={styles.content_majors}>
                                  <div className={styles.sub_majors}>
                                    <FcApproval className={styles.images_major} />
                                    <span className={styles.title_majors}>{chil.ipkName}</span>
                                  </div>
                                  <span className={styles.between_majors}>
                                    {chil.ipk}
                                  </span>
                                </div>
                              </>
                            ))}
                          </div>
                      </div>
                    </div>

                    <div className={styles.bookmarks}>
                      <div className={styles.content_bookmark}>
                        <img className={styles.images_bookmark} src={Bookmark.src} alt="" />
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        ))}
      </>

    </aside>
  </>;
};

export default Profile;
