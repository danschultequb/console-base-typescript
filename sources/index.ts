#!/usr/bin/env node

export function getMessage(target: string = "world"): string
{
    return `Hello there, ${target}!`;
}

console.log(getMessage());