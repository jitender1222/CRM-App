import {TbProgressBolt} from "react-icons/tb"
import Card from "../components/Card";
import HomeLayout from "../layout/HomeLayout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTicket } from "../Redux/Slices/tickets";
import { PiLockKeyOpenDuotone } from "react-icons/pi";
import { IoCloudDoneSharp } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { MdPending } from "react-icons/md";





const Home = () => {
  const auth = useSelector((state) => state.auth);
  const ticket = useSelector((state) => state.tickets);

  console.log((ticket.ticketDistribution.inProgress / ticket.ticketList.length).toFixed(2));

  const dispatch = useDispatch();

  async function loadTickets() {
    if (ticket.ticketList.length === 0) {
      const response = await dispatch(allTicket());
      return response;
    }
  }
  useEffect(() => {
    loadTickets();
  }, [auth.token]);
  return (
    <>
      <HomeLayout>
        <div className="flex flex-wrap gap-4">
        <Card titleText="open" borderColor="border-yellow-500" status={(ticket.ticketDistribution.open / ticket.ticketList.length).toFixed(2)} quantity={ticket.ticketDistribution.open} > 
          <PiLockKeyOpenDuotone className="inline" />
        </Card>
        <Card
          borderColor="border-yellow-500"
          titleText="inProgress"
          color="bg-secondary"
          status={(ticket.ticketDistribution.inProgress / ticket.ticketList.length).toFixed(2)} quantity={ticket.ticketDistribution.inProgress}
        >
          <TbProgressBolt className="inline" />
        </Card>
        <Card titleText="resolved" color="bg-success" status={(ticket.ticketDistribution.resolved / ticket.ticketList.length).toFixed(2)} quantity={ticket.ticketDistribution.resolved}>
          <IoCloudDoneSharp className="inline" />
        </Card>
        <Card titleText="onHold" color="bg-warning" status={(ticket.ticketDistribution.onHold / ticket.ticketList.length).toFixed(2)} quantity={ticket.ticketDistribution.onHold}>
          <MdPending className="inline" />
        </Card>
        <Card titleText="cancelled" borderColor="border-yellow-500" color="bg-error" status={(ticket.ticketDistribution.cancelled / ticket.ticketList.length).toFixed(2)} quantity={ticket.ticketDistribution.cancelled}>
          <MdOutlineCancel className="inline" />
        </Card>
        </div>
      </HomeLayout>
    </>
  );
};

export default Home;
