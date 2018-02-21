# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

questions = Question.create([

  {question: "How do you manage your books?"},
  {question: "Who manages your business finances?"},
  {question: "When do you ask for payment?"},
  {question: "What are your credit terms?"},
  {question: "What do you do when payment is overdue?"},
  {question: "What do you do if someone consistently pays late?"},
  {question: "How do you receive payment?"},
  {question: "How do you record your expenses?"},
  {question: "What do you do with the profits?"},
  {question: "How do you forecast your cashflow?"}

])

answers = Answer.create([

  {answer: "Online accounting software", points: 15, question_id: questions[0].id},
  {answer: "Desktop accounting software", points: 10, question_id: questions[0].id},
  {answer: "Spreadsheets (love them formulas!)", points: 5, question_id: questions[0].id},
  {answer: "Books? You mean like Harry Potter?", points: 0, question_id: questions[0].id},

  {answer: "An external finance person", points: 15, question_id: questions[1].id},
  {answer: "Someone in-house", points: 10, question_id: questions[1].id},
  {answer: "The business owner", points: 5, question_id: questions[1].id},
  {answer: "Management schmanagement!", points: 0, question_id: questions[1].id},

  {answer: "Immediately", points: 15, question_id: questions[2].id},
  {answer: "Within a couple of weeks", points: 10, question_id: questions[2].id},
  {answer: "Within a month", points: 5, question_id: questions[2].id},
  {answer: "Oh, that reminds me!", points: 0, question_id: questions[2].id},

  {answer: "I don’t offer credit", points: 15, question_id: questions[3].id},
  {answer: "1-30 days", points: 10, question_id: questions[3].id},
  {answer: "More than 30 days", points: 5, question_id: questions[3].id},
  {answer: "Hopefully they’ll pay me sometime", points: 0, question_id: questions[3].id},

  {answer: "Hit the phones every day until I get paid", points: 15, question_id: questions[4].id},
  {answer: "Send an occasional gentle reminder", points: 10, question_id: questions[4].id},
  {answer: "Wait and hope for the best", points: 5, question_id: questions[4].id},
  {answer: "Sign off my emails to them “regards” rather than “kind regards”. That’ll show ‘em.", points: 0, question_id: questions[4].id},

  {answer: "Charge them more", points: 15, question_id: questions[5].id},
  {answer: "Re-negotiate payment terms", points: 10, question_id: questions[5].id},
  {answer: "End our relationship with them", points: 5, question_id: questions[5].id},
  {answer: "Grumble under my breath and hope they’ll change their ways", points: 0, question_id: questions[5].id},

  {answer: "Cash, credit card or bank transfer", points: 15, question_id: questions[6].id},
  {answer: "Cash only", points: 10, question_id: questions[6].id},
  {answer: "Cheque", points: 5, question_id: questions[6].id},
  {answer: "Camels", points: 0, question_id: questions[6].id},

  {answer: "With an app (like ReceiptBank or Expensify)", points: 15, question_id: questions[7].id},
  {answer: "In a spreadsheet", points: 10, question_id: questions[7].id},
  {answer: "In a ledger", points: 5, question_id: questions[7].id},
  {answer: "By putting all my receipts in a shoebox", points: 0, question_id: questions[7].id},

  {answer: "Set aside a portion of every paid invoice", points: 15, question_id: questions[8].id},
  {answer: "Reinvest every penny we receive back into the business", points: 10, question_id: questions[8].id},
  {answer: "Save some cash, but only from the bigger invoices", points: 5, question_id: questions[8].id},
  {answer: "Buy something cool", points: 0, question_id: questions[8].id},

  {answer: "We use a cash flow forecasting tool (like Float!)", points: 15, question_id: questions[9].id},
  {answer: "Our accountant does it", points: 10, question_id: questions[9].id},
  {answer: "Manually using spreadsheets", points: 5, question_id: questions[9].id},
  {answer: "What is this “forecast” of which you speak?", points: 0, question_id: questions[9].id}


])
