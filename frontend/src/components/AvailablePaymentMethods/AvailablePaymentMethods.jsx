import React from 'react';
import styles from './AvailablePaymentMethods.module.css';

const iconMap = {
  visa: 'visa.svg',
  mastercard: 'master-card.svg',
  mercado_pago_balance: 'mercado-pago.svg',
  visa_debit: 'visa-debit.svg',
  rapipago: 'rapipago.svg',
  pagofacil: 'pagofacil.svg',
};

const labelMap = {
  visa: 'Visa',
  mastercard: 'Mastercard',
  mercado_pago_balance: 'Mercado Pago',
  visa_debit: 'Visa Débito',
  rapipago: 'Rapipago',
  pagofacil: 'Pago Fácil',
};

const categoryTitles = {
  credit_card: 'Tarjetas de crédito',
  debit_card: 'Tarjetas de débito',
  cash: 'Efectivo',
  account_money: 'Cuotas sin tarjeta',
  bank_transfer: 'Débito bancario',
};

const AvailablePaymentMethods = ({ paymentMethods }) => {
  if (!paymentMethods || paymentMethods.length === 0) return null;

  const categorizedMethods = {};

  paymentMethods.forEach((method) => {
    const [category, name] = method.split(':');
    if (!categorizedMethods[category]) {
      categorizedMethods[category] = [];
    }
    categorizedMethods[category].push(name);
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Medios de pago</h2>
      {Object.entries(categorizedMethods).map(([category, methods]) => (
        <div key={category} className={styles.categoryBlock}>
          <h3 className={styles.categoryTitle}>{categoryTitles[category] || category}</h3>
          <div className={styles.iconGrid}>
            {methods.map((name) => {
              const icon = iconMap[name];
              const label = labelMap[name];
              if (!icon || !label) return null;
              return (
                <div key={name} className={styles.iconWithLabel}>
                  <img
                    src={`/icons/payment/${icon}`}
                    alt={label}
                    className={styles.icon}
                  />
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePaymentMethods;
