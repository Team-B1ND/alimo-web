import { RefreshResponse } from "src/types/token/token.type";
import { RefreshTokenParam } from "./token.param";
import axios from "axios";
import CONFIG from "src/config/config.json";

class TokenRepository {
  public async getRefreshToken(
    token: RefreshTokenParam
  ): Promise<RefreshResponse> {
    const { data } = await axios.post<RefreshResponse>(
      `${CONFIG.serverUrl}/refresh`,{
        refreshToken: token
      }
    );
console.log("reost");

    return data;
  }
}

export default new TokenRepository();
