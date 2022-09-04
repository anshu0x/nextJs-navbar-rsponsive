import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
const pageNo = () => {
  const router = useRouter();
  const { pageNo } = router.query;
  return (
    <>
      <Navbar />
      blog no. {pageNo}
    </>
  );
};

export default pageNo;
