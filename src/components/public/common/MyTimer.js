import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyButton from "./MyButton";
import { isEmailFail } from "../../../redux/email";

const MyTimer = ({ active, className, onClick }) => {
  const [min, setMin] = useState(3);
  const [sec, setSec] = useState(0);
  const dispatch = useDispatch();
  const checkCode = useSelector((state) => state.code);

  useEffect(() => {
    let timer;
    if (active && !checkCode) {
      timer = setInterval(() => {
        if (checkCode) clearInterval(timer);
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
  }, [min, sec, active, checkCode]);
  return (
    <>
      {checkCode ? null : (
        <input
          type="button"
          className={className}
          onClick={onClick}
          value={`${min}:${sec < 10 ? `0${sec}` : sec}`}
        />
      )}
    </>
  );
};

export default MyTimer;
