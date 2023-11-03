import Link from "next/link";


export const metadata = {
  title:"bloig siden"
}

const containerStyle ={
  
  width: "540px",
  backgroundColor: "white",
  boxShadow:" 0px 10px 30px 0px rgba(0, 115, 225, 0.06)",
  borderRadius: "4px",
  color:"black"
}
const BoligPage = async () => {

    const response = await fetch('https://dinmaegler.onrender.com/homes',
    {
      // cache:"force-cache"  hele componentet er ssg 
      // cache:"no-store" componenten bliver omdanet fra ssg til ssr
      next: {
        revalidate: 60 
        // reguest bliver cachet i 60 sekunder 
        // ssr+ssg  hvor incremantry statik generation
      }

    }
    
    );
    const data = await response.json();
   

    return (
  
      <div style={{paddingTop:"50px",display:"flex", gap:"50px", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>

      {data.map((home, index) => (
      <Link href={`/bolig/${home.id}`}>
        <div key={index} style={containerStyle}>
        <div>
          <figure>
          <img
              style={{ borderRadius: "4px" }}
              width={540}
              height={225}
              src={home.images[0].url}
            />
            <figcaption style={{ padding:"25px" }}>
              <div style={{ display: "flex", gap: "2px" }}>
                <h3>{home.adress1}</h3> • <h3>{home.adress2}</h3>
              </div>
              <p style={{ fontSize: "16px" }}>
                {home.postalcode} {home.city}
              </p>
              <p>
                
                <strong> {home.type}</strong> • Ejerudgift: {home.payment}kr.
              </p>
              <hr />
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "16px",
                }}
              >
                <div>
                  <span
                    style={{
                      width: "30px",
                      height: "30px",
                      backgroundColor: "lightGreen",
                      marginRight: "27px",
                      display: "inline-block",
                      textAlign: "center",
                    }}
                  >
                    {home.energylabel}
                  </span>
                  <span> </span> <span>{home.rooms}</span>• <span>1{home.livingspace} m²
                  </span> 
                
                  </div>
                <span>Kr. {home.price}</span>
              </div>
        
            </figcaption>
          </figure>
        </div>
      </div>
      </Link>
        
      ))}

       
       
      </div>
   
     
    );
  }

export default BoligPage;
