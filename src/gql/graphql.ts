/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
import gql from "graphql-tag";
import * as Urql from "urql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type FieldError = {
  __typename?: "FieldError";
  field: Scalars["String"]["output"];
  message: Scalars["String"]["output"];
};

export type Mutation = {
  __typename?: "Mutation";
  createPost: Post;
  deletePost?: Maybe<Scalars["Boolean"]["output"]>;
  logOut: Scalars["Boolean"]["output"];
  login: UserResponse;
  register: UserResponse;
  updatePost?: Maybe<Post>;
};

export type MutationCreatePostArgs = {
  title: Scalars["String"]["input"];
};

export type MutationDeletePostArgs = {
  id: Scalars["Float"]["input"];
};

export type MutationLoginArgs = {
  options: UsernamePasswordInput;
};

export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};

export type MutationUpdatePostArgs = {
  id: Scalars["Float"]["input"];
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type Post = {
  __typename?: "Post";
  createdAt: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  title: Scalars["String"]["output"];
  updatedAt: Scalars["String"]["output"];
};

export type Query = {
  __typename?: "Query";
  getUser: UserResponse;
  hello: Scalars["String"]["output"];
  post?: Maybe<Post>;
  posts: Array<Post>;
};

export type QueryPostArgs = {
  id: Scalars["Int"]["input"];
};

export type User = {
  __typename?: "User";
  createdAt: Scalars["String"]["output"];
  id: Scalars["Int"]["output"];
  updatedAt: Scalars["String"]["output"];
  username: Scalars["String"]["output"];
};

export type UserResponse = {
  __typename?: "UserResponse";
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type UsernamePasswordInput = {
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type UserFieldsFragment = {
  __typename?: "User";
  id: number;
  username: string;
  createdAt: string;
  updatedAt: string;
} & { " $fragmentName"?: "UserFieldsFragment" };

export type LogOutMutationVariables = Exact<{ [key: string]: never }>;

export type LogOutMutation = { __typename?: "Mutation"; logOut: boolean };

export type LoginMutationVariables = Exact<{
  options: UsernamePasswordInput;
}>;

export type LoginMutation = {
  __typename?: "Mutation";
  login: {
    __typename?: "UserResponse";
    errors?: Array<{
      __typename?: "FieldError";
      field: string;
      message: string;
    }> | null;
    user?:
      | ({ __typename?: "User" } & {
          " $fragmentRefs"?: { UserFieldsFragment: UserFieldsFragment };
        })
      | null;
  };
};

export type RegisterMutationVariables = Exact<{
  username: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type RegisterMutation = {
  __typename?: "Mutation";
  register: {
    __typename?: "UserResponse";
    errors?: Array<{
      __typename?: "FieldError";
      field: string;
      message: string;
    }> | null;
    user?:
      | ({ __typename?: "User" } & {
          " $fragmentRefs"?: { UserFieldsFragment: UserFieldsFragment };
        })
      | null;
  };
};

export type GetUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetUserQuery = {
  __typename?: "Query";
  getUser: {
    __typename?: "UserResponse";
    errors?: Array<{
      __typename?: "FieldError";
      field: string;
      message: string;
    }> | null;
    user?:
      | ({ __typename?: "User" } & {
          " $fragmentRefs"?: { UserFieldsFragment: UserFieldsFragment };
        })
      | null;
  };
};

// export const UserFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<UserFieldsFragment, unknown>;
// export const LogOutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"LogOut"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logOut"}}]}}]} as unknown as DocumentNode<LogOutMutation, LogOutMutationVariables>;
// export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"options"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UsernamePasswordInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"Variable","name":{"kind":"Name","value":"options"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
// export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"username"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"options"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"username"},"value":{"kind":"Variable","name":{"kind":"Name","value":"username"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
// export const GetUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"errors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"User"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;
export const UserFieldsFragmentDoc = gql`
  fragment UserFields on User {
    id
    username
    createdAt
    updatedAt
  }
`;
export const LogOutDocument = gql`
  mutation LogOut {
    logOut
  }
`;

export function useLogOutMutation() {
  return Urql.useMutation<LogOutMutation, LogOutMutationVariables>(
    LogOutDocument
  );
}
export const LoginDocument = gql`
  mutation Login($options: UsernamePasswordInput!) {
    login(options: $options) {
      errors {
        field
        message
      }
      user {
        ...UserFields
      }
    }
  }
  ${UserFieldsFragmentDoc}
`;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
}
export const RegisterDocument = gql`
  mutation Register($username: String!, $password: String!) {
    register(options: { username: $username, password: $password }) {
      errors {
        field
        message
      }
      user {
        ...UserFields
      }
    }
  }
  ${UserFieldsFragmentDoc}
`;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(
    RegisterDocument
  );
}
export const GetUserDocument = gql`
  query GetUser {
    getUser {
      errors {
        field
        message
      }
      user {
        ...UserFields
      }
    }
  }
  ${UserFieldsFragmentDoc}
`;

export function useGetUserQuery(
  options?: Omit<Urql.UseQueryArgs<GetUserQueryVariables>, "query">
) {
  return Urql.useQuery<GetUserQuery, GetUserQueryVariables>({
    query: GetUserDocument,
    ...options,
  });
}
