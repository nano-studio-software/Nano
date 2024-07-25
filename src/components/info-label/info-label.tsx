import { FC } from "react";

export const InfoLabel: FC<{ label: string; value?: string }> = ({ label, value }) => (
  <div className="w-full flex justify-between">
    <p className="text-base text-line font-light">{label}</p>
    <p className="text-base font-light">{value || "Unknown"}</p>
  </div>
);
