/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePostDto } from '../models/CreatePostDto';
import type { CreateRoleDto } from '../models/CreateRoleDto';
import type { CreateUserDto } from '../models/CreateUserDto';
import type { Post } from '../models/Post';
import type { UpdatePostDto } from '../models/UpdatePostDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class Service {
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static usersControllerCreate(
        requestBody: CreateUserDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/users',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static usersControllerGetAll(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/users',
        });
    }
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static rolesControllerCreate(
        requestBody: CreateRoleDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/roles',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param value
     * @returns any
     * @throws ApiError
     */
    public static rolesControllerGetByValue(
        value: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/roles/{value}',
            path: {
                'value': value,
            },
        });
    }
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static authControllerLogin(
        requestBody: CreateUserDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/login',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public static authControllerRegistration(
        requestBody: CreateUserDto,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/auth/registration',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static googleAuthControllerGoogleAuth(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/google',
        });
    }
    /**
     * @returns any
     * @throws ApiError
     */
    public static googleAuthControllerGoogleAuthRedirect(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/auth/google/callback',
        });
    }
    /**
     * Создание поста
     * @param requestBody
     * @returns Post
     * @throws ApiError
     */
    public static postsControllerCreatePost(
        requestBody: CreatePostDto,
    ): CancelablePromise<Post> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/posts',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Обновление поста
     * @param id
     * @param requestBody
     * @returns Post
     * @throws ApiError
     */
    public static postsControllerUpdatePost(
        id: number,
        requestBody: UpdatePostDto,
    ): CancelablePromise<Post> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/api/posts/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Удаление поста
     * @param id
     * @returns any
     * @throws ApiError
     */
    public static postsControllerDeletePost(
        id: number,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/api/posts/{id}',
            path: {
                'id': id,
            },
        });
    }
}
