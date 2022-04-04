import http from "../services/http-common";

class TutorialDataService {
  getAll() {
    return http.get("/crud");
  }

  get(id) {
    return http.get(`/crud/${id}`);
  }

  create(data) {
    return http.post("/crud", data);
  }

  update(id, data) {
    return http.put(`/crud/${id}`, data);
  }

  delete(id) {
    return http.delete(`/crud/${id}`);
  }
}

export default new TutorialDataService();
