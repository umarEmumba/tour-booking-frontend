import Container from "@/components/common/Container/Container";
import { Tour, getTour } from "@/utils/services";
import { useRouter } from "next/router";
import { useQuery, useQueryClient } from "react-query";

export default function Tour() {
    const router = useRouter()
    const { id } = router.query;
    const tour = useQuery(`tour-${id}`,()=>{
        if(!id) return;
        return getTour(id);
    })
    return(
        <Container isSubpage={true}>
            {
                tour ? 
                <h2>{id}</h2>
                : <h2>not found</h2>
            }
        </Container>
    )
}