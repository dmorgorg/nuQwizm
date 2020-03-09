let QWIZM = QWIZM || {};
QWIZM.question = QWIZM.question || {};

QWIZM.question.qES00MR006 = (qNumber) => {
    let qId = 1000117, // question ID number, unique to this question
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
        lcrng = new utils.LCRNG(seed);

    //inputs
    let OA = sd(lcrng.getNext(0.5, 2.5, 0.1), sigDigs),
        multOB = lcrng.getNext(1.8, 2.2, 0.05),
        OB = sd(Math.round(multOB * OA / 0.005) * 0.005, sigDigs),
        multAC = lcrng.getNext(1, 1.4, 0.05),
        AC = sd(Math.round(multAC * OA / 0.005) * 0.005, sigDigs),
        multBC = lcrng.getNext(1.7, 1.9, 0.05),
        BC = sd(Math.round(multBC * OA / 0.005) * 0.005, sigDigs);

    //calcs
    let AB = Math.sqrt(OA ** 2 + OB ** 2),
        angleACB = acos((AC ** 2 + BC ** 2 - AB ** 2) / (2 * AC * BC)),
        angleABC = asin(AC * sin(angleACB) / AB),
        angleOBC = atan(OA / OB),
        phi = angleABC + angleOBC,
        theta = 180 - phi - angleACB;

    //stringify
    OA = stringify(OA, sigDigs);
    OB = stringify(OB, sigDigs);
    AC = stringify(AC, sigDigs);
    AB = stringify(AB, sigDigs);
    angleACB = stringify(angleACB, sigDigs);
    angleABC = stringify(angleABC, sigDigs);
    angleOBC = stringify(angleOBC, sigDigs);
    phi = stringify(phi, sigDigs);
    theta = stringify(theta, sigDigs);



    let statement = `A typical question in Statics is to determine the tension in rods !$AC!$, !$BC!$ and !$CW!$.To solve this, we need to find the angles !$\\theta!$ and !$\\phi!$. Follow the steps outlined below to find these angles:<p>
    <ol>
        <li>Determine length !$AB!$</li>
        <li>Determine !$\\angle ACB!$</li>
        <li>Determine !$ \\angle ABC!$</li>
        <li>Determine !$\\angle OBA !$</li>
        <li>Determine !$\\phi!$</li>
        <li>Determine !$\\theta!$</li>
    </ol>
    Inputs: !$OA!$ = ${OA} m, !$OB!$ = ${OB} m, !$AC!$ = ${AC}&nbsp;m, !$BC%!$&nbsp;=&nbsp;${BC}&nbsp;m<p>    
    <p>    
   `;

    let img = `../../images/math06.png`;


    return `
    <div class='statement width50'><h3>Q${qNumber}</h3>: ${statement}<br>
    Ans: !$AB!$ = ${AB} cm, !$\\angle ACB!$ = ${angleACB}&deg;, !$\\angle ABC!$ = ${angleABC}&deg;, !$\\angle OBC!$ = ${angleOBC}&deg;, !$\\phi = ${phi}^\\circ !$, !$\\theta!$ = ${theta}&deg;
    </div>
    <div class='image width45'><img src= ${img}></div>`;
};