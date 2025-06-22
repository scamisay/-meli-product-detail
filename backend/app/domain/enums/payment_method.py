from enum import Enum

class PaymentMethodCategory(Enum):
    credit_card = "credit_card"
    debit_card = "debit_card"
    cash = "cash"
    account_money = "account_money"
    bank_transfer = "bank_transfer"

class CreditCardMethod(Enum):
    visa = "visa"
    mastercard = "mastercard"
    cabal = "cabal"
    naranja_x = "naranja_x"
    amex = "amex"
    diners = "diners"
    argencard = "argencard"
    shopping = "shopping"

class DebitCardMethod(Enum):
    maestro = "maestro"
    cabal = "cabal"
    mastercard_debit = "mastercard_debit"
    visa_debit = "visa_debit"

class CashMethod(Enum):
    rapipago = "rapipago"
    pago_facil = "pago_facil"

class AccountMoneyMethod(Enum):
    mercado_pago_balance = "mercado_pago_balance"

class BankTransferMethod(Enum):
    debin = "debin"
