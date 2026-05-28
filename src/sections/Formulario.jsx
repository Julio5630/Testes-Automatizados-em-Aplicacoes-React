
function Formulario() {
  return (
    <section className="formulario">
      <div className="container formulario-content">
        <h2>Agende uma consulta</h2>   
        <form>
            <input type="text" placeholder="Nome" required />   
            <input type="email" placeholder="Email" required />
            <input type="tel" placeholder="Telefone" required />
            <textarea placeholder="Mensagem" required></textarea>
            <button className="form-btn" type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
}
export default Formulario;