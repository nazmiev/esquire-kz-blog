import { body } from "express-validator"

export const loginValidation = [
    body('email', 'Неправильный формат email').isEmail(),
    body('password', 'Минимум 5 символов в пароле').isLength({ min: 5 }),
];

export const registerValidation = [
    body('email', 'Неправильный формат email').isEmail(),
    body('password', 'Минимум 5 символов в пароле').isLength({ min: 5 }),
    body('fullName', 'Укажите имя. Минимум три символа.').isLength({ min: 3 }),
    body('avatarUrl', 'Неправильная ссылка на аватарку').optional().isURL(),
];

export const postCreateValidation = [
    body('title', 'Введите заголовок статьи').isLength({ min: 3 }).isString(),
    body('text', 'Введите текст статьи').isLength({ min: 10 }).isString(),
    body('tags', 'Неправильный формат тегов (укажите массив)').optional().isString(),
    body('imageUrl', 'Неправильная ссылка на изображение').optional().isString(),
];