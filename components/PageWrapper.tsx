import { FC, PropsWithChildren, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import Logo from "./Logo";

const PageWrapper: FC<PropsWithChildren> = ({ children }) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    return (
        <div className="relative flex h-full flex-col p-8">
            <Logo className="mb-4 animate-fade-in" />

            <Particles
                id="tsparticles"
                init={particlesInit}
                className="absolute inset-0"
                options={{
                    fpsLimit: 120,
                    background: {
                        color: {
                            value: "transparent",
                        },
                    },
                    fullScreen: false,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            repulse: {
                                distance: 100,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#B91C1C",
                        },
                        links: {
                            color: "#B91C1C",
                            distance: 100,
                            enable: true,
                            opacity: 0.1,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "out",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 400,
                            },
                            value: 80,
                        },
                        opacity: {
                            value: 0.1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 2 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            {children}
        </div>
    );
};

export default PageWrapper;
