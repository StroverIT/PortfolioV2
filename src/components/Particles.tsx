"use client";
import { useCallback } from "react";
import { Particles as ReactParticles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particles = ({ isVisible }: { isVisible: any }) => {
  const particlesInit = async (main: any) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);
  return (
    isVisible && (
      <div className="fixed">
        <ReactParticles
          id="tsparticles"
          className="absolute top-0 left-0 w-screen h-screen "
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            fullScreen: false,

            particles: {
              number: {
                value: 160,
                density: {
                  enable: true,
                  value_area: 800,
                },
              },
              color: {
                value: "#6fbbe0",
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#6fbbe0",
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: "img/github.svg",
                  width: 100,
                  height: 100,
                },
              },
              opacity: {
                value: 1,
                random: true,
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0,
                  sync: false,
                },
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  enable: false,
                  speed: 4,
                  size_min: 0.3,
                  sync: false,
                },
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: "#6fbbe0",
                opacity: 0.1122388442605866,
                width: 1,
              },
              move: {
                enable: true,
                speed: 1,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 600,
                },
              },
            },
            interactivity: {
              detect_on: "canvas",
              events: {
                onhover: {
                  enable: false,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "push",
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 400,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 250,
                  size: 0,
                  duration: 2,
                  opacity: 0,
                  speed: 3,
                },
                repulse: {
                  distance: 400,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            retina_detect: true,
          }}
        />
      </div>
    )
  );
};

export default Particles;
