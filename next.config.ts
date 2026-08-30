import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Adresy, które kiedyś były linkowane wewnętrznie, ale nigdy nie miały strony.
      // 301 na istniejące odpowiedniki, żeby nie zwracały 404 w Google.
      {
        source: "/kuchnie-na-wymiar-gdynia",
        destination: "/kuchnie-na-wymiar-gdansk",
        permanent: true,
      },
      {
        source: "/szafy-na-wymiar-gdynia",
        destination: "/szafy-na-wymiar-gdansk",
        permanent: true,
      },
      {
        source: "/panele-sufitowe-gdansk",
        destination: "/panele-sufitowe-na-wymiar-gdansk",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
