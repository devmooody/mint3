import * as React from "react"
import Masonry from "@mui/lab/Masonry"
import { filterableData } from "./components/FilterableData"
import { Image } from "./components/Image"
import { useState } from "react"
import Button from "./components/Button"
import { Box } from "@mui/material"
import { ImageFilterCaption, ImageFilterHolder } from "./style"
import Typography from "@mui/material/Typography"

export default function ImageFilter() {
  const [activeFilter, setActiveFilter] = useState<string>("all")

  const buttonCaptions = ["all", "BRANDING", "ILLUSTRATION", "WEB"]

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter)
  }
  return (
    <Box sx={{ width: "100%" }}>
      {buttonCaptions.map((filter) => (
        <Button
          key={filter}
          onClick={() => handleFilterClick(filter)}
          type="button"
          className={`focus:outline-none  notActive ${
            activeFilter === filter ? "activeColor" : "mody"
          }`}
        >
          {filter === "all" ? "ALL" : filter}
        </Button>
      ))}
      <Masonry columns={{ xs: 2, sm: 3, md: 3 }} spacing={4}>
        {filterableData.map((item, index) => (
          <div
            key={index}
            className={`w-full cursor-pointer transition-all duration-200 rounded-lg shadow bg-gray-800 border border-gray-600 ${
              activeFilter === "all" || activeFilter === item.name
                ? "block"
                : "hidden"
            }`}
          >
            <ImageFilterHolder>
              <Image image={item.src} alt={item.title} className={""} />
              <ImageFilterCaption className={`hero`}>
                <Typography variant="h4" component="h4" mb={"20px"}>
                  {item.title}
                </Typography>
                <Typography variant="h4" component="h4" mb={"20px"}>
                  {item.text}
                </Typography>
              </ImageFilterCaption>
            </ImageFilterHolder>
          </div>
        ))}
      </Masonry>
    </Box>
  )
}
