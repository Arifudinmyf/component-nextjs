import * as React from "react";
import styles from './cards.module.scss';
import Image from "next/image";
import arifudin from '@public/images/arifudin00.jpg'

type CardsProps = {
  //
};

const Cards: React.FC<any> = () => {
  return <div className={styles.cards}>
    <div className={styles.content_profile}>

      <div className={styles.images_profile}>
        <Image
          src={arifudin}
          alt="arifudin"
          height={48}
          width={48}
          className=" bg-white rounded-full shadow mb-4 object-cover"
        />
      </div>

      <div className={styles.title_profile}>
        <span className={styles.titles_profile}> Arifudin </span>
        <div className={styles.header_desc}>
          <span className={styles.title_sub}> Project </span>
          <ul className={styles.desc_sub}> Telkomsel </ul>
        </div>
        <div className={styles.header_desc}>
          <span className={styles.title_sub}> FrontEnd Developer</span>
          <ul className={styles.desc_sub}> 12 mei 2022 - 25 desember 2024 </ul>
        </div>
      </div>
    </div>

    <div className="border-b border-gray-100"></div> 

    <div className={styles.content_project}>
      <div className={styles.images_project}>
        <Image
          src={arifudin}
          alt="arifudin"
          // height={300}
          // width={300}
          className="rounded w-full"
        />
      </div>

      <span className={styles.name_company}> Pt ABCD </span>
      <ul className={styles.desc_company}>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod veritatis harum sint accusamus voluptates placeat! Quia dolorum at omnis obcaecati vel culpa eius animi veniam officia, ad molestias tenetur illum!
        </li>
      </ul>
    </div>
    
    <div className="border-b border-gray-100"></div> 

    <div className={styles.footer_company}>
      span
    </div>
    

  </div>;
};

export default Cards;
