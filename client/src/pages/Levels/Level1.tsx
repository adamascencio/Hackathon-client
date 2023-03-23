import { useEffect, useState, MouseEvent } from "react";
import { NavLink } from "react-router-dom";
import "./Levels.css";

import Rocket from "./Rocket";
// interface LevelProps {
//     level: number;
// }

const Level1 = (props: any): JSX.Element => {
    const [round, setRound] = useState(1);
    const [completed, setCompleted] = useState(0);
    const [scenario, setScenario] = useState({
        created: false,
        rocketBox: [],
        buttons: [],
        completed: 0,
    });
    const [rocketBox, setRocketBox] = useState(["", "", "", "", ""]);
    const [buttons, setButtons] = useState({
        "1": false,
        "2": false,
        "3": false,
        "4": false,
        "5": false,
    });
    const [active, setActive] = useState("");
    const [wrong, setWrong] = useState("");

    const handleButton = (e: any) => {
        setActive(e.target.value);
    };
    const handleRocketBox = (e: any) => {
        const boxIdx: string = e.target.id[2];
        if (boxIdx == active) {
            let newButtons = { ...buttons };
            newButtons[boxIdx as keyof typeof newButtons] = true;
            setButtons(newButtons);
            let newBox = [...rocketBox];
            newBox[Number(boxIdx) - 1] = active;
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
    const createScenario = (newRound: number) => {
        let rocketBox: any = [];
        let numbers: any = [];
        let shuffledButtons: any = [];
        for (let i = 1; i < round + 3; i++) {
            rocketBox.push("");
            numbers.push(`${i}`);
        }

        for (let i = 1; i < newRound + 3; i++) {
            let randomIndex = Math.floor(Math.random() * numbers.length);
            shuffledButtons.push(numbers[randomIndex]);
            numbers.splice(randomIndex, 1);
        }

        const generated = {
            created: true,
            rocketBox: rocketBox,
            numbers: numbers,
            buttons: shuffledButtons,
            completed: 0,
        };

        setScenario(generated);
    };
    const reset = () => {
        setButtons({
            "1": false,
            "2": false,
            "3": false,
            "4": false,
            "5": false,
        });
        setRocketBox(["", "", "", "", ""]);
        setCompleted(0);
        let newRound = round + 1;
        setRound(newRound);
    };
    useEffect(() => {
        createScenario(round);
    }, [round]);
    useEffect(() => {
        if (completed == round + 2) {
            // FETCH TO CREATE THE LEVEL COMPLETED ?
            console.log("pushing data");
        }
    }, [completed]);
    useEffect(() => {
        createScenario(1);
    }, []);
    if (completed == round + 2) {
        return (
            <div
                className={
                    "flex font-nunito flex-col justify-between items-center sm:justify-center py-12 md:pt-0 h-[100vh] w-full gap-1 success-screen bg-galaxy"
                }
            >
                <div className="text-3xl h-16 text-white">Stellar Work!</div>

                {/* Rocket Holder */}
                <div
                    className={
                        "relative w-full h-[24rem] flex flex-col items-center justify-center animate-bounce"
                    }
                >
                    <Rocket />
                </div>
                {/* Button Options */}
                <div className="flex gap-6 flex-col justify-center">
                    {round < 3 ? (
                        <>
                            <button
                                onClick={reset}
                                className="h-12 w-64 rounded-[1rem] text-xl text-white bg-beyondBlue my-20"
                            >
                                Continue
                            </button>
                        </>
                    ) : (
                        <NavLink to="/completed">
                            <button className="h-12 w-64 rounded-[1rem] text-xl text-white bg-beyondBlue my-20">
                                Finish
                            </button>
                        </NavLink>
                    )}
                </div>
            </div>
        );
    } else {
        return (
            <div
                className={
                    "flex font-nunito flex-col justify-center items-center sm:justify-center md:pt-0 h-[100vh] w-full gap-1 "
                }
            >
                <NavLink to="/worlds">
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

                {/* Rocket Holder */}
                <div
                    className={
                        "relative w-full h-[24rem] flex flex-col items-center justify-center "
                    }
                >
                    <Rocket />
                    <div className="flex flex-col-reverse items-center justify-center z-10 absolute top gap-5 font-bolder">
                        {scenario.rocketBox.map((e, i) => {
                            if (buttons[String(i + 1) as keyof typeof buttons] == false) {
                                return (
                                    <button
                                        onClick={handleRocketBox}
                                        value={rocketBox[i]}
                                        id={"id" + (i + 1)}
                                        key={i}
                                        className={
                                            "padding-1 border-black rounded border-2 h-10 w-10 " +
                                            (wrong === String(i + 1)
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
                                        className="padding-1 border-black rounded border-2 h-10 w-10 bg-green-200 flex justify-center items-center"
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
                    <>
                        <div className="px-10  text-center">
                            {" "}
                            Place the numbers in order from smallest to largest
                            to build your rocket!
                        </div>
                        <div className="flex gap-3 justify-center">
                            {scenario.buttons.map((number, i) => {
                                if (!buttons[number]) {
                                    return (
                                        <button
                                            onClick={handleButton}
                                            className={
                                                "rounded h-14 w-10 text-xl font-bolder " +
                                                (buttons[number]
                                                    ? "bg-gray-300 "
                                                    : "bg-gray-100 ") +
                                                (active == number &&
                                                    " border-black border-2")
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
                                            className="rounded h-14 w-10 text-xl bg-gray-300 flex justify-center items-center font-bolder"
                                            key={i}
                                        >
                                            {number}
                                        </div>
                                    );
                                }
                            })}
                        </div>
                    </>
                </div>
            </div>
        );
    }
};
export default Level1;
