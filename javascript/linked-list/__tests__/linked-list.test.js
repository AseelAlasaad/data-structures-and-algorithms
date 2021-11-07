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


  })

  it('finding a value within the linked list',()=>{
    let list= new LinkedList();
    list.include('One');
    expect(true).toBeTruthy();

    list.include('Aseel');
    expect(false).toBeFalsy();
  })

  it('to String',()=>{
    let list= new LinkedList();
    let newstring='{One}->{Tow}->{Three}->NULL'
    list.toString();
    expect.stringMatching(newstring);
  })

});
