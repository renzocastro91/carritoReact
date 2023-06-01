import Artist from "../../components/Artist";
import Search from "../../components/Search";
import "./styles.css";

function App() {
  return (
    <main>
      <h1>Carrito APP</h1>
      <div className="container">
      <div className="module1">
        <p>Hola Mundillo</p>
        <Artist name="Justin Bieber" category="Artista" image = "https://www.rionegro.com.ar/wp-content/uploads/2022/02/Justin-1.jpg" views={0} />
        <Artist name="Dua Lipa" category="Artista"  image = "https://www.losandes.com.ar/resizer/9mr-cBxbzky_uMEbwZxP7UUvoP0=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/MPUTSVC5IJDKPJLE7LBUWGLHE4.png" views={0}/> 
      </div>
      <div className="module2">
        <Search></Search>
        <h1 className="title">Music App</h1>
        <Artist name="Justin Bieber" category="Artista" image = "https://www.rionegro.com.ar/wp-content/uploads/2022/02/Justin-1.jpg" views={0} />
        <Artist name="Dua Lipa" category="Artista"  image = "https://www.losandes.com.ar/resizer/9mr-cBxbzky_uMEbwZxP7UUvoP0=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/MPUTSVC5IJDKPJLE7LBUWGLHE4.png" views={0}/> 
        <Artist name="Dillom" category="Artista"  image ="https://media.lacapital.com.ar/p/65f5b8343356343037ab39e9b25ebfa2/adjuntos/203/imagenes/030/530/0030530243/1200x675/smart/dillom1jpg.jpg" views={0}/>
        <Artist name="Chaqueño Palavecino" category="Artista"  image ="https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/09/23/614ca532de6c8.r_d.3120-2080-0.jpeg" views={0}/>
        <Artist name="Marilyn Manson" category="Artista"  image ="https://viapais.com.ar/resizer/s6gmAlqKUZyQPBnmfdnxSXC6B8c=/980x640/smart/filters:quality(75):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/MNRWGOBWMNQWGN3FMFSDCODDGA.jpg" views={0}/>
      </div>
      </div>
      
    </main>
  );
}

export default App;