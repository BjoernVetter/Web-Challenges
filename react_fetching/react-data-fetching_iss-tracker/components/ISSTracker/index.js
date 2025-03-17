import useSWR from "swr";
import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function ISSTracker() {
  const { data, error, isValidating, mutate } = useSWR(URL, fetcher, {
    refreshInterval: 5000,
  });

  if (error) return <p> Fail: {error.message} </p>;
  if (isValidating) return <p>  Loading: ISS-Position... </p>;

  const { longitude, latitude } = data || {};

  return (
    <main>
      <Map longitude={longitude} latitude={latitude} />
      <Controls
        longitude={longitude}
        latitude={latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}

// export default function ISSTracker() {
//   const [coords, setCoords] = useState({
//     longitude: 0,
//     latitude: 0,
//   });

//   async function getISSCoords() {
//     try {
//       const response = await fetch(URL);
//       if (response.ok) {
//         const data = await response.json();
//         setCoords({ longitude: data.longitude, latitude: data.latitude });
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   useEffect(() => {
//     const timer = setInterval(() => {
//       getISSCoords();
//     }, 5000);

//     return () => {
//       clearInterval(timer);
//     };
//   }, []);

//   return (
//     <main>
//       <Map longitude={coords.longitude} latitude={coords.latitude} />
//       <Controls
//         longitude={coords.longitude}
//         latitude={coords.latitude}
//         onRefresh={getISSCoords}
//       />
//     </main>
//   );
// }
