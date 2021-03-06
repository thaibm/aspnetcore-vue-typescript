import { Message } from 'element-ui';
import { getAllUsersAPI, createUserAPI, deleteUserAPI, updateUserAPI } from '@/api/management/users';
import { VuexModule, Module, Mutation, Action, getModule } from 'vuex-module-decorators';
import store from '@/store';
import { IUserPayload, IUserParams } from '@/types/management/users';

export interface IUsersState { }

@Module({ dynamic: true, store, name: 'users' })
class Users extends VuexModule implements IUsersState {
  @Action
  public async getAllUsers(params: IUserParams) {
    try {
      const { data } = await getAllUsersAPI(params);
      return data;
    } catch (error) {
      Message.error(error);
      return [];
    }
  }

  @Action
  public async createUser(payload: IUserPayload) {
    try {
      const { data } = await createUserAPI(payload);
      return data;
    } catch (error) {
      Message.error(error);
      return null;
    }
  }

  @Action
  public async updateUser(payload: IUserPayload) {
    try {
      const { data } = await updateUserAPI(payload);
      return data;
    } catch (error) {
      Message.error(error);
      return null;
    }
  }

  @Action
  public async deleteUser(id: string) {
    try {
      const { data } = await deleteUserAPI(id);
      return data;
    } catch (error) {
      Message.error(error);
      return null;
    }
  }
}

export const UsersModule = getModule(Users);
