
export const metadata = {
  title: "BoligDetatails ",
};
export default async function BoligDetatails({ params }) {
    const boligId = params.boligId;
  
    const response = await fetch(
      `https://dinmaegler.onrender.com/homes/${boligId}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
  
    const data = await response.json();
  
    return (

    
      <section  style={{ display: "flex", justifyContent: "center", paddingTop: "50px"}}>
      <div
        style={{ display: "flex", padding: "20px", width:"500px", flexDirection:"column", borderRadius:"5px", border:"1px solid grey", gap:"20px"}}
      >
        <div>
          <img style={{ width: "500px" }} src={data.images[0].url} />
  
        </div>
        <div style={{ width: "158px", height: "72px", paddingTop:"20px" }}>
              <p>
                {data.adress1} {data.postalcode} {data.city}
              </p>
            </div>
            <hr />
        <div>
        <h1>Bolig Beskrivelse:</h1>
        <p> {data.description}</p>
        </div>
  
      </div></section>
     

   
    );
  }
  