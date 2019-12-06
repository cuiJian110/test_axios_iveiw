/*
 * @Author: your name
 * @Date: 2019-12-03 17:33:11
 * @LastEditTime: 2019-12-06 10:44:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \testiviewaxios\src\api\home.js
 */
import {getRequest, postRequest} from './request';
export const postTest = (url, params) => postRequest(url, params);
export const getStudents = (url, params) => getRequest(url, params);
export const addStudent = (url, params) => postRequest(url, params);
export const editStudent = (url, params) => postRequest(url, params);
export const delStudent = (url, params) => postRequest(url, params);