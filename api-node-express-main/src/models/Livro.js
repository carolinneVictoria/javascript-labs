import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: { type: String, required: [true, "O titulo do livro é obrigatório!"] },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: [true, "O(a) autor(a) é obrigatório!"] },
    editora: { 
      type: String,
      required: [true, "A editora é obrigatório!"],
      enum: {
        values: ["Casa do Código", "Alura"],
        message: "A editora {VALUE} não é um valor permitido."
      }
    },
    numeroPaginas: {
      type: Number,
      min: [10, "O número de paginas deve estar entre 10 e 5000. Valor fonecido: {VALUE}"],
      max: [5000, "O número de paginas deve estar entre 10 e 5000. Valor fonecido: {VALUE}"] }
  }
);

const livros = mongoose.model('livros', livroSchema);

export default livros;