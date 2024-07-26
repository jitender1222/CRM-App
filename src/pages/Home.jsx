import { BsFillPencilFill } from "react-icons/bs";
import Card from "../components/Card";
import HomeLayout from "../layout/HomeLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTicket } from "../Redux/Slices/tickets";


const Home = () => {

  const auth=useSelector((state)=> state.auth);
  const ticket=useSelector((state) => state.tickets)

  
  const dispatch=useDispatch();

  async function loadTickets(){
    const response= await dispatch(allTicket());
    console.log(response)
    console.log(ticket)
  }
useEffect(()=>{
  loadTickets();
},[auth.token]);
  return (
    <>
    <HomeLayout className="flex">
      <Card>
      <BsFillPencilFill className="inline" />
      </Card>
      <Card color="bg-warning" quantity="70" status="75">
      <BsFillPencilFill className="inline"  />
      </Card>
      <Card color="bg-accent" quantity="85" status="88">
      <BsFillPencilFill className="inline" />
      </Card>
    </HomeLayout>
    </>
  );
};

export default Home;

