import React, {createContext, useContext, useState} from 'react';
import Realm from 'realm';
import {AuthContext} from './AuthContext';

export const CarrinhoContext = createContext({});

class ProdutoSchema extends Realm.Object {}
ProdutoSchema.schema = {
  name: 'Produto',
  properties: {
    id_produto: {type: 'int', default: 0},
    idUsuario: {type: 'int', default: 0},
    sku: 'string',
    nome_produto: 'string',
    descricao_produto: 'string',
    preco_produto: 'double',
    imagem_produto: 'string',
    quantidade: {type: 'int', default: 1},
  },
};

let realm_carrinho = new Realm({
  schema: [ProdutoSchema],
  schemaVersion: 1,
  path: 'Carrinho',
});

export function CarrinhoProvider({children}) {
  const [produtos, setProdutos] = useState([]);
  const {user} = useContext(AuthContext);

  const listarProdutos = () => {
    return realm_carrinho
      .objects('Produto')
      .filter(produto => produto.idUsuario == user.id);
  };

  const contarQuantidadeProdutos = () => {
    return realm_carrinho
      .objects('Produto')
      .filter(produto => produto.idUsuario == user.id).length;
  };

  const adicionarProduto = (
    _sku: string,
    _nome: string,
    _descricao: string,
    _preco: number,
    _imagem: string,
  ) => {
    const ultimoProdutoCadastrado = realm_carrinho
      .objects('Produto')
      .sorted('id_produto', true)[0];
    const ultimoIdCadastrado =
      ultimoProdutoCadastrado == null ? 0 : ultimoProdutoCadastrado.id_produto;
    const proximoId =
      ultimoProdutoCadastrado == null ? 1 : ultimoIdCadastrado + 1;
    realm_carrinho.write(() => {
      const produto = realm_carrinho.create('Produto', {
        id_produto: proximoId,
        idUsuario: user.id,
        sku: _sku,
        nome_produto: _nome,
        descricao_produto: _descricao,
        preco_produto: _preco,
        imagem_produto: _imagem,
        quantidade: 1,
      });
    });
  };

  const removerItemCarrinho = (_id: number) => {
    realm_carrinho.write(() => {
      realm_carrinho.delete(
        realm_carrinho
          .objects('Produto')
          .filter(
            produto =>
              produto.id_produto == _id && produto.idUsuario == user.id,
          ),
      );
    });
  };

  const aumentarQuantidade = (_sku: string) => {
    realm_carrinho.write(() => {
      realm_carrinho
        .objects('Produto')
        .filter(produto => produto.sku == _sku && produto.idUsuario == user.id)
        .forEach(res => (res.quantidade += 1));
    });
  };

  const diminuirQuantidade = (_sku: string) => {
    realm_carrinho.write(() => {
      realm_carrinho
        .objects('Produto')
        .filter(produto => produto.sku == _sku && produto.idUsuario == user.id)
        .forEach(res => (res.quantidade -= 1));
    });
  };

  const resetCarrinho = () => {
    realm_carrinho.write(() => {
      realm_carrinho.delete(
        realm_carrinho
          .objects('Produto')
          .filter(produto => produto.idUsuario == user.id),
      );
    });
  };

  return (
    <CarrinhoContext.Provider
      value={{
        listarProdutos,
        contarQuantidadeProdutos,
        adicionarProduto,
        removerItemCarrinho,
        produtos,
        setProdutos,
        aumentarQuantidade,
        diminuirQuantidade,
        resetCarrinho,
      }}>
      {children}
    </CarrinhoContext.Provider>
  );
}
