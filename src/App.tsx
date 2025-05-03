import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

export default function App() {
  return (
    <div>
      {/* <div className="relative w-full h-[800px] rounded-lg flex items-center justify-center overflow-hidden"> */}
      {/* <WaterRippleEffect
          waveSpeedX={0.02}
          waveSpeedY={0.01}
          waveAmpX={50}
          waveAmpY={10}
          backgroundColor="transparent"
          lineColor="rgba(255, 255, 255, 0.3)"
          style={{
            backgroundImage: "url(https://img.buoucoding.com/image/17.jpg)",
            backgroundSize: "cover",
          }}
        />
        <div className="relative z-10 mx-auto px-4 md:px-6 text-center text-white"> */}
      <FirstPage />
      {/* </div> */}
      {/* </div> */}

      <SecondPage />
    </div>
  );
}
