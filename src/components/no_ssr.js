import dynamic from "next/dynamic";

export const DynamicPDF = dynamic(() => import("./pdf"), { ssr: false });
