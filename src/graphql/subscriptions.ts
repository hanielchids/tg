/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateDepartmentEmployee = /* GraphQL */ `subscription OnCreateDepartmentEmployee(
  $filter: ModelSubscriptionDepartmentEmployeeFilterInput
) {
  onCreateDepartmentEmployee(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDepartmentEmployeeSubscriptionVariables,
  APITypes.OnCreateDepartmentEmployeeSubscription
>;
export const onUpdateDepartmentEmployee = /* GraphQL */ `subscription OnUpdateDepartmentEmployee(
  $filter: ModelSubscriptionDepartmentEmployeeFilterInput
) {
  onUpdateDepartmentEmployee(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDepartmentEmployeeSubscriptionVariables,
  APITypes.OnUpdateDepartmentEmployeeSubscription
>;
export const onDeleteDepartmentEmployee = /* GraphQL */ `subscription OnDeleteDepartmentEmployee(
  $filter: ModelSubscriptionDepartmentEmployeeFilterInput
) {
  onDeleteDepartmentEmployee(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDepartmentEmployeeSubscriptionVariables,
  APITypes.OnDeleteDepartmentEmployeeSubscription
>;
export const onCreateManager = /* GraphQL */ `subscription OnCreateManager($filter: ModelSubscriptionManagerFilterInput) {
  onCreateManager(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateManagerSubscriptionVariables,
  APITypes.OnCreateManagerSubscription
>;
export const onUpdateManager = /* GraphQL */ `subscription OnUpdateManager($filter: ModelSubscriptionManagerFilterInput) {
  onUpdateManager(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateManagerSubscriptionVariables,
  APITypes.OnUpdateManagerSubscription
>;
export const onDeleteManager = /* GraphQL */ `subscription OnDeleteManager($filter: ModelSubscriptionManagerFilterInput) {
  onDeleteManager(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteManagerSubscriptionVariables,
  APITypes.OnDeleteManagerSubscription
>;
export const onCreateUser = /* GraphQL */ `subscription OnCreateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onCreateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserSubscriptionVariables,
  APITypes.OnCreateUserSubscription
>;
export const onUpdateUser = /* GraphQL */ `subscription OnUpdateUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onUpdateUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserSubscriptionVariables,
  APITypes.OnUpdateUserSubscription
>;
export const onDeleteUser = /* GraphQL */ `subscription OnDeleteUser(
  $filter: ModelSubscriptionUserFilterInput
  $owner: String
) {
  onDeleteUser(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserSubscriptionVariables,
  APITypes.OnDeleteUserSubscription
>;
export const onCreateEmployee = /* GraphQL */ `subscription OnCreateEmployee(
  $filter: ModelSubscriptionEmployeeFilterInput
  $owner: String
) {
  onCreateEmployee(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEmployeeSubscriptionVariables,
  APITypes.OnCreateEmployeeSubscription
>;
export const onUpdateEmployee = /* GraphQL */ `subscription OnUpdateEmployee(
  $filter: ModelSubscriptionEmployeeFilterInput
  $owner: String
) {
  onUpdateEmployee(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEmployeeSubscriptionVariables,
  APITypes.OnUpdateEmployeeSubscription
>;
export const onDeleteEmployee = /* GraphQL */ `subscription OnDeleteEmployee(
  $filter: ModelSubscriptionEmployeeFilterInput
  $owner: String
) {
  onDeleteEmployee(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEmployeeSubscriptionVariables,
  APITypes.OnDeleteEmployeeSubscription
>;
export const onCreateDepartment = /* GraphQL */ `subscription OnCreateDepartment(
  $filter: ModelSubscriptionDepartmentFilterInput
  $owner: String
) {
  onCreateDepartment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateDepartmentSubscriptionVariables,
  APITypes.OnCreateDepartmentSubscription
>;
export const onUpdateDepartment = /* GraphQL */ `subscription OnUpdateDepartment(
  $filter: ModelSubscriptionDepartmentFilterInput
  $owner: String
) {
  onUpdateDepartment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateDepartmentSubscriptionVariables,
  APITypes.OnUpdateDepartmentSubscription
>;
export const onDeleteDepartment = /* GraphQL */ `subscription OnDeleteDepartment(
  $filter: ModelSubscriptionDepartmentFilterInput
  $owner: String
) {
  onDeleteDepartment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteDepartmentSubscriptionVariables,
  APITypes.OnDeleteDepartmentSubscription
>;
