import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="Parentbox">
      <FotoProduk></FotoProduk>
      <Keterangan name = "udin sedunia" diskon="yes" kategori = "ini sebuah logo"></Keterangan>
    </div>
  );
}

function FotoProduk()
{
  return (
    <div className='Foto'>
        <img src='aku.png'></img>
    </div>
  );
}

function CheckDiskon(props)
{
  if(CheckDiskon == "no")
  {
    return(
      <p>Anda mendapatkan diskon 50%</p>
    );
  } else {
    return ( 
      <p>Anda tidak mendapatkan dikson</p>
    );
  }
}

function Keterangan(props)
{
 const {name,kategori, diskon}  = props;
 const Benefit = ['tahan air','tahan api','tahan tekanan'];
 const ListBenefit = Benefit.map((itemBenefit) =>
    <li>{itemBenefit}</li>
  ); 
  
  return (
    <div className='Deskripsi'>
        <p className='Judul'>{kategori}</p>
        <h1 className='Title'>{name}</h1>
        <p className='Price'>IDR 73.000.000</p>
        <CheckDiskon diskon={diskon}></CheckDiskon>
        <p className='Info'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <ul>
          {ListBenefit}
        </ul>
        <a onMouseMove={(e) => tambahCart(name, e)} href="">Add to cart</a>
    </div>
  );
}

function tambahCart(e){
 return console.log('data tersimpan barang' + e);
}

export default App;
