import axios from 'axios';
import { AddAppealType, AppealType } from '../../types/dataTypes';

export const apiInstance = axios.create({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  baseURL: import.meta.env.VITE_SERVER_BASEURL,
});

class ApiDataService {
  static async getData(): Promise<AppealType[]> {
    const response = await apiInstance.get<AppealType[]>('/api/v1/appeal/');
    if (response.status === 200) {
      return response.data;
    }

    return [];
  }
  static async addPost(formData: AddAppealType): Promise<AppealType> {
    const response = await apiInstance.post<AppealType>(
      '/api/v1/appeal/',
      formData
    );
    if (response.status === 201) {
      return response.data;
    } else {
      return Promise.reject(new Error());
    }
  }
  static async deletePost(postId: AppealType['id']): Promise<AppealType['id']> {
    const response = await apiInstance.delete(`/api/v1/appeal/${postId}`);
    if (response.status !== 200)
      return Promise.reject(new Error('Ошибка удаления'));
    return postId;
  }
  static async editAppeal(
    formData: AddAppealType,
    id: AppealType['id']
  ): Promise<AppealType> {
    const response = await apiInstance.put<AppealType>(
      `/api/v1/appeal/${id}`,
      formData
    );
    if (response.status === 200) return response.data;
    return Promise.reject(new Error('Ошибка изменения'));
  }
}

export default ApiDataService;

// static async editComment(
//   formData: AddCommentFormData,
//   id: CommentType['id'],
// ): Promise<CommentType> {
//   const response = await apiInstance.patch<CommentWithUser>(`/api/comments/${id}`, formData);
//   if (response.status === 200) return response.data;
//   return Promise.reject(new Error('Error editing on server'));
// }

// static async editComment(
//   formData: AddCommentFormData,
//   id: CommentType['id'],
// ): Promise<CommentType> {
//   const response = await apiInstance.patch<CommentWithUser>(`/api/comments/${id}`, formData);
//   if (response.status === 200) return response.data;
//   return Promise.reject(new Error('Error editing on server'));
// }

// static async deleteComment(commentId: CommentType['id']): Promise<CommentType['id']> {
//   const response = await apiInstance.delete(`/api/comments/${commentId}`);
//   if (response.status !== 200) return Promise.reject(new Error('Error deleting from server'));
//   return commentId;
// }
