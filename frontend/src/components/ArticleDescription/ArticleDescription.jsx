// src/components/ArticleDescription/ArticleDescription.jsx
import styles from "./ArticleDescription.module.css";

export default function ArticleDescription({ article }) {
  if (!article) return null;

  const { description, attributes } = article;

  const renderTable = (data) => (
    <table className={styles.table}>
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr key={key}>
            <td className={styles.label}>{formatLabel(key)}</td>
            <td className={styles.value}>{formatValue(value)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  const formatLabel = (text) =>
    text
      .replace(/_/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());

  const formatValue = (value) => {
    if (typeof value === "boolean") return value ? "Sí" : "No";
    return value;
  };

  return (
    <section className={styles.container}>
      {description && (
        <>
          <h2 className={styles.title}>Descripción</h2>
          <p className={styles.description}>{description}</p>
        </>
      )}

      <h2 className={styles.title}>Características del producto</h2>

      {attributes?.generales && (
        <>
          <h3 className={styles.subtitle}>Características generales</h3>
          {renderTable(attributes.generales)}
        </>
      )}
      {attributes?.tarjeta_sim && (
        <>
          <h3 className={styles.subtitle}>Tarjeta SIM</h3>
          {renderTable(attributes.tarjeta_sim)}
        </>
      )}
      {attributes?.memoria && (
        <>
          <h3 className={styles.subtitle}>Memoria</h3>
          {renderTable(attributes.memoria)}
        </>
      )}
      {attributes?.procesador && (
        <>
          <h3 className={styles.subtitle}>Procesador</h3>
          {renderTable(attributes.procesador)}
        </>
      )}
      {attributes?.sistema_operativo && (
        <>
          <h3 className={styles.subtitle}>Sistema operativo</h3>
          {renderTable(attributes.sistema_operativo)}
        </>
      )}
      {attributes?.conectividad && (
        <>
          <h3 className={styles.subtitle}>Conectividad</h3>
          {renderTable(attributes.conectividad)}
        </>
      )}
      {attributes?.pantalla && (
        <>
          <h3 className={styles.subtitle}>Pantalla</h3>
          {renderTable(attributes.pantalla)}
        </>
      )}
      {attributes?.camara && (
        <>
          <h3 className={styles.subtitle}>Cámara</h3>
          {renderTable(attributes.camara)}
        </>
      )}
      {attributes?.bateria && (
        <>
          <h3 className={styles.subtitle}>Batería</h3>
          {renderTable(attributes.bateria)}
        </>
      )}
      {attributes?.peso_dimensiones && (
        <>
          <h3 className={styles.subtitle}>Peso y dimensiones</h3>
          {renderTable(attributes.peso_dimensiones)}
        </>
      )}
      {attributes?.otros && (
        <>
          <h3 className={styles.subtitle}>Otros</h3>
          {renderTable(attributes.otros)}
        </>
      )}
    </section>
  );
}
