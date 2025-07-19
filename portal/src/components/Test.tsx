"use client";

import { FC, memo, useEffect, useState } from "react";

const cmsToken =
  "4591f6dcf255959f77e7d93f68b845e84d9903eeec8d9a272298f2cb989833c484e4a7f0daa43c7ea86e95a60a290acefb7d555c4e170775fb16ee58e6ea8d513e1139f8dc401dfea410bf751df2ef9a6e9d482d3a7377833386756e3ea15f0622dd6faeaad11806bc0b7d2c7f0ef73a117ae4707709d750cdf00f093ef82a43";

let cmsDomain = "http://localhost:3101";
let dataDomain = "http://localhost:3102";
if (!window?.location.host.startsWith("localhost")) {
  //self request
  cmsDomain = '';
  dataDomain = '';
}

export const Test: FC = memo(() => {
  const [data, setData] = useState<any>("");
  const [cmsData, setCmsData] = useState<any>("");
  useEffect(() => {
    (async () => {
      const cmsData = await fetch(
        `${cmsDomain}/api/pages/cec80cgorwujb0oon6h6vpdw?pLevel`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${cmsToken}`
          }
        }
      ).then((res) => res.json());
      setCmsData(JSON.stringify(cmsData, null, 2));

      const data = await fetch(`${dataDomain}/posts`).then((res) =>
        res.json()
      );
      setData(JSON.stringify(data, null, 2));
    })();
  }, []);

  return <div>
    <div>{data}</div>
    <div>{cmsData}</div>
  </div>;
});
