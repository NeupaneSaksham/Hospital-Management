import { SectionDoctors } from "@/features/admin/components/section/section-doctors";
import { adminApi } from "@/features/admin/services/adminApi";
import { useQuery } from "@tanstack/react-query";



export default function DoctorList() {



  const { data, isLoading, error } = useQuery({
    queryKey: ["test"],
    queryFn: adminApi.getDataFromBackend,
  });



  

  console.log("isLoading---------->", isLoading);
  console.log("error---------->", error);
  console.log("data---------->", data);

  return (
  
        <SectionDoctors />

  )
}
