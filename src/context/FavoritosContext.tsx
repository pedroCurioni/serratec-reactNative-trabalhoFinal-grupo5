import React, {createContext, useContext, useState} from 'react';
import Realm from 'realm';
import {AuthContext} from './AuthContext';

export const FavoritosContext = createContext({});

class FavoritosSchema extends Realm.Object {}
FavoritosSchema.schema = {
  name: 'Favorito',
  properties: {
    idProduto: {type: 'int', default: 0},
    idUsuario: {type: 'int', default: 0},
    sku: 'string',
    nomeProduto: 'string',
    descricaoProduto: 'string',
    precoProduto: 'double',
    imagemProduto: 'string',
  },
};

let realm_favoritos = new Realm({
  schema: [FavoritosSchema],
  schemaVersion: 1,
  path: 'ListaFavoritos',
});

export function FavoritosProvider({children}) {
  const [favoritos, setFavoritos] = useState([]);
  const {user} = useContext(AuthContext);

  const listarFavoritos = () => {
    return realm_favoritos
      .objects('Favorito')
      .filter(produto => produto.idUsuario == user.id);
  };

  const contarQuantidadeFavoritos = () => {
    return realm_favoritos
      .objects('Favorito')
      .filter(produto => produto.idUsuario == user.id).length;
  };

  const adicionarFavorito = (
    _sku: string,
    _nome: string,
    _descricao: string,
    _preco: number,
    _imagem: string,
  ) => {
    const ultimoProdutoCadastrado = realm_favoritos
      .objects('Favorito')
      .sorted('idProduto', true)[0];
    const ultimoIdCadastrado =
      ultimoProdutoCadastrado == null ? 0 : ultimoProdutoCadastrado.idProduto;
    const proximoId =
      ultimoProdutoCadastrado == null ? 1 : ultimoIdCadastrado + 1;
    realm_favoritos.write(() => {
      const produto = realm_favoritos.create('Favorito', {
        idProduto: proximoId,
        idUsuario: user.id,
        sku: _sku,
        nomeProduto: _nome,
        descricaoProduto: _descricao,
        precoProduto: _preco,
        imagemProduto: _imagem,
      });
    });
  };

  const removerItemFavoritos = (_id: number) => {
    realm_favoritos.write(() => {
      realm_favoritos.delete(
        realm_favoritos
          .objects('Favorito')
          .filter(
            produto => produto.idProduto == _id && produto.idUsuario == user.id,
          ),
      );
    });
  };

  const resetFavoritos = () => {
    realm_favoritos.write(() => {
      realm_favoritos.deleteAll();
    });
  };

  return (
    <FavoritosContext.Provider
      value={{
        listarFavoritos,
        adicionarFavorito,
        removerItemFavoritos,
        favoritos,
        setFavoritos,
        resetFavoritos,
        contarQuantidadeFavoritos,
      }}>
      {children}
    </FavoritosContext.Provider>
  );
}
