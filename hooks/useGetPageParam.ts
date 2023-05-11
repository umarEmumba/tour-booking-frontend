import { useRouter } from "next/router";
import { useMemo } from "react";

export const useGetPageParam = () => {
  const router = useRouter();
  const { id: ids } = router.query;
  const id = useMemo(() => {
    if (ids?.length) {
      if (Array.isArray(ids)) return ids[0];
      return ids;
    }
  }, [ids]);
  return id;
};
