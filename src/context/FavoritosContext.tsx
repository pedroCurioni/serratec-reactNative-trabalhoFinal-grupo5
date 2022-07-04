import React, {createContext, useState} from 'react';
import Realm from 'realm';

export const FavoritoContext = createContext({});

class FavoritoSchema extends Realm.Object {}
FavoritoSchema.schema = {
  name: 'Favorito',
  properties: {
    id_produto: {type: 'int', default: 0},
    sku: 'string',
    nome_produto: 'string',
    descricao_produto: 'string',
    preco_produto: 'double',
    imagem_produto: 'string',
  },
};

let realm_favoritos = new Realm({
  schema: [FavoritoSchema],
  schemaVersion: 1,
  path: 'favoritos',
});

export function FavoritoProvider({children}) {
  const [favoritos, setFavoritos] = useState([]);

  const listarFavoritos = () => {
    return realm_favoritos.objects('Favorito');
  };

  const contarQuantidadeFavoritos = () => {
    return realm_favoritos.objects('Favorito').length;
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
      .sorted('id_produto', true)[0];
    const ultimoIdCadastrado =
      ultimoProdutoCadastrado == null ? 0 : ultimoProdutoCadastrado.id_produto;
    const proximoId =
      ultimoProdutoCadastrado == null ? 1 : ultimoIdCadastrado + 1;
    realm_favoritos.write(() => {
      const produto = realm_favoritos.create('Favorito', {
        id_produto: proximoId,
        sku: _sku,
        nome_produto: _nome,
        descricao_produto: _descricao,
        preco_produto: _preco,
        imagem_produto: _imagem,
      });
    });
  };

  const removerItemFavorito = (_id: number) => {
    realm_favoritos.write(() => {
      realm_favoritos.delete(
        realm_favoritos
          .objects('Favorito')
          .filter(produto => produto.id_produto == _id),
      );
    });
  };

  const resetFavoritos = () => {
    realm_favoritos.write(() => {
      realm_favoritos.deleteAll();
    });
  };

  return (
    <FavoritoContext.Provider
      value={{
        listarFavoritos,
        contarQuantidadeFavoritos,
        adicionarFavorito,
        removerItemFavorito,
        favoritos,
        setFavoritos,
        resetFavoritos,
      }}>
      {children}
    </FavoritoContext.Provider>
  );
}
