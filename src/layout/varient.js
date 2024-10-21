export const FadeIn = (direction, delay, scale = 1, rotate = 0) => {
    return {
        hidden: {
            y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
            x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0,
            scale: scale,
            rotate: rotate,
            opacity: 0,
        },
        show: {
            y: 0,
            x: 0,
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: {
                type: 'tween',
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.1, 0.25, 1],
            },
        },
        
    };
};
