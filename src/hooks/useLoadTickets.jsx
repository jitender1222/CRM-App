import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTicket } from "../Redux/Slices/tickets";
import { useSearchParams } from "react-router-dom";
import {filterTicket} from "../Redux/Slices/tickets"

const useLoadTickets = () => {
  const auth = useSelector((state) => state.auth);
  const ticket = useSelector((state) => state.tickets);
  const [searchParams]=useSearchParams();

  const dispatch = useDispatch();

  async function loadTickets() {
    if(ticket.ticketList.length==0){
      await dispatch(allTicket());
    }
    
    if(searchParams.get("status")){
      // dispatch a filter action
      dispatch(filterTicket({status:searchParams.get("status")}))
    }

  }
  useEffect(() => {
    
      loadTickets();
  }, [auth.token,searchParams.get("status")]);
  return [ticket];
};

export default useLoadTickets;  
