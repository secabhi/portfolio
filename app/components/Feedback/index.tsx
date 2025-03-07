import Image from "next/image";

const Feedback = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="card text-primary-content w-[800px] bg-white">
        <div className="card-body  px-[64px] pl-[44px] pb-[82px]">
          <h2 className="card-title">Card title!</h2>
          <p
            className="mb-[50px] text-[28px] leading-[1.42857]"
          >
            “ Folio Designer is a clean and creative landing page that matches
            with any freelancer or designer, you can easily to build the page in
            Sketch or Figma.”
          </p>
          <div>
            <div className="flex items-center gap-[16px]">
              <div className="avatar">
                <Image
                  src="/assets/images/ava-1.jpg"
                  alt=""
                  width={64}
                  height={64}
                  className="rounded-full"
                />
              </div>
              <div className="text-[#111029] text-[16px] leading-[1.5]">
                <p className="mb-[8px]">Abhishek Sinha</p>
                <p className="text-[#6b6b6b]">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
