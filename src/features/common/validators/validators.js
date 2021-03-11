import Joi from 'joi';

const uuid = Joi.object({
    id: Joi.string().uuid().required().description('uuid')
}).label('UUID');

export default uuid;
