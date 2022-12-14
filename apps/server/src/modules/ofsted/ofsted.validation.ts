import Joi from "joi";

export const getSummaries = {
  query: Joi.object().keys({
    rating: Joi.array().items(Joi.number()),
    localAuthoritySlug: Joi.string(),
    schoolType: Joi.string(),
    ageRange: Joi.array<number>(),
    lat: Joi.number(),
    long: Joi.number(),
    zoom: Joi.number(),
  }).and('lat', 'long', 'zoom')
};

export const getSchoolsByLocalAuthority = {
  params: Joi.object().keys({
    localAuthoritySlug: Joi.string().required(),
  }),
}

export const getSchool = {
  params: Joi.object().keys({
    localAuthoritySlug: Joi.string().required(),
    slug: Joi.string().required(),
  }),
};