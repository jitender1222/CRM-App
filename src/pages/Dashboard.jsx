import HomeLayout from "../layout/HomeLayout";
import useLoadTickets from "../hooks/useLoadTickets";

const Dashboard = () => {
  const [ticket] = useLoadTickets();
  return (
    <>
      <HomeLayout>
        <div className="flex flex-col text-center border w-[110%]">
          <div
            className="hover:bg-yellow-500 transition-all 
          ease-in-out 2s duration-500 p-2 text-center text-2xl 
          font-bold bg-yellow-300 text-black"
          >
            <span>Ticket Records</span>
          </div>
          <div className="flex gap-8 bg-purple-600 p-2 font-semibold mt-2">
            <div className="width ">Ticket Id</div>
            <div className="width">Title</div>
            <div className="w-[150px] ">Description</div>
            <div className="width">Status</div>
            <div className="width">Ticket Priority</div>
            <div className="width">Client Name</div>
            <div className="width">Assigned To</div>
          </div>

          {ticket &&
            ticket.ticketList.map((el) => {
              return (
                <>
                  <div
                    key={el._id}
                    className="text-center flex gap-8 bg-purple-600 p-2 font-semibold mt-2"
                  >
                    <div className="width">
                      {el._id.substring(0, 5) + "..."}
                    </div>
                    <div className="width">{el.title}</div>
                    <div className="w-[150px]">{el.description}</div>
                    <div className="width">{el.status}</div>
                    <div className="width">{el.ticketPriority}</div>
                    <div className="width">{el.clientName}</div>
                    <div className="w-[100px]">{el.assignedTo}</div>
                  </div>
                </>
              );
            })}
        </div>
      </HomeLayout>
    </>
  );
};

export default Dashboard;
