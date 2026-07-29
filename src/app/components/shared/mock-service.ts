import { Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()  // Automatically provided at the root level by default
export class MockService {

    // // Utilizing Angular's signal for modern state management
    // currentUser = signal({ name: 'Alex' });

    fetchData(): Observable<string[]> {
        return new Observable(observer => {
            setTimeout(() => {
                const data = ['Apple', 'Banana', 'Cherry'];
                observer.next(data);
                observer.complete();
            }, 1000);
        });
    }
}
