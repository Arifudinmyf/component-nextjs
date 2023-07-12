import * as React from "react";
import { TFunction, useTranslation } from "next-i18next";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type TranslateComponentProps = {
  //
};

const TranslateComponent: React.FC<any> = () => {

  const { t } = useTranslation('');

  return <>
  <div>
    <a href="">
      <p>{t("language.en")}</p>
    </a>

    <a href="/tr">
      <p>{t("language.tr")}</p>
    </a>
  </div>
  </>;
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default TranslateComponent;
