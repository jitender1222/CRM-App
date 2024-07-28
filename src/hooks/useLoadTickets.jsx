import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allTicket } from "../Redux/Slices/tickets";

const useLoadTickets = () => {
  const auth = useSelector((state) => state.auth);
  const ticket = useSelector((state) => state.tickets);

  const dispatch = useDispatch();

  async function loadTickets() {
    await dispatch(allTicket());
  }
  useEffect(() => {
    if (ticket.ticketList.length === 0) {
      loadTickets();
    }
  }, []);
  return [ticket];
};

export default useLoadTickets;
