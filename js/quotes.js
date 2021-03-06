const quotes = [
    {
      quote: "마술은 마음속에 있다. 마음이 지옥을 천국으로 만들 수도 있고, 천국을 지옥으로 만들 수도 있다. 자신의 마음을 지옥으로 만들고 싶은 사람은 아마 없을 것이다. 마음을 천국으로 만들고 싶은 이들이여! 자기 마음속에 마술을 부려 즐겁고 찬란한 하루를 만들어라.",
      author: "토마스 에디슨",
    },
    {
      quote: "인생은 될 대로 되는 것이 아니라 생각대로 되는 것이다. 자신이 어떤 마음을 먹느냐에 따라 모든 것이 결정된다. 사람은 생각하는 대로 산다. 생각하지 않고 살아가면 살아가는 대로 생각한다.",
      author: "조엘 오스틴",
    },
    {
      quote:
        "우리가 어떤 일을 감히 하지 못하는 것은 그 일이 너무 어렵기 때문이 아니라 어렵다는 생각에 사로잡혀 그 일을 시도하지 않기 때문이다.",
      author: "세네카",
    },
    {
      quote: "우리는 우리가 행복해지려고 마음먹은 만큼 행복해질 수 있다. 우리를 행복하게 만드는 것은 우리를 둘러싼 환경이나 조건이 아니라, 늘 긍정적으로 세상을 바라보며 아주 작은 것에서부터 행복을 찾아내는 우리 자신의 생각이다. 행복해지고 싶으면 행복하다고 생각하라.",
      author: "에이브러험 링컨",
    },
    {
      quote: "믿음은 강력한 영향력을 행사한다. 우리의 뇌는 우리가 믿고 기대하는 방향으로 작동한다. 뇌가 작동하기 시작하면 신체는 그 믿음이 사실인 것처럼 반응한다. 실제로 목이 마르거나 귀가막히고, 병이 나거나 건강해지는 경험을 하는 것이다.",
      author: "허버트 벤슨",
    },
    {
      quote: "오늘은 어제 생각한 결과이다. 우리의 내일은 오늘 무슨 생각을 하느냐에 달려 있다. 실패한 사람들의 생각은 생존에, 평범한 사람들은 현상유지에, 성공한 사람들은 생각이 발전에 집중되어 있다.",
      author: "존 맥스웰",
    },
    {
      quote: "만일 당신이 패배할 것이라 생각하면, 당신은 그럴 것이다. 만일 당신이 도전하지 못하리라 생각한다면, 당신은 못할 것이다. 만일 당신이 스스로 뛰어나다고 생각한다면, 당신은 그런 것이다. 세상을 살면서 우리는 성공이란 한 사람의 의지에서 비롯된다는 사실을 알게 된다. 그것은 모두 마음의 자세에 달려 있다.",
      author: "월터 D. 윈틀",
    },
    {
      quote: "세상에는 두 종류의 사람이 존재한다. 변명하는 사람과 결과를 얻는 사람이 바로 그것이다. 변명형 인간은 일을 수행하지 못한 이유를 찾지만 결과형 인간은 일을 해야 하는 이유를 찾는다. 반응하는 사람이 아니라 창조하는 사람이 되어라.",
      author: "앨런 코헨",
    },
    {
      quote: "게임은 어디에서나 일어난다. 운동장 뒤뜰, 사무실, 교실, 식당 등등. 그러나 승리가 이루어지는 곳은 단 한 곳뿐이다. 바로 승자의 마음속이다.",
      author: "피터 템즈",
    },
    {
      quote: "태도는 사소한 것이지만, 그것이 만드는 차이는 엄청나다. 즉 어떤 마음가짐을 갖느냐가 어떤 일을 하느냐보다 더 큰 가치를 만들 수 있다.",
      author: " 윈스턴 처칠",
    },
  ];
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;