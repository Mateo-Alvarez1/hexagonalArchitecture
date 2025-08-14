import {
  AuthDetails,
  ForControlAuthenticating,
  Permissions,
} from "../../ports/drivens";

const authDetailMock: AuthDetails = {
  token: "stubbed-token",
  refreshToken: "stubbed-refresh-token",
};

const permissionsMock: Permissions = {
  admin: true,
  user: false,
};

export class ControlAuthenticatorStub implements ForControlAuthenticating {
  async getAuthDetails(email: string, password: string): Promise<AuthDetails> {
    return Promise.resolve(authDetailMock);
  }

  async getPermissions(email: string, password: string): Promise<Permissions> {
    return Promise.resolve(permissionsMock);
  }
}
