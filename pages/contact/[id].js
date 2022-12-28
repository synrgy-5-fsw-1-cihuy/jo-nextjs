import { useRouter } from "next/router";

export default function ID() {
  const router = useRouter();

  return <div>Contact ID {router.query.id} </div>;
}
