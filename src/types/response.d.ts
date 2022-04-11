interface ResponseSuccess {
  errors?: string[];
  data: any;
}

interface ReponseError {
  errors?: string[];
}

export interface ServerResponse extends ResponseSuccess, ReponseError {}
