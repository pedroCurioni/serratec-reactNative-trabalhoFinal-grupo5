import React, {createContext, useState} from 'react';
import Realm from 'realm';

export const FavoritosContext = createContext({});

class FavoritosSchema extends Realm.Object {}
FavoritosSchema.schema = {
  name: 'Favorito',
  properties: {
    id_produto: {type: 'int', default: 0},
    sku: 'string',
    nome_produto: 'string',
    descricao_produto: 'string',
    preco_produto: 'double',
    imagem_produto: 'string',
    quantidade: {type: 'int', default: 1},
  },
};

let realm_favoritos = new Realm({
  schema: [FavoritosSchema],
  schemaVersion: 1,
  path: 'ListaFavoritos',
});

export function FavoritosProvider({children}) {
  const [favoritos, setFavoritos] = useState([]);

  const listarFavoritos = () => {
    return realm_favoritos.objects('Favorito');
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
    console.log("Ultimo produto: ", ultimoProdutoCadastrado)
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
        quantidade: 1,
      });
    });
  };

  const removerItemFavoritos = (_id: number) => {
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
    <FavoritosContext.Provider
      value={{
        listarFavoritos,
        adicionarFavorito,
        removerItemFavoritos,
        favoritos,
        setFavoritos,
        resetFavoritos,
      }}>
      {children}
    </FavoritosContext.Provider>
  );
}
