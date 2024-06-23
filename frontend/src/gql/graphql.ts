/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Captain = {
  __typename?: 'Captain';
  shipName: Scalars['String']['output'];
};

export type Character = {
  __typename?: 'Character';
  connections: Array<Character>;
  name: Scalars['String']['output'];
  nicknames: Array<Scalars['String']['output']>;
  origin: Origin;
  role?: Maybe<Role>;
};


export type CharacterConnectionsArgs = {
  by: ConnectedBy;
};

export enum ConnectedBy {
  Origin = 'Origin',
  Ship = 'Ship'
}

export type Engineer = {
  __typename?: 'Engineer';
  shipName: Scalars['String']['output'];
};

export type Mechanic = {
  __typename?: 'Mechanic';
  shipName: Scalars['String']['output'];
};

export type Mutations = {
  __typename?: 'Mutations';
  deleteCharacter: Scalars['Boolean']['output'];
};


export type MutationsDeleteCharacterArgs = {
  name: Scalars['String']['input'];
};

export enum Origin {
  Belt = 'BELT',
  Earth = 'EARTH',
  Mars = 'MARS'
}

export type Pilot = {
  __typename?: 'Pilot';
  shipName: Scalars['String']['output'];
};

export type Queries = {
  __typename?: 'Queries';
  /** @deprecated Use `characters` */
  character?: Maybe<Character>;
  /** Return all characters from a given origin */
  characters: Array<Character>;
};


export type QueriesCharacterArgs = {
  name: Scalars['String']['input'];
};


export type QueriesCharactersArgs = {
  origin?: InputMaybe<Origin>;
};

export type Role = Captain | Engineer | Mechanic | Pilot;

export type Subscriptions = {
  __typename?: 'Subscriptions';
  characterDeleted: Scalars['String']['output'];
};

export type CharacterFieldsFragment = { __typename?: 'Character', name: string, nicknames: Array<string>, origin: Origin } & { ' $fragmentName'?: 'CharacterFieldsFragment' };

export type GetCharactersQueryVariables = Exact<{
  origin?: InputMaybe<Origin>;
}>;


export type GetCharactersQuery = { __typename?: 'Queries', characters: Array<(
    { __typename?: 'Character' }
    & { ' $fragmentRefs'?: { 'CharacterFieldsFragment': CharacterFieldsFragment } }
  )> };

export type DeleteCharacterMutationVariables = Exact<{
  name: Scalars['String']['input'];
}>;


export type DeleteCharacterMutation = { __typename?: 'Mutations', deleteCharacter: boolean };

export const CharacterFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CharacterFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Character"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nicknames"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}}]}}]} as unknown as DocumentNode<CharacterFieldsFragment, unknown>;
export const GetCharactersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCharacters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"origin"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Origin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"characters"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"origin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"origin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"CharacterFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"CharacterFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Character"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"nicknames"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}}]}}]} as unknown as DocumentNode<GetCharactersQuery, GetCharactersQueryVariables>;
export const DeleteCharacterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteCharacter"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCharacter"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}]}]}}]} as unknown as DocumentNode<DeleteCharacterMutation, DeleteCharacterMutationVariables>;