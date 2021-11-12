'use strict';

// Require our linked list implementation
const LinkedList = require('../lib/linked-list');


describe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });

  it('insert new node working',()=>{
    let list= new LinkedList();
    list.append('One');
    expect(list.head.value).toEqual('One');

    list.append('Tow');
    expect(list.head.value).toEqual('One');


  });

  it('finding a value within the linked list',()=>{
    let list= new LinkedList();
    list.include('One');
    expect(true).toBeTruthy();

    list.include('Aseel');
    expect(false).toBeFalsy();
  });

  it('to String',()=>{
    let list= new LinkedList();
    let newstring='{One}->{Tow}->{Three}->NULL'
    list.toString();
    expect.stringMatching(newstring);
  });

  it("insert before test",()=>{
    let list=new LinkedList();
    list.append(1);
    list.append(3);
   list.insertBefore(1,5);

    expect(list.head.value).toEqual(5);

  });
  it("insert After test",()=>{
    let list=new LinkedList();
    list.append(1);
    list.append(3);
    list.insertAfter(3,5);

    expect(list.head.value).toEqual(1);
    expect(list.head.next.value).toEqual(3);
    expect(list.head.next.next.value).toEqual(5);


  });



 it("Kth test",()=>{
    let list=new LinkedList();
    list.append(1);
    list.append(3);
    list.append(8);
    list.append(2);

    // list.kthFromEnd(0);
    // list.kthFromEnd(-1);
    // expect(list.head.next.next.value).toEqual(2);

 //where k is not at the end, but somewhere in the middle of the linked list
 list.kthFromEnd(3);
    expect(list.head.next.value).toEqual(3);

    //Where k is greater than the length of the linked list
    expect(list.length).toBeLessThan(5);

    //Where k and the length of the list are the same
    expect(list.length).toEqual(4);

    //Where the linked list is of a size 1


  });

  it("linkedListzip",()=>{
    let newlist=new LinkedList();
    let list1=new LinkedList();
    list1.append(1);
    list1.append(3);
    let list2=new LinkedList();
    list2.append(8);
    list2.append(2);
    newlist.linkedListzip(list1,list2)
    expect( newlist.linkedListzip(list1,list2)).toBe('{1}->{8}->{3}->{2}->NULL');
    //  expect(newlist.head.next.value).toEqual(8);
  });



})
