import React from 'react';
import { MDBDataTable } from 'mdbreact';

const PaymentTable = () => {
  const data = {
    columns: [
      {
        label: '결제번호',
        field: 'number',
        sort: 'asc',
        width: 100
      },
      {
        label: '가게이름',
        field: 'storename',
        sort: 'asc',
        width: 200
      },
      {
        label: '고객이름',
        field: 'guestname',
        sort: 'asc',
        width: 100
      },
      {
        label: '휴대전화',
        field: 'phone',
        sort: 'asc',
        width: 150
      },
      {
        label: '결제일시',
        field: 'date',
        sort: 'asc',
        width: 150
      },
      {
        label: '가방개수',
        field: 'bagcnt',
        sort: 'asc',
        width: 100
      },
      {
        label: '캐리어개수',
        field: 'carcnt',
        sort: 'asc',
        width: 100
      },
      {
        label: '결제금액',
        field: 'pay',
        sort: 'asc',
        width: 100
      },
      {
        label: '결제상태',
        field: 'okay',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        number: '32589',
        storename: '파리바게트 동대구역점',
        guestname: '이형철',
        phone: '010-8888-9999',
        date: '2020/01/25',
        bagcnt: '1',
        carcnt: '1',
        pay:'9000원',
        okay:'결제완료'
      },
      {
        number: '32590',
        storename: '썬더치킨 동대구역점',
        guestname: '김철수',
        phone: '010-8888-1111',
        date: '2020/01/25',
        bagcnt: '2',
        carcnt: '2',
        pay:'18000원',
        okay:'결제완료'
      },
      {
        number: '32591',
        storename: '썬더치킨 동대구역점',
        guestname: '신짱구',
        phone: '010-2222-3333',
        date: '2020/01/25',
        bagcnt: '1',
        carcnt: '3',
        pay:'9000원',
        okay:'결제완료'
      },
      {
        number: '32592',
        storename: '파리바게트 동대구역점',
        guestname: '맹구',
        phone: '010-4444-9999',
        date: '2020/01/26',
        bagcnt: '3',
        carcnt: '1',
        pay:'4500원',
        okay:'결제완료'
      },
      {
        number: '32593',
        storename: '썬더치킨 동대구역점',
        guestname: '훈이',
        phone: '010-5252-8282',
        date: '2020/01/26',
        bagcnt: '1',
        carcnt: '0',
        pay:'9000원',
        okay:'결제완료'
      },
      {
        number: '32594',
        storename: '썬더치킨 동대구역점',
        guestname: '김민석',
        phone: '010-4545-8787',
        date: '2020/01/27',
        bagcnt: '2',
        carcnt: '2',
        pay:'6000원',
        okay:'결제완료'
      },
      {
        number: '32595',
        storename: '썬더치킨 동대구역점',
        guestname: '안희건',
        phone: '010-1212-3434',
        date: '2020/01/27',
        bagcnt: '2',
        carcnt: '0',
        pay:'13500원',
        okay:'결제완료'
      },
      {
        number: '32596',
        storename: '파리바게트 동대구역점',
        guestname: '전용석',
        phone: '010-4852-5259',
        date: '2020/01/27',
        bagcnt: '0',
        carcnt: '2',
        pay:'6000원',
        okay:'결제완료'
      },
      {
        number: '32597',
        storename: '썬더치킨 동대구역점',
        guestname: '김민수',
        phone: '010-1457-1998',
        date: '2020/01/28',
        bagcnt: '0',
        carcnt: '1',
        pay:'9000원',
        okay:'결제완료'
      },
      {
        number: '32598',
        storename: '파리바게트 동대구역점',
        guestname: '루피',
        phone: '010-8765-4321',
        date: '2020/01/28',
        bagcnt: '1',
        carcnt: '0',
        pay:'4500원',
        okay:'결제완료'
      },
      {
        number: '32599',
        storename: '썬더치킨 동대구역점',
        guestname: '상디',
        phone: '010-1234-5678',
        date: '2020/01/28',
        bagcnt: '3',
        carcnt: '2',
        pay:'6000원',
        okay:'결제완료'
      },
      {
        number: '32600',
        storename: '썬더치킨 동대구역점',
        guestname: '조로',
        phone: '010-1717-4500',
        date: '2020/01/29',
        bagcnt: '5',
        carcnt: '1',
        pay:'9000원',
        okay:'결제완료'
      },
      {
        number: '32601',
        storename: '파리바게트 동대구역점',
        guestname: '김주연',
        phone: '010-5656-5555',
        date: '2020/01/29',
        bagcnt: '4',
        carcnt: '2',
        pay:'18000원',
        okay:'결제완료'
      },
      {
        number: '32602',
        storename: '썬더치킨 동대구역점',
        guestname: '서영훈',
        phone: '010-6598-7452',
        date: '2020/02/02',
        bagcnt: '3',
        carcnt: '0',
        pay:'9000원',
        okay:'결제완료'
      },
      {
        number: '32603',
        storename: '썬더치킨 동대구역점',
        guestname: '미츠하',
        phone: '010-6565-5959',
        date: '2020/02/04',
        bagcnt: '2',
        carcnt: '0',
        pay:'3000원',
        okay:'결제완료'
      },
      {
        number: '32604',
        storename: '파리바게트 동대구역점',
        guestname: '나미',
        phone: '010-9562-6666',
        date: '2020/02/05',
        bagcnt: '1',
        carcnt: '2',
        pay:'6000원',
        okay:'결제완료'
      },
      {
        number: '32605',
        storename: '파리바게트 동대구역점',
        guestname: '미호크',
        phone: '010-1232-4568',
        date: '2020/02/08',
        bagcnt: '0',
        carcnt: '3',
        pay:'9000원',
        okay:'결제완료'
      },
      {
        number: '32606',
        storename: '썬더치킨 동대구역점',
        guestname: '스폰지밥',
        phone: '010-4592-2356',
        date: '2020/02/12',
        bagcnt: '2',
        carcnt: '2',
        pay:'4500원',
        okay:'결제완료'
      },
      {
        number: '32607',
        storename: '썬더치킨 동대구역점',
        guestname: '뚱이',
        phone: '010-8989-1568',
        date: '2020/02/15',
        bagcnt: '2',
        carcnt: '1',
        pay:'13500원',
        okay:'결제완료'
      },
      {
        number: '32608',
        storename: '썬더치킨 동대구역점',
        guestname: '다람이',
        phone: '010-5252-4444',
        date: '2020/02/19',
        bagcnt: '3',
        carcnt: '0',
        pay:'18000원',
        okay:'결제완료'
      },
      {
        number: '32609',
        storename: '파리바게트 동대구역점',
        guestname: '징징이',
        phone: '010-7787-5562',
        date: '2020/02/25',
        bagcnt: '2',
        carcnt: '2',
        pay:'9000원',
        okay:'결제완료'
      },
      {
        number: '32610',
        storename: '썬더치킨 동대구역점',
        guestname: '집게사장',
        phone: '010-9634-7777',
        date: '2020/02/28',
        bagcnt: '2',
        carcnt: '0',
        pay:'6000원',
        okay:'결제완료'
      },
      {
        number: '32611',
        storename: '썬더치킨 동대구역점',
        guestname: '플랑크톤',
        phone: '010-7745-2256',
        date: '2020/03/05',
        bagcnt: '3',
        carcnt: '1',
        pay:'9000원',
        okay:'결제완료'
      },
      {
        number: '32612',
        storename: '파리바게트 동대구역점',
        guestname: '골드로저',
        phone: '010-1111-9999',
        date: '2020/03/08',
        bagcnt: '2',
        carcnt: '0',
        pay:'12000원',
        okay:'결제완료'
      },
      {
        number: '32613',
        storename: '썬더치킨 동대구역점',
        guestname: '빅맘',
        phone: '010-5895-6658',
        date: '2020/03/10',
        bagcnt: '0',
        carcnt: '1',
        pay:'4500원',
        okay:'결제완료'
      }
    ]
  };

  return (
    <MDBDataTable
      striped
      bordered
      small
      data={data}
    />
  );
}

export default PaymentTable;