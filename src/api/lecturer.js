import queryString from 'query-string';
import { del, get, post } from './axios';

const API_LECTURER_URL = '/teachers';
const mockImage = '';

export const fetchLecturers = (pageNum = 1, pageSize = 10, query) => {
    const stringified = queryString.stringify({
        pageSize,
        query,
        page: pageNum,
    });
    const url = `${API_LECTURER_URL}?${stringified}`;

    return get(url).then(res => ({
        lecturers: res.data.data.map(lecturer => ({ ...lecturer, image: mockImage })),
        pagination: res.data.pagination,
    }));
};

export const addLecturerToCourse = (lecturerId, courseId) => {
    const url = `${API_LECTURER_URL}/${lecturerId}/courses/${courseId}`;

    return post(url).then(res => res.data);
};

export const removeLecturerToCourse = (lecturerId, courseId) => {
    const url = `${API_LECTURER_URL}/${lecturerId}/courses/${courseId}`;

    return del(url).then(res => res.data);
};