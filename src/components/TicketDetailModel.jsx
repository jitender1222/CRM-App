import { useState } from "react";


const TicketDetailModel=({ticket})=>{

    const [updatTicket,setUpdateTicket]=useState({});
    console.log("ticket",ticket)

    function handleUpdateTicket(){

    }

    function handleChange(e){
        console.log(e.target.value)
    }

    return (
        <>
       {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>open modal</button>
            <dialog id="my_modal_2" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{ticket.title}</h3>
                {/* <p className="py-4" value={ticket.description} >Description: {ticket.description}</p> */}
                <textarea onChange={()=> handleChange} className="resize-none p-4 rounded font-mono" name="description" cols="40" rows="5" value={ticket.description}>{ticket.description}</textarea>

                <h1 className="text-lg text-white">
                    Status:
                    <select>
                        <option value="open" selected={ticket.status == "open"}>open</option>
                        <option value="onHold" selected={ticket.status== "onHold"}>onHold</option>
                        <option value="inProgress" selected={ticket.status== "inProgress"}>inProgress</option>
                        <option value="cancelled" selected={ticket.status== "cancelled"}>cancelled</option>
                        <option value="resolved" selected={ticket.status== "resolved"}>resolved</option>

                    </select>
                </h1>
                <div className="modal-action">
                    <button onClick={handleUpdateTicket} className="bg-red-700 p-2 rounded font-mono font-bold hover:bg-red-800 transition-all ease-in-out duration-300">Update Ticket</button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
            </dialog>
        </>
    )
}


export default TicketDetailModel;