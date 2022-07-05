import { isDate } from "@fvilers/is-date";
import { isMap } from "@fvilers/is-map";
import { isObject } from "@fvilers/is-object";
import { isSet } from "@fvilers/is-set";

function areSameType(x: any, y: any): boolean {
  return (
    Object.prototype.toString.call(x) === Object.prototype.toString.call(y)
  );
}

function areSameDate(x: Date, y: Date): boolean {
  return +x === +y;
}

function areSameArray(x: any[], y: any[]): boolean {
  if (x.length !== y.length) {
    return false;
  }

  for (let i = 0; i < x.length; i++) {
    if (!areSame(x[i], y[i])) {
      return false;
    }
  }

  return true;
}

function areSameMap(x: Map<any, any>, y: Map<any, any>): boolean {
  if (x.size !== y.size) {
    return false;
  }

  if (!areSameArray(Array.from(x.keys()), Array.from(y.keys()))) {
    return false;
  }

  return areSameArray(Array.from(x.values()), Array.from(y.values()));
}

function areSameSet(x: Set<any>, y: Set<any>): boolean {
  if (x.size !== y.size) {
    return false;
  }

  return areSameArray(Array.from(x.values()), Array.from(y.values()));
}

function areSameObject(x: object, y: object): boolean {
  const propertyNames = Object.getOwnPropertyNames(x || {});

  if (!areSameArray(propertyNames, Object.getOwnPropertyNames(y || {}))) {
    return false;
  }

  for (const propertyName of propertyNames) {
    if (!areSame(Reflect.get(x, propertyName), Reflect.get(y, propertyName))) {
      return false;
    }
  }

  return true;
}

export function areSame(x: any, y: any): boolean {
  if (!areSameType(x, y)) {
    return false;
  }

  if (isObject(x)) {
    if (isDate(x) && isDate(y)) {
      return areSameDate(x, y);
    }

    if (Array.isArray(x) && Array.isArray(y)) {
      return areSameArray(x, y);
    }

    if (isMap(x) && isMap(y)) {
      return areSameMap(x, y);
    }

    if (isSet(x) && isSet(y)) {
      return areSameSet(x, y);
    }

    return areSameObject(x, y);
  }

  return x === y;
}
