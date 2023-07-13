import * as React from "react";
import { FaAngular } from "react-icons/fa"
import Facebook from "./facebook";
import Instagram from "./instagram";
import GitHub from "./github";
import styles from './footer.module.scss'

type FooterProps = {
  //
};

const Footer: React.FC<any> = () => {

  const profile = [
    {
      company: 'Arifudin',
      icon: <FaAngular />,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, accusantium.',
      medsos: [
        {
          name: 'Instagram',
          key: '2', 
          hrefs: '', 
          icons: <Instagram />
        },
        {
          name: 'Facebook', 
          key: '1',
          hrefs: '',  
          icons: <Facebook />
        },
        {
          name: 'Github', 
          key: '3', 
          hrefs: 'https://github.com/Arifudinmyf', 
          icons: <GitHub />
        }
      ]
    }
  ]

  const company = [
    {
      company: 'Company',
      child: [
        {titles: 'About Us', hrefs: 'https://nextui.org/docs/components/switch'},
        {titles: 'Meet the Team', hrefs: ''},
        {titles: 'Careers', hrefs: ''}
      ]
    },
    {
      company: 'Service',
      child: [
        {titles: '1on1 Coaching', hrefs: 'https://nextui.org/docs/components/switch'},
        {titles: 'Company Review', hrefs: ''},
        {titles: 'Accounts Review', hrefs: ''},
        {titles: 'HR Consulting', hrefs: ''},
        {titles: 'SEO Optimisation', hrefs: ''}
      ]
    },
    {
      company: 'Help',
      child: [
        {titles: 'Contact', hrefs: 'https://nextui.org/docs/components/switch'},
        {titles: 'FAQs', hrefs: ''},
        {titles: 'Live Chat', hrefs: ''}
      ]
    },
    {
      company: 'Legal',
      child: [
        {titles: 'Privacy Policy', hrefs: 'https://nextui.org/docs/components/switch'},
        {titles: 'Terms & Conditions', hrefs: ''},
        {titles: 'Returns Policy', hrefs: ''},
        {titles: 'Accessibility', hrefs: ''}
      ]
    },
  ]

  return <>
    <footer className={styles.footers}>
      <div className={styles.sub_footer}>
        <div className={styles.child_footer}>
          {profile.map((profil) => (
            <div>
              <span className={styles.icon_company} >
                {profil.icon}
              </span>
              <p className={styles.title}>
                {profil.description}
              </p>
              <div className={styles.medsos}>
                {profil.medsos.map((m, index) =>(
                  <a key={index} className={styles.hovers} href={m.hrefs} target="_blank" rel="noreferrer">
                    <span className={styles.sub_title}> {m.name} </span>
                    {m.icons}
                  </a>
                ))}
              </div>
            </div>

          ))}
          <div className={styles.providers}>
            {company.map((i) => (
              <div>
                <p className={styles.title_providers}>
                  {i.company}
                </p>
                {i.child.map((sub) => (
                  <nav className={styles.sub_providers}>
                    <a href={sub.hrefs}> {sub.titles} </a>
                  </nav>

                ))}
              </div>
            ))}
          </div>
        </div>
        <p className={styles.copyright}>
          © 2023 Arifudin
        </p>
      </div>
    </footer>
  </>;
};

export default Footer;
