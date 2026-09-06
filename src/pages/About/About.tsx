import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

function About() {
  return (
    <main className="about-page">
      <div className="about-container">
        <Title level={1}>Sobre nosotros</Title>

        <Paragraph className="about-intro">
          Bienvenidos a STREAMTUC, una plataforma creada
          para disfrutar de películas y series en un solo
          lugar.
        </Paragraph>

        <Card className="about-card">
          <Title level={2}>¿Qué es StreamTuc?</Title>

          <Paragraph>
            StreamTuc es una plataforma de entretenimiento
            pensada para descubrir, buscar y disfrutar de
            películas y series.
          </Paragraph>

          <Paragraph>
            Nuestro objetivo es ofrecer una experiencia
            sencilla, moderna y cómoda para encontrar
            contenido de diferentes géneros.
          </Paragraph>
        </Card>

        {/* CREADORES */}

        <section className="creators-section">
          <h2>Los creadores de StreamTuc</h2>

          <div className="creators-container">
            <div className="creator-card">
              <img
                className="creator-image"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80"
                alt="Creador de StreamTuc"
              />

              <h3>Lucas</h3>

              <p>
                Creador y desarrollador
              </p>
            </div>

            <div className="creator-card">
              <img
                className="creator-image"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80"
                alt="Creadora de StreamTuc"
              />

              <h3>Co-creadora</h3>

              <p>
                Creadora y desarrolladora
              </p>
            </div>
          </div>
        </section>

        <Card className="about-card">
          <Title level={2}>Nuestra propuesta</Title>

          <Paragraph>
            En StreamTuc podés explorar películas y series,
            consultar sus detalles, buscar contenido y
            guardar tus favoritos.
          </Paragraph>

          <Paragraph>
            También contamos con un sistema de usuarios y
            un panel de administración para gestionar el
            contenido de la plataforma.
          </Paragraph>
        </Card>

        {/* UBICACIÓN */}

        <section className="location-section">
          <h2>📍 Nuestra ubicación</h2>

          <p>
            Próximamente vas a poder encontrar nuestra
            ubicación y acceder directamente a Google Maps.
          </p>

          <a
            className="location-button"
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en Google Maps
          </a>
        </section>

        <Card className="about-card">
          <Title level={2}>StreamTuc</Title>

          <Paragraph>
            Entretenimiento, descubrimiento y diversión en
            un solo lugar.
          </Paragraph>
        </Card>
      </div>
    </main>
  );
}

export default About;