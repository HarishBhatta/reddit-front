/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "fragment UserFields on User {\n  id\n  username\n  createdAt\n  updatedAt\n}": types.UserFieldsFragmentDoc,
    "mutation LogOut {\n  logOut\n}": types.LogOutDocument,
    "mutation Login($options: UsernamePasswordInput!) {\n  login(options: $options) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...UserFields\n    }\n  }\n}": types.LoginDocument,
    "mutation Register($username: String!, $password: String!) {\n  register(options: {username: $username, password: $password}) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...UserFields\n    }\n  }\n}": types.RegisterDocument,
    "query GetUser {\n  getUser {\n    errors {\n      field\n      message\n    }\n    user {\n      ...UserFields\n    }\n  }\n}": types.GetUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment UserFields on User {\n  id\n  username\n  createdAt\n  updatedAt\n}"): (typeof documents)["fragment UserFields on User {\n  id\n  username\n  createdAt\n  updatedAt\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation LogOut {\n  logOut\n}"): (typeof documents)["mutation LogOut {\n  logOut\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($options: UsernamePasswordInput!) {\n  login(options: $options) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...UserFields\n    }\n  }\n}"): (typeof documents)["mutation Login($options: UsernamePasswordInput!) {\n  login(options: $options) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...UserFields\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Register($username: String!, $password: String!) {\n  register(options: {username: $username, password: $password}) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...UserFields\n    }\n  }\n}"): (typeof documents)["mutation Register($username: String!, $password: String!) {\n  register(options: {username: $username, password: $password}) {\n    errors {\n      field\n      message\n    }\n    user {\n      ...UserFields\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUser {\n  getUser {\n    errors {\n      field\n      message\n    }\n    user {\n      ...UserFields\n    }\n  }\n}"): (typeof documents)["query GetUser {\n  getUser {\n    errors {\n      field\n      message\n    }\n    user {\n      ...UserFields\n    }\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;