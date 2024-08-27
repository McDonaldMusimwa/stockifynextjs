export default async function Page() {
  try{
    const result = await fetch('http://localhost:3000/api/supplier')
    const suppliers = await result.json()
    console.log(suppliers)
  }catch(err){
    throw err
  }
    return <p>Suppliers Page</p>;
  }