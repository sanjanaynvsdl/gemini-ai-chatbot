import { motion } from "framer-motion";
import Link from "next/link";

import { LogoGoogle, MessageIcon, VercelIcon } from "./icons";

// Flight icon component
export const FlightIcon = ({ size = 16 }: { size?: number }) => {
  return (
    <svg
      height={size}
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      width={size}
      style={{ color: "currentcolor" }}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z"
        fill="currentColor"
      ></path>
    </svg>
  );
};

export const Overview = () => {
  return (
    <motion.div
      key="overview"
      className="max-w-[500px] mt-20 mx-4 md:mx-0"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ delay: 0.5 }}
    >
      <div className="border-none bg-muted/50 rounded-2xl p-6 flex flex-col gap-4 text-zinc-500 text-sm dark:text-zinc-400 dark:border-zinc-700">
        <p className="flex flex-row justify-center gap-4 items-center text-zinc-900 dark:text-zinc-50">
          <FlightIcon size={24} />
          <span className="text-lg font-semibold">Magic Teams</span>
        </p>
        <p>
          Welcome to the Magic Teams chatbot! Book your flight tickets seamlessly with our user-friendly assistant. 
          Powered by Google Gemini AI, we're here to help you find and book the perfect flights for your journey.
        </p>
        <p>
          Simply tell us your travel plans, and we'll take care of the rest. You can ask about flight options, 
          schedules, pricing, and more.
        </p>
      </div>
    </motion.div>
  );
};
