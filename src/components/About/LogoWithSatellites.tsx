import { Box, Center, Text, Image, background } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { colors } from "../../theme/colors";
import { sleep } from "../../utils/promise";

const emojis = ["😎", "☕", "🤠"];

const pi2 = 2 * Math.PI;

const defaultI = 0;
const defaultJ = pi2 / 3;
const defaultK = (2 * pi2) / 3;

export function LogoWithSatellites() {
  const [left, setLeft] = useState([0, 0, 0]);
  const [top, setTop] = useState([0, 0, 0]);

  useEffect(() => {
    (async () => {
      let i = 0;
      let j = defaultJ;
      let k = defaultK;
      const speed = 0.01;

      while (true) {
        await sleep(50);
        const left1 = 100 * Math.cos(i) + 83;
        const top1 = 100 * Math.sin(i) + 83;
        const left2 = 100 * Math.cos(j) + 83;
        const top2 = 100 * Math.sin(j) + 83;
        const left3 = 100 * Math.cos(k) + 83;
        const top3 = 100 * Math.sin(k) + 83;
        setLeft([left1, left2, left3]);
        setTop([top1, top2, top3]);

        i = i > pi2 + defaultI ? defaultI : i + speed;
        j = j > pi2 + defaultJ ? defaultJ : j + speed;
        k = k > pi2 + defaultK ? defaultK : k + speed;
      }
    })();
  }, []);

  return (
    <Center
      px={15}
      rounded="full"
      border="2px solid"
      borderColor="theme.400"
      py={6}
      position="relative"
      w="200px"
      h="200px"
    >
      <Image src="/images/react.png" h="140px" />
      {emojis.map((emoji, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            display: "flex",
            top: `${top[i]}px`,
            left: `${left[i]}px`,
            backgroundColor: colors.theme[400],
            width: "32px",
            height: "32px",
            borderRadius: "16px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {emoji}
        </div>
      ))}
    </Center>
  );
}
