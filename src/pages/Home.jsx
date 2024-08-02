import { TbProgressBolt } from "react-icons/tb";
import Card from "../components/Card";
import HomeLayout from "../layout/HomeLayout";
import { PiLockKeyOpenDuotone } from "react-icons/pi";
import { IoCloudDoneSharp } from "react-icons/io5";
import { MdOutlineCancel } from "react-icons/md";
import { MdPending } from "react-icons/md";
import useLoadTickets from "../hooks/useLoadTickets";
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";

ChartJS.register(
  ArcElement,
  Legend,
  Tooltip,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

const Home = () => {
  const [ticket] = useLoadTickets();
  const [openTicket,setOpenTicket]=useState({});
  console.log(openTicket)

  const pieChartData = {
    labels: Object.keys(ticket.ticketDistribution),
    fontColor: "white",
    datasets: [
      {
        label:"Ticket Data",
        data: Object.values(ticket.ticketDistribution),
        backgroundColor: ["red", "blue", "green", "yellow", "orange"],
        borderWidth: 2,
      },
    ],
  };

  const lineChartData={
    labels: Object.keys(openTicket),
    datasets: [
      {
        label:"Open Ticket Data",
        data: Object.values(openTicket),
        borderWidth: 2,
        borderColor:"rgba(255,99,132)",
        backgroundColor:'rgba(255,99,132,0.5)'
      },
    ],
  };

  useEffect(()=>{
    if(ticket.ticketList.length > 0){
      let openTicket={};
      ticket.ticketList.forEach((ticket)=>{
        const date=(ticket.createdAt).split("T")[0];
        if(ticket.status=="open"){
          openTicket[date]=(!openTicket[date]) ? 1 : openTicket[date]+1;
        }
      })
      console.log(openTicket)
      setOpenTicket(openTicket);
    }
  },[ticket.ticketList.length]);

  return (
    <>
      <HomeLayout>
        <div className="flex flex-wrap gap-4">
          <Card
            titleText="open"
            borderColor="border-yellow-500"
            status={(
              ticket.ticketDistribution.open / ticket.downloadedTicket.length
            ).toFixed(2)}
            quantity={ticket.ticketDistribution.open}
          >
            <PiLockKeyOpenDuotone className="inline" />
          </Card>
          <Card
            borderColor="border-yellow-500"
            titleText="inProgress"
            color="bg-secondary"
            status={(
              ticket.ticketDistribution.inProgress /
              ticket.downloadedTicket.length
            ).toFixed(2)}
            quantity={ticket.ticketDistribution.inProgress}
          >
            <TbProgressBolt className="inline" />
          </Card>
          <Card
            titleText="resolved"
            color="bg-success"
            status={(
              ticket.ticketDistribution.resolved /
              ticket.downloadedTicket.length
            ).toFixed(2)}
            quantity={ticket.ticketDistribution.resolved}
          >
            <IoCloudDoneSharp className="inline" />
          </Card>
          <Card
            titleText="onHold"
            color="bg-warning"
            status={(
              ticket.ticketDistribution.onHold / ticket.downloadedTicket.length
            ).toFixed(2)}
            quantity={ticket.ticketDistribution.onHold}
          >
            <MdPending className="inline" />
          </Card>
          <Card
            titleText="cancelled"
            borderColor="border-yellow-500"
            color="bg-error"
            status={(
              ticket.ticketDistribution.cancelled /
              ticket.downloadedTicket.length
            ).toFixed(2)}
            quantity={ticket.ticketDistribution.cancelled}
          >
            <MdOutlineCancel className="inline" />
          </Card>
        </div>

        {/* Pie Chart */}
        <div className="flex justify-center mt-6 ">
          <div className="h-[25rem] w-[25rem]">
            <Pie data={pieChartData} />
          </div>

        </div>


          {/* Line Chart */}

          <div className="w-[400px] h-[400px]">
            <Line data={lineChartData} />
          </div>
      </HomeLayout>
    </>
  );
};

export default Home;
