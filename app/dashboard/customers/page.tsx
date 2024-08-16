import { fetchCustomers } from "@/app/lib/data";
import { lusitana } from "@/app/ui/fonts";

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <>
    <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>List of customers</h1>
    <div className="w-3/4 rounded-xl bg-gray-50 p-6">
     
      {customers.map((customer) => {
        return (
          <div className="flex items-center bg-white border-b border-gray-200 p-2">
            <img src={customer.image_url} />
            <div className="flex flex-col ml-8">
            <p>
             Name: {customer.name}  </p>
              <p>Contact: {customer.email}</p>
              </div>
           
          </div>
        );
      })}
    </div>
    </>
  );
}
