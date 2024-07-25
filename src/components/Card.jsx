
const Card = ({children,status="50",quantity=50,titleText="Card" ,color="bg-primary", bgDivider="bg-gray-300"}) => {
  return (
    <>
      <div className={` w-64 h-52  ${color} rounded-md flex flex-col justify-center items-center`} >
        <div className="text-primary-content text-2xl">
          {children}<span>{titleText}</span>
        </div>
        {/* divider */}
        <div className={`divider ${bgDivider} h-0.5 mx-4 rounded mb-9`}></div>
        <div className="text-primary-content text-2xl mb-4">
          <div className="flex justify-around gap-4 items-center">
            <div className="">{quantity}</div>
            <div
              className="radial-progress"
              style={{ "--value": status }}
            >
              {status}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
