import {
  createGetd,
  useGetd
} from "siphon";
import {
  networkErrorDialog,
  serverErrorDialog
} from "./dialog";

function Trap() {
  const Login = useGetd({
    serErr: serverErrorDialog,
    netErr: networkErrorDialog
  });
}
