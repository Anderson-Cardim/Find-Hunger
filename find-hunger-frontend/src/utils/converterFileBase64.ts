export function convertFilesToBase64(files: File[]): Promise<string[]> {
    return Promise.all(
      files.map(
        (file) =>
          new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
  
            reader.onloadend = () => {
              resolve(reader.result as string); // Retorna a string base64
            };
  
            reader.onerror = (error) => {
              reject("Erro ao ler o arquivo: " + error);
            };
  
            reader.readAsDataURL(file); // Lê o arquivo como uma URL base64
          })
      )
    );
  }