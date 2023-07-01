import Image from 'next/image';
import code from '/public/code.png';
import newtabicon from '/public/new-tab-icon.png';

const webui = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      <Image src={code} alt="Placeholder logo" width={100} height={100} />
      <h3 className="text-lg font-bold pt-8 pb-2 ">Web UI</h3>
      <p className="py-2">
        Kurssilla tutustuttiin responsiivisten verkkosivujen totettamiseen HTML-
        ja CSS-teknologioilla. Kurssi toimi samalla johdantona HTML- ja
        CSS-ulkoasukirjastoihin ja -sovelluskehyksiin.
      </p>
      <a
        href="https://github.com/aa3689/web-ui-lopputyo"
        target="blank"
        className="text-teal-600"
      >
        Kurssin lopputyön GH-repositorio
        <Image
          src={newtabicon}
          alt="Icon for indicating that link opens in a new tab"
          width={15}
          height={15}
        />
      </a>
    </div>
  );
};

export default webui;
