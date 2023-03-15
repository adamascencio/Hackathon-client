import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { User } from "../../types/models";
import "./Levels.css";

import Rocket from "./Rocket";
interface LevelProps {
    // user: User | null;
}

const Level1 = (props: LevelProps): JSX.Element => {
    // const { user } = props;
    const [completed, setCompleted] = useState(0);
    const [rocketBox, setRocketBox] = useState(["", "", "", "", ""]);
    const [buttons, setButtons] = useState({
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
    });
    const numOrd = [3, 1, 5, 2, 4];
    const [active, setActive] = useState("");
    const [wrong, setWrong] = useState("");

    const handleButton = (e) => {
        setActive(e.target.value);
    };
    const handleRocketBox = (e) => {
        const boxIdx = e.target.id[2];
        if (boxIdx == active) {
            let newButtons = { ...buttons };
            newButtons[boxIdx] = true;
            setButtons(newButtons);
            let newBox = [...rocketBox];
            newBox[boxIdx - 1] = active;
            setRocketBox(newBox);
            setActive("");
            setCompleted(completed + 1);
        } else {
            setWrong(boxIdx);
            setTimeout(() => {
                setWrong("");
            }, 1000);
        }
    };

    return (

<div className={completed == 5 ? "bg-galaxy" : "bg-orbit-no-rings"}>
        <div
            className={
                "flex font-nunito flex-col justify-start items-center sm:justify-center pt-12 md:pt-0 h-[100vh] w-full gap-1" +
                (completed == 5 && "success-screen")
            }
        >
            {completed == 5 ? (
                <div className="text-3xl h-16 text-white">Stellar Work!</div>
            ) : (
                <NavLink to="/world">
                    <div className="absolute top-0 left-0 p-6 ">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1}
                            stroke="currentColor"
                            className="w-10 h-10"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                </NavLink>
            )}
            {/* Rocket Holder */}
            <div className="relative w-full h-[24rem] flex flex-col items-center justify-center">
                <div className="">
                <Rocket />
                </div>
                <div className="flex flex-col-reverse items-center justify-center z-10 absolute top gap-8">
                    {completed !== 5 &&
                        rocketBox.map((e, i) => {
                            if (buttons[i + 1] == false) {
                                return (
                                    <button
                                        onClick={handleRocketBox}
                                        value={rocketBox[i]}
                                        id={"id" + (i + 1)}
                                        key={i}
                                        className={
                                            "padding-1 border-black rounded border-2 h-8 w-8 " +
                                            (wrong == i + 1
                                                ? " bg-red-200 animate-bounce "
                                                : " bg-white ")
                                        }
                                    >
                                        {" "}
                                        {rocketBox[i]}
                                    </button>
                                );
                            } else {
                                return (
                                    <div
                                        id={"id" + (i + 1)}
                                        key={i}
                                        className="padding-1 border-black rounded border-2 h-8 w-8 bg-green-200 flex justify-center items-center"
                                    >
                                        {" "}
                                        {rocketBox[i]}
                                    </div>
                                );
                            }
                        })}
                </div>
            </div>
            {/* Button Options */}
            <div className="flex gap-6 flex-col justify-center">
                {completed !== 5 ? (
                    <>
                        <div className="px-10 text-sm text-center">
                            {" "}
                            Place the numbers in order from smallest to largest
                            to build your rocket!
                        </div>
                        <div className="flex gap-3 justify-center">
                            {numOrd.map((number, i) => {
                                if (!buttons[number]) {
                                    return (
                                        <button
                                            onClick={handleButton}
                                            className={
                                                "rounded rounded h-12 w-12 " +
                                                (buttons[number]
                                                    ? "bg-gray-300 "
                                                    : "bg-gray-100 ") +
                                                (active == number &&
                                                    " border-black border-2 ")
                                            }
                                            value={number}
                                            key={i}
                                        >
                                            {number}
                                        </button>
                                    );
                                } else {
                                    return (
                                        <div
                                            className="rounded rounded h-12 w-12 bg-gray-300 flex justify-center items-center"
                                            key={i}
                                        >
                                            {number}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </>
                ) : (
                    <NavLink to="/completed">
                        <button className="py-4 px-24 bg-gray-300 rounded rounded-[1.5rem] text-2xl text-white bg-[#DB7373]">
                            Continue
                        </button>
                    </NavLink>
                )}
            </div>
        </div>
        </div>
    );
};
export default Level1;
