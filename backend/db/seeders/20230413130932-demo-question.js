"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const dataQuestions = [
      {
        question: "Какая планета ближайшая к Солнцу?",
        answer: "Меркурий",
        count: 100,
        theme_id: 2,
      },
      {
        question: "На какой планете можно обнаружить дождь из алмазов?",
        answer: "Сатурн",
        count: 200,
        theme_id: 2,
      },
      {
        question: "Сколько звезд составляют Большую Медведицу?",
        answer: "7",
        count: 300,
        theme_id: 2,
      },
      {
        question: "Когда в следующий раз можно будет увидеть комету Галлея?",
        answer: "2061",
        count: 400,
        theme_id: 2,
      },
      {
        question: "Сколько длится год на Юпитере?",
        answer: "12 лет",
        count: 500,
        theme_id: 2,
      },
      {
        question: "Когда путин стал президентом?",
        answer: "2000",
        count: 100,
        theme_id: 1,
      },
      {
        question: "Самая первая машина путина?",
        answer: "Запорожец",
        count: 200,
        theme_id: 1,
      },
      {
        question: "В каком году путин ехал на калине по трассе Хабаровск-Чита?",
        answer: "2010",
        count: 300,
        theme_id: 1,
      },
      {
        question:
          "В Челябинске президенту в один из дней рождения преподнесли ..... — южноуральский селекционер вывел новый сорт, который назвал в честь Владимира Путина.",
        answer: "Помидор",
        count: 400,
        theme_id: 1,
      },
      {
        question: "Когда путин уйдет с поста президента?",
        answer: "Нет ответа",
        count: 500,
        theme_id: 1,
      },
      {
        question:
          "На столе два стакана: один с вином, другой — с водой. Из стакана с вином взяли одну ложку вина и добавили в стакан с водой. Содержимое последнего тщательно перемешали. После этого набрали одну ложку из этого стакана и перелили обратно в стакан с вином. Чего в результате больше: вина в стакане с водой или воды в стакане с вином?",
        answer: "одинаково",
        count: 100,
        theme_id: 3,
      },
      {
        question:
          "В квартире живут домашние животные: собаки и кошки. Из всех животных только одно не является собакой, при этом все питомцы, кроме одного, — кошки. Сколько всего кошек и собак?",
        answer: "1 собака 1 кошка",
        count: 200,
        theme_id: 3,
      },
      {
        question:
          "Перед вами ряд слов: «сельдь», «кит», «акула», «тунец», «треска». Какое слово выпадает из этого ряда?",
        answer: "кит",
        count: 300,
        theme_id: 3,
      },
      {
        question:
          "На праздничном столе горят 7 свечей. 3 из них потушили. Сколько свечей останется?",
        answer: "3",
        count: 400,
        theme_id: 3,
      },
      {
        question:
          "Попробуйте догадаться сколько стоит книга, если книга стоит доллар плюс пол книги.",
        answer: "2",
        count: 500,
        theme_id: 3,
      },
    ];
    const questions = dataQuestions.map((question) => ({
      ...question,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert("Questions", questions);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete("Questions");
  },
};
