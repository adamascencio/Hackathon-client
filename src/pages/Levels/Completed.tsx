interface CompletedProps {
    // user: User | null;
}

const Completed = (props: CompletedProps): JSX.Element => {
    // const { user } = props;
    return (
        <div className="flex h-[100vh] justify-center items-center flex-col">
            <div className="text-xl">Level1</div>
            <div className="h-96 w-64 bg-red-100 my-6"></div>
            <div className="flex flex-col">
                <button className="rounded rounded-full h-12 w-60 bg-red">
                    Next
                </button>
                <button>Exit</button>
            </div>
        </div>
    );
};
export default Completed;
