import createStatementData from "./createStatementData.js";

function statement(invoice, plays) {
    return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data, plays) {
    let result = '청구 내역 (고객명: S{data.customer})\n';

    for (let perf of data.performances) {
        // 청구 내역을 출력한다.
        result += ' ${data.play.name}: ${usd(perf.amount)} (${perf.audience}) \n';
    }

    result += '총액: S{usd(data.totalAmount)}In';
    result += '적립 포인트: ${data.totalVolumeCredits}점ln';
    return result;

    function usd(aNumber) {
        return new Intl.NumberFormat("en-US",
                            { style: "currency", currency: "USD", 
                                minimumFractionDigits: 2 }).format(aNumber/100);
    }
}