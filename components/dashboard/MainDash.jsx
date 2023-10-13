import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";
import NavDash from "./NavDash";
import StatusCards from "./StatusCard/StatusCard";
import BarChartCard from "./BarChart/BarChartCard";
import TwoCards from "./TwoCards/TwoCards";

const MainDash = () => {
  const session = useSession();

  let profileImage =
    session.status === "authenticated"
      ? session.data.user.image
      : "/icons/avatarIcon.png";

  let profileEmail =
    session.status === "authenticated" ? session.data.user.email : "Loading...";

  return (
    <section className="p-10 h-screen">
      <NavDash profileImage={profileImage} email={profileEmail} />
      <StatusCards />
      <BarChartCard />
      <TwoCards />
    </section>
  );
};

export default MainDash;
