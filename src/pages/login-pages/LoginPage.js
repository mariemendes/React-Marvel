import React from 'react';
// import { JavascriptModulesPlugin } from 'webpack';
import * as S from './styles';
import md5 from 'md5';

export default function LoginPage(props) {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const ts = Number(new Date());
    const hash = md5(ts + username + password);
    fetch(
      'http://gateway.marvel.com/v1/public/characters?ts=' +
        ts +
        '&apikey=' +
        password +
        '&hash=' +
        hash,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    ).then((json) => {
      if (json.status != 200) {
        alert('Incorrect Username or password.');
        return null;
      }
      localStorage.setItem('ts', ts);
      localStorage.setItem('password', password);
      localStorage.setItem('hash', hash);
      props.history.push('/characters');
      return json;
    });
  }
  return (
    <S.SectionStyle>
      <S.Container>
        <S.Title>Dados de Acesso</S.Title>
        <S.Forms onSubmit={handleSubmit}>
          <S.InputInformations
            type="text"
            placeholder="private_key"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <S.InputInformations
            type="text"
            placeholder="public_key"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <S.Access type="submit">Acessar</S.Access>
        </S.Forms>
      </S.Container>
    </S.SectionStyle>
  );
}
