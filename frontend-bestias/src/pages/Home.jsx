import Layout from "../components/Layout"
export function Home(){
    return(
         <Layout>

            <section className="hero">

                <h1>Software BESTIA</h1>

        <p>
          Sistema inteligente de reservas de salas con integración IoT
        </p>

        <button className="primary-button">
          Reservar Sala
        </button>

      </section>

    </Layout>
    )
}