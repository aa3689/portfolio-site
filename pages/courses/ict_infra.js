import Image from 'next/image';
import awsLogo from '/public/aws-logo.png';
import newtabicon from '/public/new-tab-icon.png';

const ict_infra = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      <Image
        src={awsLogo}
        alt="Logo for serverless-framework"
        width={100}
        height={70}
      />
      <h3 className="text-lg font-bold pt-8 pb-2 ">
        ICT-infrastruktuuri pilvialustalla
      </h3>
      <p className="py-2">
        Kurssilla tutustuttiin AWS:n infrastruktuurin pystyttämiseen (VPC,
        aliverkot, muut resurssit) IaC-metodeilla sekä tarkasteltiin näitä
        asioita operoinnin, monistettavuuden ja ylläpidon näkökulmasta.{' '}
      </p>
      <a
        href="https://github.com/aa3689/ict-infra-lopputyo"
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

export default ict_infra;
