import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      fullName: 'Andrew',
      lastName: 'McNulty',
      mobileNumber: '+1-224-463-7589',
      nickName: 'jford',
      email: 'a*@gmail.com',
      jointNames: '',
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 115678.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'June 10 2024, 3:32:32 am',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'April 15 2023, 1:04:02 pm',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'February 8 2022, 10:11:22 am',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 2 2021, 7:08:32 am',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'November 23 2020, 1:15:02 pm',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'April 23 2020, 8:15:02 pm',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'March 15, 2019, 7:20:15 am',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'February 12, 2019, 10:45:00 am',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'April 16, 2019, 2:45:15 pm',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      }
    ]
  },
  {
    account_id: 'ACC002',
    holder: {
      fullName: 'Stacey',
      lastName: 'Roland',
      mobileNumber: '',
      email: 's*@gmail.com',
      dateCreated: '9/14/2024',
      username: 'StaceyRoland43',
      password: '!StaceyRoland@212'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 250000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, Please enter the code sent to you',
      transaction_code: '237832w2762',
      wireDate: true
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'June 10 2024',
        description: "Grimms supply holding's",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'April 15 2023',
        description: 'Transfer from TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2930'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'February 8 2022',
        description: 'Transfer from NICHOLAS DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****3839'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'July 2 2021',
        description: 'Transfer from BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****3249'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'November 23 2020',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'April 23 2020',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 15, 2019',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN008',
        dateTime: 'February 12, 2019',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN009',
        dateTime: 'April 16, 2019',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN010',
        dateTime: 'April 23 2020',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN011',
        dateTime: 'March 15, 2019',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN012',
        dateTime: 'February 12, 2019',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN013',
        dateTime: 'April 16, 2019',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      },
      {
        transaction_id: 'TXN014',
        dateTime: 'April 23 2020',
        description: 'Project Milestone Payment',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****1403'
      },
      {
        transaction_id: 'TXN015',
        dateTime: 'March 15, 2019',
        description: 'Project Completion Bonus',
        status: 'Success',
        amount_usd: 18000.0,
        account_no: '****5012'
      },
      {
        transaction_id: 'TXN016',
        dateTime: 'February 12, 2019',
        description: 'Walmart',
        status: 'Success',
        amount_usd: -4000.0,
        account_no: '****5013'
      },
      {
        transaction_id: 'TXN017',
        dateTime: 'April 16, 2019',
        description: 'AT&T',
        status: 'Success',
        amount_usd: -400.0,
        account_no: '****5007'
      }
    ]
  },
  {
    account_id: 'ACC003',
    holder: {
      fullName: 'Kaley Cuoco',
      profileImgUrl: '',
      email: 'kaleycuo**@outlook.com',
      dateCreated: '7/28/2025', // m/d/y
      username: 'kaleycuoco101',
      password: 'Matilda2023'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 8600000.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '237832',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service team on trustwcustomerservice@outlook.com for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'February 3, 2024',
        description: 'Investment shares from raw - XXXXXX7631',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'January 5, 2024',
        description: 'Investment shares from uncut gemstones diamonds - XXXXXX3673',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'December 6, 2023',
        description: 'Investment shares from uncut gemstones diamonds - XXXXXX2854',
        status: 'Success',
        amount_usd: 300000.0
      },
      {
        dateTime: 'November 7, 2023',
        description: 'Investment shares from raw - XXXXXX4987',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'October 9, 2023',
        description: 'Investment shares from uncut gemstones diamonds - XXXXXX9340',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'September 11, 2023',
        description: 'Investment shares from raw - XXXXXX1126',
        status: 'Success',
        amount_usd: 980000.0
      },
      {
        dateTime: 'August 13, 2023',
        description: 'Investment shares from uncut gemstones diamonds - XXXXXX6438',
        status: 'Success',
        amount_usd: 420000.0
      },
      {
        dateTime: 'July 15, 2023',
        description: 'Investment shares from raw - XXXXXX3850',
        status: 'Success',
        amount_usd: 2000000.0
      },
      {
        dateTime: 'June 17, 2023',
        description: 'Investment shares from uncut gemstones diamonds - XXXXXX9517',
        status: 'Success',
        amount_usd: 800000.0
      },
      {
        dateTime: 'May 19, 2023',
        description: 'Investment shares from raw - XXXXXX2093',
        status: 'Success',
        amount_usd: 670000.0
      },
      {
        dateTime: 'April 21, 2023',
        description: 'Investment shares from uncut gemstones diamonds - XXXXXX7182',
        status: 'Success',
        amount_usd: 330000.0
      },
      {
        dateTime: 'March 23, 2023',
        description: 'Investment shares from raw - XXXXXX8888',
        status: 'Success',
        amount_usd: 455000.0
      },
      {
        dateTime: 'February 23, 2023',
        description: 'account opening - XXXXXX26347',
        status: 'Success',
        amount_usd: 2000.0
      }
    ]
  },
  {
    account_id: 'ACC004',
    holder: {
      fullName: 'Kelly Jessica R. & James Hawley',
      profileImgUrl: '',
      email: 'kj**@gmail.com',
      dateCreated: '8/12/2025', // m/d/y
      username: 'Kellyjames2025',
      password: 'Blessed95'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 26303261.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '23783',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'July 11, 2025',
        description: 'Transfer from FDI INVESTMENT FIRM - XXXXXX7631',
        status: 'Success',
        amount_usd: 26303261.0
      }
    ]
  },
  {
    account_id: 'ACC005',
    holder: {
      fullName: 'Stephen Petrosino',
      profileImgUrl: '',
      email: 's**@gmail.com',
      dateCreated: '11/03/2025', // m/d/y
      username: 'StephenPetrosino424',
      password: 'sPetroSin@95'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      checking_balance_usd: 101056.0,
      saving_balance_usd: 425377.58
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '2378',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'October 15, 2025',
        description: 'Transfer from FDI INVESTMENT FIRM - XXXXXX7631',
        status: 'Pending',
        amount_usd: 324377.0
      },
      {
        dateTime: 'October 3, 2025',
        description: 'Transfer to Investment shares from raw - XXXXXX7631',
        status: 'Success',
        amount_usd: -50000.0
      },
      {
        dateTime: 'September 5, 2025',
        description: 'Transfer from Investment shares from uncut gemstones diamonds - XXXXXX3673',
        status: 'Success',
        amount_usd: 50000.0
      },
      {
        dateTime: 'August 6, 2025',
        description: 'Transfer to Investment shares from uncut gemstones diamonds - XXXXXX2854',
        status: 'Success',
        amount_usd: -300000.0
      },
      {
        dateTime: 'July 15, 2025',
        description: 'Transfer from Investment shares from raw - XXXXXX3850',
        status: 'Success',
        amount_usd: 20000.0
      },
      {
        dateTime: 'July 7, 2025',
        description: 'Transfer to Investment shares from raw - XXXXXX4987',
        status: 'Success',
        amount_usd: -25000.0
      },
      {
        dateTime: 'June 17, 2025',
        description: 'Transfer from nvestment shares from uncut gemstones diamonds - XXXXXX9517',
        status: 'Success',
        amount_usd: 150000.0
      },
      {
        dateTime: 'May 19, 2025',
        description: 'Transfer to Investment shares from raw - XXXXXX2093',
        status: 'Success',
        amount_usd: 70000.0
      },
      {
        dateTime: 'May 9, 2025',
        description: 'Transfer to Investment shares from uncut gemstones diamonds - XXXXXX9340',
        status: 'Success',
        amount_usd: -50000.0
      },
      {
        dateTime: 'April 21, 2025',
        description: 'Transfer to Investment shares from uncut gemstones diamonds - XXXXXX7182',
        status: 'Success',
        amount_usd: -3300.0
      },
      {
        dateTime: 'April 11, 2025',
        description: 'Transfer from Investment shares from raw - XXXXXX1126',
        status: 'Success',
        amount_usd: 9800.0
      },
      {
        dateTime: 'March 23, 2025',
        description: 'Transfer to Investment shares from raw - XXXXXX8888',
        status: 'Success',
        amount_usd: -45500.0
      },
      {
        dateTime: 'March 13, 2025',
        description: 'Transfer from Investment shares from uncut gemstones diamonds - XXXXXX6438',
        status: 'Success',
        amount_usd: 42000.0
      },
      {
        dateTime: 'February 23, 2025',
        description: 'Transfer from FDI INVESTMENT FIRM  - XXXXXX26347',
        status: 'Success',
        amount_usd: 150000.0
      }
    ]
  },
  {
    account_id: 'ACC006',
    holder: {
      fullName: 'Hazel Angie',
      profileImgUrl: '',
      email: 's**@gmail.com',
      dateCreated: '12/09/2025', // m/d/y
      dateUpdated: '12/30/2025', // m/d/y
      username: 'hazel0733',
      password: 'AbleGod20!5'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      checking_balance_usd: 1380178.0,
      saving_balance_usd: 0.8
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '2378',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 30, 2025',
        description: 'Check Deposit- XXXXXX7631',
        status: 'Success',
        amount_usd: 893190.0
      },
      {
        dateTime: 'October 23, 2025',
        description: 'Vat fee - XXXXXX63546',
        status: 'Success',
        amount_usd: -8.0
      },
      {
        dateTime: 'October 23, 2025',
        description: 'authorize online payment - XXXXXX7631',
        status: 'Success',
        amount_usd: -99056.0
      },
      {
        dateTime: 'October 23, 2025',
        description: 'Vat fee - XXXXXX03764',
        status: 'Success',
        amount_usd: -8.0
      },
      {
        dateTime: 'October 23, 2025',
        description: 'card POS charge - XXXXXX7631',
        status: 'Success',
        amount_usd: -72000.0
      },
      {
        dateTime: 'October 23, 2025',
        description: 'Vat fee - XXXXXX2646',
        status: 'Success',
        amount_usd: -8.0
      },
      {
        dateTime: 'October 23, 2025',
        description: 'online payment - XXXXXX3673',
        status: 'Success',
        amount_usd: -425376.0
      },
      {
        dateTime: 'October 21, 2025',
        description: 'Vat fee - XXXXXX1544',
        status: 'Success',
        amount_usd: -8.0
      },
      {
        dateTime: 'October 21, 2025',
        description: 'order charge - XXXXXX2854',
        status: 'Success',
        amount_usd: -204655.0
      },
      {
        dateTime: 'October 19, 2025',
        description: 'Vat fee - XXXXXX44642',
        status: 'Success',
        amount_usd: -4.0
      },
      {
        dateTime: 'October 19, 2025',
        description: 'ATM machine withdrawal - XXXXXX3850',
        status: 'Success',
        amount_usd: -1000.0
      },
      {
        dateTime: 'October 17, 2025',
        description: 'Vat fee - XXXXXX34653',
        status: 'Success',
        amount_usd: -4.0
      },
      {
        dateTime: 'October 17, 2025',
        description: 'Walmart POS - XXXXXX4987',
        status: 'Success',
        amount_usd: -903.0
      },
      {
        dateTime: 'October 17, 2025',
        description: 'Vat fee - XXXXXX238724',
        status: 'Success',
        amount_usd: -4.0
      },
      {
        dateTime: 'October 17, 2025',
        description: 'Cheapoair charge - XXXXXX9517',
        status: 'Success',
        amount_usd: -1460.0
      },
      {
        dateTime: 'October 17, 2025',
        description: 'Check deposit - XXXXXX2093',
        status: 'Success',
        amount_usd: 893190.0
      },
      {
        dateTime: 'October 4, 2025',
        description: 'POS charge - XXXXXX9340',
        status: 'Success',
        amount_usd: -102.0
      },
      {
        dateTime: 'October 4, 2025',
        description: 'Vat fee - XXXXXX1746',
        status: 'Success',
        amount_usd: -4.0
      },
      {
        dateTime: 'October 4, 2025',
        description: 'electronic funds transfer paid (Cash) - XXXXXX7182',
        status: 'Success',
        amount_usd: -2500.0
      },
      {
        dateTime: 'October 2, 2025',
        description: 'opening wire deposit - XXXXXX1126',
        status: 'Success',
        amount_usd: 38000.0
      }
    ]
  },
  {
    account_id: 'ACC007',
    holder: {
      fullName: 'Rodrigues E. Morris',
      profileImgUrl: '',
      email: 'm**@gmail.com',
      dateCreated: '12/25/2025', // m/d/y
      username: 'mine19543',
      password: 'Security123'
    },
    bank_details: {
      account_type: 'Checking',
      isAccountNumber: true,
      balance_usd: 398900.0
    },
    transaction_mgs_code: {
      transaction_text_msg: 'To continue this transaction, please enter the code sent to you',
      transaction_code: '2378',
      headerText: 'Dear Valued Customer,',
      lastStepText: 'Your account is on hold. You cannot make transactions right now. Please contact our customer service for assistance.',
      wireDate: true
    },
    transaction_history: [
      {
        dateTime: 'December 26, 2025',
        description: 'Transfer - XXXXXX48291',
        status: 'Success',
        amount_usd: -14240.0
      },
      {
        dateTime: 'December 25, 2025',
        description: 'Debit - XXXXXX73904',
        status: 'Success',
        amount_usd: -3750.0
      },
      {
        dateTime: 'December 24, 2025',
        description: 'Debit - XXXXXX61582',
        status: 'Success',
        amount_usd: -5699.0
      },
      {
        dateTime: 'December 23, 2025',
        description: 'Wire transfer - XXXXXX90844',
        status: 'Success',
        amount_usd: -186000.0
      },
      {
        dateTime: 'December 22, 2025',
        description: 'Debit - XXXXXX35197',
        status: 'Success',
        amount_usd: -10260.0
      },
      {
        dateTime: 'December 21, 2025',
        description: 'Wire transfer - XXXXXX77430',
        status: 'Success',
        amount_usd: -125000.0
      },
      {
        dateTime: 'December 20, 2025',
        description: 'Debit - XXXXXX26488',
        status: 'Success',
        amount_usd: -14240.0
      },
      {
        dateTime: 'December 19, 2025',
        description: 'Transfer - XXXXXX59012',
        status: 'Success',
        amount_usd: -9499.0
      },
      {
        dateTime: 'December 18, 2025',
        description: 'Transfer - XXXXXX84166',
        status: 'Success',
        amount_usd: -12500.0
      },
      {
        dateTime: 'December 15, 2025',
        description: 'Fort Lauderdale (FLL) - XXXXXX70351',
        status: 'Success',
        amount_usd: -4500.0
      },
      {
        dateTime: 'December 13, 2025',
        description: 'Deposit wire transfer - XXXXXX91624',
        status: 'Success',
        amount_usd: 89990.0
      },
      {
        dateTime: 'December 13, 2025',
        description: 'Transfer - XXXXXX40877',
        status: 'Success',
        amount_usd: -19400.0
      },
      {
        dateTime: 'December 12, 2025',
        description: 'T&C Mall - XXXXXX55290',
        status: 'Success',
        amount_usd: -24450.0
      },
      {
        dateTime: 'December 11, 2025',
        description: 'Channel - XXXXXX63546',
        status: 'Success',
        amount_usd: -6399.0
      },
      {
        dateTime: 'December 10, 2025',
        description: 'Check deposit - XXXXXX12874',
        status: 'Success',
        amount_usd: 600000.0
      },
      {
        dateTime: 'December 9, 2025',
        description: 'Debit - XXXXXX46933',
        status: 'Success',
        amount_usd: -3900.0
      },
      {
        dateTime: 'December 6, 2025',
        description: 'Deposit AirBnB - XXXXXX85710',
        status: 'Success',
        amount_usd: 22000.0
      },
      {
        dateTime: 'November 28, 2025',
        description: 'Mall xStock - XXXXXX90461',
        status: 'Success',
        amount_usd: -18550.0
      },
      {
        dateTime: 'November 27, 2025',
        description: 'Debit - XXXXXX31689',
        status: 'Success',
        amount_usd: -8700.0
      },
      {
        dateTime: 'November 25, 2025',
        description: 'Deposit wire transfer - XXXXXX78054',
        status: 'Success',
        amount_usd: 55000.0
      },
      {
        dateTime: 'November 23, 2025',
        description: 'Debit - XXXXXX24976',
        status: 'Success',
        amount_usd: -10500.0
      },
      {
        dateTime: 'November 22, 2025',
        description: 'Deposit ACH transfer - XXXXXX69320',
        status: 'Success',
        amount_usd: 98500.0
      }
    ]
  }
];
