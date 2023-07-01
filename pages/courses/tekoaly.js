import Image from 'next/image';
import sagemakerLogo from '/public/sagemaker-logo.png';

const tekoaly = () => {
  return (
    <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
      <Image
        src={sagemakerLogo}
        alt="Logo for serverless-framework"
        width={100}
        height={75}
      />
      <h3 className="text-lg font-bold pt-8 pb-2 ">
        Tekoäly- ja koneoppimispalvelut pilvialustalla
      </h3>
      <p className="py-2">
        Kurssilla perehdyttiin tekoäly- ja koneoppimispalveluihin AWS:n
        pilvessä. Käytetyt palvelut mm. Amazon SageMaker, Forecast, Rekognition
        ja Polly.
      </p>
    </div>
  );
};

export default tekoaly;
