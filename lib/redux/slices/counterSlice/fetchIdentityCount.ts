export const saveResult = async (
  data:{userId:string, value:number},
): Promise<{ data : {userId:string, value:number} }> => {
  const response = await fetch("http://localhost:3000/api/identity-count", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });
  return await response.json();
};
export const fetchResults = async (
): Promise<{ data : {userId:string, value:number, id:number} }> => {
  const response = await fetch("http://localhost:3000/api/identity-count", {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  });
  return await response.json();
};
