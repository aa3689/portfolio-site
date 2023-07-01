import Image from 'next/image';
import TicorporateLogo from '/public/ticorporate-logo.png';
import newtabicon from '/public/new-tab-icon.png';

const tc = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-2">
      <Image
        src={TicorporateLogo}
        alt="Logo for Ticorporate"
        width={100}
        height={100}
      />
      <h3 className="text-lg font-bold pt-8 pb-2  ">Ticorporate</h3>
      <p className="py-2" class="italic">
        Ticorporate on Jamkin liiketoimintasimulaatioympäristö, jossa
        opiskelijat suunnittelevat ja kehittävät omia sovelluksia ja pelejä.
        Ympäristö on rakennettu mahdollisimman todentuntuiseksi ja tästä syystä
        esimerkiksi opiskelijoiden käyttämät teknologiat ovat samoja kuin
        työelämässä.
      </p>
      <a
        className="text-teal-800"
        href="https://www.ticorporate.fi/"
        target="blank"
      >
        - ticorporate.fi
      </a>
      <p className="py-2">
        Ticorporatessa suunnittelimme ja kehitimme neljän hengen tiimissä
        fullstack-sovelluksen hyödyntäen Scrumia projektinhallinnassa. Tiimissä
        vastasin AWS-palveluiden käyttöönotosta ja ylläpidosta sekä toimin Scrum
        Masterina ja markkinointivastaavana.
      </p>
      <p>
        <a
          href="https://tonihiidenvuo.wixsite.com/tc-portfolio"
          target="blank"
          className="text-teal-600"
        >
          TC-portfolio
          <Image
            src={newtabicon}
            alt="Icon for indicating that link opens in new tab"
            width={15}
            height={15}
          />
        </a>
      </p>
    </div>
  );
};

export default tc;
