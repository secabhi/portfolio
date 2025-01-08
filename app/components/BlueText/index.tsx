const BlueText = ({text="Abhishek Sinha",color="#4C40F7"}) => {
  return (
    <div
      className={`flex items-center gap-2 text-[${color}]`}
      data-aos="fade-up"
    >
      <hr className={`w-16 bg-[${color}] h-1`} />
      <label className="font-semibold">{text}</label>
    </div>
  );
};

export default BlueText;