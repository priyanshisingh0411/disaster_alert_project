import dynamic from "next/dynamic";

const DisasterMap = dynamic(() => import("./DisasterMapClient"), {
  ssr: false,
});

export default DisasterMap;
