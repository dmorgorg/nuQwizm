let QWIZM = QWIZM || {};
QWIZM.question = QWIZM.question || {};

QWIZM.question.qES00MR010 = (qNumber) => {
    let qId = 1000303, // question ID number, unique to this question
        uId = QWIZM.state.uId,
        sd = utils.toSigDigs,
        sigDigs = QWIZM.quiz.sigDigs,
        seed = qId > uId ? qId % uId : uId === qId ? uId : uId % qId,
        lcrng = new utils.LCRNG(seed),
        x = lcrng.getNext(2, 4, 0.025),
        y1 = lcrng.getNext(0.7, 0.8, 0.01) * x,
        y2 = lcrng.getNext(0.45, 0.55, 0.01) * y1;

    // console.log(y1);
    // console.log(y1.toPrecision(4));
    // console.log((Number(y1.toPrecision(8))).toPrecision(4));

    //sdify and stringify
    // x = sd(x, sigDigs);
    // y1 = sd(y1, sigDigs);
    // y2 = sd(y2, sigDigs)

    return `<div class='statement'><h3>Q${qNumber} Math Method Testing</h3>
    Generated by the random number generator (should be 1.5575 but binary floating point error...)
    <p> y1 = ${y1}<br\>
    y1.toPrecision(4) => ${y1.toPrecision(4)} <br\>
    utils.toSigDigs(y1, 3) => ${sd(y1, 3)}  <br\>
    utils.toSigDigs(8.5554999999, 3) => ${sd(8.5554999999, 3)}  <br\>
    \\\\ note that method increases sigdigs by one if leading digit is a one; this is desired behaviour
    <p>Test with other toPrecision() gotchas:<p>
    8.5575.toPrecision(4) => ${8.5575.toPrecision(4)} <br\>
    8.5585.toPrecision(4) => ${8.5585.toPrecision(4)} \\\\ rounding to odd?<br\>
    8.5555.toPrecision(4) => ${8.5555.toPrecision(4)} \\\\ no, not rounding to odd<br\>
    utils.toSigDigs(8.5575, 3) => ${sd(8.5575, 4)}  <br\>
    utils.toSigDigs(8.5585, 3) => ${sd(8.5585, 4)}  <br\>
    utils.toSigDigs(8.5555, 3) => ${sd(8.5555, 4)}  <p>
    11.995.toPrecision(4) => ${11.995.toPrecision(4)} <br\>
    19.995.toPrecision(4) => ${19.995.toPrecision(4)} <br\>
    utils.toSigDigs(11.995, 3) => ${sd(11.995, 3)}  <br\>
    utils.toSigDigs(19.995, 3) => ${sd(19.995, 3)}  <br\>
    utils.stringify(11.995, 3) => ${utils.stringify(11.995, 3)}  <br\>
    utils.stringify(19.995, 3) => ${utils.stringify(19.995, 3)}  <p>
    11.9950000000001.toPrecision(4) => ${11.9950000000001.toPrecision(4)} <br\>
    19.9950000000001.toPrecision(4) => ${19.9950000000001.toPrecision(4)} // not a problem unless 5 is last digit? <br\>
    utils.stringify(19.9950000000001, 3) => ${utils.stringify(19.9950000000001, 3)}<p>
    utils.toSigDigs(-8.5575, 3) => ${sd(-8.5575, 3)}  <br\>
    utils.toSigDigs(-8.575, 3) => ${sd(-8.575, 3)}  <br\>
    utils.stringify(-19.9950000000001, 3) => ${utils.stringify(-19.9950000000001, 3)}
    utils.toSigDigs(-19.9950000000001, 3) => ${sd(-19.9950000000001, 3)}<br\>
    -19.9950000000001.toPrecision(4) => ${-19.9950000000001.toPrecision(4)}<br\>
    -1.5575.toPrecision(4) => ${-1.5575.toPrecision(4)}
    -1.557499999999999999999999.toPrecision(4) => ${-1.557499999999999999999999.toPrecision(4)}
    `;

};