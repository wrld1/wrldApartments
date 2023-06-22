"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";

import CategoryBox from "../CategoryBox";
import Container from "../Container";

export const categories = [
  {
    label: "Пляж",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Вітряки",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Модерн",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Природа",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Басейни",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Острова",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Озеро",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Лижі",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Замки",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Печери",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Кемпінг",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Арктика",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Пустеля",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Хлів",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Люкс",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
