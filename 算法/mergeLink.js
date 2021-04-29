function ListNode(x) {
    this.val = x;
    this.next = null;
}

function Merge1(pHead1, pHead2) {
    // write code here
    // 单调不减 可以理解 等于或者大于递增
    let p1 = pHead1,
        p2 = pHead2;
    let result = {};
    // 保留头指针
    let kk = result;
    while (p1 !== null && p2 !== null) {
        //         console.log(p1,p2)
        if (p1.val <= p2.val) {
            // 左边小
            kk.next = p1;
            p1 = p1.next
        } else {
            kk.next = p2;
            p2 = p2.next
        }
        console.log(p1, p2)
    }

    console.log('test:', result, kk)

    console.log('go:', p1, p2)
    console.log('go1:', pHead1, pHead2)
    if (p1) {
        kk.next = p1;
    }
    if (p2) {
        kk.next = p2;
    }
    console.log(kk)
    return result.next

}

function Merge(pHead1, pHead2) {
    // write code here
    let vhead = {};
    let cur = vhead;
    while (pHead1 && pHead2) {
        if (pHead1.val <= pHead2.val) {
            cur.next = pHead1;
            pHead1 = pHead1.next;
        } else {
            cur.next = pHead2;
            pHead2 = pHead2.next;
        }
        cur = cur.next;
    }
    cur.next = pHead1 ? pHead1 : pHead2;
    return vhead.next;
}

let pre = new ListNode(1);
pre.next = new ListNode(3);
pre.next.next = new ListNode(5)
console.log('pre:', pre)

let last = new ListNode(2);
last.next = new ListNode(4);
last.next.next = new ListNode(6)
console.log('last:', last)
console.log(Merge(pre, last))
module.exports = {
    Merge: Merge
};