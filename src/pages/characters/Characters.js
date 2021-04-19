import React, { useEffect } from 'react';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import Modal from 'react-modal';
import * as S from './styles';

const columns = [
  {
    name: 'Name',
    selector: 'name',
    sortable: true,
  },
  {
    name: 'Description',
    selector: 'description',
    maxWidth: '600px',
    sortable: true,
    center: true,
  },
  {
    name: 'Last Modified',
    selector: 'modified',
    sortable: true,
    right: true,
  },
];

Modal.setAppElement('#root');
export default function Characters(props) {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState('0');
  const [total, setTotal] = React.useState(0);
  const [selectedHero, setSelectedHero] = React.useState({});
  const [totalRow, setTotalRow] = React.useState(20);

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const customStyles = {
    table: {
      style: {
        fontFamily: 'Noto Sans KR',
        fontSize: '14px',
      },
    },
    rows: {
      style: {
        minHeight: '40px',
        fontSize: '14px',
        fontFamily: 'Noto Sans KR',
        cursor: 'pointer',
      },
    },
  };
  const ts = localStorage.getItem('ts');
  const password = localStorage.getItem('password');
  const hash = localStorage.getItem('hash');
  if (ts == null || password == null || hash == null) {
    props.history.push('/');
  }

  useEffect(() => {
    axios
      .get(
        'http://gateway.marvel.com/v1/public/characters?ts=' +
          ts +
          '&apikey=' +
          password +
          '&hash=' +
          hash +
          '&offset=' +
          page * totalRow,
      )
      .then((response) => {
        setTotalRow(response.data.data.count),
          setTotal(response.data.data.total),
          setData(response.data.data.results);
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <S.SectionStyle>
      <S.Title>Marvel Heroes</S.Title>
      <S.TableContainer>
        <DataTable
          columns={columns}
          paginationServer={true}
          paginationTotalRows={total}
          paginationPerPage={totalRow}
          paginationRowsPerPageOptions={[20]}
          onChangePage={(e) => {
            setPage(e - 1);
          }}
          pagination={true}
          data={data}
          onRowClicked={(e) => {
            setSelectedHero(e);
            handleShow();
          }}
          customStyles={customStyles}
        />
      </S.TableContainer>
      <div>
        <Modal isOpen={show} contentLabel="Characters Details">
          <S.DetailsModal>
            <S.ModalImg
              src={
                selectedHero.thumbnail == undefined
                  ? ''
                  : selectedHero.thumbnail.path + '.jpg'
              }
              alt="character img"
            />
            <S.InformModal>
              <S.Name>
                <span>Name:</span> {selectedHero.name}
              </S.Name>
              <S.Description>
                <span>Description:</span> {selectedHero.description}
              </S.Description>
              <S.ModalButton onClick={handleClose}> Close </S.ModalButton>
            </S.InformModal>
          </S.DetailsModal>
          <S.TitleHero>Comics</S.TitleHero>
          <div>
            {selectedHero.comics == undefined
              ? 'No Comics founded'
              : selectedHero.comics.items.map((value, index) => {
                  return <S.ListHero key={index}>{value.name}</S.ListHero>;
                })}
          </div>
          <S.TitleHero>Series</S.TitleHero>
          <div>
            {selectedHero.series == undefined
              ? 'No Series founded'
              : selectedHero.series.items.map((value, index) => {
                  return <S.ListHero key={index}>{value.name}</S.ListHero>;
                })}
          </div>
          <S.TitleHero>Stories</S.TitleHero>
          <div>
            {selectedHero.stories == undefined
              ? 'No Stories founded'
              : selectedHero.stories.items.map((value, index) => {
                  return <S.ListHero key={index}>{value.name}</S.ListHero>;
                })}
          </div>
        </Modal>
      </div>
    </S.SectionStyle>
  );
}
