import { Injectable, OnDestroy, Inject } from '@angular/core';

import { ServoyPublicService } from '@servoy/public';
import { DOCUMENT } from '@angular/common';
import 'swiped-events';

type CallableFunction = (...args: unknown[]) => void;

@Injectable()
export class SwipeListener implements OnDestroy {
    private _callbacks: Callback[] = [];
    listeners = new Array();

    constructor(@Inject(DOCUMENT) public doc: Document, private servoyService: ServoyPublicService) {

    }

    get callbacks(): Callback[] {
        return this._callbacks;
    }

    set callbacks(callbacks: Callback[]) {
        if (this._callbacks != null && this._callbacks.length > 0) {
            this.removeListeners();
        }
        this._callbacks = callbacks;
        if (this._callbacks != null && this._callbacks.length > 0) {
            this._callbacks.forEach(callback => {
                let element: Node = this.doc;
                let eventName = 'swiped';
                if (callback.component) {
                    element = this.doc.getElementById(callback.component);
                }
                if (callback.swipeDirection) {
                    eventName = eventName + '-' + callback.swipeDirection;
                }
                var listener;
                element.addEventListener(eventName, listener = (e: any) => {
                    const ev = this.servoyService.createJSEvent(e, eventName);
                    callback.callback(ev, callback.callbackKey, e.detail.dir);
                });
                this.listeners.push({element, eventName, listener });
            });
        }
    }

    ngOnDestroy() {
        this.removeListeners();
    }

    private removeListeners() {
        this.listeners.forEach((value) => {
            value.element.removeEventListener(value.eventName, value.listener);
        })
        this.listeners = new Array();
    }
}

class Callback {
    public callbackKey: string;
    public callback: CallableFunction;
    public swipeDirection: string;
    public component: string;
}