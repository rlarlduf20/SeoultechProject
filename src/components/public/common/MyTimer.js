import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import MyButton from "./MyButton";
import { isEmailFail } from "../../../redux/email";

const MyTimer = ({ active, className }) => {
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    let timer;
    if (active) {
      timer = setInterval(() => {
        if (Number(sec) > 0) {
          setSec(Number(sec) - 1);
        }
        if (Number(sec) === 0) {
          if (Number(min) === 0) {
            clearInterval(timer);
            alert("시간 초과");
            dispatch(isEmailFail());
          } else {
            setMin(Number(min) - 1);
            setSec(59);
          }
        }
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [min, sec, active]);
  return (
    <MyButton className={className}>
      {min}:{sec < 10 ? `0${sec}` : sec}
    </MyButton>
  );
};

export default MyTimer;
