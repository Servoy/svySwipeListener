import { Injectable, OnDestroy, Inject, DOCUMENT } from '@angular/core';

import { ServoyPublicService } from '@servoy/public';

import 'swiped-events';

type CallableFunction = (...args: unknown[]) => void;

@Injectable()
export class SwipeListener implements OnDestroy {
    private _callbacks: Callback[] = [];
    listeners: any[] = [];

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
                let element: Node | null = this.doc;
                let eventName = 'swiped';
                if (callback.component) {
                    element = this.doc.getElementById(callback.component);
                }
                if (callback.swipeDirection) {
                    eventName = eventName + '-' + callback.swipeDirection;
                }
                if (element) {
                    this.addListener(element, eventName, callback);
                }
                else {
                    setTimeout(() => {
                        if (callback.component) {
                            element = this.doc.getElementById(callback.component);
                        }
                        if (element) {
                            this.addListener(element, eventName, callback);
                        }
                        else{
                            console.warn("Cannot add swipe listener due to missing component.");
                        }
                    }, 1000);
                }
            });
        }
    }

    ngOnDestroy() {
        this.removeListeners();
    }

    private addListener(element: Node, eventName: string, callback: Callback) {
        let listener;
        element.addEventListener(eventName, listener = (e: any) => {
            const ev = this.servoyService.createJSEvent(e, eventName);
            callback.callback(ev, callback.callbackKey, e.detail.dir);
        });
        this.listeners.push({ element, eventName, listener });
    }

    private removeListeners() {
        this.listeners.forEach((value) => {
            value.element.removeEventListener(value.eventName, value.listener);
        })
        this.listeners = [];
    }
}

class Callback {
    public callbackKey!: string;
    public callback!: CallableFunction;
    public swipeDirection!: string;
    public component!: string;
}