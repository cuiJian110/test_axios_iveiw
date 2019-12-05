/*
 * @Author: your name
 * @Date: 2019-12-03 17:33:11
 * @LastEditTime: 2019-12-03 17:34:03
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \testiviewaxios\src\api\home.js
 */
import {getRequest, postRequest} from './request';
export const postTest = (url, params) => postRequest(url, params);