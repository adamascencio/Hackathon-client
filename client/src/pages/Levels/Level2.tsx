import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Moon from "./Moon";
import Planet from "./Planet";
import PlanetImg from "./PlanetImg.png";
import Astro from "./astroooboy1.png";
import "./Levels.css";

interface LevelProps {
    // user: User | null;
}

interface Scenario {
    created: boolean;
    nMoons: number;
    moons: any;
    buttons: any;
    correct: string;
}

const Level2 = (props: LevelProps): JSX.Element => {
    // const { user } = props;
    const [rounds, setRounds] = useState(1);
    const [completed, setCompleted] = useState(false);
    const [scenario, setScenario] = useState<Scenario>({
        created: false,
        nMoons: 0,
        moons: [],
        buttons: [],
        correct: "",
    });

    const [wrong, setWrong] = useState("");
    const planet = <img className="w-52 h-52" src={PlanetImg}></img>;

    const moon = Moon;
    const astro = Astro;
    const allMoons = {
        0: (
            <div key="0" className="moon absolute top-3 right-24">
                {moon}
            </div>
        ),
        3: (
            <div key="3" className="moon absolute top-8 right-5">
                {moon}
            </div>
        ),
        2: (
            <div key="2" className="moon absolute bottom-16 right-2">
                {moon}
            </div>
        ),
        1: (
            <div key="1" className="moon absolute bottom-10 left-6">
                {moon}
            </div>
        ),
    };
    const createScenario = () => {
        const nMoons = Math.floor(Math.random() * 4) + 1;
        let numbers = [1, 2, 3, 4];
        let moons = [];
        let shuffledButtons = [];

        for (let i = 0; i < 4; i++) {
            let randomIndex = Math.floor(Math.random() * numbers.length);
            shuffledButtons.push(numbers[randomIndex]);
            numbers.splice(randomIndex, 1);
            if (i < nMoons) {
                moons.push(allMoons[i as keyof typeof allMoons]);
            }
        }

        const generated = {
            created: true,
            nMoons: nMoons,
            moons: moons,
            buttons: shuffledButtons,
            correct: nMoons.toString(),
        };
        setScenario(generated);
    };
    const reset = () => {
        setCompleted(false);
        createScenario();
        let newRounds = rounds + 1;
        setRounds(newRounds);
    };
    useEffect(() => {
        createScenario();
    }, []);
    const handleButton = (e: any) => {
        if (e.target.id == scenario.correct) {
            setCompleted(true);
        } else {
            setWrong(e.target.id);
            setTimeout(() => {
                setWrong("");
            }, 2000);
        }
    };

    const images = (
        <div
            className={
                "relative w-72 h-[24rem] flex flex-col items-center justify-center"
            }
        >
            <div className="h-full flex justify-center items-center">
                {/* <svg
                    width="14rem"
                    height="14rem"
                    viewBox="0 0 277 277"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                </svg> */}
                {planet}
                {scenario.created && scenario.moons.map((moon: any) => moon)}
            </div>
        </div>
    );
    useEffect(() => {
        if (rounds == 3) {
            // FETCH TO CREATE THE LEVEL COMPLETED ?
            console.log("pushing data");
        }
    }, [completed]);
    if (completed == true) {
        return (
            <div
                className={
                    "flex font-nunito flex-col justify-between items-center py-12 sm:justify-center md:pt-0 h-[100vh] w-full gap-1 success-screen bg-galaxy"
                }
            >
                <div className="text-3xl h-16 text-white">Stellar Work!</div>
                {/* Planet Holder */}
                <div className="flex flex-col relative items-start h-full">
                    {/* <svg
                        width="14rem"
                        height="14rem"
                        viewBox="0 0 277 277"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                    </svg> */}
                    {planet}
                    <div className="h-fit transform -rotate-[20deg] absolute bottom-1 -left-10">
                        <img className="h-60" src={astro} />
                    </div>
                </div>
                {/* Button Options */}
                <div className="flex gap-6 flex-col justify-center">
                    {rounds < 3 ? (
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
                    "flex font-nunito flex-col justify-start items-center sm:justify-center pt-12 md:pt-0 h-[100vh] w-full gap-1 "
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
                <div className="h-2 w-48 bg-gray-100  rounded-full">
                    {rounds == 1 ? (
                        <div
                            className={`h-2  bg-gray-600 rounded-full w-1/4`}
                        ></div>
                    ) : rounds == 2 ? (
                        <div
                            className={`h-2  bg-gray-600 rounded-full w-2/4`}
                        ></div>
                    ) : (
                        <div
                            className={`h-2  bg-gray-600 rounded-full w-3/4`}
                        ></div>
                    )}
                </div>
                {/* Planet Holder */}
                {images}

                {/* Button Options */}
                <div className="flex gap-6 flex-col justify-center">
                    <>
                        <div className="px-10 text-md font-bold text-center">
                            {" "}
                            How many moons are there?
                        </div>
                        <div className="flex gap-6 justify-center">
                            {scenario.created &&
                                scenario.buttons.map((button: any, i: number) => (
                                    <button
                                        className={
                                            "rounded h-14 w-10 text-2xl font-bolder " +
                                            (button == wrong
                                                ? " animate-bounce bg-red-100"
                                                : " bg-asteroidGray")
                                        }
                                        key={i}
                                        onClick={handleButton}
                                        id={button}
                                    >
                                        {button}
                                    </button>
                                ))}
                        </div>
                    </>
                </div>
            </div>
        );
    }
};
export default Level2;
