interface Subscriber {
  update(publisher: Publisher): void;
}

interface Publisher {
  attach(subscriber: Subscriber): void;
  detach(subscriber: Subscriber): void;
  notify(): void;
}

export class ConcretePublisher implements Publisher {
  public state: number = 0;
  private subscribers: Subscriber[] = [];
  public attach(subscriber: Subscriber): void {
    const isExist = this.subscribers.includes(subscriber);
    if (isExist) {
      return console.log('Publisher: subscriber has been attached already.');
    }
    console.log('Publisher: Attached a subscriber.');
    this.subscribers.push(subscriber);
  }
  public detach(subscriber: Subscriber): void {
    const subscriberIndex = this.subscribers.indexOf(subscriber);
    if (subscriberIndex === -1) {
      return console.log('Publisher: Nonexistent subscriber.');
    }
    this.subscribers.splice(subscriberIndex, 1);
    console.log('Publisher: Detached a subscriber.');
  }
  public notify(): void {
    console.log('Publisher: Notifying subscribers...');

    for (const subscriber of this.subscribers) {
      subscriber.update(this);
    }
  }
  public someBusinessLogic(state: number): void {
    console.log("\nPublisher: I'm doing something important.");
    console.log(`Publisher: My state has just changed to: ${state}`);
    this.state = state;
    this.notify();
  }
}

export class ConcreteSubscriberA implements Subscriber {
  public update(publisher: Publisher): void {
    if (publisher instanceof ConcretePublisher && publisher.state < 0) {
      console.log('ConcreteObserverA: Reacted to the event.');
    }
  }
}

export class ConcreteSubscriberB implements Subscriber {
  public update(publisher: Publisher): void {
    if (publisher instanceof ConcretePublisher && publisher.state > 0) {
      console.log('ConcreteObserverB: Reacted to the event.');
    }
  }
}
