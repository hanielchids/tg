/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getDepartmentEmployee = /* GraphQL */ `query GetDepartmentEmployee($id: ID!) {
  getDepartmentEmployee(id: $id) {
    id
    department {
      id
      name
      status
      createdAt
      updatedAt
      owner
      __typename
    }
    employee {
      id
      firstname
      lastname
      telephonenumber
      email
      status
      createdAt
      updatedAt
      owner
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDepartmentEmployeeQueryVariables,
  APITypes.GetDepartmentEmployeeQuery
>;
export const listDepartmentEmployees = /* GraphQL */ `query ListDepartmentEmployees(
  $filter: ModelDepartmentEmployeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listDepartmentEmployees(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDepartmentEmployeesQueryVariables,
  APITypes.ListDepartmentEmployeesQuery
>;
export const getManager = /* GraphQL */ `query GetManager($id: ID!) {
  getManager(id: $id) {
    id
    name
    department {
      id
      name
      status
      createdAt
      updatedAt
      owner
      __typename
    }
    employee {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetManagerQueryVariables,
  APITypes.GetManagerQuery
>;
export const listManagers = /* GraphQL */ `query ListManagers(
  $filter: ModelManagerFilterInput
  $limit: Int
  $nextToken: String
) {
  listManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListManagersQueryVariables,
  APITypes.ListManagersQuery
>;
export const getUser = /* GraphQL */ `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    username
    password
    email
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<APITypes.GetUserQueryVariables, APITypes.GetUserQuery>;
export const listUsers = /* GraphQL */ `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      password
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListUsersQueryVariables, APITypes.ListUsersQuery>;
export const getEmployee = /* GraphQL */ `query GetEmployee($id: ID!) {
  getEmployee(id: $id) {
    id
    firstname
    lastname
    telephonenumber
    email
    user {
      id
      username
      password
      email
      createdAt
      updatedAt
      owner
      __typename
    }
    manager {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    departments {
      nextToken
      __typename
    }
    status
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetEmployeeQueryVariables,
  APITypes.GetEmployeeQuery
>;
export const listEmployees = /* GraphQL */ `query ListEmployees(
  $filter: ModelEmployeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      firstname
      lastname
      telephonenumber
      email
      status
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEmployeesQueryVariables,
  APITypes.ListEmployeesQuery
>;
export const getDepartment = /* GraphQL */ `query GetDepartment($id: ID!) {
  getDepartment(id: $id) {
    id
    name
    manager {
      id
      name
      createdAt
      updatedAt
      __typename
    }
    status
    createdAt
    updatedAt
    owner
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDepartmentQueryVariables,
  APITypes.GetDepartmentQuery
>;
export const listDepartments = /* GraphQL */ `query ListDepartments(
  $filter: ModelDepartmentFilterInput
  $limit: Int
  $nextToken: String
) {
  listDepartments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      status
      createdAt
      updatedAt
      owner
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDepartmentsQueryVariables,
  APITypes.ListDepartmentsQuery
>;
