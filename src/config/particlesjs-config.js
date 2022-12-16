const particlesConfig = {

    particles: {
      number: {
        value: 139,
        density: {
          enable: true,
          value_area: 1603
        }
      },
      color: {
        value: "#00ffe0"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 1,
          color: "random"
        },
        polygon: {
          nb_sides: 8
        },
        image: {
          src: "img/github.svg",
          width: 1000,
          height: 100
        }
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 8.201979844243585,
          opacity_min: 0.5440917322419012,
          sync: true
        }
      },
      size: {
        value: 0,
        random: true,
        anim: {
          enable: true,
          speed: 0,
          size_min: 4.060386061506725,
          sync: true
        }
      },
      line_linked: {
        enable: true,
        distance: 144.30708547789706,
        color: "#ffffff",
        opacity: 1,
        width: 0.6413648243462091
      },
      move: {
        enable: true,
        speed: 5,
        direction: "top-right",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 641.3648243462092,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 243.62316369040352,
          line_linked: {
            opacity: 0.6745529030453601
          }
        },
        bubble: {
          distance: 85.26810729164123,
          size: 16.241544246026905,
          duration: 0.24362316369040352,
          opacity: 0.7633525795632644,
          speed: 3
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
    retina_detect: true
  }
export default particlesConfig