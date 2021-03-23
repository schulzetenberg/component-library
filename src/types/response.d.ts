interface ResponseSuccess {
  errors?: string[];
  data: any;
}

interface ReponseError {
  errors?: string[];
}


interface ServerResponse extends ResponseSuccess, ReponseError {}
