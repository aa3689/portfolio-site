import Image from 'next/image';
import reactLogo from '/public/react-logo.png';

const react_perusteet = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      <Image
        src={reactLogo}
        alt="Logo for serverless-framework"
        width={100}
        height={100}
      />
      <h3 className="text-lg font-bold pt-8 pb-2 ">React.js fundamentals</h3>
      <p className="py-2">
        Kurssilla tutustuttiin React.js:n perusteisiin ja toteutettiin pieniä
        React-sovelluksia.
      </p>
    </div>
  );
};

export default react_perusteet;
