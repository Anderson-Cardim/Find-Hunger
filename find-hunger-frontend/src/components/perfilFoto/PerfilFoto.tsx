import './PerfilFoto.css'

interface Imagem{
    img?: string; 
  }

export function PerfilFoto({
    img,
  }: Imagem) {
    return (
        <div>
            <img src={img} alt="" />
        </div>
    )
}
