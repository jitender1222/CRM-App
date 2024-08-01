import HomeLayout from "../layout/HomeLayout";
import useLoadTickets from "../hooks/useLoadTickets";
import { AiOutlineDownload } from "react-icons/ai";
import { usePDF } from "react-to-pdf";
import DataTable, { createTheme } from 'react-data-table-component';
import { useEffect, useState } from "react";


const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data,null,2)}</pre>;

const Dashboard = () => {
  const [pending, setPending] = useState(true);
	const [rows, setRows] = useState([]);
  const [ticket] = useLoadTickets();
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

  console.log("inside dashbhpard",ticket);

  const columns = [
    {
      name: 'Ticket Id',
      selector: row => row._id,
      reorder: true,
    },
    {
      name: 'Title',
      selector: row => row.title,
      reorder: true,
    },
    {
      name: 'Description',
      selector: row => row.description,
      reorder: true,
    },
    {
      name: 'Status',
      selector: row => row.status,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Ticket Priority',
      selector: row => row.ticketPriority,
      sortable: true,
      reorder: true,
    },
    {
      name: 'Client Name',
      selector: row => row.clientName,
      reorder: true,
    },
    {
      name: 'Assigned To',
      selector: row => row.assignedTo,
      reorder: true,
    },

  ];
      //  Theme implemented

  createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRows(ticket.ticketList);
      setPending(false);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <HomeLayout>
        <div className="flex flex-col text-center border w-[100%]">
          <div
            className="hover:bg-yellow-500 transition-all 
          ease-in-out 2s duration-500 p-2 text-center text-2xl 
          font-bold bg-yellow-300 text-black" ref={targetRef}
          >
            <span>Ticket Records</span> <AiOutlineDownload className="inline cursor-pointer" onClick={() => toPDF()}  />

          </div>
                <>
                  {ticket && <DataTable
                  className="cursor-pointer"
                    columns={columns}
                    data={ticket.ticketList}
                    expandableRows
			              expandableRowsComponent={ExpandedComponent}
                    progressPending={pending}
                    theme="solarized"
                  />}
                </>
        </div>
      </HomeLayout>
    </>
  );
};

export default Dashboard;
