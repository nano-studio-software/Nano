import { Inter, Poppins } from "next/font/google";

export const InterFont = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const PoppinsFont = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
