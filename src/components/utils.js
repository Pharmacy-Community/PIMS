import drfProvider, {
    jwtTokenAuthProvider,
    fetchJsonWithAuthJWTToken,
} from "ra-data-django-rest-framework";

const apiBaseUrl = "http://localhost:7000";

// TODO Add Auth provider
export const authProvider = jwtTokenAuthProvider({
    obtainAuthTokenUrl: `${apiBaseUrl}/auth/jwt/create/`,
});
const dataProvider = drfProvider(apiBaseUrl, fetchJsonWithAuthJWTToken);

export default dataProvider;