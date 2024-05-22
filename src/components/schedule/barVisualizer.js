import React, { useEffect, useRef } from 'react';

const BarVisualizer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    canvas.width = 50;  // Half of the original width
    canvas.height = 50; // Half of the original height

    const drawBars = () => {
      // Clear the canvas
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Generate fake data
      const barCount = 3;
      const barWidth = 4;  // Half of the original bar width
      const barSpacing = 6.5; // Half of the original bar spacing
      let x = (canvas.width - (barCount * (barWidth + barSpacing) - barSpacing)) / 2;

      for (let i = 0; i < barCount; i++) {
        const barHeight = Math.random() * 25 + 5; // Adjusted for smaller canvas
        context.fillStyle = '#ffffff';
        context.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + barSpacing;
      }
    };

    const intervalId = setInterval(drawBars, 200); // Adjust interval to slow down the animation (200ms)

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, []);

  return <canvas ref={canvasRef} />;
};

export default BarVisualizer;
