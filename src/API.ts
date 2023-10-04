/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  username: string,
  password: string,
  email?: string | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
  password?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id?: string | null,
  username: string,
  password: string,
  email?: string | null,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateDepartmentEmployeeInput = {
  id?: string | null,
};

export type ModelDepartmentEmployeeConditionInput = {
  and?: Array< ModelDepartmentEmployeeConditionInput | null > | null,
  or?: Array< ModelDepartmentEmployeeConditionInput | null > | null,
  not?: ModelDepartmentEmployeeConditionInput | null,
};

export type DepartmentEmployee = {
  __typename: "DepartmentEmployee",
  id: string,
  department?: Department | null,
  employee?: Employee | null,
  createdAt: string,
  updatedAt: string,
};

export type Department = {
  __typename: "Department",
  id?: string | null,
  name: string,
  manager?: Manager | null,
  status: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type Manager = {
  __typename: "Manager",
  id: string,
  name: string,
  department?: Department | null,
  employee?: ModelEmployeeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelEmployeeConnection = {
  __typename: "ModelEmployeeConnection",
  items:  Array<Employee | null >,
  nextToken?: string | null,
};

export type Employee = {
  __typename: "Employee",
  id?: string | null,
  firstname: string,
  lastname: string,
  telephonenumber: string,
  email: string,
  user?: User | null,
  manager?: Manager | null,
  departments?: ModelDepartmentEmployeeConnection | null,
  status: string,
  createdAt: string,
  updatedAt: string,
  owner?: string | null,
};

export type ModelDepartmentEmployeeConnection = {
  __typename: "ModelDepartmentEmployeeConnection",
  items:  Array<DepartmentEmployee | null >,
  nextToken?: string | null,
};

export type UpdateDepartmentEmployeeInput = {
  id: string,
};

export type DeleteDepartmentEmployeeInput = {
  id: string,
};

export type CreateManagerInput = {
  id?: string | null,
  name: string,
};

export type ModelManagerConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelManagerConditionInput | null > | null,
  or?: Array< ModelManagerConditionInput | null > | null,
  not?: ModelManagerConditionInput | null,
};

export type UpdateManagerInput = {
  id: string,
  name?: string | null,
};

export type DeleteManagerInput = {
  id: string,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  password?: string | null,
  email?: string | null,
};

export type CreateEmployeeInput = {
  id?: string | null,
  firstname: string,
  lastname: string,
  telephonenumber: string,
  email: string,
  status: string,
};

export type ModelEmployeeConditionInput = {
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  telephonenumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelEmployeeConditionInput | null > | null,
  or?: Array< ModelEmployeeConditionInput | null > | null,
  not?: ModelEmployeeConditionInput | null,
};

export type UpdateEmployeeInput = {
  id: string,
  firstname?: string | null,
  lastname?: string | null,
  telephonenumber?: string | null,
  email?: string | null,
  status?: string | null,
};

export type DeleteEmployeeInput = {
  id: string,
};

export type CreateDepartmentInput = {
  id?: string | null,
  name: string,
  status: string,
};

export type ModelDepartmentConditionInput = {
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelDepartmentConditionInput | null > | null,
  or?: Array< ModelDepartmentConditionInput | null > | null,
  not?: ModelDepartmentConditionInput | null,
};

export type UpdateDepartmentInput = {
  id: string,
  name?: string | null,
  status?: string | null,
};

export type DeleteDepartmentInput = {
  id: string,
};

export type ModelDepartmentEmployeeFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelDepartmentEmployeeFilterInput | null > | null,
  or?: Array< ModelDepartmentEmployeeFilterInput | null > | null,
  not?: ModelDepartmentEmployeeFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelManagerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelManagerFilterInput | null > | null,
  or?: Array< ModelManagerFilterInput | null > | null,
  not?: ModelManagerFilterInput | null,
};

export type ModelManagerConnection = {
  __typename: "ModelManagerConnection",
  items:  Array<Manager | null >,
  nextToken?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
  password?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
};

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null,
  firstname?: ModelStringInput | null,
  lastname?: ModelStringInput | null,
  telephonenumber?: ModelStringInput | null,
  email?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelEmployeeFilterInput | null > | null,
  or?: Array< ModelEmployeeFilterInput | null > | null,
  not?: ModelEmployeeFilterInput | null,
};

export type ModelDepartmentFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  status?: ModelStringInput | null,
  and?: Array< ModelDepartmentFilterInput | null > | null,
  or?: Array< ModelDepartmentFilterInput | null > | null,
  not?: ModelDepartmentFilterInput | null,
};

export type ModelDepartmentConnection = {
  __typename: "ModelDepartmentConnection",
  items:  Array<Department | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionDepartmentEmployeeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionDepartmentEmployeeFilterInput | null > | null,
  or?: Array< ModelSubscriptionDepartmentEmployeeFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionManagerFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionManagerFilterInput | null > | null,
  or?: Array< ModelSubscriptionManagerFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionStringInput | null,
  password?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
};

export type ModelSubscriptionEmployeeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firstname?: ModelSubscriptionStringInput | null,
  lastname?: ModelSubscriptionStringInput | null,
  telephonenumber?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionEmployeeFilterInput | null > | null,
  or?: Array< ModelSubscriptionEmployeeFilterInput | null > | null,
};

export type ModelSubscriptionDepartmentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionDepartmentFilterInput | null > | null,
  or?: Array< ModelSubscriptionDepartmentFilterInput | null > | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id?: string | null,
    username: string,
    password: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id?: string | null,
    username: string,
    password: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateDepartmentEmployeeMutationVariables = {
  input: CreateDepartmentEmployeeInput,
  condition?: ModelDepartmentEmployeeConditionInput | null,
};

export type CreateDepartmentEmployeeMutation = {
  createDepartmentEmployee?:  {
    __typename: "DepartmentEmployee",
    id: string,
    department?:  {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    employee?:  {
      __typename: "Employee",
      id?: string | null,
      firstname: string,
      lastname: string,
      telephonenumber: string,
      email: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateDepartmentEmployeeMutationVariables = {
  input: UpdateDepartmentEmployeeInput,
  condition?: ModelDepartmentEmployeeConditionInput | null,
};

export type UpdateDepartmentEmployeeMutation = {
  updateDepartmentEmployee?:  {
    __typename: "DepartmentEmployee",
    id: string,
    department?:  {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    employee?:  {
      __typename: "Employee",
      id?: string | null,
      firstname: string,
      lastname: string,
      telephonenumber: string,
      email: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteDepartmentEmployeeMutationVariables = {
  input: DeleteDepartmentEmployeeInput,
  condition?: ModelDepartmentEmployeeConditionInput | null,
};

export type DeleteDepartmentEmployeeMutation = {
  deleteDepartmentEmployee?:  {
    __typename: "DepartmentEmployee",
    id: string,
    department?:  {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    employee?:  {
      __typename: "Employee",
      id?: string | null,
      firstname: string,
      lastname: string,
      telephonenumber: string,
      email: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateManagerMutationVariables = {
  input: CreateManagerInput,
  condition?: ModelManagerConditionInput | null,
};

export type CreateManagerMutation = {
  createManager?:  {
    __typename: "Manager",
    id: string,
    name: string,
    department?:  {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    employee?:  {
      __typename: "ModelEmployeeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateManagerMutationVariables = {
  input: UpdateManagerInput,
  condition?: ModelManagerConditionInput | null,
};

export type UpdateManagerMutation = {
  updateManager?:  {
    __typename: "Manager",
    id: string,
    name: string,
    department?:  {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    employee?:  {
      __typename: "ModelEmployeeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteManagerMutationVariables = {
  input: DeleteManagerInput,
  condition?: ModelManagerConditionInput | null,
};

export type DeleteManagerMutation = {
  deleteManager?:  {
    __typename: "Manager",
    id: string,
    name: string,
    department?:  {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    employee?:  {
      __typename: "ModelEmployeeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id?: string | null,
    username: string,
    password: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateEmployeeMutationVariables = {
  input: CreateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type CreateEmployeeMutation = {
  createEmployee?:  {
    __typename: "Employee",
    id?: string | null,
    firstname: string,
    lastname: string,
    telephonenumber: string,
    email: string,
    user?:  {
      __typename: "User",
      id?: string | null,
      username: string,
      password: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    manager?:  {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    departments?:  {
      __typename: "ModelDepartmentEmployeeConnection",
      nextToken?: string | null,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateEmployeeMutationVariables = {
  input: UpdateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type UpdateEmployeeMutation = {
  updateEmployee?:  {
    __typename: "Employee",
    id?: string | null,
    firstname: string,
    lastname: string,
    telephonenumber: string,
    email: string,
    user?:  {
      __typename: "User",
      id?: string | null,
      username: string,
      password: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    manager?:  {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    departments?:  {
      __typename: "ModelDepartmentEmployeeConnection",
      nextToken?: string | null,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteEmployeeMutationVariables = {
  input: DeleteEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type DeleteEmployeeMutation = {
  deleteEmployee?:  {
    __typename: "Employee",
    id?: string | null,
    firstname: string,
    lastname: string,
    telephonenumber: string,
    email: string,
    user?:  {
      __typename: "User",
      id?: string | null,
      username: string,
      password: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    manager?:  {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    departments?:  {
      __typename: "ModelDepartmentEmployeeConnection",
      nextToken?: string | null,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateDepartmentMutationVariables = {
  input: CreateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type CreateDepartmentMutation = {
  createDepartment?:  {
    __typename: "Department",
    id?: string | null,
    name: string,
    manager?:  {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateDepartmentMutationVariables = {
  input: UpdateDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type UpdateDepartmentMutation = {
  updateDepartment?:  {
    __typename: "Department",
    id?: string | null,
    name: string,
    manager?:  {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteDepartmentMutationVariables = {
  input: DeleteDepartmentInput,
  condition?: ModelDepartmentConditionInput | null,
};

export type DeleteDepartmentMutation = {
  deleteDepartment?:  {
    __typename: "Department",
    id?: string | null,
    name: string,
    manager?:  {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type GetDepartmentEmployeeQueryVariables = {
  id: string,
};

export type GetDepartmentEmployeeQuery = {
  getDepartmentEmployee?:  {
    __typename: "DepartmentEmployee",
    id: string,
    department?:  {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    employee?:  {
      __typename: "Employee",
      id?: string | null,
      firstname: string,
      lastname: string,
      telephonenumber: string,
      email: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListDepartmentEmployeesQueryVariables = {
  filter?: ModelDepartmentEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentEmployeesQuery = {
  listDepartmentEmployees?:  {
    __typename: "ModelDepartmentEmployeeConnection",
    items:  Array< {
      __typename: "DepartmentEmployee",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetManagerQueryVariables = {
  id: string,
};

export type GetManagerQuery = {
  getManager?:  {
    __typename: "Manager",
    id: string,
    name: string,
    department?:  {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    employee?:  {
      __typename: "ModelEmployeeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListManagersQueryVariables = {
  filter?: ModelManagerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListManagersQuery = {
  listManagers?:  {
    __typename: "ModelManagerConnection",
    items:  Array< {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id?: string | null,
    username: string,
    password: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id?: string | null,
      username: string,
      password: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetEmployeeQueryVariables = {
  id: string,
};

export type GetEmployeeQuery = {
  getEmployee?:  {
    __typename: "Employee",
    id?: string | null,
    firstname: string,
    lastname: string,
    telephonenumber: string,
    email: string,
    user?:  {
      __typename: "User",
      id?: string | null,
      username: string,
      password: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    manager?:  {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    departments?:  {
      __typename: "ModelDepartmentEmployeeConnection",
      nextToken?: string | null,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListEmployeesQueryVariables = {
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeesQuery = {
  listEmployees?:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      id?: string | null,
      firstname: string,
      lastname: string,
      telephonenumber: string,
      email: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetDepartmentQueryVariables = {
  id: string,
};

export type GetDepartmentQuery = {
  getDepartment?:  {
    __typename: "Department",
    id?: string | null,
    name: string,
    manager?:  {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListDepartmentsQueryVariables = {
  filter?: ModelDepartmentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDepartmentsQuery = {
  listDepartments?:  {
    __typename: "ModelDepartmentConnection",
    items:  Array< {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateDepartmentEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentEmployeeFilterInput | null,
};

export type OnCreateDepartmentEmployeeSubscription = {
  onCreateDepartmentEmployee?:  {
    __typename: "DepartmentEmployee",
    id: string,
    department?:  {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    employee?:  {
      __typename: "Employee",
      id?: string | null,
      firstname: string,
      lastname: string,
      telephonenumber: string,
      email: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateDepartmentEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentEmployeeFilterInput | null,
};

export type OnUpdateDepartmentEmployeeSubscription = {
  onUpdateDepartmentEmployee?:  {
    __typename: "DepartmentEmployee",
    id: string,
    department?:  {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    employee?:  {
      __typename: "Employee",
      id?: string | null,
      firstname: string,
      lastname: string,
      telephonenumber: string,
      email: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteDepartmentEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentEmployeeFilterInput | null,
};

export type OnDeleteDepartmentEmployeeSubscription = {
  onDeleteDepartmentEmployee?:  {
    __typename: "DepartmentEmployee",
    id: string,
    department?:  {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    employee?:  {
      __typename: "Employee",
      id?: string | null,
      firstname: string,
      lastname: string,
      telephonenumber: string,
      email: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateManagerSubscriptionVariables = {
  filter?: ModelSubscriptionManagerFilterInput | null,
};

export type OnCreateManagerSubscription = {
  onCreateManager?:  {
    __typename: "Manager",
    id: string,
    name: string,
    department?:  {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    employee?:  {
      __typename: "ModelEmployeeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateManagerSubscriptionVariables = {
  filter?: ModelSubscriptionManagerFilterInput | null,
};

export type OnUpdateManagerSubscription = {
  onUpdateManager?:  {
    __typename: "Manager",
    id: string,
    name: string,
    department?:  {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    employee?:  {
      __typename: "ModelEmployeeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteManagerSubscriptionVariables = {
  filter?: ModelSubscriptionManagerFilterInput | null,
};

export type OnDeleteManagerSubscription = {
  onDeleteManager?:  {
    __typename: "Manager",
    id: string,
    name: string,
    department?:  {
      __typename: "Department",
      id?: string | null,
      name: string,
      status: string,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    employee?:  {
      __typename: "ModelEmployeeConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id?: string | null,
    username: string,
    password: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id?: string | null,
    username: string,
    password: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  owner?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id?: string | null,
    username: string,
    password: string,
    email?: string | null,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
  owner?: string | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee?:  {
    __typename: "Employee",
    id?: string | null,
    firstname: string,
    lastname: string,
    telephonenumber: string,
    email: string,
    user?:  {
      __typename: "User",
      id?: string | null,
      username: string,
      password: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    manager?:  {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    departments?:  {
      __typename: "ModelDepartmentEmployeeConnection",
      nextToken?: string | null,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEmployeeSubscription = {
  onUpdateEmployee?:  {
    __typename: "Employee",
    id?: string | null,
    firstname: string,
    lastname: string,
    telephonenumber: string,
    email: string,
    user?:  {
      __typename: "User",
      id?: string | null,
      username: string,
      password: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    manager?:  {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    departments?:  {
      __typename: "ModelDepartmentEmployeeConnection",
      nextToken?: string | null,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteEmployeeSubscriptionVariables = {
  filter?: ModelSubscriptionEmployeeFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEmployeeSubscription = {
  onDeleteEmployee?:  {
    __typename: "Employee",
    id?: string | null,
    firstname: string,
    lastname: string,
    telephonenumber: string,
    email: string,
    user?:  {
      __typename: "User",
      id?: string | null,
      username: string,
      password: string,
      email?: string | null,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    manager?:  {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    departments?:  {
      __typename: "ModelDepartmentEmployeeConnection",
      nextToken?: string | null,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
  owner?: string | null,
};

export type OnCreateDepartmentSubscription = {
  onCreateDepartment?:  {
    __typename: "Department",
    id?: string | null,
    name: string,
    manager?:  {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
  owner?: string | null,
};

export type OnUpdateDepartmentSubscription = {
  onUpdateDepartment?:  {
    __typename: "Department",
    id?: string | null,
    name: string,
    manager?:  {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteDepartmentSubscriptionVariables = {
  filter?: ModelSubscriptionDepartmentFilterInput | null,
  owner?: string | null,
};

export type OnDeleteDepartmentSubscription = {
  onDeleteDepartment?:  {
    __typename: "Department",
    id?: string | null,
    name: string,
    manager?:  {
      __typename: "Manager",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    status: string,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
