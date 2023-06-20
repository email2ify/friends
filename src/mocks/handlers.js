import { rest } from "msw";

const baseURL = "https://friends12.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(ctx.json({
        "pk": 1,
        "username": "Dan",
        "email": "",
        "first_name": "",
        "last_name": "",
        "profile_id": 1,
        "profile_image": "https://res.cloudinary.com/duqcutm5s/image/upload/v1/media/../default_profile_qdjgyp"
    })
    );
  }),
  rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];