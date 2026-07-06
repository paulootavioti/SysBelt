import { api } from "./api";

export class ApiClient {

  static get<T>(url: string) {
    return api.get<T>(url);
  }

  static post<T>(url: string, data: unknown) {
    return api.post<T>(url, data);
  }

  static put<T>(url: string, data: unknown) {
    return api.put<T>(url, data);
  }

  static patch<T>(url: string) {
    return api.patch<T>(url);
  }

  static delete<T>(url: string) {
    return api.delete<T>(url);
  }

}