import { useNavigate } from "react-router-dom";

const Card = ({ children,status="50",quantity=50,titleText="Card" ,color="bg-primary", bgDivider="bg-gray-300" ,borderColor="border-red-500" } ) => {
  
  const navigate=useNavigate();

function onClick(){
  navigate(`/dashboard?status=${titleText}`)
}

  
  return (
    <>
      <div onClick={onClick} className={` border-b-8 ${borderColor}	 hover:scale-110 cursor-pointer transition ease-linear w-64 h-52  ${color} rounded-md flex flex-col justify-center items-center`} >
        <div className="text-primary-content text-2xl ">
          {children}<span className="ml-4  font-mono font-semibold capitalize">{titleText}</span>
        </div>
        {/* divider */}
        <div className={`divider ${bgDivider} h-0.5 mx-4 rounded mb-9`}></div>
        <div className="text-primary-content text-2xl mb-4 ">
          <div className="flex justify-around gap-4 items-center">
            <div className="font-serif font-semibold text-6xl">{quantity}</div>
            <div
              className="radial-progress"
              style={{ "--value": status*100}}
            >
              {status*100}%
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
