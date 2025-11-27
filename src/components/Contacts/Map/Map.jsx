import styles from './Map.module.css';

function Map() {

  return (
    <section className={styles.mapbox} data-mapbox>
      <figure>
        <iframe title={"my place"}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d690849.9132364407!2d36.72592563737229!3d55.58072977996927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8!5e1!3m2!1sru!2sde!4v1762711509136!5m2!1sru!2sde"
          loading="lazy">
        </iframe>
      </figure>
    </section>
  );
}

export default Map;
