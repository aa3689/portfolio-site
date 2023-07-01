import Image from 'next/image';
import treeIcon from '/public/tree-icon.png';
import newtabicon from '/public/new-tab-icon.png';

const algoritmit = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      <Image
        src={treeIcon}
        alt="Logo for serverless-framework"
        width={100}
        height={100}
      />
      <h3 className="text-lg font-bold pt-8 pb-2 ">
        Tietorakenteet ja algoritmit
      </h3>
      <p className="py-2">
        Kurssilla tutustuttiin erilaisiin algoritmityyppeihin ja yleisimpiin
        algoritmeihin sekä toteutettiin niitä.
      </p>
      <a
        href="https://github.com/aa3689/tietorakenteet-ja-algoritmit"
        target="blank"
        className="text-teal-600"
      >
        Kurssin tehtävien GH-repositorio
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

export default algoritmit;
