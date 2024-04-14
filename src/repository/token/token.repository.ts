import { RefreshResponse } from "@src/Types/token/token.type";
import { RefreshTokenParam } from "./token.param";
import axios from "axios";
import CONFIG from "src/config/config.json";

class TokenRepository {
  public async getRefreshToken(
    refreshToken: RefreshTokenParam
  ): Promise<RefreshResponse> {
    const { data } = await axios.post<RefreshResponse>(
      `${CONFIG.serverUrl}/refresh`,
      refreshToken
    );
    return data;
  }
}

export default new TokenRepository();
