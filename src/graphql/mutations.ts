/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUser = /* GraphQL */ `mutation CreateUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  createUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateUserMutationVariables,
  APITypes.CreateUserMutation
>;
export const deleteUser = /* GraphQL */ `mutation DeleteUser(
  $input: DeleteUserInput!
  $condition: ModelUserConditionInput
) {
  deleteUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteUserMutationVariables,
  APITypes.DeleteUserMutation
>;
export const createDepartmentEmployee = /* GraphQL */ `mutation CreateDepartmentEmployee(
  $input: CreateDepartmentEmployeeInput!
  $condition: ModelDepartmentEmployeeConditionInput
) {
  createDepartmentEmployee(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDepartmentEmployeeMutationVariables,
  APITypes.CreateDepartmentEmployeeMutation
>;
export const updateDepartmentEmployee = /* GraphQL */ `mutation UpdateDepartmentEmployee(
  $input: UpdateDepartmentEmployeeInput!
  $condition: ModelDepartmentEmployeeConditionInput
) {
  updateDepartmentEmployee(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDepartmentEmployeeMutationVariables,
  APITypes.UpdateDepartmentEmployeeMutation
>;
export const deleteDepartmentEmployee = /* GraphQL */ `mutation DeleteDepartmentEmployee(
  $input: DeleteDepartmentEmployeeInput!
  $condition: ModelDepartmentEmployeeConditionInput
) {
  deleteDepartmentEmployee(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDepartmentEmployeeMutationVariables,
  APITypes.DeleteDepartmentEmployeeMutation
>;
export const createManager = /* GraphQL */ `mutation CreateManager(
  $input: CreateManagerInput!
  $condition: ModelManagerConditionInput
) {
  createManager(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateManagerMutationVariables,
  APITypes.CreateManagerMutation
>;
export const updateManager = /* GraphQL */ `mutation UpdateManager(
  $input: UpdateManagerInput!
  $condition: ModelManagerConditionInput
) {
  updateManager(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateManagerMutationVariables,
  APITypes.UpdateManagerMutation
>;
export const deleteManager = /* GraphQL */ `mutation DeleteManager(
  $input: DeleteManagerInput!
  $condition: ModelManagerConditionInput
) {
  deleteManager(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteManagerMutationVariables,
  APITypes.DeleteManagerMutation
>;
export const updateUser = /* GraphQL */ `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateUserMutationVariables,
  APITypes.UpdateUserMutation
>;
export const createEmployee = /* GraphQL */ `mutation CreateEmployee(
  $input: CreateEmployeeInput!
  $condition: ModelEmployeeConditionInput
) {
  createEmployee(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateEmployeeMutationVariables,
  APITypes.CreateEmployeeMutation
>;
export const updateEmployee = /* GraphQL */ `mutation UpdateEmployee(
  $input: UpdateEmployeeInput!
  $condition: ModelEmployeeConditionInput
) {
  updateEmployee(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateEmployeeMutationVariables,
  APITypes.UpdateEmployeeMutation
>;
export const deleteEmployee = /* GraphQL */ `mutation DeleteEmployee(
  $input: DeleteEmployeeInput!
  $condition: ModelEmployeeConditionInput
) {
  deleteEmployee(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteEmployeeMutationVariables,
  APITypes.DeleteEmployeeMutation
>;
export const createDepartment = /* GraphQL */ `mutation CreateDepartment(
  $input: CreateDepartmentInput!
  $condition: ModelDepartmentConditionInput
) {
  createDepartment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateDepartmentMutationVariables,
  APITypes.CreateDepartmentMutation
>;
export const updateDepartment = /* GraphQL */ `mutation UpdateDepartment(
  $input: UpdateDepartmentInput!
  $condition: ModelDepartmentConditionInput
) {
  updateDepartment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateDepartmentMutationVariables,
  APITypes.UpdateDepartmentMutation
>;
export const deleteDepartment = /* GraphQL */ `mutation DeleteDepartment(
  $input: DeleteDepartmentInput!
  $condition: ModelDepartmentConditionInput
) {
  deleteDepartment(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteDepartmentMutationVariables,
  APITypes.DeleteDepartmentMutation
>;
