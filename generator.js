/**
 * Cписок сгенерированных паролей.
 */
var list_of_generated_passwords = "";

/**
 * @param {Object} language все данные о буквах и приоритетах букв в языке
 * @constructor
 */
function Generator(language) {
  this.language = language;
};

/**
 * Возвращает слово из нужного количества букв
 *
 * @example
 * new Generator.generate(6); // return "букаке"
 *
 * @this {Generator} 
 * @param {Number} result какой длины нужно получить пароль (Например: 6)
 * @return {String} Cформированное случайное слово (Например: "букаке")
*/
Generator.prototype.generate = function(length) {
  var result = '';

  while (result.length <= length) {
    var consonant = this.get_random_latter(this.language.consonant_letters, this.language.consonant_letters_priority);
    var vowel = this.get_random_latter(this.language.vowel_letters, this.language.vowel_letters_priority);
    var syllable = consonant + vowel;

    if (Math.random() < this.language.frequency_the_third_letter) {
      syllable += this.get_random_latter(this.language.consonant_letters, this.language.consonant_letters_priority)
    }
    result += syllable;
  }

  result = result.substr(0, length);
  return result;
};

/**
/**
 * Возвращает случайную букву из списка с частотой, заданной в приоритетах.
 *
 * @example
 * new Generator.get_random_latter(["a", "у", "е", "ы"], [5, 4, 5, 2]); // return "а" (random)
 *
 * @param {Array} letters буквы для отбора
 * @param {Array} priority значения приоритетов
 * @return {string} одна буква
 * @private
 */
Generator.prototype.get_random_latter = function(letters, priority) {
  var sum = 0;
  for (i = 0;i < priority.length;i++){
    sum = sum + priority[i];
  }

  var random = Math.floor(Math.random()*sum),
     sum_of_priorities_before_i = 0;

  for (i = 0;i < priority.length;i++){
   sum_of_priorities_before_i += priority[i];
   if (random < sum_of_priorities_before_i) {
     var number_latter = i;
       break;
     }
  }
  return letters[number_latter];
};