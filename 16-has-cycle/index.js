// letcode 141
// 给定一个链表，判断链表中是否有环。
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。

// 使用快慢指针，如果他们在一个环中，迟早会相遇，不过这个方法是挺巧妙，测出来的执行时间并不短
var hasCycle = function(head) {
  if (head === null || head.next === null) {
    return false;
  }
  var slow = head;
  var fast = head.next;
  while (fast && fast.next) {
    if (fast === slow) {
      return true;
    }
    fast = fast.next && fast.next.next ? fast.next.next : null;
    slow = slow.next;
  }
  return false;
};

// letcode 142
// 给定一个链表，返回链表开始入环的第一个节点。 如果链表无环，则返回 null
// 为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。 如果 pos 是 -1，则在该链表中没有环。
// 说明：不允许修改给定的链表。
// https://blog.csdn.net/qq_41231926/article/details/86105434
// 差值是距离差的整数倍，所以再相遇的点就是初始点的整数倍，就是初始点的位置
var detectCycle = function(head) {
  if (head === null || head.next === null) {
    return null;
  }
  var virtualHead = new ListNode(-1);
  virtualHead.next = head;

  var slow = virtualHead;
  var fast = virtualHead;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }

  slow = virtualHead;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast && fast.next ? fast.next : null;
  }

  return slow;
};
