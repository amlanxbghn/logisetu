import { MagicCard } from "./ui/magic-card";
import ShimmerBtn from "./ui/ShimmerBtn";

export const CallToAction = () => {
    return (
        <section className="py-20 md:py-24">
            <div className="mx-auto max-w-7xl container">
                <MagicCard
                    className="flex items-center justify-center border border-white/10 py-24 rounded-3xl shadow-[inset_0_-8px_10px_#ffffff1f]"
                    gradientColor="#262626"
                >
                    <h2 className="text-center bg-gradient-to-br from-white light:from-black from-30% to-white/40 light:to-black/40 bg-clip-text mx-auto font-semibold leading-none tracking-tighter text-transparent text-balance text-5xl md:text-6xl lg:text-7xl pb-8">
                        Start working with us.
                    </h2>
                    <p className="text-center mb-12 text-lg tracking-tight leading-[30px] text-neutral-400 md:text-xl text-balance mx-auto max-w-[300px] md:max-w-[700px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Nisi odit possimus ipsum sit amet.
                    </p>

                    <div className="flex justify-center mt-8">
                        <ShimmerBtn />
                    </div>

                </MagicCard>
            </div>
        </section>
    );
};