// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import util from 'node:util';

import Fuse from 'fuse.js';
import ts from 'typescript';

import { WorkerInput, WorkerSuccess, WorkerError } from './code-tool-types';
import { NirvanaLabs } from '@nirvana-labs/nirvana';

function getRunFunctionNode(
  code: string,
): ts.FunctionDeclaration | ts.FunctionExpression | ts.ArrowFunction | null {
  const sourceFile = ts.createSourceFile('code.ts', code, ts.ScriptTarget.Latest, true);

  for (const statement of sourceFile.statements) {
    // Check for top-level function declarations
    if (ts.isFunctionDeclaration(statement)) {
      if (statement.name?.text === 'run') {
        return statement;
      }
    }

    // Check for variable declarations: const run = () => {} or const run = function() {}
    if (ts.isVariableStatement(statement)) {
      for (const declaration of statement.declarationList.declarations) {
        if (ts.isIdentifier(declaration.name) && declaration.name.text === 'run') {
          // Check if it's initialized with a function
          if (
            declaration.initializer &&
            (ts.isFunctionExpression(declaration.initializer) || ts.isArrowFunction(declaration.initializer))
          ) {
            return declaration.initializer;
          }
        }
      }
    }
  }

  return null;
}

const fuse = new Fuse(
  [
    'client.user.get',
    'client.apiKeys.create',
    'client.apiKeys.delete',
    'client.apiKeys.get',
    'client.apiKeys.list',
    'client.apiKeys.update',
    'client.operations.get',
    'client.operations.list',
    'client.projects.create',
    'client.projects.delete',
    'client.projects.get',
    'client.projects.list',
    'client.projects.update',
    'client.compute.vms.create',
    'client.compute.vms.delete',
    'client.compute.vms.get',
    'client.compute.vms.list',
    'client.compute.vms.restart',
    'client.compute.vms.update',
    'client.compute.vms.availability.create',
    'client.compute.vms.availability.update',
    'client.compute.vms.volumes.list',
    'client.compute.vms.osImages.list',
    'client.compute.volumes.create',
    'client.compute.volumes.delete',
    'client.compute.volumes.get',
    'client.compute.volumes.list',
    'client.compute.volumes.update',
    'client.compute.volumes.availability.create',
    'client.compute.volumes.availability.update',
    'client.networking.vpcs.create',
    'client.networking.vpcs.delete',
    'client.networking.vpcs.get',
    'client.networking.vpcs.list',
    'client.networking.vpcs.update',
    'client.networking.vpcs.availability.create',
    'client.networking.vpcs.availability.update',
    'client.networking.firewallRules.create',
    'client.networking.firewallRules.delete',
    'client.networking.firewallRules.get',
    'client.networking.firewallRules.list',
    'client.networking.firewallRules.update',
    'client.networking.connect.connections.create',
    'client.networking.connect.connections.delete',
    'client.networking.connect.connections.get',
    'client.networking.connect.connections.list',
    'client.networking.connect.connections.update',
    'client.networking.connect.routes.list',
    'client.rpcNodes.flex.create',
    'client.rpcNodes.flex.delete',
    'client.rpcNodes.flex.get',
    'client.rpcNodes.flex.list',
    'client.rpcNodes.flex.update',
    'client.rpcNodes.flex.blockchains.list',
    'client.rpcNodes.dedicated.get',
    'client.rpcNodes.dedicated.list',
    'client.rpcNodes.dedicated.blockchains.list',
    'client.vektor.registry.assets.list',
    'client.vektor.registry.blockchains.list',
    'client.vektor.registry.venues.list',
    'client.vektor.registry.errors.list',
    'client.vektor.registry.lendMarkets.list',
    'client.vektor.registry.borrowMarkets.list',
    'client.vektor.registry.lpPools.list',
    'client.vektor.balances.list',
    'client.vektor.balances.listHistorical',
    'client.vektor.prices.list',
    'client.vektor.prices.listHistorical',
    'client.vektor.lend.markets.list',
    'client.vektor.lend.markets.listHistorical',
    'client.vektor.lend.positions.list',
    'client.vektor.lend.positions.listHistorical',
    'client.vektor.lend.lend.create',
    'client.vektor.lend.withdraw.create',
    'client.vektor.lend.setCollateral.create',
    'client.vektor.borrow.markets.list',
    'client.vektor.borrow.markets.listHistorical',
    'client.vektor.borrow.positions.list',
    'client.vektor.borrow.positions.listHistorical',
    'client.vektor.borrow.accounts.list',
    'client.vektor.borrow.accounts.listHistorical',
    'client.vektor.borrow.borrow.create',
    'client.vektor.borrow.repay.create',
    'client.vektor.lp.pools.list',
    'client.vektor.lp.pools.listHistorical',
    'client.vektor.lp.positions.list',
    'client.vektor.lp.positions.listHistorical',
    'client.vektor.lp.depositQuote.create',
    'client.vektor.lp.withdrawQuote.create',
    'client.vektor.buy.quotes.list',
    'client.vektor.buy.buy.create',
    'client.vektor.sell.quotes.list',
    'client.vektor.sell.sell.create',
    'client.vektor.move.create',
    'client.vektor.wrap.wrap.create',
    'client.vektor.wrap.unwrap.create',
    'client.vektor.bridge.quotes.list',
    'client.vektor.lock.markets.list',
    'client.vektor.lock.positions.list',
    'client.vektor.vote.markets.list',
    'client.vektor.vote.rewards.list',
    'client.vektor.incentivize.list',
    'client.vektor.executions.get',
    'client.vektor.executions.list',
    'client.vektor.executions.steps.get',
    'client.vektor.executions.steps.sign',
  ],
  { threshold: 1, shouldSort: true },
);

function getMethodSuggestions(fullyQualifiedMethodName: string): string[] {
  return fuse
    .search(fullyQualifiedMethodName)
    .map(({ item }) => item)
    .slice(0, 5);
}

const proxyToObj = new WeakMap<any, any>();
const objToProxy = new WeakMap<any, any>();

type ClientProxyConfig = {
  path: string[];
  isBelievedBad?: boolean;
};

function makeSdkProxy<T extends object>(obj: T, { path, isBelievedBad = false }: ClientProxyConfig): T {
  let proxy: T = objToProxy.get(obj);

  if (!proxy) {
    proxy = new Proxy(obj, {
      get(target, prop, receiver) {
        const propPath = [...path, String(prop)];
        const value = Reflect.get(target, prop, receiver);

        if (isBelievedBad || (!(prop in target) && value === undefined)) {
          // If we're accessing a path that doesn't exist, it will probably eventually error.
          // Let's proxy it and mark it bad so that we can control the error message.
          // We proxy an empty class so that an invocation or construction attempt is possible.
          return makeSdkProxy(class {}, { path: propPath, isBelievedBad: true });
        }

        if (value !== null && (typeof value === 'object' || typeof value === 'function')) {
          return makeSdkProxy(value, { path: propPath, isBelievedBad });
        }

        return value;
      },

      apply(target, thisArg, args) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a function. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.apply(target, proxyToObj.get(thisArg) ?? thisArg, args);
      },

      construct(target, args, newTarget) {
        if (isBelievedBad || typeof target !== 'function') {
          const fullyQualifiedMethodName = path.join('.');
          const suggestions = getMethodSuggestions(fullyQualifiedMethodName);
          throw new Error(
            `${fullyQualifiedMethodName} is not a constructor. Did you mean: ${suggestions.join(', ')}`,
          );
        }

        return Reflect.construct(target, args, newTarget);
      },
    });

    objToProxy.set(obj, proxy);
    proxyToObj.set(proxy, obj);
  }

  return proxy;
}

function parseError(code: string, error: unknown): string | undefined {
  if (!(error instanceof Error)) return;
  const message = error.name ? `${error.name}: ${error.message}` : error.message;
  try {
    // Deno uses V8; the first "<anonymous>:LINE:COLUMN" is the top of stack.
    const lineNumber = error.stack?.match(/<anonymous>:([0-9]+):[0-9]+/)?.[1];
    // -1 for the zero-based indexing
    const line =
      lineNumber &&
      code
        .split('\n')
        .at(parseInt(lineNumber, 10) - 1)
        ?.trim();
    return line ? `${message}\n  at line ${lineNumber}\n    ${line}` : message;
  } catch {
    return message;
  }
}

const fetch = async (req: Request): Promise<Response> => {
  const { opts, code } = (await req.json()) as WorkerInput;
  if (code == null) {
    return Response.json(
      {
        message:
          'The code param is missing. Provide one containing a top-level `run` function. Write code within this template:\n\n```\nasync function run(client) {\n  // Fill this out\n}\n```',
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const runFunctionNode = getRunFunctionNode(code);
  if (!runFunctionNode) {
    return Response.json(
      {
        message:
          'The code is missing a top-level `run` function. Write code within this template:\n\n```\nasync function run(client) {\n  // Fill this out\n}\n```',
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }

  const client = new NirvanaLabs({
    ...opts,
  });

  const logLines: string[] = [];
  const errLines: string[] = [];
  const console = {
    log: (...args: unknown[]) => {
      logLines.push(util.format(...args));
    },
    error: (...args: unknown[]) => {
      errLines.push(util.format(...args));
    },
  };
  try {
    let run_ = async (client: any) => {};
    eval(`${code}\nrun_ = run;`);
    const result = await run_(makeSdkProxy(client, { path: ['client'] }));
    return Response.json({
      result,
      logLines,
      errLines,
    } satisfies WorkerSuccess);
  } catch (e) {
    return Response.json(
      {
        message: parseError(code, e),
      } satisfies WorkerError,
      { status: 400, statusText: 'Code execution error' },
    );
  }
};

export default { fetch };
