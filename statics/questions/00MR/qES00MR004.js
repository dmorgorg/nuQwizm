"use strict";

var QWIZM = QWIZM || {};
QWIZM.question = QWIZM.question || {};

QWIZM.question.qES00MR004 = function (qNumber) {
  var qId = 1000039; // question ID number, unique to this question 
  // common for import?

  var uId = QWIZM.state.uId,
      sd = QWIZM.methods.toSigDigs,
      stringify = QWIZM.methods.stringify,
      sin = utils.sin,
      cos = utils.cos,
      asin = utils.asin,
      acos = utils.acos,
      tan = utils.tan,
      atan = utils.atan,
      thisQuiz = QWIZM.state.thisQuiz,
      thisQuestion,
      ov = QWIZM.methods.overlayVariable,
      arrayCount = 0,
      seed = qId > uId ? qId % uId : uId === qId ? uId : uId % qId,
      lcrng = new utils.LCRNG(seed); //inputs

  var ABinit = sd(lcrng.getNext(400, 600, 5)),
      BCmult = sd(lcrng.getNext(1.35, 1.65, 0.025)),
      CDmult = sd(lcrng.getNext(1.6, 1.9, 0.025)),
      DEmult = sd(lcrng.getNext(0.775, 0.975, 0.025)),
      BFmult = sd(lcrng.getNext(1.35, 1.65, 0.025)),
      AB = Math.round(ABinit / 5) * 5,
      BC = Math.round(AB * BCmult / 5) * 5,
      CD = Math.round(AB * CDmult / 5) * 5,
      DE = Math.round(AB * DEmult / 5) * 5,
      BF = Math.round(AB * BFmult / 5) * 5,
      strain = lcrng.getNext(1.5, 2.0, 0.05),
      deltaDE1 = DE * strain / 1000,
      dA = stringify(deltaDE1 * (+AB + BC) / CD); //calcs

  var deltaBF = dA * BC / (+AB + BC),
      deltaDE = -dA * CD / (+AB + BC); //stringify

  dA = stringify(dA);
  deltaBF = stringify(deltaBF);
  deltaDE = stringify(deltaDE);
  var statement = "!$ABCD!$ is a rigid plate, able to rotate about a pinned connection at !$C!$. !$ABCD!$ is held in position by linkages !$BF!$ and !$DE!$. When force !$P!$ is applied at !$A!$, !$A!$ moves rightwards a distance of ".concat(dA, " mm as plate !$ABCD!$ rotates about !$C!$. !$BF!$ increases in length (deforms) but can be assumed to remain horizontal. !$DE!$ decreases in length (its deformation is negative) but remains vertical. <p>\n        Determine the deformation !$\\delta_{BF}!$ in !$BF!$ and the deformation !$\\delta_{DE}!$ in !$DE!$."),
      img = "../../images/00MR/00MR04.png",
      iV1 = ov({
    input: AB + ' mm',
    left: 34,
    top: 19
  }),
      iV2 = ov({
    input: BC + ' mm',
    left: 34,
    top: 48
  }),
      iV3 = ov({
    input: CD + ' mm',
    left: 67,
    top: 80.25
  });

  if (!thisQuiz[qNumber]) {
    thisQuiz[qNumber] = [];
    thisQuestion = thisQuiz[qNumber]; // thisQuiz.push(questionPart)

    thisQuestion[arrayCount++] = ''; // thisQuiz.push(questionPart)

    thisQuestion[arrayCount++] = {
      partStatement: "!$ \\delta_{BF} !$",
      units: 'mm',
      marks: 5,
      correctSoln: deltaBF
    };
    thisQuestion[arrayCount++] = {
      partStatement: "!$ \\delta_{DE} !$",
      units: 'mm',
      marks: 5,
      correctSoln: deltaDE
    };
  }

  return "<div class='statement width60 taleft'><h3>Q".concat(qNumber, "</h3>: ").concat(statement, "</div>\n    <div class='image width45'><img src= ").concat(img, ">\n    ").concat(iV1, "\n    ").concat(iV2, "\n    ").concat(iV3, "\n    </div>\n    <form autocomplete=\"off\"> <div class='parts width40'>").concat(QWIZM.methods.questionParts(qNumber), "</div></form>");
};