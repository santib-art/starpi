import React from 'react';

// Reemplaza estas URLs con las rutas locales de tus imágenes
const POKEMON_LOGO_URL = 'https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pok%C3%A9mon_logo.svg';
const ASH_PIKACHU_URL = 'https://i.ibb.co/vz448G4/ash-pikachu.png'; // Asegúrate de tener esta imagen
const BACKGROUND_URL = 'https://i.ibb.co/0J611mF/blurred-pokemon-bg.jpg'; // Imagen de fondo desenfocada

const styles = {
  container: {
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: '100vh',
    backgroundImage: `url(${BACKGROUND_URL})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '40px 20px',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  header: {
    marginTop: '20px',
  },
  title: {
    fontSize: '3rem',
    fontWeight: '800',
    margin: '0 0 5px 0',
    letterSpacing: '2px',
    textTransform: 'uppercase',
  },
  subtitle: {
    fontSize: '1rem',
    margin: '0',
    opacity: 0.8,
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  },
  image: {
    width: '180px',
    height: 'auto',
  },
  logo: {
    width: '250px',
    height: 'auto',
    marginBottom: '20px',
  },
  button: {
    backgroundColor: '#1E3A8A', // Un tono azul oscuro
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '10px',
    fontSize: '1.1rem',
    fontWeight: '500',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
    cursor: 'pointer',
    width: '100%',
    maxWidth: '300px',
    lineHeight: '1.4',
  },
  footer: {
    marginBottom: '10px',
  },
  footerText: {
    margin: '5px 0',
    fontSize: '0.9rem',
    opacity: 0.9,
  },
};

const Info = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>POKE API</h1>
        <p style={styles.subtitle}>daniel diaz tibatá</p>
      </header>

      <div style={styles.mainContent}>
        <img src={ASH_PIKACHU_URL} alt="Ash y Pikachu" style={styles.image} />
        <img src={POKEMON_LOGO_URL} alt="Pokémon Logo" style={styles.logo} />
        <div style={styles.button}>
          Api con información de 1025 pokemones
        </div>
      </div>

      <footer style={styles.footer}>
        <p style={styles.footerText}>github.com/diaztibata</p>
        <p style={styles.footerText}>v 1.0.1</p>
      </footer>
    </div>
  );
};

export default Info;