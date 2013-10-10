/**
 * @param {Array} vowel_letters все гласные
 * @param {Array} vowel_letters_priority значения приоритетов для гласных
 * @param {Array} consonant_letters все согласные
 * @param {Array} consonant_letters_priority значения приоритетов для согласных
 * @param {Number} third_letter_periodicity число от 0 до 1, определяет насколько часто встречаются слога из трех букв
 * @constructor
 */
function Language(vowel_letters, vowel_letters_priority, consonant_letters, consonant_letters_priority, frequency_the_third_letter) {
  this.vowel_letters = vowel_letters;
  this.vowel_letters_priority = vowel_letters_priority;
  this.consonant_letters = consonant_letters;
  this.consonant_letters_priority = consonant_letters_priority;
  this.frequency_the_third_letter = frequency_the_third_letter;
};
  
/**
 * @param {Object} form данные из формы
 * @constructor
 */
function UI(form) {
   this.form = form;
   this.ru = new Language(
      ["а", "е", "и", "о", "у", "ы", "э", "ю", "я"],
      [10, 8, 8, 10, 8, 2, 1, 1, 3],
      ["б", "в", "г", "д", "ж", "з", "к", "л", "м", "н", "п", "р", "с", "т", "ф", "х", "ц", "ч", "ш", "щ"],
      [10, 15, 8, 12, 5, 9, 15, 15, 15, 15, 20, 15, 15, 12, 3, 4, 2, 2, 5, 1],
      0.3
   ); 
   this.en = new Language(
      ["a", "e", "i", "o", "u", "y"],
      [5, 4, 3, 5, 3, 2],
      ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"],
      [8, 9, 10, 10, 9, 8, 5, 5, 10, 9, 15, 12, 7, 15, 15, 15, 10, 8, 4, 3],
      0.4
   );
};

/**
 * Отправляет в HTML сгенерированное слово
 *
 * @this {UI} 
 * Не возвращает данных
*/
UI.prototype.run = function() {
  var selected_lang;
  if (this.form.lang[0].checked) {selected_lang = this.ru;}
  if (this.form.lang[1].checked) {selected_lang = this.en;}
  
  var g = new Generator(selected_lang),
      new_password = g.generate(this.form.length.value);

  list_of_generated_passwords += new_password + "<br>";
  document.getElementById('text').innerHTML = list_of_generated_passwords;
}