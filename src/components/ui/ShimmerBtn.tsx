import { MdArrowRightAlt } from "react-icons/md";

const ShimmerBtn = () => {
    return (
        <a
            className="relative flex items-center justify-center w-full gap-2 px-4 py-2 overflow-hidden text-sm font-medium text-white whitespace-pre transition-all duration-300 ease-out shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-zinc-800 border border-white h-12 max-w-48 md:flex group hover:bg-[#08090A]"
            href="#"
        >
            <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 ease-out translate-x-12 bg-white rotate-12 opacity-10 group-hover:-translate-x-40"></span>
            <div className="flex items-center">
                <span className="text-white text-lg flex items-center">
                    Book a Call <MdArrowRightAlt className="ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1"/>
                </span>
            </div>
        </a>
    );
};

export default ShimmerBtn;
