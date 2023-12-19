import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="Parentbox">
      <FotoProduk></FotoProduk>
      <Keterangan kategori = "ini sebuah logo"></Keterangan>
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

function Keterangan(props)
{
 const {kategori}  = props;
  return (
    <div className='Deskripsi'>
        <p className='Judul'>{kategori}</p>
        <h1 className='Title'>Hello World</h1>
        <p className='Price'>IDR 73.000.000</p>
        <p className='Info'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
    </div>
  );
}

export default App;
