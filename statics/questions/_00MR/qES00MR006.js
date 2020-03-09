"use strict";

var QWIZM = QWIZM || {};
QWIZM.question = QWIZM.question || {};

QWIZM.question.qES00MR006 = function (qNumber) {
  var qId = 1000117,
      // question ID number, unique to this question
  uId = QWIZM.state.uId,
      sd = utils.toSigDigs,
      sin = utils.sin,
      cos = utils.cos,
      asin = utils.asin,
      acos = utils.acos,
      tan = utils.tan,
      atan = utils.atan,
      stringify = utils.stringify,
      sigDigs = QWIZM.quiz.sigDigs,
      seed = qId > uId ? qId % uId : uId === qId ? uId : uId % qId,
      lcrng = new utils.LCRNG(seed); //inputs

  var OA = sd(lcrng.getNext(0.5, 2.5, 0.1), sigDigs),
      multOB = lcrng.getNext(1.8, 2.2, 0.05),
      OB = sd(Math.round(multOB * OA / 0.005) * 0.005, sigDigs),
      multAC = lcrng.getNext(1, 1.4, 0.05),
      AC = sd(Math.round(multAC * OA / 0.005) * 0.005, sigDigs),
      multBC = lcrng.getNext(1.7, 1.9, 0.05),
      BC = sd(Math.round(multBC * OA / 0.005) * 0.005, sigDigs); //calcs

  var AB = Math.sqrt(Math.pow(OA, 2) + Math.pow(OB, 2)),
      angleACB = acos((Math.pow(AC, 2) + Math.pow(BC, 2) - Math.pow(AB, 2)) / (2 * AC * BC)),
      angleABC = asin(AC * sin(angleACB) / AB),
      angleOBC = atan(OA / OB),
      phi = angleABC + angleOBC,
      theta = 180 - phi - angleACB; //stringify

  OA = stringify(OA, sigDigs);
  OB = stringify(OB, sigDigs);
  AC = stringify(AC, sigDigs);
  AB = stringify(AB, sigDigs);
  angleACB = stringify(angleACB, sigDigs);
  angleABC = stringify(angleABC, sigDigs);
  angleOBC = stringify(angleOBC, sigDigs);
  phi = stringify(phi, sigDigs);
  theta = stringify(theta, sigDigs);
  var statement = "A typical question in Statics is to determine the tension in rods !$AC!$, !$BC!$ and !$CW!$.To solve this, we need to find the angles !$\\theta!$ and !$\\phi!$. Follow the steps outlined below to find these angles:<p>\n    <ol>\n        <li>Determine length !$AB!$</li>\n        <li>Determine !$\\angle ACB!$</li>\n        <li>Determine !$ \\angle ABC!$</li>\n        <li>Determine !$\\angle OBA !$</li>\n        <li>Determine !$\\phi!$</li>\n        <li>Determine !$\\theta!$</li>\n    </ol>\n    Inputs: !$OA!$ = ".concat(OA, " m, !$OB!$ = ").concat(OB, " m, !$AC!$ = ").concat(AC, "&nbsp;m, !$BC%!$&nbsp;=&nbsp;").concat(BC, "&nbsp;m<p>    \n    <p>    \n   ");
  var img = "../../images/math06.png";
  return "\n    <div class='statement width50'><h3>Q".concat(qNumber, "</h3>: ").concat(statement, "<br>\n    Ans: !$AB!$ = ").concat(AB, " cm, !$\\angle ACB!$ = ").concat(angleACB, "&deg;, !$\\angle ABC!$ = ").concat(angleABC, "&deg;, !$\\angle OBC!$ = ").concat(angleOBC, "&deg;, !$\\phi = ").concat(phi, "^\\circ !$, !$\\theta!$ = ").concat(theta, "&deg;\n    </div>\n    <div class='image width45'><img src= ").concat(img, "></div>");
};