import { HttpClient } from '@angular/common/http';
import { Service } from '@angular/core';
import { map, Observable, shareReplay, startWith, Subject, switchMap } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';


// 1. Define the shape of the randomuser.me response
interface RandomUserResponse {
    results: Array<{
        name: { first: string; last: string };
        email: string;
        picture: { thumbnail: string };
    }>;
}


@Service()
export class SharedService {
    private fetchTrigger$ = new Subject<void>();

    // Single shared stream for all components
    readonly user$: Observable<any> = this.fetchTrigger$.pipe(
        // 1. Fire immediately when the first component subscribes
        startWith(undefined),
        // 2. Execute the RxJS ajax call
        switchMap(() => ajax<RandomUserResponse>('https://randomuser.me/api/')), //cancelling the previous request as comp1 request cancelled and emits the latest request comp2 by switch map
        // 3. Extract the user payload
        map(res => res.response.results[0]),
        // 4. Multicast the response so only 1 network call is made
        shareReplay({ bufferSize: 1, refCount: true })
    );

    // Call this to trigger a new user fetch across both components
    loadNextUser(): void {
        this.fetchTrigger$.next();
    }


    getApi() {
        const data = ajax('https://randomuser.me/api/');
        return data;
    }
}
