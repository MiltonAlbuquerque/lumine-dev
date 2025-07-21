// Respostas treinadas para produtos de beleza
const respostas = {
  Entendi: "Quer saber de algo mais? SIM OU NÃO?😊 ",
  entendi: "Quer saber de algo mais? SIM OU NÃO?😊 ",
  Entendo: "Quer saber de algo mais? SIM OU NÃO?😊 ",
  ENTENDO: "Quer saber de algo mais? SIM OU NÃO?😊 ",
  entendo: "Quer saber de algo mais? SIM OU NÃO?😊 ",
  ENTENDI: "Quer saber de algo mais? SIM OU NÃO?😊 ",
  inicio:
    "Olá! Sou a Duda 😊, assistente virtual da Lumine. Vi que você pediu para voltar do inicio, então oque você quer falar? Sobre:<br><br> ● Produtos <br>  ● Agendamentos <br>  ● Dúvidas de Compras <br>  ● Dicas de Cuidados <br><br> Esolha uma das opções😊 ",
  início:
    "Olá! Sou a Duda 😊, assistente virtual da Lumine. Vi que você pediu para voltar do inicio, então oque você quer falar? Sobre:<br><br> ● Produtos <br>  ● Agendamentos <br>  ● Dúvidas de Compras <br>  ● Dicas de Cuidados <br><br> Esolha uma das opções😊 ",
  ínicio:
    "Olá! Sou a Duda 😊, assistente virtual da Lumine. Vi que você pediu para voltar do inicio, então oque você quer falar? Sobre:<br><br> ● Produtos <br>  ● Agendamentos <br>  ● Dúvidas de Compras <br>  ● Dicas de Cuidados <br><br> Esolha uma das opções😊 ",
  ínicío:
    "Olá! Sou a Duda 😊, assistente virtual da Lumine. Vi que você pediu para voltar do inicio, então oque você quer falar? Sobre:<br><br> ● Produtos <br>  ● Agendamentos <br>  ● Dúvidas de Compras <br>  ● Dicas de Cuidados <br><br> Esolha uma das opções😊 ",
  voltar:
    "Olá! Sou a Duda 😊, assistente virtual da Lumine. Vi que você pediu para voltar do inicio, então oque você quer falar? Sobre:<br><br> ● Produtos <br>  ● Agendamentos <br>  ● Dúvidas de Compras <br>  ● Dicas de Cuidados <br><br> Esolha uma das opções😊 ",
  volta:
    "Olá! Sou a Duda 😊, assistente virtual da Lumine. Vi que você pediu para voltar do inicio, então oque você quer falar? Sobre:<br><br> ● Produtos <br>  ● Agendamentos <br>  ● Dúvidas de Compras <br>  ● Dicas de Cuidados <br><br> Esolha uma das opções😊 ",
  COMPRAR:
    "Caso você queira comprar algum de nossos produtos, é só ir na aba de produtos, clica no botão  em baixo no cantinho direito, após isso verifca cada item na sacola, Clica em finalizar compra. e Pronto! Você será Direcionado para o Whatsapp e atendido por nossa equipe. Posso lhe ajudar em algo mais? Sim ou não?😊 ",
  Comprar:
    "Caso você queira comprar algum de nossos produtos, é só ir na aba de produtos, clica no botão  em baixo no cantinho direito, após isso verifca cada item na sacola, Clica em finalziar compra. e Pronto! Você será Direcionado para o Whatsapp e atendido por nossa equipe. Posso lhe ajudar em algo mais? Sim ou não?😊 ",
  Compra:
    "Caso você queira comprar algum de nossos produtos, é só ir na aba de produtos, clica no botão  em baixo no cantinho direito, após isso verifca cada item na sacola, Clica em finalizar compra. e Pronto!  Você será Direcionado para o Whatsapp e atendido por nossa equipe. Posso lhe ajudar em algo mais? Sim ou não?😊 ",
  COMPRA:
    "Caso você queira comprar algum de nossos produtos, é só ir na aba de produtos, clica no botão  em baixo no cantinho direito, após isso verifca cada item na sacola, Clica em finalizar compra. e Pronto!  Você será Direcionado para o Whatsapp e atendido por nossa equipe. Posso lhe ajudar em algo mais? Sim ou não?😊 ",
  compra:
    "Caso você queira comprar algum de nossos produtos, é só ir na aba de produtos, clica no botão  em baixo no cantinho direito, após isso verifca cada item na sacola, Clica em finalizar compra. e Pronto!  Você será Direcionado para o Whatsapp e atendido por nossa equipe. Posso lhe ajudar em algo mais? Sim ou não?😊 ",
  comprar:
    "Caso você queira comprar algum de nossos produtos, é só ir na aba de produtos, clica no botão em baixo no cantinho direito, após isso verifca cada item na sacola, Clica em finalizar compra. e Pronto!  Você será Direcionado para o Whatsapp e atendido por nossa equipe. Posso lhe ajudar em algo mais? Sim ou não?😊 ",
  compras:
    "Caso você queira comprar algum de nossos produtos, é só ir na aba de produtos, clica no botão em baixo no cantinho direito, após isso verifca cada item na sacola, Clica em finalizar compra. e Pronto!  Você será Direcionado para o Whatsapp e atendido por nossa equipe. Posso lhe ajudar em algo mais? Sim ou não?😊 ",
  Compras:
    "Caso você queira comprar algum de nossos produtos, é só ir na aba de produtos, clica no botão em baixo no cantinho direito, após isso verifca cada item na sacola, Clica em finalizar compra. e Pronto!  Você será Direcionado para o Whatsapp e atendido por nossa equipe. Posso lhe ajudar em algo mais? Sim ou não?😊 ",
  COMPRAS:
    "Caso você queira comprar algum de nossos produtos, é só ir na aba de produtos, clica no botão em baixo no cantinho direito, após isso verifca cada item na sacola, Clica em finalizar compra. e Pronto!  Você será Direcionado para o Whatsapp e atendido por nossa equipe. Posso lhe ajudar em algo mais? Sim ou não?😊 ",
  3: "Caso você queira comprar algum de nossos produtos, é só ir na aba de produtos, clica no botão em baixo no cantinho direito, após isso verifca cada item na sacola, Clica em finalizar compra. e Pronto!  Você será Direcionado para o Whatsapp e atendido por nossa equipe. Posso lhe ajudar em algo mais? Sim ou não?😊 ",
  ok: "Quer saber de algo mais? SIM OU NÃO?😊 ",
  colágeno:
    "Complexo Colágeno + Vitaminas (60 doses - R$78.90)\nComposição: Colágeno Hidrolisado + Vitamina C\nMelhora elasticidade da pele!",
  olá: "Oi! Sou a Duda, assistente da Lumine 😊 Como posso te ajudar hoje?",
  nao: "Certo! obrigado por visitar a Lumine, Volte sempre! se Precisar de algo mais estou aqui!😊 ",
  Nao: "Certo! obrigado por visitar a Lumine, Volte sempre! se Precisar de algo mais estou aqui!😊 ",
  Não: "Certo! obrigado por visitar a Lumine, Volte sempre! se Precisar de algo mais estou aqui!😊 ",
  NÃO: "Certo! obrigado por visitar a Lumine, Volte sempre! se Precisar de algo mais estou aqui!😊 ",
  NAO: "Certo! obrigado por visitar a Lumine, Volte sempre! se Precisar de algo mais estou aqui!😊 ",
  não: "Certo! obrigado por visitar a Lumine, Volte sempre! se Precisar de algo mais estou aqui!😊 ",
  ñ: "Certo! obrigado por visitar a Lumine, Volte sempre! se Precisar de algo mais estou aqui!😊 ",
  sim: "Então , me fala oque eu posso te ajudar ainda mais!?😊",
  Sim: "Então , me fala oque eu posso te ajudar ainda mais!?😊",
  SIM: "Então , me fala oque eu posso te ajudar ainda mais!?😊",
  yes: "Então , me fala oque eu posso te ajudar ainda mais!?😊",
  Yes: "Então , me fala oque eu posso te ajudar ainda mais!?😊",
  YES: "Então , me fala oque eu posso te ajudar ainda mais!?😊",
  obrigado: "Por nada, posso te ajudar em algo mais? SIM OU NÃO?",
  Obrigado: "Por nada, posso te ajudar em algo mais? SIM OU NÃO?",
  OBRIGADO: "Por nada, posso te ajudar em algo mais? SIM OU NÃO?",
  obrigada: "Por nada, posso te ajudar em algo mais? SIM OU NÃO?",
  Obrigada: "Por nada, posso te ajudar em algo mais? SIM OU NÃO?",
  OBRIGADA: "Por nada, posso te ajudar em algo mais? SIM OU NÃO?",
  obg: "Por nada, posso te ajudar em algo mais? SIM OU NÃO?",
  OBG: "Por nada, posso te ajudar em algo mais? SIM OU NÃO?",
  Obg: "Por nada, posso te ajudar em algo mais? SIM OU NÃO?",

  colageno:
    "Complexo Colágeno + Vitaminas (60 doses - R$78.90)\nComposição: Colágeno Hidrolisado + Vitamina C\nMelhora elasticidade da pele!",
  ola: "Oi! Sou a Duda, assistente da Lumine 😊 Como posso te ajudar hoje?",
  olá: "Oi! Sou a Duda, assistente da Lumine 😊 Como posso te ajudar hoje?",
  Olá: "Oi! Sou a Duda, assistente da Lumine 😊 Como posso te ajudar hoje?",
  OLÁ: "Oi! Sou a Duda, assistente da Lumine 😊 Como posso te ajudar hoje?",
  oi: "Olá! Sou a Duda 😊, e estou Pronta para te ajudar a encontrar os melhores produtos de beleza! Em que posso te ajudar hoje?",
  Oi: "Olá! Sou a Duda 😊, e estou Pronta para te ajudar a encontrar os melhores produtos de beleza! Em que posso te ajudar hoje?",
  OI: "Olá! Sou a Duda 😊, e estou Pronta para te ajudar a encontrar os melhores produtos de beleza! Em que posso te ajudar hoje?",
  agendamento:
    "Ah! que legal 💖, não fazemos agendamentos por aqui , mas vou te passar o contato para que você possa agendar , esse é o número: (83) 9 9984-4101 (whatsapp), posso ajudar em algo mais? SIM OU NÃO?",
  Agendamento:
    "Ah! que legal 💖, não fazemos agendamentos por aqui , mas vou te passar o contato para que você possa agendar , esse é o número: (83) 9 9984-4101 (whatsapp), posso ajudar em algo mais? SIM OU NÃO?",
  AGENDAMENTO:
    "Ah! que legal 💖, não fazemos agendamentos por aqui , mas vou te passar o contato para que você possa agendar , esse é o número: (83) 9 9984-4101 (whatsapp), posso ajudar em algo mais? SIM OU NÃO?",
  agendar:
    "Ah! que legal 💖, não fazemos agendamentos por aqui , mas vou te passar o contato para que você possa agendar , esse é o número: (83) 9 9984-4101 (whatsapp), posso ajudar em algo mais? SIM OU NÃO?",
  Agendar:
    "Ah! que legal 💖, não fazemos agendamentos por aqui , mas vou te passar o contato para que você possa agendar , esse é o número: (83) 9 9984-4101 (whatsapp), posso ajudar em algo mais? SIM OU NÃO?",
  AGENDAR:
    "Ah! que legal 💖, não fazemos agendamentos por aqui , mas vou te passar o contato para que você possa agendar , esse é o número: (83) 9 9984-4101 (whatsapp), posso ajudar em algo mais? SIM OU NÃO?",
  AGENDA:
    "Ah! que legal 💖, não fazemos agendamentos por aqui , mas vou te passar o contato para que você possa agendar , esse é o número: (83) 9 9984-4101 (whatsapp), posso ajudar em algo mais? SIM OU NÃO?",
  Agenda:
    "Ah! que legal 💖, não fazemos agendamentos por aqui , mas vou te passar o contato para que você possa agendar , esse é o número: (83) 9 9984-4101 (whatsapp), posso ajudar em algo mais? SIM OU NÃO?",
  agenda:
    "Ah! que legal 💖, não fazemos agendamentos por aqui , mas vou te passar o contato para que você possa agendar , esse é o número: (83) 9 9984-4101 (whatsapp), posso ajudar em algo mais? SIM OU NÃO?",
  orçamento:
    "Tudo certo! vou te passar o contato para que você possa fazer o Orçamento , esse é o número: (83) 9 9984-4101 (whatsapp), posso ajudar em algo mais? SIM OU NÃO?",
  Orcamento:
    "Tudo certo! vou te passar o contato para que você possa fazer o , esse é o número: (83) 9 9984-4101 (whatsapp), posso ajudar em algo mais? SIM OU NÃO?",
  ORÇAMENTO:
    "Tudo certo! vou te passar o contato para que você possa fazer o , esse é o número: (83) 9 9984-4101 (whatsapp), posso ajudar em algo mais? SIM OU NÃO?",
  // Linhas de produtos
  produto:
    "Temos quatro linhas principais:\n <br><br>● FACIAL \n <br>● CAPILAR\n <br>● CORPORAL \n <br>● NUTRACEUTICOS \n <br><br> Qual você quer conhecer? <br> Escolha apenas uma das opções.",
  Produto:
    "Temos quatro linhas principais:\n <br> FACIAL 🌸\n <br> CAPILAR 💇‍♀️\n <br> CORPORAL 🧴\n <br> NUTRACEUTICOS 🧴 \n <br> Qual você quer conhecer? <br> Escolha apenas uma das opções.",
  PRODUTO:
    "Temos quatro linhas principais:\n <br> FACIAL 🌸\n <br> CAPILAR 💇‍♀️\n <br> CORPORAL 🧴\n <br> NUTRACEUTICOS 🧴 \n <br> Qual você quer conhecer? <br> Escolha apenas uma das opções.",
  produtos:
    "Temos quatro linhas principais:\n <br><br>● FACIAL\n <br>● CAPILAR\n <br>● CORPORAL\n <br>● NUTRACEUTICOS \n<br><br> Qual você quer conhecer? <br> Escolha apenas uma das opções.",
  Produtos:
    "Temos quatro linhas principais:\n <br> FACIAL 🌸\n <br> CAPILAR 💇‍♀️\n <br> CORPORAL 🧴\n <br> NUTRACEUTICOS 🧴 \n<br> Qual você quer conhecer? <br> Escolha apenas uma das opções.",
  PRODUTOS:
    "Temos quatro linhas principais:\n <br> FACIAL 🌸\n <br> CAPILAR 💇‍♀️\n <br> CORPORAL 🧴\n <br> NUTRACEUTICOS 🧴 \n<br> Qual você quer conhecer? <br> Escolha apenas uma das opções.",
  facial:
    "Na linha facial temos:\n <br><br>● ÁGUA MICELAR<br> ● ÁGUA THERMAL\n <br> ● CLAREADOR <br> ● ILUMINADOR <br> ● REGENERADOR <br> ● REVITALIZADOR \n<br> ● HIDRATANTES <br> ● LINHA SÉRUM \n<br>● LOÇÃO TÔNICA <br> ● ESFOLIANTE <br> ● GEL-CREME <br><br> Escolha umas das opções. 😊",
  Facial:
    "Na linha facial temos:\n <br><br>● ÁGUA MICELAR\n<br>● ÁGUA THERMAL <br> ● CLAREADOR <br>● ILUMINADOR <br>● REGENERADOR <br>● REVITALIZADOR \n<br>● HIDRATANTES <br>● LINHA SÉRUM \n<br>● LOÇÃO TÔNICA <br>● ESFOLIANTE <br>● GEL-CREME <br><br> Escolha umas das opções. 😊",
  FACIAL:
    "Na linha facial temos:\n <br><br>● ÁGUA MICELAR\n <br>● ÁGUA THERMAL <br>● CLAREADOR <br>● ILUMINADOR <br>● REGENERADOR <br>● REVITALIZADOR \n<br>● HIDRATANTES <br>● LINHA SÉRUM \n<br>● LOÇÃO TÔNICA <br>● ESFOLIANTE <br>● GEL-CREME <br><br> Escolha umas das opções. 😊",
  faciais:
    "Na linha facial temos:\n <br><br>● ÁGUA MICELAR\n <br>● ÁGUA THERMAL <br>● CLAREADOR <br>● ILUMINADOR <br>● REGENERADOR <br>● REVITALIZADOR \n<br> HIDRATANTES <br> LINHA SÉRUM \n<br>●  LOÇÃO TÔNICA <br> ●  ESFOLIANTE <br> ● GEL-CREME <br><br> Escolha umas das opções. 😊",
  Faciais:
    "Na linha facial temos:\n <br><br>● ÁGUA MICELAR\n <br> ● ÁGUA THERMAL <br> ●  CLAREADOR <br> ●  ILUMINADOR <br> ●  REGENERADOR <br>●  REVITALIZADOR \n<br> ●  HIDRATANTES <br> ●  LINHA SÉRUM \n<br>●  LOÇÃO TÔNICA <br> ●  ESFOLIANTE <br> ● GEL-CREME <br><br> Escolha umas das opções. 😊",
  FACIAIS:
    "Na linha facial temos:\n <br><br>●  ÁGUA MICELAR\n <br> ● ÁGUA THERMAL <br> ● CLAREADOR <br> ● ILUMINADOR <br> ● REGENERADOR <br> ● REVITALIZADOR \n<br> ● HIDRATANTES <br> ● LINHA SÉRUM \n<br>● LOÇÃO TÔNICA <br> ● ESFOLIANTE <br> ● GEL-CREME <br><br> Escolha umas das opções. 😊",
  capilar:
    "Na linha capilar oferecemos:\n<br><br>● FLUIDO BARBA\n<br>● PÓS BARBA\n<br>● CANETA CÍLIOS\n- Óleo para crescimento\nPrecisa de recomendações?",
  Capilar:
    "Na linha capilar oferecemos:\n- Fluido barba\n- Loção antiqueda\n- Shampoo antiqueda\n- Óleo para crescimento\nPrecisa de recomendações?",
  CAPILAR:
    "Na linha capilar oferecemos:\n- Fluido barba\n- Loção antiqueda\n- Shampoo antiqueda\n- Óleo para crescimento\nPrecisa de recomendações?",
  corporal:
    "Linha corporal com:\n- Creme antiestrias\n- Loção firmadora\n- Gel esfoliante\n- Hidratante para mãos\nQual seu interesse?",
  nutraceuticos:
    "Na linha Nutracêuticos temos:\n<br><br>● COMPLEXOS \n<br>● ESTIMULANTE \n<br>●  DIGESTIVA  \n<br>● IMUNIDADE\n<br><br>Qual desses Você Gostaria de saber mais?\n <br>Escolha apenas uma das opções. ",
  complexos:
    "Na linha de Complexos temos:\n<br><br>● ACNE \n<br>● ANTIAGING \n<br>● ANTICELULITE \n<br>● COLÁGENO \n<br>● UNHAS \n<br>● DETOX \n<br>● DRENANTE \n<br>● EMAGRECEDOR \n<br>● MOROSIL \n<br>● PROTETOR \n<br><br>Qual desses Você Gostaria de saber mais?\n <br><br> Se quiser voltar para a sessão de Nutraceuticos, digite 'nutraceuticos', ou Se quiser voltar para a sessão de Produtos digite: 'Produtos'. ",
  complexo:
    "Na linha de Complexos temos:\n<br><br>● ACNE \n<br>● ANTIAGING \n<br>● ANTICELULITE \n<br>● COLÁGENO \n<br>● UNHAS \n<br>● DETOX \n<br>● DRENANTE \n<br>● EMAGRECEDOR \n<br>● MOROSIL \n<br>● PROTETOR \n<br><br>Qual desses Você Gostaria de saber mais?\n <br><br> Se quiser voltar para a sessão de Nutraceuticos, digite 'nutraceuticos', ou Se quiser voltar para a sessão de Produtos digite: 'Produtos'. ",
  complexos:
    "Na linha de Complexos temos:\n<br><br>● ACNE \n<br>● ANTIAGING \n<br>● ANTICELULITE \n<br>● COLÁGENO \n<br>● UNHAS \n<br>● DETOX \n<br>● DRENANTE \n<br>● EMAGRECEDOR \n<br>● MOROSIL \n<br>● PROTETOR \n<br><br>Qual desses Você Gostaria de saber mais?\n <br><br> Se quiser voltar para a sessão de Nutraceuticos, digite 'nutraceuticos', ou Se quiser voltar para a sessão de Produtos digite: 'Produtos'. ",
  acne: "Complexo Antiacne (30 Doses - R$59,90)\nComposição: Nicotinamida, Zinco, Cobre , Ácido Folico, Vitamina A, Vitamina C, Vitamina B6.\n <br><br> Esse complexo ajuda a previnir trata e previne Acne. <br><br>Se quiser voltar para a sessão de Nutraceuticos, digite 'nutraceuticos', ou Se quiser voltar para a sessão de Produtos digite: 'Produtos'.",
  antiaging:
    "Complexo Antiaging (30 Doses - R$55,90)\nComposição: Coenzima Q10, Polypodium Leucotomus, Vitamina C.\n <br><br> Complexo Perfeito para sua Saúde e bem Estar. <br><br>Se quiser voltar para a sessão de Nutraceuticos, digite 'nutraceuticos', ou Se quiser voltar para a sessão de Produtos digite: 'Produtos'.",
  anticelulite:
    "Complexo Antiacelulite (60 Doses - R$100,00)\nComposição: Chá Verde, Pycnogenol, Centella Ásiatica, Castanha da Índia.\n <br><br> Complexo Perfeito para sua Saúde e bem Estar. <br><br>Se quiser voltar para a sessão de Nutraceuticos, digite 'nutraceuticos', ou Se quiser voltar para a sessão de Produtos digite: 'Produtos'.",
  colágeno:
    "Complexo Colágeno + Vitaminas e Minerais (60 Doses - R$78,90)\nComposição: Colágeno Hidrosilado 500G, Vitamina C, Vitamina A, Vitamina E, Zinco, Selênio, Cobre. \n <br><br> Complexo Perfeito para sua Saúde e bem Estar, trazendo vigor para a sua pele. <br><br>Se quiser voltar para a sessão de Nutraceuticos, digite 'nutraceuticos', ou Se quiser voltar para a sessão de Produtos digite: 'Produtos'.",
  colageno:
    "Complexo Colágeno + Vitaminas e Minerais (60 Doses - R$78,90)\nComposição: Colágeno Hidrosilado 500G, Vitamina C, Vitamina A, Vitamina E, Zinco, Selênio, Cobre. \n <br><br> Complexo Perfeito para sua Saúde e bem Estar, trazendo vigor para a sua pele. <br><br>Se quiser voltar para a sessão de Nutraceuticos, digite 'nutraceuticos', ou Se quiser voltar para a sessão de Produtos digite: 'Produtos'.",
  // Produtos específicos (Facial)
  Micelar:
    "Água Micelar Prebiótica (150ml - R$76,00)\nComposição: Mix de prebióticos + Ácido Hialurônico\nÓtima para limpeza suave! <br><br> Voltar para sessão de produtos, digite: 'Produtos', Ou se quiser ir para o inicio, digite: 'Inicio'.",
  micelar:
    "Água Micelar Prebiótica (150ml - R$76,00)\nComposição: Mix de prebióticos + Ácido Hialurônico\nÓtima para limpeza suave! <br><br> Voltar para sessão de produtos, digite: 'Produtos', Ou se quiser ir para o inicio, digite: 'Inicio'.",
  MICELAR:
    "Água Micelar Prebiótica (150ml - R$76,00)\nComposição: Mix de prebióticos + Ácido Hialurônico\nÓtima para limpeza suave! <br><br> Voltar para sessão de produtos, digite: 'Produtos', Ou se quiser ir para o inicio, digite: 'Inicio'.",
  Thermal:
    "Água Micelar Prebiótica (150ml - R$76,00)\nComposição: Mix de prebióticos + Ácido Hialurônico\nÓtima para limpeza suave! <br><br> Voltar para sessão de produtos, digite: 'Produtos', Ou se quiser ir para o inicio, digite: 'Inicio'.",
  thermal:
    "Água Micelar Prebiótica (150ml - R$76,00)\nComposição: Mix de prebióticos + Ácido Hialurônico\nÓtima para limpeza suave! <br><br> Voltar para sessão de produtos, digite: 'Produtos', Ou se quiser ir para o inicio, digite: 'Inicio'.",
  THERMAL:
    "Água Thermal (150ml - R$76)\nComposição: Mix de prebióticos + Ácido Hialurônico\nÓtima para limpeza suave!",

  Clareador:
    "Sabonete Clareador (150ml - R$71,00)\nComposição: Gluconolactona, Niacinamida, Extrato de Romã\nIdeal para uniformizar o tom da pele! <br><br>  Voltar para sessão de produtos, digite: 'Produtos', Ou se quiser ir para o inicio, digite: 'Inicio'.",
  clareador:
    "Sabonete Clareador (150ml - R$71,00)\nComposição: Gluconolactona, Niacinamida, Extrato de Romã\nIdeal para uniformizar o tom da pele!<br><br>   Voltar para sessão de produtos, digite: 'Produtos', Ou se quiser ir para o inicio, digite: 'Inicio'.",
  Clareador:
    "Sabonete Clareador (150ml - R$71,00)\nComposição: Gluconolactona, Niacinamida, Extrato de Romã\nIdeal para uniformizar o tom da pele! <br><br>  Voltar para sessão de produtos, digite: 'Produtos', Ou se quiser ir para o inicio, digite: 'Inicio'.",
  // Sabonete Iluminador
  Iluminador:
    "Sabonete Iluminador Com Vitamnina C (150ML - R$ 90,00)<br><br>\n Composição: Vitamnina C, Ácido ferúlico, Vitamina E, Romã, Pantenol, Niacinamida, Gluconolactona\n<br> Ideal para uniformizar o tom da pele, iluminar e hidratar! <br><br>   Voltar para sessão de produtos, digite: 'Produtos', Ou se quiser ir para o inicio, digite: 'Inicio'.",
  iluminador:
    "Sabonete Iluminador Com Vitamnina C (150ML - R$ 90,00)<br><br>\n Composição: Vitamnina C, Ácido ferúlico, Vitamina E, Romã, Pantenol, Niacinamida, Gluconolactona\n<br> Ideal para uniformizar o tom da pele, iluminar e hidratar! <br><br>   Voltar para sessão de produtos, digite: 'Produtos', Ou se quiser ir para o inicio, digite: 'Inicio'.",
  // Sabonete Regenerador
  Regenerador:
    "Sabonete Regenerador (150ML - R$ 67,00)<br><br>m Composição: D-pantenol, Aloe vera, Calêndula, Hidroviton, Sabonete Glicerinado sem parabenos\n <br> Ideal Para regenerar peles de forma cuidadosa e delicada! <br><br>  Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  REGENERADOR:
    "Sabonete Regenerador (150ML - R$ 67,00)<br><br>m Composição: D-pantenol, Aloe vera, Calêndula, Hidroviton, Sabonete Glicerinado sem parabenos\n <br> Ideal Para regenerar peles de forma cuidadosa e delicada! <br><br>  Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  regenerador:
    "Sabonete Regenerador (150ML - R$ 67,00)<br><br>m Composição: D-pantenol, Aloe vera, Calêndula, Hidroviton, Sabonete Glicerinado sem parabenos\n <br> Ideal Para regenerar peles de forma cuidadosa e delicada! <br><br>  Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  Regenerador:
    "Sabonete Regenerador (150ML - R$ 67,00)<br><br>m Composição: D-pantenol, Aloe vera, Calêndula, Hidroviton, Sabonete Glicerinado sem parabenos\n <br> Ideal Para regenerar peles de forma cuidadosa e delicada! <br><br>  Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  // Hidratantes
  Hidratante:
    "Sabonete Hidratante (150ml - R$86,00)\nComposição: Hidroviton, Aloe vera, Calêndula, D-patenol\nIdeal para hidratação completa da pele! <br><br> Também Temos: <br>\n Hidratante Facial Vitaminado 10% Vitamina C (30g - R$ 82,50) \n <br> Composição: Vit C 10%, Vit A, Vit E, Pró-Vitamina B5, Ácido Hialurônico, Ácido Ferúlico, Base Hydra Fresh. \n <br><br> E Varios outros confira nossa aba de produtos! <br><br> Caso queira voltar para sessão de Produtos, digite: 'Produtos'.",
  hidratante:
    "Sabonete Hidratante (150ml - R$86,00)\nComposição: Hidroviton, Aloe vera, Calêndula, D-patenol\nIdeal para hidratação completa da pele! <br><br> Também Temos: <br>\n Hidratante Facial Vitaminado 10% Vitamina C (30g - R$ 82,50) \n <br> Composição: Vit C 10%, Vit A, Vit E, Pró-Vitamina B5, Ácido Hialurônico, Ácido Ferúlico, Base Hydra Fresh. \n <br><br> E Varios outros confira nossa aba de produtos! <br><br> Caso queira voltar para sessão de Produtos, digite: 'Produtos'.",
  hidratantes:
    "Sabonete Hidratante (150ml - R$86,00)\nComposição: Hidroviton, Aloe vera, Calêndula, D-patenol\nIdeal para hidratação completa da pele! <br><br> Também Temos: <br>\n Hidratante Facial Vitaminado 10% Vitamina C (30g - R$ 82,50) \n <br> Composição: Vit C 10%, Vit A, Vit E, Pró-Vitamina B5, Ácido Hialurônico, Ácido Ferúlico, Base Hydra Fresh. \n <br><br> E Varios outros confira nossa aba de produtos! <br><br> Caso queira voltar para sessão de Produtos, digite: 'Produtos'.",
  // Sessão dos Sérum
  sérum:
    "Na linha Sérum temos os Seguintes produtos:<br>\n<br> Botox\n<br>Control\n<br>  Concentrado\n<br> Nano\n<br> Revitalizador\n<br>  Antiacne\n<br><br> Qual desses você gostaria de saber mais?😊 ",
  serum:
    "Na linha Sérum temos os Seguintes produtos:<br>\n<br> Botox\n<br>Control\n<br>  Concentrado\n<br> Nano\n<br> Revitalizador\n<br>  Antiacne\n<br><br> Qual desses você gostaria de saber mais?😊 ",
  Sérum:
    "Na linha Sérum temos os Seguintes produtos:<br>\n<br> Botox\n<br>Control\n<br>  Concentrado\n<br> Nano\n<br>  Revitalizador\n<br> Antiacne\n<br><br> Qual desses você gostaria de saber mais?😊 ",
  Serum:
    "Na linha Sérum temos os Seguintes produtos:<br>\n<br>  Botox\n<br>Control\n<br>  Concentrado\n<br> Nano\n<br>  Revitalizador\n<br> Antiacne\n<br><br> Qual desses você gostaria de saber mais?😊 ",
  // Sessão dos Sérum (especificos)

  Botox:
    "Temos o Sérum Botox-like Com Argireline (50ML - R$ 154,00)<br><br>\nComposição: Argireline <br>\n <br><br>Efeito tensor imediato, Reduz rugas e linhas de expressão! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  botox:
    "Temos o Sérum Botox-like Com Argireline (50ML - R$ 154,00)<br>\nComposição: Argireline <br>\n Efeito tensor imediato, Reduz rugas e linhas de expressão! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  control:
    "Temos o Sérum OIL Control Redutor de Porosidade (30ML - R$ 105,90)<br><br>\nComposição: Sebonormine, Miniporyl, Asebiol, Niacinamida PC, Zinco, Vitamina B6 <br> Esse Sérum é ideal para peles oleosas, reduz a oleosidade e os poros dilatado! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  Control:
    "Temos o Sérum OIL Control Redutor de Porosidade (30ML - R$ 105,90)<br><br>\nComposição: Sebonormine, Miniporyl, Asebiol, Niacinamida PC, Zinco, Vitamina B6 <br> Esse Sérum é ideal para peles oleosas, reduz a oleosidade e os poros dilatado! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  CONTROL:
    "Temos o Sérum OIL Control Redutor de Porosidade (30ML - R$ 105,90)<br><br>\nComposição: Sebonormine, Miniporyl, Asebiol, Niacinamida PC, Zinco, Vitamina B6 <br> Esse Sérum é ideal para peles oleosas, reduz a oleosidade e os poros dilatado! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  Revitalizador:
    "Temos o Sérum Revitalizador Área de Olhos (15ML - R$ 71,00)<br><br>\nComposição: Vitamina C, Ácido Tranexâmico, Ácido Hialurôico Vetorizado, Meyanol, Resveratrol.<br> Esse Sérum é ideal para os seus olhos , tirando os sinais de olheira e trazendo mais vigor a região dos olhos! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  revitalizador:
    "Temos o Sérum Revitalizador Área de Olhos (15ML - R$ 71,00)<br><br>\nComposição: Vitamina C, Ácido Tranexâmico, Ácido Hialurôico Vetorizado, Meyanol, Resveratrol.<br> Esse Sérum é ideal para os seus olhos , tirando os sinais de olheira e trazendo mais vigor a região dos olhos! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  REVITALIZADOR:
    "Temos o Sérum Revitalizador Área de Olhos (15ML - R$ 71,00)<br><br>\nComposição: Vitamina C, Ácido Tranexâmico, Ácido Hialurôico Vetorizado, Meyanol, Resveratrol.<br> Esse Sérum é ideal para os seus olhos , tirando os sinais de olheira e trazendo mais vigor a região dos olhos! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  REVITALIZAR:
    "Temos o Sérum Revitalizador Área de Olhos (15ML - R$ 71,00)<br><br>\nComposição: Vitamina C, Ácido Tranexâmico, Ácido Hialurôico Vetorizado, Meyanol, Resveratrol.<br> Esse Sérum é ideal para os seus olhos , tirando os sinais de olheira e trazendo mais vigor a região dos olhos! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  Revitalizar:
    "Temos o Sérum Revitalizador Área de Olhos (15ML - R$ 71,00)<br><br>\nComposição: Vitamina C, Ácido Tranexâmico, Ácido Hialurôico Vetorizado, Meyanol, Resveratrol.<br> Esse Sérum é ideal para os seus olhos , tirando os sinais de olheira e trazendo mais vigor a região dos olhos! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  revitalizar:
    "Temos o Sérum Revitalizador Área de Olhos (15ML - R$ 71,00)<br><br>\nComposição: Vitamina C, Ácido Tranexâmico, Ácido Hialurôico Vetorizado, Meyanol, Resveratrol.<br> Esse Sérum é ideal para os seus olhos , tirando os sinais de olheira e trazendo mais vigor a região dos olhos! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  tonica:
    "Temos a Loção Tônica Hidratante (150ML - R$ 86,00)<br><br>\nComposição: Alantonina, Colágeno, Hydracomplex, Antiox vegetal.<br> É ideal para a hidratação! <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  tônica:
    "Temos a Loção Tônica Hidratante (150ML - R$ 86,00)<br><br>\nComposição: Alantonina, Colágeno, Hydracomplex, Antiox vegetal.<br> É ideal para a hidratação! <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  tonico:
    "Temos a Loção Tônica Hidratante (150ML - R$ 86,00)<br><br>\nComposição: Alantonina, Colágeno, Hydracomplex, Antiox vegetal.<br> É ideal para a hidratação! <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  tônico:
    "Temos a Loção Tônica Hidratante (150ML - R$ 86,00)<br><br>\nComposição: Alantonina, Colágeno, Hydracomplex, Antiox vegetal.<br> É ideal para a hidratação! <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  esfoliante:
    "Temos o Esfoliante Facial com Hamamelis (50G - R$ 49,00)<br><br>\nComposição: Hamamelis, Salviam Cristais de quartzo, Rice Exfoliator.<br> Esse Esfoliante é ideal para Controle Da Oleosidade e Deixará sua pele mais Macia. <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  // Segunda sessão dos Sérum (especificos)
  Concentrado:
    "Temos o Sérum Concentrado de Ácido Hialurônico (30ML - R$ 105,90)<br><br>\nComposição: Ácido Hialurôico, Hyaxel, Oligo Há, Niacinamida PC, D-pantenol, Hidroviton, Água Thermal.<br> Esse Sérum é ideal para hidratação profunda, melhora a elasticidade e firmeza da pele! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  concentrado:
    "Temos o Sérum Concentrado de Ácido Hialurônico (30ML - R$ 105,90)<br><br>\nComposição: Ácido Hialurôico, Hyaxel, Oligo Há, Niacinamida PC, D-pantenol, Hidroviton, Água Thermal.<br> Esse Sérum é ideal para hidratação profunda, melhora a elasticidade e firmeza da pele! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  CONCENTRADO:
    "Temos o Sérum Concentrado de Ácido Hialurônico (30ML - R$ 105,90)<br><br>\nComposição: Ácido Hialurôico, Hyaxel, Oligo Há, Niacinamida PC, D-pantenol, Hidroviton, Água Thermal.<br> Esse Sérum é ideal para hidratação profunda, melhora a elasticidade e firmeza da pele! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  "protetor solar":
    "Temos 3 opções:\n1. FPS 45 Gel Extra-Seco (R$83)\n2. FPS 60 Toque Seco (R$92.90)\n3. FPS 45 Bisnaga (R$55.90)\nTodos com Ácido Hialurônico!",
  // Mascara Rejuvenecedora
  mascara:
    "Temos o Sérum Concentrado de Ácido Hialurônico (30ML - R$ 105,90)<br><br>\nComposição: Ácido Hialurôico, Hyaxel, Oligo Há, Niacinamida PC, D-pantenol, Hidroviton, Água Thermal.<br> Esse Sérum é ideal para hidratação profunda, melhora a elasticidade e firmeza da pele! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  máscara:
    "Temos o Sérum Concentrado de Ácido Hialurônico (30ML - R$ 105,90)<br><br>\nComposição: Ácido Hialurôico, Hyaxel, Oligo Há, Niacinamida PC, D-pantenol, Hidroviton, Água Thermal.<br> Esse Sérum é ideal para hidratação profunda, melhora a elasticidade e firmeza da pele! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  nano: "Temos o Sérum Hidratante com Nano Vitamina C 20% (30ML - R$ 127,00)<br><br>\nComposição: Ácido Hialurôico, Nano Vitamina C 20%, Vitamina E, Nano Resveratrol, Ácido Ferúlico.<br> Esse Sérum é ideal para hidratação profunda, melhora a elasticidade e firmeza da pele! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  Nano: "Temos o Sérum Hidratante com Nano Vitamina C 20% (30ML - R$ 127,00)<br><br>\nComposição: Ácido Hialurôico, Nano Vitamina C 20%, Vitamina E, Nano Resveratrol, Ácido Ferúlico.<br> Esse Sérum é ideal para hidratação profunda, melhora a elasticidade e firmeza da pele! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  Nano: "Temos o Sérum Hidratante com Nano Vitamina C 20% (30ML - R$ 127,00)<br><br>\nComposição: Ácido Hialurôico, Nano Vitamina C 20%, Vitamina E, Nano Resveratrol, Ácido Ferúlico.<br> Esse Sérum é ideal para hidratação profunda, melhora a elasticidade e firmeza da pele! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  antiacne:
    "Temos o Sérum Antiacne Gestante/Lactante 30g (30G - R$ 71,00)<br><br>\nComposição: Azeloglicina, Nicotinamida, Lacto B Skinbiotics. <br> Esse Sérum é Ideal para previnir sua pele de Acne , trazendo vigor a sua face! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  Antiacne:
    "Temos o Sérum Antiacne Gestante/Lactante 30g (30G - R$ 71,00)<br><br>\nComposição: Azeloglicina, Nicotinamida, Lacto B Skinbiotics. <br> Esse Sérum é Ideal para previnir sua pele de Acne , trazendo vigor a sua face! <br><br> Caso queira voltar para sessão de Serum, digite: 'Sérum', ou  se quiser Voltar para sessão de produtos, digite: 'Produtos'.",
  unha:
    "Temos o Complexo Cabelos e Unhas (90 Doses - R$ 163,90)<br><br>\nComposição: Cistina, Paba, Levedo de Cerveja, Tiamina, Queratina, Pantotenato de Cálcio, Biotina. <br> Esse Complexo trará vigor e fortalecimento para seus cabelos e Unhas <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  unhas:
    "Temos o Complexo Cabelos e Unhas (90 Doses - R$ 163,90)<br><br>\nComposição: Cistina, Paba, Levedo de Cerveja, Tiamina, Queratina, Pantotenato de Cálcio, Biotina. <br> Esse Complexo trará vigor e fortalecimento para seus cabelos e Unhas <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  detox:
    "Temos o Complexo Detox IN (30 Doses - R$ 75,00)<br><br>\nComposição: Chlorella, Alcachofra, Boldo, Chá Verde, Carqueja, Cavalinha, Blueberry. <br> Esse Complexo Detox é um de nossos principais produtos que você precisa escolher , confira na aba de produtos <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  drenante:
    "Temos o Complexo Drenante Vegetal (30 Doses - R$ 49,00)<br><br>\nComposição: Carqueja, Persia Gratíssima, Alcachofra, Amora, Cavalinha, Chá Verde <br> Esse Complexo Drenante é um de nossos principais produtos que você precisa escolher , confira na aba de produtos <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  morosil:
    "Temos o Complexo Emagrecedor com Morosil (60 Doses - R$ 197,50)<br><br>\nComposição: Morosil, Garcinia Cambogia, Citrus, Fucoxantina, Capsiate, Picolinato de Cromo. <br> Esse Complexo Emagrecedor é um de nossos principais produtos que você precisa escolher , confira na aba de produtos <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  morosil:
    "Temos o Complexo Emagrecedor com Morosil (60 Doses - R$ 197,50)<br><br>\nComposição: Morosil, Garcinia Cambogia, Citrus, Fucoxantina, Capsiate, Picolinato de Cromo. <br> Esse Complexo Emagrecedor é um de nossos principais produtos que você precisa escolher , confira na aba de produtos <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  emagrecedor:
      "Temos o Complexo Emagrecedor com Pholiamagra (60 Doses - R$ 79,00)<br><br>\nComposição: Pholiamagra, Phaseolamin, Garcinia, Cambogia, Gymnema Silvestre, Picolinato de Cromo. <br> Esse Complexo Emagrecedor é um de nossos principais produtos que você precisa escolher , confira na aba de produtos <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  emagrecer:
      "Temos o Complexo Emagrecedor com Pholiamagra (60 Doses - R$ 79,00)<br><br>\nComposição: Pholiamagra, Phaseolamin, Garcinia, Cambogia, Gymnema Silvestre, Picolinato de Cromo. <br> Esse Complexo Emagrecedor é um de nossos principais produtos que você precisa escolher , confira na aba de produtos <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  protetor:
      "Temos o Complexo Protetor Solar Oral (30 Doses - R$ 82,00)<br><br>\nComposição: Pholiamagra, Phaseolamin, Garcinia, Cambogia, Gymnema Silvestre, Picolinato de Cromo. <br> Esse Complexo Emagrecedor é um de nossos principais produtos que você precisa escolher , confira na aba de produtos <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  estimulante:
      "Temos o Tintura Estimulante do Sono (100ML- R$ 60,00)<br><br>\nComposição: Melissa, Mulungu, Camomila, Maracujá. <br> Esse Estimulante é um de nossos principais produtos que você precisa escolher , confira na aba de produtos <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  digestiva:
      "Temos o Tintura Digestiva (100ML- R$ 60,00)<br><br>\nComposição: Coentro, Cardo Mariano, Erva Doce, Espinheira Santa. <br> Esse Tintura Digestiva é um de nossos principais produtos que você precisa escolher , confira na aba de produtos <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  imunidade:
      "Temos o Tintura Imunidade (100ML- R$ 60,00)<br><br>\nComposição: Equinácea, Alcaçuz, Eucalipto, Própolis. <br> Esse Tintura Imunidade é um de nossos principais produtos que você precisa escolher , confira na aba de produtos <br><br> Voltar para sessão de produtos, digite: 'Produtos'.",
  // Nutraceuticos

  // Produtos específicos (Capilar)
  "fluido barba":
    "Fluido Estimulante para Barba (30ml - R$71)\nComposição: Minoxidil + Fatores de Crescimento\nAjuda no crescimento dos fios!",
  "shampoo antiqueda":
    "Shampoo Antiqueda (150ml - R$82.50)\nComposição: Cafeína, Pantenol, Zinco\nReduz a queda em até 30 dias!",
  "óleo crescimento":
    "Blend de Óleos (50ml - R$82.90)\nComposição: Lavanda, Alecrim, Hortelã + Vitaminas\nEstimula folículos capilares!",

  // Produtos específicos (Corporal)
  "creme antiestrias":
    "Creme Anti-estrias (200ml - R$79.90)\nComposição: Colágeno, Rosa Mosqueta, Alantoína\nPrevine e trata estrias novas!",
  "gel esfoliante":
    "Gel Esfoliante Corporal (150g - R$75)\nComposição: Aloe Vera, Camomila, Microesferas\nRemove células mortas suavemente!",

  // Nutracêuticos
  "complexo anticelulite":
    "Complexo Anticelulite (60 doses - R$99)\nComposição: Chá Verde, Centella Asiática, Castanha da Índia\nReduz medidas em 8 semanas!",

  // Informações gerais
  preço: "Posso informar valores de qualquer produto! Qual você quer saber?",
  preco: "Posso informar valores de qualquer produto! Qual você quer saber?",
  entrega:
    "Entregamos em 7-10 dias úteis! Frete grátis para compras acima de R$150 🚚",
  pagamento: "Aceitamos:\n- PIX (5%)\n- Cartão (até 10x)",
  promoção:
    "Temos 10% OFF no Pix e frete grátis acima de R$500! Quer indicação de produtos?",
  promocao:
    "Temos 10% OFF no Pix e frete grátis acima de R$500! Quer indicação de produtos? Caso sim, digite: 'Indicações'",
  // aba de dicas
  Dicas:
    "Precisa de orientação sobre como cuidar da sua pele , Corpo ou manter os Resultados dos tratamento?\n <br> Escolha uma das opções abaixo:\n <br><br> 5. Pele <br> 6. Corpo <br> 7. Cabelo ",
  dicas:
    "Precisa de orientação sobre como cuidar da sua pele , Corpo ou manter os Resultados dos tratamento?\n <br> Escolha uma das opções abaixo:\n <br><br> 5. Pele <br> 6. Corpo <br> 7. Cabelo ",
  dica: "Precisa de orientação sobre como cuidar da sua pele , Corpo ou manter os Resultados dos tratamento?\n <br> Escolha uma das opções abaixo:\n <br><br> 5. Pele <br> 6. Corpo <br> 7. Cabelo ",
  // Tipo de pele
  pele: " Tipo de Pele <br><br> 8. Seca\n <br> 9. Oleosa\n <br> 10. Mista\n <br> 11. Rejuvenescimento \n <br> 12. Acneica",
  5: "Tipo de Pele <br><br> 8. Seca\n <br> 9. oleosa\n <br> 10. Mista\n <br> 11. Rejuvenescimento \n <br> 12. Acneica",
  // Pele Seca
  8: "Para pele Seca, recomendo: ● Água Micelar Prebiótica, ● Sabonete Facial Hidratante, ● Loção Tônica Hidratante, ● Hidrantante Facial Vitaminado 10% VIT C <br><br> Recomendação: Uso Diário durante a manhã e noite, Uso de Protetor Solar. <br><br> Para adquirir esses produtos vá até a aba de Produtos. <br><br> Posso Ajudar em algo mais? Sim ou Não? 😊",
  seca: "Para pele Seca, recomendo: ● Água Micelar Prebiótica, ● Sabonete Facial Hidratante, ● Loção Tônica Hidratante, ● Hidrantante Facial Vitaminado 10% VIT C, ● Máscara Facial Hidratante Com A.H <br><br> Recomendação: Uso Diário durante a manhã e noite,Uso de Prótetor Sólar, E para a máscara uso uma vez por semana. <br><br> Para adquirir esses produtos vá até a aba de Produtos. <br><br> Posso Ajudar em algo mais? Sim ou Não? 😊",
  9: "Para pele Oleosa, recomendo: ● Sabonete Regenerador e Hidratante, ● Loção Tônica Hidratante, ● Esfoliante Facial com Hamamelis, ● Hidratante Matificante, ● Sérum Para controle de oleosidade <br><br> Recomendação: Uso Diário, Uso de Prótetor Sólar. <br><br> Para adquirir esses produtos vá até a aba de Produtos. <br><br> Posso Ajudar em algo mais? Sim ou Não? 😊",
  oleosa:
    "Para pele Oleosa, recomendo: ● Sabonete Regenerador e Hidratante, ● Loção Tônica Hidratante, ● Esfoliante Facial com Hamamelis, ● Hidratante Matificante, ● Sérum Para controle de oleosidade <br><br> Recomendação: Uso Diário, Uso de Prótetor Sólar. <br><br> Para adquirir esses produtos vá até a aba de Produtos. <br><br> Posso Ajudar em algo mais? Sim ou Não? 😊",
  10: "Para pele Mista, recomendo: ● Sabonete Peles Mistas, ● Loção Tônica Hidratante, ● Esfoliante Facial com Hamamelis, ● Hidratante Facial 10%, ● Sérum Para controle de oleosidade <br><br> Recomendação: Uso Diário Manhã e Noite, Uso de Prótetor Sólar. <br><br> Para adquirir esses produtos vá até a aba de Produtos. <br><br> Posso Ajudar em algo mais? Sim ou Não? 😊",
  mista:
    "Para pele Mista, recomendo: ● Sabonete Peles Mistas, ● Loção Tônica Hidratante, ● Esfoliante Facial com Hamamelis, ● Hidratante Facial 10%, ● Sérum Para controle de oleosidade <br><br> Recomendação: Uso Diário Manhã e Noite, Uso de Prótetor Sólar. <br><br> Para adquirir esses produtos vá até a aba de Produtos. <br><br> Posso Ajudar em algo mais? Sim ou Não? 😊",
  11: "Para pele Mista, recomendo: Espuma Iluminadora com Vitamina C, Loção Tônica Iluminadora com Vitamina C, Esfoliante Facial com Hamamelis, Sérum Hidratante Rejuvenescedor Noturno<br><br> Recomendação: Uso Diário Manhã e Noite, Uso de Prótetor Sólar. <br><br> Para adquirir esses produtos vá até a aba de Produtos. <br><br> Posso Ajudar em algo mais? Sim ou Não? 😊",
  12: "Para pele Rejuvenescimento, recomendo: Espuma Iluminadora com Vitamina C, Loção Tônica Iluminadora com Vitamina C, Esfoliante Facial com Hamamelis, Sérum Hidratante Rejuvenescedor Noturno<br><br> Recomendação: Uso Diário Manhã e Noite, Uso de Prótetor Sólar. <br><br> Para adquirir esses produtos vá até a aba de Produtos. <br><br> Posso Ajudar em algo mais? Sim ou Não? 😊",
  Rejuvenescimento:
    "Para pele Rejuvenescimento, recomendo: Espuma Iluminadora com Vitamina C, Loção Tônica Iluminadora com Vitamina C, Esfoliante Facial com Hamamelis, Sérum Hidratante Rejuvenescedor Noturno<br><br> Recomendação: Uso Diário Manhã e Noite, Uso de Prótetor Sólar. <br><br> Para adquirir esses produtos vá até a aba de Produtos. <br><br> Posso Ajudar em algo mais? Sim ou Não? 😊",
  rejuvenescimento:
    "Para pele Rejuvenescimento, recomendo: Espuma Iluminadora com Vitamina C, Loção Tônica Iluminadora com Vitamina C, Esfoliante Facial com Hamamelis, Sérum Hidratante Rejuvenescedor Noturno<br><br> Recomendação: Uso Diário Manhã e Noite, Uso de Prótetor Sólar. <br><br> Para adquirir esses produtos vá até a aba de Produtos. <br><br> Posso Ajudar em algo mais? Sim ou Não? 😊",
  13: "Para pele Acneica, recomendo: Sabonete Secativo, Loção Tônica Secativa, Máscara Facial Secativa, Caneta Secativa, Hidratante Pele Acneica com Melaleuca, Sérum para controle de Acne<br><br> Recomendação: Usar e acordo com as recomendações da profissional. <br><br> Para adquirir esses produtos vá até a aba de Produtos. <br><br> Posso Ajudar em algo mais? Sim ou Não? 😊",
  Acneica:
    "Para pele Acneica, recomendo: Sabonete Secativo, Loção Tônica Secativa, Máscara Facial Secativa, Caneta Secativa, Hidratante Pele Acneica com Melaleuca, Sérum para controle de Acne<br><br> Recomendação: Usar e acordo com as recomendações da profissional. <br><br> Para adquirir esses produtos vá até a aba de Produtos. <br><br> Posso Ajudar em algo mais? Sim ou Não? 😊",
  acneica:
    "Para pele Acneica, recomendo: Sabonete Secativo, Loção Tônica Secativa, Máscara Facial Secativa, Caneta Secativa, Hidratante Pele Acneica com Melaleuca, Sérum para controle de Acne<br><br> Recomendação: Usar e acordo com as recomendações da profissional. <br><br> Para adquirir esses produtos vá até a aba de Produtos. <br><br> Posso Ajudar em algo mais? Sim ou Não? 😊",
  // Indicações

  // Default
  default:
    "Desculpa! não entendi... Verifique se digitou a informação correta! <br><br> Posso te ajudar com o Seguinte:\n<br><br> ● Produtos <br> ● Agendamentos <br> ● Dúvidas de Compras <br> ● Dicas de Cuidado  <br><br> O que você precisa? <br> Escolha uma das opções😊",
};

/// Funções do chat
// Funções do chat
function toggleChat() {
  const chat = document.getElementById("chatbot");
  chat.classList.toggle("active");
}

// Função corrigida para limpar o chat
function clearChat() {
  const chat = document.getElementById("chat-messages");
  const welcomeMessage = document.getElementById("welcome-message");

  // Cria um novo array apenas com os elementos que devem permanecer
  const messagesToKeep = [];
  if (welcomeMessage) {
    messagesToKeep.push(welcomeMessage);
  }

  // Remove todas as mensagens do chat
  while (chat.firstChild) {
    chat.removeChild(chat.firstChild);
  }

  // Adiciona de volta apenas as mensagens que devem permanecer
  messagesToKeep.forEach((message) => {
    chat.appendChild(message);
  });

  // Atualiza o localStorage
  localStorage.setItem("chatHistory", chat.innerHTML);

  // Força o scroll para baixo
  chat.scrollTop = chat.scrollHeight;
}

// Salva o estado do chat no localStorage
function saveChatState() {
  const chat = document.getElementById("chat-messages");
  localStorage.setItem("chatHistory", chat.innerHTML);
}

// Carrega o histórico do chat
function loadChatHistory() {
  const savedChat = localStorage.getItem("chatHistory");
  const chat = document.getElementById("chat-messages");

  if (savedChat) {
    chat.innerHTML = savedChat;

    // Garante que a mensagem de boas-vindas sempre exista
    if (!document.getElementById("welcome-message")) {
      const welcomeDiv = document.createElement("div");
      welcomeDiv.className = "message bot";
      welcomeDiv.id = "welcome-message";
      welcomeDiv.innerHTML = `
        <img src="assets/img/avatar.png" alt="Bot" class="bot-avatar">
        <p>
          Olá! Sou a Duda 😊, assistente virtual da Lumine. Estou aqui para
          te ajudar com:<br><br>
          ● Produtos <br>
          ● Agendamentos <br>
          ● Dúvidas de Compras <br>
          ● Dicas de Cuidados <br><br>
          Esolha uma das opções😊
        </p>
      `;
      chat.prepend(welcomeDiv);
    }
  } else {
    // Se não há histórico salvo, cria a mensagem inicial
    const welcomeDiv = document.createElement("div");
    welcomeDiv.className = "message bot";
    welcomeDiv.id = "welcome-message";
    welcomeDiv.innerHTML = `
      <img src="assets/img/avatar.png" alt="Bot" class="bot-avatar">
      <p>
        Olá! Sou a Duda 😊, assistente virtual da Lumine. Estou aqui para
        te ajudar com:<br><br>
        ● Produtos <br>
        ● Agendamentos <br>
        ● Dúvidas de Compras <br>
        ● Dicas de Cuidados <br><br>
        Esolha uma das opções😊
      </p>
    `;
    chat.appendChild(welcomeDiv);
  }
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim().toLowerCase();

  if (message === "") return;

  addMessage(message, "user");
  input.value = "";

  // Resposta inteligente
  setTimeout(() => {
    let resposta = getResposta(message);

    // Respostas para termos específicos de beleza
    if (message.includes("5")) {
      resposta =
        "Tipo de Pele <br><br> 8. Seca\n <br> 9. Oleosa\n <br> 10. Mista\n <br> 11. Rejuvenescimento\n <br> 12. Acneica";
    } else if (message.includes("cabelo")) {
      resposta =
        "Temos a linha de Antiqueda e Estímulo de Crescimento. Quer Saber mais? Digite:'5'";
    }
    // Respostas para termos específicos de beleza
    if (message.includes("pele")) {
      resposta =
        "Tipo de Pele <br><br> 8. Seca\n <br> 9. Oleosa\n <br> 10. Mista\n <br> 11. Rejuvenescimento \n <br> 12. Acneica";
    } else if (message.includes("cabelo")) {
      resposta =
        "Temos a linha de Antiqueda e Estímulo de Crescimento. Quer Saber mais? Digite:'5'";
    }

    addMessage(resposta, "bot");
    saveChatState(); // Salva após cada nova mensagem
  }, 800 + Math.random() * 500);
}

function addMessage(text, sender) {
  const chat = document.getElementById("chat-messages");
  const messageDiv = document.createElement("div");
  messageDiv.className = `message ${sender}`;

  if (sender === "bot") {
    messageDiv.innerHTML = `
      <img src="assets/img/avatar.png" alt="Bot" class="bot-avatar">
      <p>${text}</p>
    `;
  } else {
    messageDiv.innerHTML = `<p>${text}</p>`;
  }

  chat.appendChild(messageDiv);
  chat.scrollTop = chat.scrollHeight;
}

function getResposta(message) {
  for (const [key, value] of Object.entries(respostas)) {
    if (message.includes(key)) {
      return value;
    }
  }
  return respostas.default;
}

// Event listeners
document
  .getElementById("user-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
  });

// Inicialização
window.onload = function () {
  document.getElementById("chatbot").classList.remove("active");
  loadChatHistory(); // Carrega o histórico ao iniciar

  // Pré-carrega a imagem do avatar
  const img = new Image();
  img.src = "assets/img/avatar.png";
};
