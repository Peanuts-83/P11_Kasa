import '../styles/error.scss'

function Error404() {
  return (
    <div className="Error404">
      <div className="error_num">Error 404</div>
      <div className="error_sub">Oups! La pageque vous demandez n'existe pas.</div>
      <div className="back">Retourner sur la page d'accueil.</div>
    </div>
  );
}

export default Error404;
