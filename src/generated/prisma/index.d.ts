
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Store
 * 
 */
export type Store = $Result.DefaultSelection<Prisma.$StorePayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model Seat
 * 
 */
export type Seat = $Result.DefaultSelection<Prisma.$SeatPayload>
/**
 * Model Card
 * 
 */
export type Card = $Result.DefaultSelection<Prisma.$CardPayload>
/**
 * Model UserCard
 * 
 */
export type UserCard = $Result.DefaultSelection<Prisma.$UserCardPayload>
/**
 * Model UserOrder
 * 
 */
export type UserOrder = $Result.DefaultSelection<Prisma.$UserOrderPayload>
/**
 * Model Attachment
 * 
 */
export type Attachment = $Result.DefaultSelection<Prisma.$AttachmentPayload>
/**
 * Model Notice
 * 
 */
export type Notice = $Result.DefaultSelection<Prisma.$NoticePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.store`: Exposes CRUD operations for the **Store** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stores
    * const stores = await prisma.store.findMany()
    * ```
    */
  get store(): Prisma.StoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.seat`: Exposes CRUD operations for the **Seat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Seats
    * const seats = await prisma.seat.findMany()
    * ```
    */
  get seat(): Prisma.SeatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.card`: Exposes CRUD operations for the **Card** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cards
    * const cards = await prisma.card.findMany()
    * ```
    */
  get card(): Prisma.CardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCard`: Exposes CRUD operations for the **UserCard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCards
    * const userCards = await prisma.userCard.findMany()
    * ```
    */
  get userCard(): Prisma.UserCardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userOrder`: Exposes CRUD operations for the **UserOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserOrders
    * const userOrders = await prisma.userOrder.findMany()
    * ```
    */
  get userOrder(): Prisma.UserOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attachment`: Exposes CRUD operations for the **Attachment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attachments
    * const attachments = await prisma.attachment.findMany()
    * ```
    */
  get attachment(): Prisma.AttachmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notice`: Exposes CRUD operations for the **Notice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notices
    * const notices = await prisma.notice.findMany()
    * ```
    */
  get notice(): Prisma.NoticeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Store: 'Store',
    Area: 'Area',
    Seat: 'Seat',
    Card: 'Card',
    UserCard: 'UserCard',
    UserOrder: 'UserOrder',
    Attachment: 'Attachment',
    Notice: 'Notice',
    Comment: 'Comment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "store" | "area" | "seat" | "card" | "userCard" | "userOrder" | "attachment" | "notice" | "comment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Store: {
        payload: Prisma.$StorePayload<ExtArgs>
        fields: Prisma.StoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findFirst: {
            args: Prisma.StoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          findMany: {
            args: Prisma.StoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>[]
          }
          create: {
            args: Prisma.StoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          createMany: {
            args: Prisma.StoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          update: {
            args: Prisma.StoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          deleteMany: {
            args: Prisma.StoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StorePayload>
          }
          aggregate: {
            args: Prisma.StoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStore>
          }
          groupBy: {
            args: Prisma.StoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<StoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.StoreCountArgs<ExtArgs>
            result: $Utils.Optional<StoreCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      Seat: {
        payload: Prisma.$SeatPayload<ExtArgs>
        fields: Prisma.SeatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SeatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SeatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findFirst: {
            args: Prisma.SeatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SeatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          findMany: {
            args: Prisma.SeatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>[]
          }
          create: {
            args: Prisma.SeatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          createMany: {
            args: Prisma.SeatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SeatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          update: {
            args: Prisma.SeatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          deleteMany: {
            args: Prisma.SeatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SeatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SeatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SeatPayload>
          }
          aggregate: {
            args: Prisma.SeatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSeat>
          }
          groupBy: {
            args: Prisma.SeatGroupByArgs<ExtArgs>
            result: $Utils.Optional<SeatGroupByOutputType>[]
          }
          count: {
            args: Prisma.SeatCountArgs<ExtArgs>
            result: $Utils.Optional<SeatCountAggregateOutputType> | number
          }
        }
      }
      Card: {
        payload: Prisma.$CardPayload<ExtArgs>
        fields: Prisma.CardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findFirst: {
            args: Prisma.CardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          findMany: {
            args: Prisma.CardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>[]
          }
          create: {
            args: Prisma.CardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          createMany: {
            args: Prisma.CardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          update: {
            args: Prisma.CardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          deleteMany: {
            args: Prisma.CardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CardPayload>
          }
          aggregate: {
            args: Prisma.CardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCard>
          }
          groupBy: {
            args: Prisma.CardGroupByArgs<ExtArgs>
            result: $Utils.Optional<CardGroupByOutputType>[]
          }
          count: {
            args: Prisma.CardCountArgs<ExtArgs>
            result: $Utils.Optional<CardCountAggregateOutputType> | number
          }
        }
      }
      UserCard: {
        payload: Prisma.$UserCardPayload<ExtArgs>
        fields: Prisma.UserCardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>
          }
          findFirst: {
            args: Prisma.UserCardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>
          }
          findMany: {
            args: Prisma.UserCardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>[]
          }
          create: {
            args: Prisma.UserCardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>
          }
          createMany: {
            args: Prisma.UserCardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserCardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>
          }
          update: {
            args: Prisma.UserCardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>
          }
          deleteMany: {
            args: Prisma.UserCardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserCardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCardPayload>
          }
          aggregate: {
            args: Prisma.UserCardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCard>
          }
          groupBy: {
            args: Prisma.UserCardGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCardGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCardCountArgs<ExtArgs>
            result: $Utils.Optional<UserCardCountAggregateOutputType> | number
          }
        }
      }
      UserOrder: {
        payload: Prisma.$UserOrderPayload<ExtArgs>
        fields: Prisma.UserOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderPayload>
          }
          findFirst: {
            args: Prisma.UserOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderPayload>
          }
          findMany: {
            args: Prisma.UserOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderPayload>[]
          }
          create: {
            args: Prisma.UserOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderPayload>
          }
          createMany: {
            args: Prisma.UserOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderPayload>
          }
          update: {
            args: Prisma.UserOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderPayload>
          }
          deleteMany: {
            args: Prisma.UserOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserOrderPayload>
          }
          aggregate: {
            args: Prisma.UserOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserOrder>
          }
          groupBy: {
            args: Prisma.UserOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserOrderCountArgs<ExtArgs>
            result: $Utils.Optional<UserOrderCountAggregateOutputType> | number
          }
        }
      }
      Attachment: {
        payload: Prisma.$AttachmentPayload<ExtArgs>
        fields: Prisma.AttachmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttachmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttachmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findFirst: {
            args: Prisma.AttachmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttachmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          findMany: {
            args: Prisma.AttachmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>[]
          }
          create: {
            args: Prisma.AttachmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          createMany: {
            args: Prisma.AttachmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttachmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          update: {
            args: Prisma.AttachmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          deleteMany: {
            args: Prisma.AttachmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttachmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttachmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttachmentPayload>
          }
          aggregate: {
            args: Prisma.AttachmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttachment>
          }
          groupBy: {
            args: Prisma.AttachmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttachmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttachmentCountArgs<ExtArgs>
            result: $Utils.Optional<AttachmentCountAggregateOutputType> | number
          }
        }
      }
      Notice: {
        payload: Prisma.$NoticePayload<ExtArgs>
        fields: Prisma.NoticeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findFirst: {
            args: Prisma.NoticeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findMany: {
            args: Prisma.NoticeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          create: {
            args: Prisma.NoticeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          createMany: {
            args: Prisma.NoticeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NoticeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          update: {
            args: Prisma.NoticeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          deleteMany: {
            args: Prisma.NoticeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoticeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          aggregate: {
            args: Prisma.NoticeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotice>
          }
          groupBy: {
            args: Prisma.NoticeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticeCountArgs<ExtArgs>
            result: $Utils.Optional<NoticeCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    store?: StoreOmit
    area?: AreaOmit
    seat?: SeatOmit
    card?: CardOmit
    userCard?: UserCardOmit
    userOrder?: UserOrderOmit
    attachment?: AttachmentOmit
    notice?: NoticeOmit
    comment?: CommentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    stores: number
    orders: number
    cards: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | UserCountOutputTypeCountStoresArgs
    orders?: boolean | UserCountOutputTypeCountOrdersArgs
    cards?: boolean | UserCountOutputTypeCountCardsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStoresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCardWhereInput
  }


  /**
   * Count Type StoreCountOutputType
   */

  export type StoreCountOutputType = {
    areas: number
    seats: number
    attachments: number
    notices: number
    comments: number
  }

  export type StoreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | StoreCountOutputTypeCountAreasArgs
    seats?: boolean | StoreCountOutputTypeCountSeatsArgs
    attachments?: boolean | StoreCountOutputTypeCountAttachmentsArgs
    notices?: boolean | StoreCountOutputTypeCountNoticesArgs
    comments?: boolean | StoreCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StoreCountOutputType
     */
    select?: StoreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountNoticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
  }

  /**
   * StoreCountOutputType without action
   */
  export type StoreCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    seats: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seats?: boolean | AreaCountOutputTypeCountSeatsArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountSeatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
  }


  /**
   * Count Type SeatCountOutputType
   */

  export type SeatCountOutputType = {
    orders: number
  }

  export type SeatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | SeatCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SeatCountOutputType
     */
    select?: SeatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SeatCountOutputType without action
   */
  export type SeatCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOrderWhereInput
  }


  /**
   * Count Type CardCountOutputType
   */

  export type CardCountOutputType = {
    userCards: number
  }

  export type CardCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCards?: boolean | CardCountOutputTypeCountUserCardsArgs
  }

  // Custom InputTypes
  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CardCountOutputType
     */
    select?: CardCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CardCountOutputType without action
   */
  export type CardCountOutputTypeCountUserCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCardWhereInput
  }


  /**
   * Count Type NoticeCountOutputType
   */

  export type NoticeCountOutputType = {
    attachments: number
  }

  export type NoticeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attachments?: boolean | NoticeCountOutputTypeCountAttachmentsArgs
  }

  // Custom InputTypes
  /**
   * NoticeCountOutputType without action
   */
  export type NoticeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NoticeCountOutputType
     */
    select?: NoticeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NoticeCountOutputType without action
   */
  export type NoticeCountOutputTypeCountAttachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    type: number | null
    balance: number | null
    points: number | null
    sex: number | null
    lastLoginTime: number | null
    loginCount: number | null
    createdTime: number | null
    updatedTime: number | null
    deletedTime: number | null
  }

  export type UserSumAggregateOutputType = {
    type: number | null
    balance: bigint | null
    points: number | null
    sex: number | null
    lastLoginTime: bigint | null
    loginCount: number | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    openId: string | null
    type: number | null
    nickName: string | null
    avatar: string | null
    phone: string | null
    password: string | null
    balance: bigint | null
    points: number | null
    realName: string | null
    cardId: string | null
    nation: string | null
    sex: number | null
    birth: Date | null
    qq: string | null
    email: string | null
    province: string | null
    city: string | null
    district: string | null
    code: string | null
    address: string | null
    description: string | null
    lastLoginTime: bigint | null
    lastLoginIp: string | null
    loginCount: number | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    openId: string | null
    type: number | null
    nickName: string | null
    avatar: string | null
    phone: string | null
    password: string | null
    balance: bigint | null
    points: number | null
    realName: string | null
    cardId: string | null
    nation: string | null
    sex: number | null
    birth: Date | null
    qq: string | null
    email: string | null
    province: string | null
    city: string | null
    district: string | null
    code: string | null
    address: string | null
    description: string | null
    lastLoginTime: bigint | null
    lastLoginIp: string | null
    loginCount: number | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    openId: number
    type: number
    nickName: number
    avatar: number
    phone: number
    password: number
    balance: number
    points: number
    realName: number
    cardId: number
    nation: number
    sex: number
    birth: number
    qq: number
    email: number
    province: number
    city: number
    district: number
    code: number
    address: number
    description: number
    lastLoginTime: number
    lastLoginIp: number
    loginCount: number
    createdBy: number
    createdTime: number
    updatedTime: number
    deletedTime: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    type?: true
    balance?: true
    points?: true
    sex?: true
    lastLoginTime?: true
    loginCount?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type UserSumAggregateInputType = {
    type?: true
    balance?: true
    points?: true
    sex?: true
    lastLoginTime?: true
    loginCount?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    openId?: true
    type?: true
    nickName?: true
    avatar?: true
    phone?: true
    password?: true
    balance?: true
    points?: true
    realName?: true
    cardId?: true
    nation?: true
    sex?: true
    birth?: true
    qq?: true
    email?: true
    province?: true
    city?: true
    district?: true
    code?: true
    address?: true
    description?: true
    lastLoginTime?: true
    lastLoginIp?: true
    loginCount?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    openId?: true
    type?: true
    nickName?: true
    avatar?: true
    phone?: true
    password?: true
    balance?: true
    points?: true
    realName?: true
    cardId?: true
    nation?: true
    sex?: true
    birth?: true
    qq?: true
    email?: true
    province?: true
    city?: true
    district?: true
    code?: true
    address?: true
    description?: true
    lastLoginTime?: true
    lastLoginIp?: true
    loginCount?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    openId?: true
    type?: true
    nickName?: true
    avatar?: true
    phone?: true
    password?: true
    balance?: true
    points?: true
    realName?: true
    cardId?: true
    nation?: true
    sex?: true
    birth?: true
    qq?: true
    email?: true
    province?: true
    city?: true
    district?: true
    code?: true
    address?: true
    description?: true
    lastLoginTime?: true
    lastLoginIp?: true
    loginCount?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    openId: string
    type: number
    nickName: string
    avatar: string
    phone: string
    password: string
    balance: bigint
    points: number
    realName: string
    cardId: string
    nation: string
    sex: number
    birth: Date
    qq: string
    email: string
    province: string
    city: string
    district: string
    code: string
    address: string
    description: string
    lastLoginTime: bigint
    lastLoginIp: string
    loginCount: number
    createdBy: string
    createdTime: bigint
    updatedTime: bigint
    deletedTime: bigint
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    openId?: boolean
    type?: boolean
    nickName?: boolean
    avatar?: boolean
    phone?: boolean
    password?: boolean
    balance?: boolean
    points?: boolean
    realName?: boolean
    cardId?: boolean
    nation?: boolean
    sex?: boolean
    birth?: boolean
    qq?: boolean
    email?: boolean
    province?: boolean
    city?: boolean
    district?: boolean
    code?: boolean
    address?: boolean
    description?: boolean
    lastLoginTime?: boolean
    lastLoginIp?: boolean
    loginCount?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
    stores?: boolean | User$storesArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    cards?: boolean | User$cardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    openId?: boolean
    type?: boolean
    nickName?: boolean
    avatar?: boolean
    phone?: boolean
    password?: boolean
    balance?: boolean
    points?: boolean
    realName?: boolean
    cardId?: boolean
    nation?: boolean
    sex?: boolean
    birth?: boolean
    qq?: boolean
    email?: boolean
    province?: boolean
    city?: boolean
    district?: boolean
    code?: boolean
    address?: boolean
    description?: boolean
    lastLoginTime?: boolean
    lastLoginIp?: boolean
    loginCount?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "openId" | "type" | "nickName" | "avatar" | "phone" | "password" | "balance" | "points" | "realName" | "cardId" | "nation" | "sex" | "birth" | "qq" | "email" | "province" | "city" | "district" | "code" | "address" | "description" | "lastLoginTime" | "lastLoginIp" | "loginCount" | "createdBy" | "createdTime" | "updatedTime" | "deletedTime", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stores?: boolean | User$storesArgs<ExtArgs>
    orders?: boolean | User$ordersArgs<ExtArgs>
    cards?: boolean | User$cardsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      stores: Prisma.$StorePayload<ExtArgs>[]
      orders: Prisma.$UserOrderPayload<ExtArgs>[]
      cards: Prisma.$UserCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      openId: string
      type: number
      nickName: string
      avatar: string
      phone: string
      password: string
      balance: bigint
      points: number
      realName: string
      cardId: string
      nation: string
      sex: number
      birth: Date
      qq: string
      email: string
      province: string
      city: string
      district: string
      code: string
      address: string
      description: string
      lastLoginTime: bigint
      lastLoginIp: string
      loginCount: number
      createdBy: string
      createdTime: bigint
      updatedTime: bigint
      deletedTime: bigint
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stores<T extends User$storesArgs<ExtArgs> = {}>(args?: Subset<T, User$storesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends User$ordersArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cards<T extends User$cardsArgs<ExtArgs> = {}>(args?: Subset<T, User$cardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly openId: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'Int'>
    readonly nickName: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly balance: FieldRef<"User", 'BigInt'>
    readonly points: FieldRef<"User", 'Int'>
    readonly realName: FieldRef<"User", 'String'>
    readonly cardId: FieldRef<"User", 'String'>
    readonly nation: FieldRef<"User", 'String'>
    readonly sex: FieldRef<"User", 'Int'>
    readonly birth: FieldRef<"User", 'DateTime'>
    readonly qq: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly province: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly district: FieldRef<"User", 'String'>
    readonly code: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly description: FieldRef<"User", 'String'>
    readonly lastLoginTime: FieldRef<"User", 'BigInt'>
    readonly lastLoginIp: FieldRef<"User", 'String'>
    readonly loginCount: FieldRef<"User", 'Int'>
    readonly createdBy: FieldRef<"User", 'String'>
    readonly createdTime: FieldRef<"User", 'BigInt'>
    readonly updatedTime: FieldRef<"User", 'BigInt'>
    readonly deletedTime: FieldRef<"User", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.stores
   */
  export type User$storesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    cursor?: StoreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * User.orders
   */
  export type User$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrder
     */
    select?: UserOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrder
     */
    omit?: UserOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderInclude<ExtArgs> | null
    where?: UserOrderWhereInput
    orderBy?: UserOrderOrderByWithRelationInput | UserOrderOrderByWithRelationInput[]
    cursor?: UserOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOrderScalarFieldEnum | UserOrderScalarFieldEnum[]
  }

  /**
   * User.cards
   */
  export type User$cardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    where?: UserCardWhereInput
    orderBy?: UserCardOrderByWithRelationInput | UserCardOrderByWithRelationInput[]
    cursor?: UserCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCardScalarFieldEnum | UserCardScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Store
   */

  export type AggregateStore = {
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  export type StoreAvgAggregateOutputType = {
    type: number | null
    longitude: number | null
    latitude: number | null
    seatCount: number | null
    price: number | null
    reviews: number | null
    sales: number | null
    createdTime: number | null
    updatedTime: number | null
    deletedTime: number | null
  }

  export type StoreSumAggregateOutputType = {
    type: number | null
    longitude: number | null
    latitude: number | null
    seatCount: number | null
    price: number | null
    reviews: number | null
    sales: number | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type StoreMinAggregateOutputType = {
    id: string | null
    type: number | null
    name: string | null
    provinceCode: string | null
    cityCode: string | null
    regionCode: string | null
    province: string | null
    city: string | null
    region: string | null
    address: string | null
    longitude: number | null
    latitude: number | null
    seatCount: number | null
    phone: string | null
    is24Hours: boolean | null
    openTime: string | null
    closeTime: string | null
    isActive: boolean | null
    features: string | null
    promotion: string | null
    price: number | null
    reviews: number | null
    sales: number | null
    description: string | null
    userId: string | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type StoreMaxAggregateOutputType = {
    id: string | null
    type: number | null
    name: string | null
    provinceCode: string | null
    cityCode: string | null
    regionCode: string | null
    province: string | null
    city: string | null
    region: string | null
    address: string | null
    longitude: number | null
    latitude: number | null
    seatCount: number | null
    phone: string | null
    is24Hours: boolean | null
    openTime: string | null
    closeTime: string | null
    isActive: boolean | null
    features: string | null
    promotion: string | null
    price: number | null
    reviews: number | null
    sales: number | null
    description: string | null
    userId: string | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type StoreCountAggregateOutputType = {
    id: number
    type: number
    name: number
    provinceCode: number
    cityCode: number
    regionCode: number
    province: number
    city: number
    region: number
    address: number
    longitude: number
    latitude: number
    seatCount: number
    phone: number
    is24Hours: number
    openTime: number
    closeTime: number
    isActive: number
    features: number
    promotion: number
    price: number
    reviews: number
    sales: number
    coverImages: number
    description: number
    userId: number
    createdBy: number
    createdTime: number
    updatedTime: number
    deletedTime: number
    _all: number
  }


  export type StoreAvgAggregateInputType = {
    type?: true
    longitude?: true
    latitude?: true
    seatCount?: true
    price?: true
    reviews?: true
    sales?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type StoreSumAggregateInputType = {
    type?: true
    longitude?: true
    latitude?: true
    seatCount?: true
    price?: true
    reviews?: true
    sales?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type StoreMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    provinceCode?: true
    cityCode?: true
    regionCode?: true
    province?: true
    city?: true
    region?: true
    address?: true
    longitude?: true
    latitude?: true
    seatCount?: true
    phone?: true
    is24Hours?: true
    openTime?: true
    closeTime?: true
    isActive?: true
    features?: true
    promotion?: true
    price?: true
    reviews?: true
    sales?: true
    description?: true
    userId?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type StoreMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    provinceCode?: true
    cityCode?: true
    regionCode?: true
    province?: true
    city?: true
    region?: true
    address?: true
    longitude?: true
    latitude?: true
    seatCount?: true
    phone?: true
    is24Hours?: true
    openTime?: true
    closeTime?: true
    isActive?: true
    features?: true
    promotion?: true
    price?: true
    reviews?: true
    sales?: true
    description?: true
    userId?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type StoreCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    provinceCode?: true
    cityCode?: true
    regionCode?: true
    province?: true
    city?: true
    region?: true
    address?: true
    longitude?: true
    latitude?: true
    seatCount?: true
    phone?: true
    is24Hours?: true
    openTime?: true
    closeTime?: true
    isActive?: true
    features?: true
    promotion?: true
    price?: true
    reviews?: true
    sales?: true
    coverImages?: true
    description?: true
    userId?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
    _all?: true
  }

  export type StoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Store to aggregate.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stores
    **/
    _count?: true | StoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StoreMaxAggregateInputType
  }

  export type GetStoreAggregateType<T extends StoreAggregateArgs> = {
        [P in keyof T & keyof AggregateStore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStore[P]>
      : GetScalarType<T[P], AggregateStore[P]>
  }




  export type StoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StoreWhereInput
    orderBy?: StoreOrderByWithAggregationInput | StoreOrderByWithAggregationInput[]
    by: StoreScalarFieldEnum[] | StoreScalarFieldEnum
    having?: StoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StoreCountAggregateInputType | true
    _avg?: StoreAvgAggregateInputType
    _sum?: StoreSumAggregateInputType
    _min?: StoreMinAggregateInputType
    _max?: StoreMaxAggregateInputType
  }

  export type StoreGroupByOutputType = {
    id: string
    type: number
    name: string
    provinceCode: string
    cityCode: string
    regionCode: string
    province: string
    city: string
    region: string
    address: string
    longitude: number
    latitude: number
    seatCount: number
    phone: string
    is24Hours: boolean
    openTime: string
    closeTime: string
    isActive: boolean
    features: string
    promotion: string
    price: number
    reviews: number
    sales: number
    coverImages: JsonValue
    description: string
    userId: string
    createdBy: string
    createdTime: bigint
    updatedTime: bigint
    deletedTime: bigint
    _count: StoreCountAggregateOutputType | null
    _avg: StoreAvgAggregateOutputType | null
    _sum: StoreSumAggregateOutputType | null
    _min: StoreMinAggregateOutputType | null
    _max: StoreMaxAggregateOutputType | null
  }

  type GetStoreGroupByPayload<T extends StoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StoreGroupByOutputType[P]>
            : GetScalarType<T[P], StoreGroupByOutputType[P]>
        }
      >
    >


  export type StoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    provinceCode?: boolean
    cityCode?: boolean
    regionCode?: boolean
    province?: boolean
    city?: boolean
    region?: boolean
    address?: boolean
    longitude?: boolean
    latitude?: boolean
    seatCount?: boolean
    phone?: boolean
    is24Hours?: boolean
    openTime?: boolean
    closeTime?: boolean
    isActive?: boolean
    features?: boolean
    promotion?: boolean
    price?: boolean
    reviews?: boolean
    sales?: boolean
    coverImages?: boolean
    description?: boolean
    userId?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
    areas?: boolean | Store$areasArgs<ExtArgs>
    seats?: boolean | Store$seatsArgs<ExtArgs>
    attachments?: boolean | Store$attachmentsArgs<ExtArgs>
    notices?: boolean | Store$noticesArgs<ExtArgs>
    comments?: boolean | Store$commentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["store"]>



  export type StoreSelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    provinceCode?: boolean
    cityCode?: boolean
    regionCode?: boolean
    province?: boolean
    city?: boolean
    region?: boolean
    address?: boolean
    longitude?: boolean
    latitude?: boolean
    seatCount?: boolean
    phone?: boolean
    is24Hours?: boolean
    openTime?: boolean
    closeTime?: boolean
    isActive?: boolean
    features?: boolean
    promotion?: boolean
    price?: boolean
    reviews?: boolean
    sales?: boolean
    coverImages?: boolean
    description?: boolean
    userId?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
  }

  export type StoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "provinceCode" | "cityCode" | "regionCode" | "province" | "city" | "region" | "address" | "longitude" | "latitude" | "seatCount" | "phone" | "is24Hours" | "openTime" | "closeTime" | "isActive" | "features" | "promotion" | "price" | "reviews" | "sales" | "coverImages" | "description" | "userId" | "createdBy" | "createdTime" | "updatedTime" | "deletedTime", ExtArgs["result"]["store"]>
  export type StoreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | Store$areasArgs<ExtArgs>
    seats?: boolean | Store$seatsArgs<ExtArgs>
    attachments?: boolean | Store$attachmentsArgs<ExtArgs>
    notices?: boolean | Store$noticesArgs<ExtArgs>
    comments?: boolean | Store$commentsArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | StoreCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $StorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Store"
    objects: {
      areas: Prisma.$AreaPayload<ExtArgs>[]
      seats: Prisma.$SeatPayload<ExtArgs>[]
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
      notices: Prisma.$NoticePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: number
      name: string
      provinceCode: string
      cityCode: string
      regionCode: string
      province: string
      city: string
      region: string
      address: string
      longitude: number
      latitude: number
      seatCount: number
      phone: string
      is24Hours: boolean
      openTime: string
      closeTime: string
      isActive: boolean
      features: string
      promotion: string
      price: number
      reviews: number
      sales: number
      coverImages: Prisma.JsonValue
      description: string
      userId: string
      createdBy: string
      createdTime: bigint
      updatedTime: bigint
      deletedTime: bigint
    }, ExtArgs["result"]["store"]>
    composites: {}
  }

  type StoreGetPayload<S extends boolean | null | undefined | StoreDefaultArgs> = $Result.GetResult<Prisma.$StorePayload, S>

  type StoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StoreCountAggregateInputType | true
    }

  export interface StoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Store'], meta: { name: 'Store' } }
    /**
     * Find zero or one Store that matches the filter.
     * @param {StoreFindUniqueArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StoreFindUniqueArgs>(args: SelectSubset<T, StoreFindUniqueArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Store that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StoreFindUniqueOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StoreFindUniqueOrThrowArgs>(args: SelectSubset<T, StoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StoreFindFirstArgs>(args?: SelectSubset<T, StoreFindFirstArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Store that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindFirstOrThrowArgs} args - Arguments to find a Store
     * @example
     * // Get one Store
     * const store = await prisma.store.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StoreFindFirstOrThrowArgs>(args?: SelectSubset<T, StoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stores
     * const stores = await prisma.store.findMany()
     * 
     * // Get first 10 Stores
     * const stores = await prisma.store.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const storeWithIdOnly = await prisma.store.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StoreFindManyArgs>(args?: SelectSubset<T, StoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Store.
     * @param {StoreCreateArgs} args - Arguments to create a Store.
     * @example
     * // Create one Store
     * const Store = await prisma.store.create({
     *   data: {
     *     // ... data to create a Store
     *   }
     * })
     * 
     */
    create<T extends StoreCreateArgs>(args: SelectSubset<T, StoreCreateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stores.
     * @param {StoreCreateManyArgs} args - Arguments to create many Stores.
     * @example
     * // Create many Stores
     * const store = await prisma.store.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StoreCreateManyArgs>(args?: SelectSubset<T, StoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Store.
     * @param {StoreDeleteArgs} args - Arguments to delete one Store.
     * @example
     * // Delete one Store
     * const Store = await prisma.store.delete({
     *   where: {
     *     // ... filter to delete one Store
     *   }
     * })
     * 
     */
    delete<T extends StoreDeleteArgs>(args: SelectSubset<T, StoreDeleteArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Store.
     * @param {StoreUpdateArgs} args - Arguments to update one Store.
     * @example
     * // Update one Store
     * const store = await prisma.store.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StoreUpdateArgs>(args: SelectSubset<T, StoreUpdateArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stores.
     * @param {StoreDeleteManyArgs} args - Arguments to filter Stores to delete.
     * @example
     * // Delete a few Stores
     * const { count } = await prisma.store.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StoreDeleteManyArgs>(args?: SelectSubset<T, StoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stores
     * const store = await prisma.store.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StoreUpdateManyArgs>(args: SelectSubset<T, StoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Store.
     * @param {StoreUpsertArgs} args - Arguments to update or create a Store.
     * @example
     * // Update or create a Store
     * const store = await prisma.store.upsert({
     *   create: {
     *     // ... data to create a Store
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Store we want to update
     *   }
     * })
     */
    upsert<T extends StoreUpsertArgs>(args: SelectSubset<T, StoreUpsertArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreCountArgs} args - Arguments to filter Stores to count.
     * @example
     * // Count the number of Stores
     * const count = await prisma.store.count({
     *   where: {
     *     // ... the filter for the Stores we want to count
     *   }
     * })
    **/
    count<T extends StoreCountArgs>(
      args?: Subset<T, StoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StoreAggregateArgs>(args: Subset<T, StoreAggregateArgs>): Prisma.PrismaPromise<GetStoreAggregateType<T>>

    /**
     * Group by Store.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StoreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StoreGroupByArgs['orderBy'] }
        : { orderBy?: StoreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Store model
   */
  readonly fields: StoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Store.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    areas<T extends Store$areasArgs<ExtArgs> = {}>(args?: Subset<T, Store$areasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    seats<T extends Store$seatsArgs<ExtArgs> = {}>(args?: Subset<T, Store$seatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attachments<T extends Store$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Store$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notices<T extends Store$noticesArgs<ExtArgs> = {}>(args?: Subset<T, Store$noticesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Store$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Store$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Store model
   */
  interface StoreFieldRefs {
    readonly id: FieldRef<"Store", 'String'>
    readonly type: FieldRef<"Store", 'Int'>
    readonly name: FieldRef<"Store", 'String'>
    readonly provinceCode: FieldRef<"Store", 'String'>
    readonly cityCode: FieldRef<"Store", 'String'>
    readonly regionCode: FieldRef<"Store", 'String'>
    readonly province: FieldRef<"Store", 'String'>
    readonly city: FieldRef<"Store", 'String'>
    readonly region: FieldRef<"Store", 'String'>
    readonly address: FieldRef<"Store", 'String'>
    readonly longitude: FieldRef<"Store", 'Float'>
    readonly latitude: FieldRef<"Store", 'Float'>
    readonly seatCount: FieldRef<"Store", 'Int'>
    readonly phone: FieldRef<"Store", 'String'>
    readonly is24Hours: FieldRef<"Store", 'Boolean'>
    readonly openTime: FieldRef<"Store", 'String'>
    readonly closeTime: FieldRef<"Store", 'String'>
    readonly isActive: FieldRef<"Store", 'Boolean'>
    readonly features: FieldRef<"Store", 'String'>
    readonly promotion: FieldRef<"Store", 'String'>
    readonly price: FieldRef<"Store", 'Int'>
    readonly reviews: FieldRef<"Store", 'Int'>
    readonly sales: FieldRef<"Store", 'Int'>
    readonly coverImages: FieldRef<"Store", 'Json'>
    readonly description: FieldRef<"Store", 'String'>
    readonly userId: FieldRef<"Store", 'String'>
    readonly createdBy: FieldRef<"Store", 'String'>
    readonly createdTime: FieldRef<"Store", 'BigInt'>
    readonly updatedTime: FieldRef<"Store", 'BigInt'>
    readonly deletedTime: FieldRef<"Store", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Store findUnique
   */
  export type StoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findUniqueOrThrow
   */
  export type StoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store findFirst
   */
  export type StoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findFirstOrThrow
   */
  export type StoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Store to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store findMany
   */
  export type StoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter, which Stores to fetch.
     */
    where?: StoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stores to fetch.
     */
    orderBy?: StoreOrderByWithRelationInput | StoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stores.
     */
    cursor?: StoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stores.
     */
    distinct?: StoreScalarFieldEnum | StoreScalarFieldEnum[]
  }

  /**
   * Store create
   */
  export type StoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to create a Store.
     */
    data: XOR<StoreCreateInput, StoreUncheckedCreateInput>
  }

  /**
   * Store createMany
   */
  export type StoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stores.
     */
    data: StoreCreateManyInput | StoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Store update
   */
  export type StoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The data needed to update a Store.
     */
    data: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
    /**
     * Choose, which Store to update.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store updateMany
   */
  export type StoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stores.
     */
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyInput>
    /**
     * Filter which Stores to update
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to update.
     */
    limit?: number
  }

  /**
   * Store upsert
   */
  export type StoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * The filter to search for the Store to update in case it exists.
     */
    where: StoreWhereUniqueInput
    /**
     * In case the Store found by the `where` argument doesn't exist, create a new Store with this data.
     */
    create: XOR<StoreCreateInput, StoreUncheckedCreateInput>
    /**
     * In case the Store was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StoreUpdateInput, StoreUncheckedUpdateInput>
  }

  /**
   * Store delete
   */
  export type StoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    /**
     * Filter which Store to delete.
     */
    where: StoreWhereUniqueInput
  }

  /**
   * Store deleteMany
   */
  export type StoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stores to delete
     */
    where?: StoreWhereInput
    /**
     * Limit how many Stores to delete.
     */
    limit?: number
  }

  /**
   * Store.areas
   */
  export type Store$areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    cursor?: AreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Store.seats
   */
  export type Store$seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    cursor?: SeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Store.attachments
   */
  export type Store$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Store.notices
   */
  export type Store$noticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    cursor?: NoticeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Store.comments
   */
  export type Store$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Store without action
   */
  export type StoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaAvgAggregateOutputType = {
    seatCount: number | null
    sort: number | null
    createdTime: number | null
    updatedTime: number | null
    deletedTime: number | null
  }

  export type AreaSumAggregateOutputType = {
    seatCount: number | null
    sort: number | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type AreaMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    name: string | null
    seatCount: number | null
    sort: number | null
    isActive: boolean | null
    description: string | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type AreaMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    name: string | null
    seatCount: number | null
    sort: number | null
    isActive: boolean | null
    description: string | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    storeId: number
    name: number
    seatCount: number
    sort: number
    isActive: number
    description: number
    createdBy: number
    createdTime: number
    updatedTime: number
    deletedTime: number
    _all: number
  }


  export type AreaAvgAggregateInputType = {
    seatCount?: true
    sort?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type AreaSumAggregateInputType = {
    seatCount?: true
    sort?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type AreaMinAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    seatCount?: true
    sort?: true
    isActive?: true
    description?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    seatCount?: true
    sort?: true
    isActive?: true
    description?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    storeId?: true
    name?: true
    seatCount?: true
    sort?: true
    isActive?: true
    description?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _avg?: AreaAvgAggregateInputType
    _sum?: AreaSumAggregateInputType
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: string
    storeId: string
    name: string
    seatCount: number
    sort: number
    isActive: boolean
    description: string
    createdBy: string
    createdTime: bigint
    updatedTime: bigint
    deletedTime: bigint
    _count: AreaCountAggregateOutputType | null
    _avg: AreaAvgAggregateOutputType | null
    _sum: AreaSumAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    name?: boolean
    seatCount?: boolean
    sort?: boolean
    isActive?: boolean
    description?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
    seats?: boolean | Area$seatsArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>



  export type AreaSelectScalar = {
    id?: boolean
    storeId?: boolean
    name?: boolean
    seatCount?: boolean
    sort?: boolean
    isActive?: boolean
    description?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
  }

  export type AreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "name" | "seatCount" | "sort" | "isActive" | "description" | "createdBy" | "createdTime" | "updatedTime" | "deletedTime", ExtArgs["result"]["area"]>
  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seats?: boolean | Area$seatsArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      seats: Prisma.$SeatPayload<ExtArgs>[]
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      name: string
      seatCount: number
      sort: number
      isActive: boolean
      description: string
      createdBy: string
      createdTime: bigint
      updatedTime: bigint
      deletedTime: bigint
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seats<T extends Area$seatsArgs<ExtArgs> = {}>(args?: Subset<T, Area$seatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Area model
   */
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'String'>
    readonly storeId: FieldRef<"Area", 'String'>
    readonly name: FieldRef<"Area", 'String'>
    readonly seatCount: FieldRef<"Area", 'Int'>
    readonly sort: FieldRef<"Area", 'Int'>
    readonly isActive: FieldRef<"Area", 'Boolean'>
    readonly description: FieldRef<"Area", 'String'>
    readonly createdBy: FieldRef<"Area", 'String'>
    readonly createdTime: FieldRef<"Area", 'BigInt'>
    readonly updatedTime: FieldRef<"Area", 'BigInt'>
    readonly deletedTime: FieldRef<"Area", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to update.
     */
    limit?: number
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
    /**
     * Limit how many Areas to delete.
     */
    limit?: number
  }

  /**
   * Area.seats
   */
  export type Area$seatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    cursor?: SeatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Area
     */
    omit?: AreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model Seat
   */

  export type AggregateSeat = {
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  export type SeatAvgAggregateOutputType = {
    type: number | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    status: number | null
    createdTime: number | null
    updatedTime: number | null
    deletedTime: number | null
  }

  export type SeatSumAggregateOutputType = {
    type: number | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    status: number | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type SeatMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    areaId: string | null
    type: number | null
    seatNo: string | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    hasPower: boolean | null
    status: number | null
    description: string | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type SeatMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    areaId: string | null
    type: number | null
    seatNo: string | null
    x: number | null
    y: number | null
    width: number | null
    height: number | null
    hasPower: boolean | null
    status: number | null
    description: string | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type SeatCountAggregateOutputType = {
    id: number
    storeId: number
    areaId: number
    type: number
    seatNo: number
    x: number
    y: number
    width: number
    height: number
    hasPower: number
    status: number
    description: number
    createdBy: number
    createdTime: number
    updatedTime: number
    deletedTime: number
    _all: number
  }


  export type SeatAvgAggregateInputType = {
    type?: true
    x?: true
    y?: true
    width?: true
    height?: true
    status?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type SeatSumAggregateInputType = {
    type?: true
    x?: true
    y?: true
    width?: true
    height?: true
    status?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type SeatMinAggregateInputType = {
    id?: true
    storeId?: true
    areaId?: true
    type?: true
    seatNo?: true
    x?: true
    y?: true
    width?: true
    height?: true
    hasPower?: true
    status?: true
    description?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type SeatMaxAggregateInputType = {
    id?: true
    storeId?: true
    areaId?: true
    type?: true
    seatNo?: true
    x?: true
    y?: true
    width?: true
    height?: true
    hasPower?: true
    status?: true
    description?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type SeatCountAggregateInputType = {
    id?: true
    storeId?: true
    areaId?: true
    type?: true
    seatNo?: true
    x?: true
    y?: true
    width?: true
    height?: true
    hasPower?: true
    status?: true
    description?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
    _all?: true
  }

  export type SeatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seat to aggregate.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Seats
    **/
    _count?: true | SeatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SeatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SeatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SeatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SeatMaxAggregateInputType
  }

  export type GetSeatAggregateType<T extends SeatAggregateArgs> = {
        [P in keyof T & keyof AggregateSeat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSeat[P]>
      : GetScalarType<T[P], AggregateSeat[P]>
  }




  export type SeatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SeatWhereInput
    orderBy?: SeatOrderByWithAggregationInput | SeatOrderByWithAggregationInput[]
    by: SeatScalarFieldEnum[] | SeatScalarFieldEnum
    having?: SeatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SeatCountAggregateInputType | true
    _avg?: SeatAvgAggregateInputType
    _sum?: SeatSumAggregateInputType
    _min?: SeatMinAggregateInputType
    _max?: SeatMaxAggregateInputType
  }

  export type SeatGroupByOutputType = {
    id: string
    storeId: string
    areaId: string
    type: number
    seatNo: string
    x: number
    y: number
    width: number
    height: number
    hasPower: boolean
    status: number
    description: string
    createdBy: string
    createdTime: bigint
    updatedTime: bigint
    deletedTime: bigint
    _count: SeatCountAggregateOutputType | null
    _avg: SeatAvgAggregateOutputType | null
    _sum: SeatSumAggregateOutputType | null
    _min: SeatMinAggregateOutputType | null
    _max: SeatMaxAggregateOutputType | null
  }

  type GetSeatGroupByPayload<T extends SeatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SeatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SeatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SeatGroupByOutputType[P]>
            : GetScalarType<T[P], SeatGroupByOutputType[P]>
        }
      >
    >


  export type SeatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    areaId?: boolean
    type?: boolean
    seatNo?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    hasPower?: boolean
    status?: boolean
    description?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
    orders?: boolean | Seat$ordersArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["seat"]>



  export type SeatSelectScalar = {
    id?: boolean
    storeId?: boolean
    areaId?: boolean
    type?: boolean
    seatNo?: boolean
    x?: boolean
    y?: boolean
    width?: boolean
    height?: boolean
    hasPower?: boolean
    status?: boolean
    description?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
  }

  export type SeatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "areaId" | "type" | "seatNo" | "x" | "y" | "width" | "height" | "hasPower" | "status" | "description" | "createdBy" | "createdTime" | "updatedTime" | "deletedTime", ExtArgs["result"]["seat"]>
  export type SeatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Seat$ordersArgs<ExtArgs>
    area?: boolean | AreaDefaultArgs<ExtArgs>
    store?: boolean | StoreDefaultArgs<ExtArgs>
    _count?: boolean | SeatCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SeatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Seat"
    objects: {
      orders: Prisma.$UserOrderPayload<ExtArgs>[]
      area: Prisma.$AreaPayload<ExtArgs>
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      areaId: string
      type: number
      seatNo: string
      x: number
      y: number
      width: number
      height: number
      hasPower: boolean
      status: number
      description: string
      createdBy: string
      createdTime: bigint
      updatedTime: bigint
      deletedTime: bigint
    }, ExtArgs["result"]["seat"]>
    composites: {}
  }

  type SeatGetPayload<S extends boolean | null | undefined | SeatDefaultArgs> = $Result.GetResult<Prisma.$SeatPayload, S>

  type SeatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SeatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SeatCountAggregateInputType | true
    }

  export interface SeatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Seat'], meta: { name: 'Seat' } }
    /**
     * Find zero or one Seat that matches the filter.
     * @param {SeatFindUniqueArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SeatFindUniqueArgs>(args: SelectSubset<T, SeatFindUniqueArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Seat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SeatFindUniqueOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SeatFindUniqueOrThrowArgs>(args: SelectSubset<T, SeatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SeatFindFirstArgs>(args?: SelectSubset<T, SeatFindFirstArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Seat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindFirstOrThrowArgs} args - Arguments to find a Seat
     * @example
     * // Get one Seat
     * const seat = await prisma.seat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SeatFindFirstOrThrowArgs>(args?: SelectSubset<T, SeatFindFirstOrThrowArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Seats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Seats
     * const seats = await prisma.seat.findMany()
     * 
     * // Get first 10 Seats
     * const seats = await prisma.seat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const seatWithIdOnly = await prisma.seat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SeatFindManyArgs>(args?: SelectSubset<T, SeatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Seat.
     * @param {SeatCreateArgs} args - Arguments to create a Seat.
     * @example
     * // Create one Seat
     * const Seat = await prisma.seat.create({
     *   data: {
     *     // ... data to create a Seat
     *   }
     * })
     * 
     */
    create<T extends SeatCreateArgs>(args: SelectSubset<T, SeatCreateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Seats.
     * @param {SeatCreateManyArgs} args - Arguments to create many Seats.
     * @example
     * // Create many Seats
     * const seat = await prisma.seat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SeatCreateManyArgs>(args?: SelectSubset<T, SeatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Seat.
     * @param {SeatDeleteArgs} args - Arguments to delete one Seat.
     * @example
     * // Delete one Seat
     * const Seat = await prisma.seat.delete({
     *   where: {
     *     // ... filter to delete one Seat
     *   }
     * })
     * 
     */
    delete<T extends SeatDeleteArgs>(args: SelectSubset<T, SeatDeleteArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Seat.
     * @param {SeatUpdateArgs} args - Arguments to update one Seat.
     * @example
     * // Update one Seat
     * const seat = await prisma.seat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SeatUpdateArgs>(args: SelectSubset<T, SeatUpdateArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Seats.
     * @param {SeatDeleteManyArgs} args - Arguments to filter Seats to delete.
     * @example
     * // Delete a few Seats
     * const { count } = await prisma.seat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SeatDeleteManyArgs>(args?: SelectSubset<T, SeatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Seats
     * const seat = await prisma.seat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SeatUpdateManyArgs>(args: SelectSubset<T, SeatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Seat.
     * @param {SeatUpsertArgs} args - Arguments to update or create a Seat.
     * @example
     * // Update or create a Seat
     * const seat = await prisma.seat.upsert({
     *   create: {
     *     // ... data to create a Seat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Seat we want to update
     *   }
     * })
     */
    upsert<T extends SeatUpsertArgs>(args: SelectSubset<T, SeatUpsertArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Seats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatCountArgs} args - Arguments to filter Seats to count.
     * @example
     * // Count the number of Seats
     * const count = await prisma.seat.count({
     *   where: {
     *     // ... the filter for the Seats we want to count
     *   }
     * })
    **/
    count<T extends SeatCountArgs>(
      args?: Subset<T, SeatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SeatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SeatAggregateArgs>(args: Subset<T, SeatAggregateArgs>): Prisma.PrismaPromise<GetSeatAggregateType<T>>

    /**
     * Group by Seat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SeatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SeatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SeatGroupByArgs['orderBy'] }
        : { orderBy?: SeatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SeatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSeatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Seat model
   */
  readonly fields: SeatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Seat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SeatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Seat$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Seat$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Seat model
   */
  interface SeatFieldRefs {
    readonly id: FieldRef<"Seat", 'String'>
    readonly storeId: FieldRef<"Seat", 'String'>
    readonly areaId: FieldRef<"Seat", 'String'>
    readonly type: FieldRef<"Seat", 'Int'>
    readonly seatNo: FieldRef<"Seat", 'String'>
    readonly x: FieldRef<"Seat", 'Float'>
    readonly y: FieldRef<"Seat", 'Float'>
    readonly width: FieldRef<"Seat", 'Float'>
    readonly height: FieldRef<"Seat", 'Float'>
    readonly hasPower: FieldRef<"Seat", 'Boolean'>
    readonly status: FieldRef<"Seat", 'Int'>
    readonly description: FieldRef<"Seat", 'String'>
    readonly createdBy: FieldRef<"Seat", 'String'>
    readonly createdTime: FieldRef<"Seat", 'BigInt'>
    readonly updatedTime: FieldRef<"Seat", 'BigInt'>
    readonly deletedTime: FieldRef<"Seat", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Seat findUnique
   */
  export type SeatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findUniqueOrThrow
   */
  export type SeatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat findFirst
   */
  export type SeatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findFirstOrThrow
   */
  export type SeatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seat to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat findMany
   */
  export type SeatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter, which Seats to fetch.
     */
    where?: SeatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Seats to fetch.
     */
    orderBy?: SeatOrderByWithRelationInput | SeatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Seats.
     */
    cursor?: SeatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Seats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Seats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Seats.
     */
    distinct?: SeatScalarFieldEnum | SeatScalarFieldEnum[]
  }

  /**
   * Seat create
   */
  export type SeatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to create a Seat.
     */
    data: XOR<SeatCreateInput, SeatUncheckedCreateInput>
  }

  /**
   * Seat createMany
   */
  export type SeatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Seats.
     */
    data: SeatCreateManyInput | SeatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Seat update
   */
  export type SeatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The data needed to update a Seat.
     */
    data: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
    /**
     * Choose, which Seat to update.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat updateMany
   */
  export type SeatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Seats.
     */
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyInput>
    /**
     * Filter which Seats to update
     */
    where?: SeatWhereInput
    /**
     * Limit how many Seats to update.
     */
    limit?: number
  }

  /**
   * Seat upsert
   */
  export type SeatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * The filter to search for the Seat to update in case it exists.
     */
    where: SeatWhereUniqueInput
    /**
     * In case the Seat found by the `where` argument doesn't exist, create a new Seat with this data.
     */
    create: XOR<SeatCreateInput, SeatUncheckedCreateInput>
    /**
     * In case the Seat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SeatUpdateInput, SeatUncheckedUpdateInput>
  }

  /**
   * Seat delete
   */
  export type SeatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
    /**
     * Filter which Seat to delete.
     */
    where: SeatWhereUniqueInput
  }

  /**
   * Seat deleteMany
   */
  export type SeatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Seats to delete
     */
    where?: SeatWhereInput
    /**
     * Limit how many Seats to delete.
     */
    limit?: number
  }

  /**
   * Seat.orders
   */
  export type Seat$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrder
     */
    select?: UserOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrder
     */
    omit?: UserOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderInclude<ExtArgs> | null
    where?: UserOrderWhereInput
    orderBy?: UserOrderOrderByWithRelationInput | UserOrderOrderByWithRelationInput[]
    cursor?: UserOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserOrderScalarFieldEnum | UserOrderScalarFieldEnum[]
  }

  /**
   * Seat without action
   */
  export type SeatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Seat
     */
    select?: SeatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Seat
     */
    omit?: SeatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SeatInclude<ExtArgs> | null
  }


  /**
   * Model Card
   */

  export type AggregateCard = {
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  export type CardAvgAggregateOutputType = {
    type: number | null
    createdTime: number | null
    updatedTime: number | null
    deletedTime: number | null
  }

  export type CardSumAggregateOutputType = {
    type: number | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type CardMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: number | null
    description: string | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type CardMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: number | null
    description: string | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type CardCountAggregateOutputType = {
    id: number
    name: number
    type: number
    description: number
    createdBy: number
    createdTime: number
    updatedTime: number
    deletedTime: number
    _all: number
  }


  export type CardAvgAggregateInputType = {
    type?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type CardSumAggregateInputType = {
    type?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type CardMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type CardMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type CardCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    description?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
    _all?: true
  }

  export type CardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Card to aggregate.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cards
    **/
    _count?: true | CardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CardMaxAggregateInputType
  }

  export type GetCardAggregateType<T extends CardAggregateArgs> = {
        [P in keyof T & keyof AggregateCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCard[P]>
      : GetScalarType<T[P], AggregateCard[P]>
  }




  export type CardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CardWhereInput
    orderBy?: CardOrderByWithAggregationInput | CardOrderByWithAggregationInput[]
    by: CardScalarFieldEnum[] | CardScalarFieldEnum
    having?: CardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CardCountAggregateInputType | true
    _avg?: CardAvgAggregateInputType
    _sum?: CardSumAggregateInputType
    _min?: CardMinAggregateInputType
    _max?: CardMaxAggregateInputType
  }

  export type CardGroupByOutputType = {
    id: string
    name: string
    type: number
    description: string
    createdBy: string
    createdTime: bigint
    updatedTime: bigint
    deletedTime: bigint
    _count: CardCountAggregateOutputType | null
    _avg: CardAvgAggregateOutputType | null
    _sum: CardSumAggregateOutputType | null
    _min: CardMinAggregateOutputType | null
    _max: CardMaxAggregateOutputType | null
  }

  type GetCardGroupByPayload<T extends CardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CardGroupByOutputType[P]>
            : GetScalarType<T[P], CardGroupByOutputType[P]>
        }
      >
    >


  export type CardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
    userCards?: boolean | Card$userCardsArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["card"]>



  export type CardSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
  }

  export type CardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "description" | "createdBy" | "createdTime" | "updatedTime" | "deletedTime", ExtArgs["result"]["card"]>
  export type CardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userCards?: boolean | Card$userCardsArgs<ExtArgs>
    _count?: boolean | CardCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Card"
    objects: {
      userCards: Prisma.$UserCardPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: number
      description: string
      createdBy: string
      createdTime: bigint
      updatedTime: bigint
      deletedTime: bigint
    }, ExtArgs["result"]["card"]>
    composites: {}
  }

  type CardGetPayload<S extends boolean | null | undefined | CardDefaultArgs> = $Result.GetResult<Prisma.$CardPayload, S>

  type CardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CardCountAggregateInputType | true
    }

  export interface CardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Card'], meta: { name: 'Card' } }
    /**
     * Find zero or one Card that matches the filter.
     * @param {CardFindUniqueArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CardFindUniqueArgs>(args: SelectSubset<T, CardFindUniqueArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Card that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CardFindUniqueOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CardFindUniqueOrThrowArgs>(args: SelectSubset<T, CardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CardFindFirstArgs>(args?: SelectSubset<T, CardFindFirstArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Card that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindFirstOrThrowArgs} args - Arguments to find a Card
     * @example
     * // Get one Card
     * const card = await prisma.card.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CardFindFirstOrThrowArgs>(args?: SelectSubset<T, CardFindFirstOrThrowArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cards
     * const cards = await prisma.card.findMany()
     * 
     * // Get first 10 Cards
     * const cards = await prisma.card.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cardWithIdOnly = await prisma.card.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CardFindManyArgs>(args?: SelectSubset<T, CardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Card.
     * @param {CardCreateArgs} args - Arguments to create a Card.
     * @example
     * // Create one Card
     * const Card = await prisma.card.create({
     *   data: {
     *     // ... data to create a Card
     *   }
     * })
     * 
     */
    create<T extends CardCreateArgs>(args: SelectSubset<T, CardCreateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cards.
     * @param {CardCreateManyArgs} args - Arguments to create many Cards.
     * @example
     * // Create many Cards
     * const card = await prisma.card.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CardCreateManyArgs>(args?: SelectSubset<T, CardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Card.
     * @param {CardDeleteArgs} args - Arguments to delete one Card.
     * @example
     * // Delete one Card
     * const Card = await prisma.card.delete({
     *   where: {
     *     // ... filter to delete one Card
     *   }
     * })
     * 
     */
    delete<T extends CardDeleteArgs>(args: SelectSubset<T, CardDeleteArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Card.
     * @param {CardUpdateArgs} args - Arguments to update one Card.
     * @example
     * // Update one Card
     * const card = await prisma.card.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CardUpdateArgs>(args: SelectSubset<T, CardUpdateArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cards.
     * @param {CardDeleteManyArgs} args - Arguments to filter Cards to delete.
     * @example
     * // Delete a few Cards
     * const { count } = await prisma.card.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CardDeleteManyArgs>(args?: SelectSubset<T, CardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cards
     * const card = await prisma.card.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CardUpdateManyArgs>(args: SelectSubset<T, CardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Card.
     * @param {CardUpsertArgs} args - Arguments to update or create a Card.
     * @example
     * // Update or create a Card
     * const card = await prisma.card.upsert({
     *   create: {
     *     // ... data to create a Card
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Card we want to update
     *   }
     * })
     */
    upsert<T extends CardUpsertArgs>(args: SelectSubset<T, CardUpsertArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardCountArgs} args - Arguments to filter Cards to count.
     * @example
     * // Count the number of Cards
     * const count = await prisma.card.count({
     *   where: {
     *     // ... the filter for the Cards we want to count
     *   }
     * })
    **/
    count<T extends CardCountArgs>(
      args?: Subset<T, CardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CardAggregateArgs>(args: Subset<T, CardAggregateArgs>): Prisma.PrismaPromise<GetCardAggregateType<T>>

    /**
     * Group by Card.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CardGroupByArgs['orderBy'] }
        : { orderBy?: CardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Card model
   */
  readonly fields: CardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Card.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userCards<T extends Card$userCardsArgs<ExtArgs> = {}>(args?: Subset<T, Card$userCardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Card model
   */
  interface CardFieldRefs {
    readonly id: FieldRef<"Card", 'String'>
    readonly name: FieldRef<"Card", 'String'>
    readonly type: FieldRef<"Card", 'Int'>
    readonly description: FieldRef<"Card", 'String'>
    readonly createdBy: FieldRef<"Card", 'String'>
    readonly createdTime: FieldRef<"Card", 'BigInt'>
    readonly updatedTime: FieldRef<"Card", 'BigInt'>
    readonly deletedTime: FieldRef<"Card", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Card findUnique
   */
  export type CardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findUniqueOrThrow
   */
  export type CardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card findFirst
   */
  export type CardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findFirstOrThrow
   */
  export type CardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Card to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card findMany
   */
  export type CardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter, which Cards to fetch.
     */
    where?: CardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cards to fetch.
     */
    orderBy?: CardOrderByWithRelationInput | CardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cards.
     */
    cursor?: CardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cards.
     */
    distinct?: CardScalarFieldEnum | CardScalarFieldEnum[]
  }

  /**
   * Card create
   */
  export type CardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to create a Card.
     */
    data?: XOR<CardCreateInput, CardUncheckedCreateInput>
  }

  /**
   * Card createMany
   */
  export type CardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cards.
     */
    data: CardCreateManyInput | CardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Card update
   */
  export type CardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The data needed to update a Card.
     */
    data: XOR<CardUpdateInput, CardUncheckedUpdateInput>
    /**
     * Choose, which Card to update.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card updateMany
   */
  export type CardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cards.
     */
    data: XOR<CardUpdateManyMutationInput, CardUncheckedUpdateManyInput>
    /**
     * Filter which Cards to update
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to update.
     */
    limit?: number
  }

  /**
   * Card upsert
   */
  export type CardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * The filter to search for the Card to update in case it exists.
     */
    where: CardWhereUniqueInput
    /**
     * In case the Card found by the `where` argument doesn't exist, create a new Card with this data.
     */
    create: XOR<CardCreateInput, CardUncheckedCreateInput>
    /**
     * In case the Card was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CardUpdateInput, CardUncheckedUpdateInput>
  }

  /**
   * Card delete
   */
  export type CardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
    /**
     * Filter which Card to delete.
     */
    where: CardWhereUniqueInput
  }

  /**
   * Card deleteMany
   */
  export type CardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cards to delete
     */
    where?: CardWhereInput
    /**
     * Limit how many Cards to delete.
     */
    limit?: number
  }

  /**
   * Card.userCards
   */
  export type Card$userCardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    where?: UserCardWhereInput
    orderBy?: UserCardOrderByWithRelationInput | UserCardOrderByWithRelationInput[]
    cursor?: UserCardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCardScalarFieldEnum | UserCardScalarFieldEnum[]
  }

  /**
   * Card without action
   */
  export type CardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Card
     */
    select?: CardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Card
     */
    omit?: CardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CardInclude<ExtArgs> | null
  }


  /**
   * Model UserCard
   */

  export type AggregateUserCard = {
    _count: UserCardCountAggregateOutputType | null
    _avg: UserCardAvgAggregateOutputType | null
    _sum: UserCardSumAggregateOutputType | null
    _min: UserCardMinAggregateOutputType | null
    _max: UserCardMaxAggregateOutputType | null
  }

  export type UserCardAvgAggregateOutputType = {
    createdTime: number | null
    updatedTime: number | null
    deletedTime: number | null
  }

  export type UserCardSumAggregateOutputType = {
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type UserCardMinAggregateOutputType = {
    id: string | null
    userId: string | null
    cardId: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type UserCardMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    cardId: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type UserCardCountAggregateOutputType = {
    id: number
    userId: number
    cardId: number
    createdTime: number
    updatedTime: number
    deletedTime: number
    _all: number
  }


  export type UserCardAvgAggregateInputType = {
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type UserCardSumAggregateInputType = {
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type UserCardMinAggregateInputType = {
    id?: true
    userId?: true
    cardId?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type UserCardMaxAggregateInputType = {
    id?: true
    userId?: true
    cardId?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type UserCardCountAggregateInputType = {
    id?: true
    userId?: true
    cardId?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
    _all?: true
  }

  export type UserCardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCard to aggregate.
     */
    where?: UserCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCards to fetch.
     */
    orderBy?: UserCardOrderByWithRelationInput | UserCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCards
    **/
    _count?: true | UserCardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserCardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserCardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCardMaxAggregateInputType
  }

  export type GetUserCardAggregateType<T extends UserCardAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCard[P]>
      : GetScalarType<T[P], AggregateUserCard[P]>
  }




  export type UserCardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCardWhereInput
    orderBy?: UserCardOrderByWithAggregationInput | UserCardOrderByWithAggregationInput[]
    by: UserCardScalarFieldEnum[] | UserCardScalarFieldEnum
    having?: UserCardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCardCountAggregateInputType | true
    _avg?: UserCardAvgAggregateInputType
    _sum?: UserCardSumAggregateInputType
    _min?: UserCardMinAggregateInputType
    _max?: UserCardMaxAggregateInputType
  }

  export type UserCardGroupByOutputType = {
    id: string
    userId: string
    cardId: string
    createdTime: bigint
    updatedTime: bigint
    deletedTime: bigint
    _count: UserCardCountAggregateOutputType | null
    _avg: UserCardAvgAggregateOutputType | null
    _sum: UserCardSumAggregateOutputType | null
    _min: UserCardMinAggregateOutputType | null
    _max: UserCardMaxAggregateOutputType | null
  }

  type GetUserCardGroupByPayload<T extends UserCardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCardGroupByOutputType[P]>
            : GetScalarType<T[P], UserCardGroupByOutputType[P]>
        }
      >
    >


  export type UserCardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    cardId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCard"]>



  export type UserCardSelectScalar = {
    id?: boolean
    userId?: boolean
    cardId?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
  }

  export type UserCardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "cardId" | "createdTime" | "updatedTime" | "deletedTime", ExtArgs["result"]["userCard"]>
  export type UserCardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    card?: boolean | CardDefaultArgs<ExtArgs>
  }

  export type $UserCardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCard"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      card: Prisma.$CardPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      cardId: string
      createdTime: bigint
      updatedTime: bigint
      deletedTime: bigint
    }, ExtArgs["result"]["userCard"]>
    composites: {}
  }

  type UserCardGetPayload<S extends boolean | null | undefined | UserCardDefaultArgs> = $Result.GetResult<Prisma.$UserCardPayload, S>

  type UserCardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCardCountAggregateInputType | true
    }

  export interface UserCardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCard'], meta: { name: 'UserCard' } }
    /**
     * Find zero or one UserCard that matches the filter.
     * @param {UserCardFindUniqueArgs} args - Arguments to find a UserCard
     * @example
     * // Get one UserCard
     * const userCard = await prisma.userCard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCardFindUniqueArgs>(args: SelectSubset<T, UserCardFindUniqueArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCardFindUniqueOrThrowArgs} args - Arguments to find a UserCard
     * @example
     * // Get one UserCard
     * const userCard = await prisma.userCard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCardFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardFindFirstArgs} args - Arguments to find a UserCard
     * @example
     * // Get one UserCard
     * const userCard = await prisma.userCard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCardFindFirstArgs>(args?: SelectSubset<T, UserCardFindFirstArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardFindFirstOrThrowArgs} args - Arguments to find a UserCard
     * @example
     * // Get one UserCard
     * const userCard = await prisma.userCard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCardFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCardFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCards
     * const userCards = await prisma.userCard.findMany()
     * 
     * // Get first 10 UserCards
     * const userCards = await prisma.userCard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userCardWithIdOnly = await prisma.userCard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserCardFindManyArgs>(args?: SelectSubset<T, UserCardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCard.
     * @param {UserCardCreateArgs} args - Arguments to create a UserCard.
     * @example
     * // Create one UserCard
     * const UserCard = await prisma.userCard.create({
     *   data: {
     *     // ... data to create a UserCard
     *   }
     * })
     * 
     */
    create<T extends UserCardCreateArgs>(args: SelectSubset<T, UserCardCreateArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCards.
     * @param {UserCardCreateManyArgs} args - Arguments to create many UserCards.
     * @example
     * // Create many UserCards
     * const userCard = await prisma.userCard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCardCreateManyArgs>(args?: SelectSubset<T, UserCardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserCard.
     * @param {UserCardDeleteArgs} args - Arguments to delete one UserCard.
     * @example
     * // Delete one UserCard
     * const UserCard = await prisma.userCard.delete({
     *   where: {
     *     // ... filter to delete one UserCard
     *   }
     * })
     * 
     */
    delete<T extends UserCardDeleteArgs>(args: SelectSubset<T, UserCardDeleteArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCard.
     * @param {UserCardUpdateArgs} args - Arguments to update one UserCard.
     * @example
     * // Update one UserCard
     * const userCard = await prisma.userCard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCardUpdateArgs>(args: SelectSubset<T, UserCardUpdateArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCards.
     * @param {UserCardDeleteManyArgs} args - Arguments to filter UserCards to delete.
     * @example
     * // Delete a few UserCards
     * const { count } = await prisma.userCard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCardDeleteManyArgs>(args?: SelectSubset<T, UserCardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCards
     * const userCard = await prisma.userCard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCardUpdateManyArgs>(args: SelectSubset<T, UserCardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserCard.
     * @param {UserCardUpsertArgs} args - Arguments to update or create a UserCard.
     * @example
     * // Update or create a UserCard
     * const userCard = await prisma.userCard.upsert({
     *   create: {
     *     // ... data to create a UserCard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCard we want to update
     *   }
     * })
     */
    upsert<T extends UserCardUpsertArgs>(args: SelectSubset<T, UserCardUpsertArgs<ExtArgs>>): Prisma__UserCardClient<$Result.GetResult<Prisma.$UserCardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardCountArgs} args - Arguments to filter UserCards to count.
     * @example
     * // Count the number of UserCards
     * const count = await prisma.userCard.count({
     *   where: {
     *     // ... the filter for the UserCards we want to count
     *   }
     * })
    **/
    count<T extends UserCardCountArgs>(
      args?: Subset<T, UserCardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCardAggregateArgs>(args: Subset<T, UserCardAggregateArgs>): Prisma.PrismaPromise<GetUserCardAggregateType<T>>

    /**
     * Group by UserCard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCardGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCardGroupByArgs['orderBy'] }
        : { orderBy?: UserCardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCard model
   */
  readonly fields: UserCardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    card<T extends CardDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CardDefaultArgs<ExtArgs>>): Prisma__CardClient<$Result.GetResult<Prisma.$CardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCard model
   */
  interface UserCardFieldRefs {
    readonly id: FieldRef<"UserCard", 'String'>
    readonly userId: FieldRef<"UserCard", 'String'>
    readonly cardId: FieldRef<"UserCard", 'String'>
    readonly createdTime: FieldRef<"UserCard", 'BigInt'>
    readonly updatedTime: FieldRef<"UserCard", 'BigInt'>
    readonly deletedTime: FieldRef<"UserCard", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * UserCard findUnique
   */
  export type UserCardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * Filter, which UserCard to fetch.
     */
    where: UserCardWhereUniqueInput
  }

  /**
   * UserCard findUniqueOrThrow
   */
  export type UserCardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * Filter, which UserCard to fetch.
     */
    where: UserCardWhereUniqueInput
  }

  /**
   * UserCard findFirst
   */
  export type UserCardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * Filter, which UserCard to fetch.
     */
    where?: UserCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCards to fetch.
     */
    orderBy?: UserCardOrderByWithRelationInput | UserCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCards.
     */
    cursor?: UserCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCards.
     */
    distinct?: UserCardScalarFieldEnum | UserCardScalarFieldEnum[]
  }

  /**
   * UserCard findFirstOrThrow
   */
  export type UserCardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * Filter, which UserCard to fetch.
     */
    where?: UserCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCards to fetch.
     */
    orderBy?: UserCardOrderByWithRelationInput | UserCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCards.
     */
    cursor?: UserCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCards.
     */
    distinct?: UserCardScalarFieldEnum | UserCardScalarFieldEnum[]
  }

  /**
   * UserCard findMany
   */
  export type UserCardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * Filter, which UserCards to fetch.
     */
    where?: UserCardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCards to fetch.
     */
    orderBy?: UserCardOrderByWithRelationInput | UserCardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCards.
     */
    cursor?: UserCardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCards.
     */
    distinct?: UserCardScalarFieldEnum | UserCardScalarFieldEnum[]
  }

  /**
   * UserCard create
   */
  export type UserCardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCard.
     */
    data: XOR<UserCardCreateInput, UserCardUncheckedCreateInput>
  }

  /**
   * UserCard createMany
   */
  export type UserCardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCards.
     */
    data: UserCardCreateManyInput | UserCardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCard update
   */
  export type UserCardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCard.
     */
    data: XOR<UserCardUpdateInput, UserCardUncheckedUpdateInput>
    /**
     * Choose, which UserCard to update.
     */
    where: UserCardWhereUniqueInput
  }

  /**
   * UserCard updateMany
   */
  export type UserCardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCards.
     */
    data: XOR<UserCardUpdateManyMutationInput, UserCardUncheckedUpdateManyInput>
    /**
     * Filter which UserCards to update
     */
    where?: UserCardWhereInput
    /**
     * Limit how many UserCards to update.
     */
    limit?: number
  }

  /**
   * UserCard upsert
   */
  export type UserCardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCard to update in case it exists.
     */
    where: UserCardWhereUniqueInput
    /**
     * In case the UserCard found by the `where` argument doesn't exist, create a new UserCard with this data.
     */
    create: XOR<UserCardCreateInput, UserCardUncheckedCreateInput>
    /**
     * In case the UserCard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCardUpdateInput, UserCardUncheckedUpdateInput>
  }

  /**
   * UserCard delete
   */
  export type UserCardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
    /**
     * Filter which UserCard to delete.
     */
    where: UserCardWhereUniqueInput
  }

  /**
   * UserCard deleteMany
   */
  export type UserCardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCards to delete
     */
    where?: UserCardWhereInput
    /**
     * Limit how many UserCards to delete.
     */
    limit?: number
  }

  /**
   * UserCard without action
   */
  export type UserCardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCard
     */
    select?: UserCardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCard
     */
    omit?: UserCardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCardInclude<ExtArgs> | null
  }


  /**
   * Model UserOrder
   */

  export type AggregateUserOrder = {
    _count: UserOrderCountAggregateOutputType | null
    _avg: UserOrderAvgAggregateOutputType | null
    _sum: UserOrderSumAggregateOutputType | null
    _min: UserOrderMinAggregateOutputType | null
    _max: UserOrderMaxAggregateOutputType | null
  }

  export type UserOrderAvgAggregateOutputType = {
    category: number | null
    type: number | null
    startTime: number | null
    endTime: number | null
    payMethod: number | null
    price: number | null
    status: number | null
    createdTime: number | null
    updatedTime: number | null
    deletedTime: number | null
  }

  export type UserOrderSumAggregateOutputType = {
    category: number | null
    type: number | null
    startTime: bigint | null
    endTime: bigint | null
    payMethod: number | null
    price: number | null
    status: number | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type UserOrderMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    areaId: string | null
    seatId: string | null
    category: number | null
    userId: string | null
    type: number | null
    startTime: bigint | null
    endTime: bigint | null
    payMethod: number | null
    price: number | null
    status: number | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type UserOrderMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    areaId: string | null
    seatId: string | null
    category: number | null
    userId: string | null
    type: number | null
    startTime: bigint | null
    endTime: bigint | null
    payMethod: number | null
    price: number | null
    status: number | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type UserOrderCountAggregateOutputType = {
    id: number
    storeId: number
    areaId: number
    seatId: number
    category: number
    userId: number
    type: number
    startTime: number
    endTime: number
    payMethod: number
    price: number
    status: number
    createdTime: number
    updatedTime: number
    deletedTime: number
    _all: number
  }


  export type UserOrderAvgAggregateInputType = {
    category?: true
    type?: true
    startTime?: true
    endTime?: true
    payMethod?: true
    price?: true
    status?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type UserOrderSumAggregateInputType = {
    category?: true
    type?: true
    startTime?: true
    endTime?: true
    payMethod?: true
    price?: true
    status?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type UserOrderMinAggregateInputType = {
    id?: true
    storeId?: true
    areaId?: true
    seatId?: true
    category?: true
    userId?: true
    type?: true
    startTime?: true
    endTime?: true
    payMethod?: true
    price?: true
    status?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type UserOrderMaxAggregateInputType = {
    id?: true
    storeId?: true
    areaId?: true
    seatId?: true
    category?: true
    userId?: true
    type?: true
    startTime?: true
    endTime?: true
    payMethod?: true
    price?: true
    status?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type UserOrderCountAggregateInputType = {
    id?: true
    storeId?: true
    areaId?: true
    seatId?: true
    category?: true
    userId?: true
    type?: true
    startTime?: true
    endTime?: true
    payMethod?: true
    price?: true
    status?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
    _all?: true
  }

  export type UserOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOrder to aggregate.
     */
    where?: UserOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOrders to fetch.
     */
    orderBy?: UserOrderOrderByWithRelationInput | UserOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserOrders
    **/
    _count?: true | UserOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserOrderMaxAggregateInputType
  }

  export type GetUserOrderAggregateType<T extends UserOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateUserOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserOrder[P]>
      : GetScalarType<T[P], AggregateUserOrder[P]>
  }




  export type UserOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserOrderWhereInput
    orderBy?: UserOrderOrderByWithAggregationInput | UserOrderOrderByWithAggregationInput[]
    by: UserOrderScalarFieldEnum[] | UserOrderScalarFieldEnum
    having?: UserOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserOrderCountAggregateInputType | true
    _avg?: UserOrderAvgAggregateInputType
    _sum?: UserOrderSumAggregateInputType
    _min?: UserOrderMinAggregateInputType
    _max?: UserOrderMaxAggregateInputType
  }

  export type UserOrderGroupByOutputType = {
    id: string
    storeId: string
    areaId: string
    seatId: string
    category: number
    userId: string
    type: number
    startTime: bigint
    endTime: bigint
    payMethod: number
    price: number
    status: number
    createdTime: bigint
    updatedTime: bigint
    deletedTime: bigint
    _count: UserOrderCountAggregateOutputType | null
    _avg: UserOrderAvgAggregateOutputType | null
    _sum: UserOrderSumAggregateOutputType | null
    _min: UserOrderMinAggregateOutputType | null
    _max: UserOrderMaxAggregateOutputType | null
  }

  type GetUserOrderGroupByPayload<T extends UserOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserOrderGroupByOutputType[P]>
            : GetScalarType<T[P], UserOrderGroupByOutputType[P]>
        }
      >
    >


  export type UserOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    areaId?: boolean
    seatId?: boolean
    category?: boolean
    userId?: boolean
    type?: boolean
    startTime?: boolean
    endTime?: boolean
    payMethod?: boolean
    price?: boolean
    status?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userOrder"]>



  export type UserOrderSelectScalar = {
    id?: boolean
    storeId?: boolean
    areaId?: boolean
    seatId?: boolean
    category?: boolean
    userId?: boolean
    type?: boolean
    startTime?: boolean
    endTime?: boolean
    payMethod?: boolean
    price?: boolean
    status?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
  }

  export type UserOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "areaId" | "seatId" | "category" | "userId" | "type" | "startTime" | "endTime" | "payMethod" | "price" | "status" | "createdTime" | "updatedTime" | "deletedTime", ExtArgs["result"]["userOrder"]>
  export type UserOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    seat?: boolean | SeatDefaultArgs<ExtArgs>
  }

  export type $UserOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserOrder"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      seat: Prisma.$SeatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      areaId: string
      seatId: string
      category: number
      userId: string
      type: number
      startTime: bigint
      endTime: bigint
      payMethod: number
      price: number
      status: number
      createdTime: bigint
      updatedTime: bigint
      deletedTime: bigint
    }, ExtArgs["result"]["userOrder"]>
    composites: {}
  }

  type UserOrderGetPayload<S extends boolean | null | undefined | UserOrderDefaultArgs> = $Result.GetResult<Prisma.$UserOrderPayload, S>

  type UserOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserOrderCountAggregateInputType | true
    }

  export interface UserOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserOrder'], meta: { name: 'UserOrder' } }
    /**
     * Find zero or one UserOrder that matches the filter.
     * @param {UserOrderFindUniqueArgs} args - Arguments to find a UserOrder
     * @example
     * // Get one UserOrder
     * const userOrder = await prisma.userOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserOrderFindUniqueArgs>(args: SelectSubset<T, UserOrderFindUniqueArgs<ExtArgs>>): Prisma__UserOrderClient<$Result.GetResult<Prisma.$UserOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserOrderFindUniqueOrThrowArgs} args - Arguments to find a UserOrder
     * @example
     * // Get one UserOrder
     * const userOrder = await prisma.userOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, UserOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserOrderClient<$Result.GetResult<Prisma.$UserOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrderFindFirstArgs} args - Arguments to find a UserOrder
     * @example
     * // Get one UserOrder
     * const userOrder = await prisma.userOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserOrderFindFirstArgs>(args?: SelectSubset<T, UserOrderFindFirstArgs<ExtArgs>>): Prisma__UserOrderClient<$Result.GetResult<Prisma.$UserOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrderFindFirstOrThrowArgs} args - Arguments to find a UserOrder
     * @example
     * // Get one UserOrder
     * const userOrder = await prisma.userOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, UserOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserOrderClient<$Result.GetResult<Prisma.$UserOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserOrders
     * const userOrders = await prisma.userOrder.findMany()
     * 
     * // Get first 10 UserOrders
     * const userOrders = await prisma.userOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userOrderWithIdOnly = await prisma.userOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserOrderFindManyArgs>(args?: SelectSubset<T, UserOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserOrder.
     * @param {UserOrderCreateArgs} args - Arguments to create a UserOrder.
     * @example
     * // Create one UserOrder
     * const UserOrder = await prisma.userOrder.create({
     *   data: {
     *     // ... data to create a UserOrder
     *   }
     * })
     * 
     */
    create<T extends UserOrderCreateArgs>(args: SelectSubset<T, UserOrderCreateArgs<ExtArgs>>): Prisma__UserOrderClient<$Result.GetResult<Prisma.$UserOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserOrders.
     * @param {UserOrderCreateManyArgs} args - Arguments to create many UserOrders.
     * @example
     * // Create many UserOrders
     * const userOrder = await prisma.userOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserOrderCreateManyArgs>(args?: SelectSubset<T, UserOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserOrder.
     * @param {UserOrderDeleteArgs} args - Arguments to delete one UserOrder.
     * @example
     * // Delete one UserOrder
     * const UserOrder = await prisma.userOrder.delete({
     *   where: {
     *     // ... filter to delete one UserOrder
     *   }
     * })
     * 
     */
    delete<T extends UserOrderDeleteArgs>(args: SelectSubset<T, UserOrderDeleteArgs<ExtArgs>>): Prisma__UserOrderClient<$Result.GetResult<Prisma.$UserOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserOrder.
     * @param {UserOrderUpdateArgs} args - Arguments to update one UserOrder.
     * @example
     * // Update one UserOrder
     * const userOrder = await prisma.userOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserOrderUpdateArgs>(args: SelectSubset<T, UserOrderUpdateArgs<ExtArgs>>): Prisma__UserOrderClient<$Result.GetResult<Prisma.$UserOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserOrders.
     * @param {UserOrderDeleteManyArgs} args - Arguments to filter UserOrders to delete.
     * @example
     * // Delete a few UserOrders
     * const { count } = await prisma.userOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserOrderDeleteManyArgs>(args?: SelectSubset<T, UserOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserOrders
     * const userOrder = await prisma.userOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserOrderUpdateManyArgs>(args: SelectSubset<T, UserOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserOrder.
     * @param {UserOrderUpsertArgs} args - Arguments to update or create a UserOrder.
     * @example
     * // Update or create a UserOrder
     * const userOrder = await prisma.userOrder.upsert({
     *   create: {
     *     // ... data to create a UserOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserOrder we want to update
     *   }
     * })
     */
    upsert<T extends UserOrderUpsertArgs>(args: SelectSubset<T, UserOrderUpsertArgs<ExtArgs>>): Prisma__UserOrderClient<$Result.GetResult<Prisma.$UserOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrderCountArgs} args - Arguments to filter UserOrders to count.
     * @example
     * // Count the number of UserOrders
     * const count = await prisma.userOrder.count({
     *   where: {
     *     // ... the filter for the UserOrders we want to count
     *   }
     * })
    **/
    count<T extends UserOrderCountArgs>(
      args?: Subset<T, UserOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserOrderAggregateArgs>(args: Subset<T, UserOrderAggregateArgs>): Prisma.PrismaPromise<GetUserOrderAggregateType<T>>

    /**
     * Group by UserOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserOrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserOrderGroupByArgs['orderBy'] }
        : { orderBy?: UserOrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserOrder model
   */
  readonly fields: UserOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seat<T extends SeatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SeatDefaultArgs<ExtArgs>>): Prisma__SeatClient<$Result.GetResult<Prisma.$SeatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserOrder model
   */
  interface UserOrderFieldRefs {
    readonly id: FieldRef<"UserOrder", 'String'>
    readonly storeId: FieldRef<"UserOrder", 'String'>
    readonly areaId: FieldRef<"UserOrder", 'String'>
    readonly seatId: FieldRef<"UserOrder", 'String'>
    readonly category: FieldRef<"UserOrder", 'Int'>
    readonly userId: FieldRef<"UserOrder", 'String'>
    readonly type: FieldRef<"UserOrder", 'Int'>
    readonly startTime: FieldRef<"UserOrder", 'BigInt'>
    readonly endTime: FieldRef<"UserOrder", 'BigInt'>
    readonly payMethod: FieldRef<"UserOrder", 'Int'>
    readonly price: FieldRef<"UserOrder", 'Int'>
    readonly status: FieldRef<"UserOrder", 'Int'>
    readonly createdTime: FieldRef<"UserOrder", 'BigInt'>
    readonly updatedTime: FieldRef<"UserOrder", 'BigInt'>
    readonly deletedTime: FieldRef<"UserOrder", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * UserOrder findUnique
   */
  export type UserOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrder
     */
    select?: UserOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrder
     */
    omit?: UserOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderInclude<ExtArgs> | null
    /**
     * Filter, which UserOrder to fetch.
     */
    where: UserOrderWhereUniqueInput
  }

  /**
   * UserOrder findUniqueOrThrow
   */
  export type UserOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrder
     */
    select?: UserOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrder
     */
    omit?: UserOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderInclude<ExtArgs> | null
    /**
     * Filter, which UserOrder to fetch.
     */
    where: UserOrderWhereUniqueInput
  }

  /**
   * UserOrder findFirst
   */
  export type UserOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrder
     */
    select?: UserOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrder
     */
    omit?: UserOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderInclude<ExtArgs> | null
    /**
     * Filter, which UserOrder to fetch.
     */
    where?: UserOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOrders to fetch.
     */
    orderBy?: UserOrderOrderByWithRelationInput | UserOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOrders.
     */
    cursor?: UserOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOrders.
     */
    distinct?: UserOrderScalarFieldEnum | UserOrderScalarFieldEnum[]
  }

  /**
   * UserOrder findFirstOrThrow
   */
  export type UserOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrder
     */
    select?: UserOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrder
     */
    omit?: UserOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderInclude<ExtArgs> | null
    /**
     * Filter, which UserOrder to fetch.
     */
    where?: UserOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOrders to fetch.
     */
    orderBy?: UserOrderOrderByWithRelationInput | UserOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserOrders.
     */
    cursor?: UserOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOrders.
     */
    distinct?: UserOrderScalarFieldEnum | UserOrderScalarFieldEnum[]
  }

  /**
   * UserOrder findMany
   */
  export type UserOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrder
     */
    select?: UserOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrder
     */
    omit?: UserOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderInclude<ExtArgs> | null
    /**
     * Filter, which UserOrders to fetch.
     */
    where?: UserOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserOrders to fetch.
     */
    orderBy?: UserOrderOrderByWithRelationInput | UserOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserOrders.
     */
    cursor?: UserOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserOrders.
     */
    distinct?: UserOrderScalarFieldEnum | UserOrderScalarFieldEnum[]
  }

  /**
   * UserOrder create
   */
  export type UserOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrder
     */
    select?: UserOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrder
     */
    omit?: UserOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a UserOrder.
     */
    data: XOR<UserOrderCreateInput, UserOrderUncheckedCreateInput>
  }

  /**
   * UserOrder createMany
   */
  export type UserOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserOrders.
     */
    data: UserOrderCreateManyInput | UserOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserOrder update
   */
  export type UserOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrder
     */
    select?: UserOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrder
     */
    omit?: UserOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a UserOrder.
     */
    data: XOR<UserOrderUpdateInput, UserOrderUncheckedUpdateInput>
    /**
     * Choose, which UserOrder to update.
     */
    where: UserOrderWhereUniqueInput
  }

  /**
   * UserOrder updateMany
   */
  export type UserOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserOrders.
     */
    data: XOR<UserOrderUpdateManyMutationInput, UserOrderUncheckedUpdateManyInput>
    /**
     * Filter which UserOrders to update
     */
    where?: UserOrderWhereInput
    /**
     * Limit how many UserOrders to update.
     */
    limit?: number
  }

  /**
   * UserOrder upsert
   */
  export type UserOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrder
     */
    select?: UserOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrder
     */
    omit?: UserOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the UserOrder to update in case it exists.
     */
    where: UserOrderWhereUniqueInput
    /**
     * In case the UserOrder found by the `where` argument doesn't exist, create a new UserOrder with this data.
     */
    create: XOR<UserOrderCreateInput, UserOrderUncheckedCreateInput>
    /**
     * In case the UserOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserOrderUpdateInput, UserOrderUncheckedUpdateInput>
  }

  /**
   * UserOrder delete
   */
  export type UserOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrder
     */
    select?: UserOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrder
     */
    omit?: UserOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderInclude<ExtArgs> | null
    /**
     * Filter which UserOrder to delete.
     */
    where: UserOrderWhereUniqueInput
  }

  /**
   * UserOrder deleteMany
   */
  export type UserOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserOrders to delete
     */
    where?: UserOrderWhereInput
    /**
     * Limit how many UserOrders to delete.
     */
    limit?: number
  }

  /**
   * UserOrder without action
   */
  export type UserOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserOrder
     */
    select?: UserOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserOrder
     */
    omit?: UserOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserOrderInclude<ExtArgs> | null
  }


  /**
   * Model Attachment
   */

  export type AggregateAttachment = {
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  export type AttachmentAvgAggregateOutputType = {
    type: number | null
    createdTime: number | null
    updatedTime: number | null
    deletedTime: number | null
  }

  export type AttachmentSumAggregateOutputType = {
    type: number | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type AttachmentMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    noticeId: string | null
    name: string | null
    type: number | null
    description: string | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type AttachmentMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    noticeId: string | null
    name: string | null
    type: number | null
    description: string | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type AttachmentCountAggregateOutputType = {
    id: number
    storeId: number
    noticeId: number
    name: number
    type: number
    description: number
    createdBy: number
    createdTime: number
    updatedTime: number
    deletedTime: number
    _all: number
  }


  export type AttachmentAvgAggregateInputType = {
    type?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type AttachmentSumAggregateInputType = {
    type?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type AttachmentMinAggregateInputType = {
    id?: true
    storeId?: true
    noticeId?: true
    name?: true
    type?: true
    description?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type AttachmentMaxAggregateInputType = {
    id?: true
    storeId?: true
    noticeId?: true
    name?: true
    type?: true
    description?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type AttachmentCountAggregateInputType = {
    id?: true
    storeId?: true
    noticeId?: true
    name?: true
    type?: true
    description?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
    _all?: true
  }

  export type AttachmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachment to aggregate.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attachments
    **/
    _count?: true | AttachmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttachmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttachmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttachmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttachmentMaxAggregateInputType
  }

  export type GetAttachmentAggregateType<T extends AttachmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAttachment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttachment[P]>
      : GetScalarType<T[P], AggregateAttachment[P]>
  }




  export type AttachmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithAggregationInput | AttachmentOrderByWithAggregationInput[]
    by: AttachmentScalarFieldEnum[] | AttachmentScalarFieldEnum
    having?: AttachmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttachmentCountAggregateInputType | true
    _avg?: AttachmentAvgAggregateInputType
    _sum?: AttachmentSumAggregateInputType
    _min?: AttachmentMinAggregateInputType
    _max?: AttachmentMaxAggregateInputType
  }

  export type AttachmentGroupByOutputType = {
    id: string
    storeId: string | null
    noticeId: string | null
    name: string
    type: number
    description: string
    createdBy: string
    createdTime: bigint
    updatedTime: bigint
    deletedTime: bigint
    _count: AttachmentCountAggregateOutputType | null
    _avg: AttachmentAvgAggregateOutputType | null
    _sum: AttachmentSumAggregateOutputType | null
    _min: AttachmentMinAggregateOutputType | null
    _max: AttachmentMaxAggregateOutputType | null
  }

  type GetAttachmentGroupByPayload<T extends AttachmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttachmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttachmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
            : GetScalarType<T[P], AttachmentGroupByOutputType[P]>
        }
      >
    >


  export type AttachmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    noticeId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
    store?: boolean | Attachment$storeArgs<ExtArgs>
    notice?: boolean | Attachment$noticeArgs<ExtArgs>
  }, ExtArgs["result"]["attachment"]>



  export type AttachmentSelectScalar = {
    id?: boolean
    storeId?: boolean
    noticeId?: boolean
    name?: boolean
    type?: boolean
    description?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
  }

  export type AttachmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "noticeId" | "name" | "type" | "description" | "createdBy" | "createdTime" | "updatedTime" | "deletedTime", ExtArgs["result"]["attachment"]>
  export type AttachmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | Attachment$storeArgs<ExtArgs>
    notice?: boolean | Attachment$noticeArgs<ExtArgs>
  }

  export type $AttachmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attachment"
    objects: {
      store: Prisma.$StorePayload<ExtArgs> | null
      notice: Prisma.$NoticePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string | null
      noticeId: string | null
      name: string
      type: number
      description: string
      createdBy: string
      createdTime: bigint
      updatedTime: bigint
      deletedTime: bigint
    }, ExtArgs["result"]["attachment"]>
    composites: {}
  }

  type AttachmentGetPayload<S extends boolean | null | undefined | AttachmentDefaultArgs> = $Result.GetResult<Prisma.$AttachmentPayload, S>

  type AttachmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttachmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttachmentCountAggregateInputType | true
    }

  export interface AttachmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attachment'], meta: { name: 'Attachment' } }
    /**
     * Find zero or one Attachment that matches the filter.
     * @param {AttachmentFindUniqueArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttachmentFindUniqueArgs>(args: SelectSubset<T, AttachmentFindUniqueArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attachment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttachmentFindUniqueOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttachmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AttachmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttachmentFindFirstArgs>(args?: SelectSubset<T, AttachmentFindFirstArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attachment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindFirstOrThrowArgs} args - Arguments to find a Attachment
     * @example
     * // Get one Attachment
     * const attachment = await prisma.attachment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttachmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AttachmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attachments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attachments
     * const attachments = await prisma.attachment.findMany()
     * 
     * // Get first 10 Attachments
     * const attachments = await prisma.attachment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attachmentWithIdOnly = await prisma.attachment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttachmentFindManyArgs>(args?: SelectSubset<T, AttachmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attachment.
     * @param {AttachmentCreateArgs} args - Arguments to create a Attachment.
     * @example
     * // Create one Attachment
     * const Attachment = await prisma.attachment.create({
     *   data: {
     *     // ... data to create a Attachment
     *   }
     * })
     * 
     */
    create<T extends AttachmentCreateArgs>(args: SelectSubset<T, AttachmentCreateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attachments.
     * @param {AttachmentCreateManyArgs} args - Arguments to create many Attachments.
     * @example
     * // Create many Attachments
     * const attachment = await prisma.attachment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttachmentCreateManyArgs>(args?: SelectSubset<T, AttachmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attachment.
     * @param {AttachmentDeleteArgs} args - Arguments to delete one Attachment.
     * @example
     * // Delete one Attachment
     * const Attachment = await prisma.attachment.delete({
     *   where: {
     *     // ... filter to delete one Attachment
     *   }
     * })
     * 
     */
    delete<T extends AttachmentDeleteArgs>(args: SelectSubset<T, AttachmentDeleteArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attachment.
     * @param {AttachmentUpdateArgs} args - Arguments to update one Attachment.
     * @example
     * // Update one Attachment
     * const attachment = await prisma.attachment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttachmentUpdateArgs>(args: SelectSubset<T, AttachmentUpdateArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attachments.
     * @param {AttachmentDeleteManyArgs} args - Arguments to filter Attachments to delete.
     * @example
     * // Delete a few Attachments
     * const { count } = await prisma.attachment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttachmentDeleteManyArgs>(args?: SelectSubset<T, AttachmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attachments
     * const attachment = await prisma.attachment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttachmentUpdateManyArgs>(args: SelectSubset<T, AttachmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attachment.
     * @param {AttachmentUpsertArgs} args - Arguments to update or create a Attachment.
     * @example
     * // Update or create a Attachment
     * const attachment = await prisma.attachment.upsert({
     *   create: {
     *     // ... data to create a Attachment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attachment we want to update
     *   }
     * })
     */
    upsert<T extends AttachmentUpsertArgs>(args: SelectSubset<T, AttachmentUpsertArgs<ExtArgs>>): Prisma__AttachmentClient<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attachments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentCountArgs} args - Arguments to filter Attachments to count.
     * @example
     * // Count the number of Attachments
     * const count = await prisma.attachment.count({
     *   where: {
     *     // ... the filter for the Attachments we want to count
     *   }
     * })
    **/
    count<T extends AttachmentCountArgs>(
      args?: Subset<T, AttachmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttachmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AttachmentAggregateArgs>(args: Subset<T, AttachmentAggregateArgs>): Prisma.PrismaPromise<GetAttachmentAggregateType<T>>

    /**
     * Group by Attachment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttachmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AttachmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttachmentGroupByArgs['orderBy'] }
        : { orderBy?: AttachmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AttachmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttachmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attachment model
   */
  readonly fields: AttachmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attachment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttachmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends Attachment$storeArgs<ExtArgs> = {}>(args?: Subset<T, Attachment$storeArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    notice<T extends Attachment$noticeArgs<ExtArgs> = {}>(args?: Subset<T, Attachment$noticeArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Attachment model
   */
  interface AttachmentFieldRefs {
    readonly id: FieldRef<"Attachment", 'String'>
    readonly storeId: FieldRef<"Attachment", 'String'>
    readonly noticeId: FieldRef<"Attachment", 'String'>
    readonly name: FieldRef<"Attachment", 'String'>
    readonly type: FieldRef<"Attachment", 'Int'>
    readonly description: FieldRef<"Attachment", 'String'>
    readonly createdBy: FieldRef<"Attachment", 'String'>
    readonly createdTime: FieldRef<"Attachment", 'BigInt'>
    readonly updatedTime: FieldRef<"Attachment", 'BigInt'>
    readonly deletedTime: FieldRef<"Attachment", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Attachment findUnique
   */
  export type AttachmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findUniqueOrThrow
   */
  export type AttachmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment findFirst
   */
  export type AttachmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findFirstOrThrow
   */
  export type AttachmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachment to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment findMany
   */
  export type AttachmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter, which Attachments to fetch.
     */
    where?: AttachmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attachments to fetch.
     */
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attachments.
     */
    cursor?: AttachmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attachments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attachments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attachments.
     */
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Attachment create
   */
  export type AttachmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Attachment.
     */
    data?: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
  }

  /**
   * Attachment createMany
   */
  export type AttachmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attachments.
     */
    data: AttachmentCreateManyInput | AttachmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attachment update
   */
  export type AttachmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Attachment.
     */
    data: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
    /**
     * Choose, which Attachment to update.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment updateMany
   */
  export type AttachmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attachments.
     */
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyInput>
    /**
     * Filter which Attachments to update
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to update.
     */
    limit?: number
  }

  /**
   * Attachment upsert
   */
  export type AttachmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Attachment to update in case it exists.
     */
    where: AttachmentWhereUniqueInput
    /**
     * In case the Attachment found by the `where` argument doesn't exist, create a new Attachment with this data.
     */
    create: XOR<AttachmentCreateInput, AttachmentUncheckedCreateInput>
    /**
     * In case the Attachment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttachmentUpdateInput, AttachmentUncheckedUpdateInput>
  }

  /**
   * Attachment delete
   */
  export type AttachmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    /**
     * Filter which Attachment to delete.
     */
    where: AttachmentWhereUniqueInput
  }

  /**
   * Attachment deleteMany
   */
  export type AttachmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attachments to delete
     */
    where?: AttachmentWhereInput
    /**
     * Limit how many Attachments to delete.
     */
    limit?: number
  }

  /**
   * Attachment.store
   */
  export type Attachment$storeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Store
     */
    select?: StoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Store
     */
    omit?: StoreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StoreInclude<ExtArgs> | null
    where?: StoreWhereInput
  }

  /**
   * Attachment.notice
   */
  export type Attachment$noticeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    where?: NoticeWhereInput
  }

  /**
   * Attachment without action
   */
  export type AttachmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
  }


  /**
   * Model Notice
   */

  export type AggregateNotice = {
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  export type NoticeAvgAggregateOutputType = {
    createdTime: number | null
    updatedTime: number | null
    deletedTime: number | null
  }

  export type NoticeSumAggregateOutputType = {
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type NoticeMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    title: string | null
    content: string | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type NoticeMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    title: string | null
    content: string | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type NoticeCountAggregateOutputType = {
    id: number
    storeId: number
    title: number
    content: number
    createdBy: number
    createdTime: number
    updatedTime: number
    deletedTime: number
    _all: number
  }


  export type NoticeAvgAggregateInputType = {
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type NoticeSumAggregateInputType = {
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type NoticeMinAggregateInputType = {
    id?: true
    storeId?: true
    title?: true
    content?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type NoticeMaxAggregateInputType = {
    id?: true
    storeId?: true
    title?: true
    content?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type NoticeCountAggregateInputType = {
    id?: true
    storeId?: true
    title?: true
    content?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
    _all?: true
  }

  export type NoticeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notice to aggregate.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notices
    **/
    _count?: true | NoticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticeMaxAggregateInputType
  }

  export type GetNoticeAggregateType<T extends NoticeAggregateArgs> = {
        [P in keyof T & keyof AggregateNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice[P]>
      : GetScalarType<T[P], AggregateNotice[P]>
  }




  export type NoticeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithAggregationInput | NoticeOrderByWithAggregationInput[]
    by: NoticeScalarFieldEnum[] | NoticeScalarFieldEnum
    having?: NoticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticeCountAggregateInputType | true
    _avg?: NoticeAvgAggregateInputType
    _sum?: NoticeSumAggregateInputType
    _min?: NoticeMinAggregateInputType
    _max?: NoticeMaxAggregateInputType
  }

  export type NoticeGroupByOutputType = {
    id: string
    storeId: string
    title: string
    content: string
    createdBy: string
    createdTime: bigint
    updatedTime: bigint
    deletedTime: bigint
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  type GetNoticeGroupByPayload<T extends NoticeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeGroupByOutputType[P]>
        }
      >
    >


  export type NoticeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    title?: boolean
    content?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
    attachments?: boolean | Notice$attachmentsArgs<ExtArgs>
    _count?: boolean | NoticeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notice"]>



  export type NoticeSelectScalar = {
    id?: boolean
    storeId?: boolean
    title?: boolean
    content?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
  }

  export type NoticeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "title" | "content" | "createdBy" | "createdTime" | "updatedTime" | "deletedTime", ExtArgs["result"]["notice"]>
  export type NoticeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
    attachments?: boolean | Notice$attachmentsArgs<ExtArgs>
    _count?: boolean | NoticeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $NoticePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notice"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
      attachments: Prisma.$AttachmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      title: string
      content: string
      createdBy: string
      createdTime: bigint
      updatedTime: bigint
      deletedTime: bigint
    }, ExtArgs["result"]["notice"]>
    composites: {}
  }

  type NoticeGetPayload<S extends boolean | null | undefined | NoticeDefaultArgs> = $Result.GetResult<Prisma.$NoticePayload, S>

  type NoticeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoticeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticeCountAggregateInputType | true
    }

  export interface NoticeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notice'], meta: { name: 'Notice' } }
    /**
     * Find zero or one Notice that matches the filter.
     * @param {NoticeFindUniqueArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticeFindUniqueArgs>(args: SelectSubset<T, NoticeFindUniqueArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoticeFindUniqueOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticeFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticeFindFirstArgs>(args?: SelectSubset<T, NoticeFindFirstArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticeFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notices
     * const notices = await prisma.notice.findMany()
     * 
     * // Get first 10 Notices
     * const notices = await prisma.notice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticeWithIdOnly = await prisma.notice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticeFindManyArgs>(args?: SelectSubset<T, NoticeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notice.
     * @param {NoticeCreateArgs} args - Arguments to create a Notice.
     * @example
     * // Create one Notice
     * const Notice = await prisma.notice.create({
     *   data: {
     *     // ... data to create a Notice
     *   }
     * })
     * 
     */
    create<T extends NoticeCreateArgs>(args: SelectSubset<T, NoticeCreateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notices.
     * @param {NoticeCreateManyArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticeCreateManyArgs>(args?: SelectSubset<T, NoticeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notice.
     * @param {NoticeDeleteArgs} args - Arguments to delete one Notice.
     * @example
     * // Delete one Notice
     * const Notice = await prisma.notice.delete({
     *   where: {
     *     // ... filter to delete one Notice
     *   }
     * })
     * 
     */
    delete<T extends NoticeDeleteArgs>(args: SelectSubset<T, NoticeDeleteArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notice.
     * @param {NoticeUpdateArgs} args - Arguments to update one Notice.
     * @example
     * // Update one Notice
     * const notice = await prisma.notice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticeUpdateArgs>(args: SelectSubset<T, NoticeUpdateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notices.
     * @param {NoticeDeleteManyArgs} args - Arguments to filter Notices to delete.
     * @example
     * // Delete a few Notices
     * const { count } = await prisma.notice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticeDeleteManyArgs>(args?: SelectSubset<T, NoticeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticeUpdateManyArgs>(args: SelectSubset<T, NoticeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notice.
     * @param {NoticeUpsertArgs} args - Arguments to update or create a Notice.
     * @example
     * // Update or create a Notice
     * const notice = await prisma.notice.upsert({
     *   create: {
     *     // ... data to create a Notice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice we want to update
     *   }
     * })
     */
    upsert<T extends NoticeUpsertArgs>(args: SelectSubset<T, NoticeUpsertArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeCountArgs} args - Arguments to filter Notices to count.
     * @example
     * // Count the number of Notices
     * const count = await prisma.notice.count({
     *   where: {
     *     // ... the filter for the Notices we want to count
     *   }
     * })
    **/
    count<T extends NoticeCountArgs>(
      args?: Subset<T, NoticeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NoticeAggregateArgs>(args: Subset<T, NoticeAggregateArgs>): Prisma.PrismaPromise<GetNoticeAggregateType<T>>

    /**
     * Group by Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NoticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticeGroupByArgs['orderBy'] }
        : { orderBy?: NoticeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NoticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notice model
   */
  readonly fields: NoticeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attachments<T extends Notice$attachmentsArgs<ExtArgs> = {}>(args?: Subset<T, Notice$attachmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttachmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notice model
   */
  interface NoticeFieldRefs {
    readonly id: FieldRef<"Notice", 'String'>
    readonly storeId: FieldRef<"Notice", 'String'>
    readonly title: FieldRef<"Notice", 'String'>
    readonly content: FieldRef<"Notice", 'String'>
    readonly createdBy: FieldRef<"Notice", 'String'>
    readonly createdTime: FieldRef<"Notice", 'BigInt'>
    readonly updatedTime: FieldRef<"Notice", 'BigInt'>
    readonly deletedTime: FieldRef<"Notice", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Notice findUnique
   */
  export type NoticeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findUniqueOrThrow
   */
  export type NoticeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findFirst
   */
  export type NoticeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findFirstOrThrow
   */
  export type NoticeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findMany
   */
  export type NoticeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notices to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice create
   */
  export type NoticeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The data needed to create a Notice.
     */
    data: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
  }

  /**
   * Notice createMany
   */
  export type NoticeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notice update
   */
  export type NoticeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The data needed to update a Notice.
     */
    data: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
    /**
     * Choose, which Notice to update.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice updateMany
   */
  export type NoticeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to update.
     */
    limit?: number
  }

  /**
   * Notice upsert
   */
  export type NoticeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The filter to search for the Notice to update in case it exists.
     */
    where: NoticeWhereUniqueInput
    /**
     * In case the Notice found by the `where` argument doesn't exist, create a new Notice with this data.
     */
    create: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
    /**
     * In case the Notice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
  }

  /**
   * Notice delete
   */
  export type NoticeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter which Notice to delete.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice deleteMany
   */
  export type NoticeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notices to delete
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to delete.
     */
    limit?: number
  }

  /**
   * Notice.attachments
   */
  export type Notice$attachmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attachment
     */
    select?: AttachmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attachment
     */
    omit?: AttachmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttachmentInclude<ExtArgs> | null
    where?: AttachmentWhereInput
    orderBy?: AttachmentOrderByWithRelationInput | AttachmentOrderByWithRelationInput[]
    cursor?: AttachmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttachmentScalarFieldEnum | AttachmentScalarFieldEnum[]
  }

  /**
   * Notice without action
   */
  export type NoticeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    type: number | null
    createdTime: number | null
    updatedTime: number | null
    deletedTime: number | null
  }

  export type CommentSumAggregateOutputType = {
    type: number | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    storeId: string | null
    type: number | null
    content: string | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    storeId: string | null
    type: number | null
    content: string | null
    createdBy: string | null
    createdTime: bigint | null
    updatedTime: bigint | null
    deletedTime: bigint | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    storeId: number
    type: number
    content: number
    createdBy: number
    createdTime: number
    updatedTime: number
    deletedTime: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    type?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type CommentSumAggregateInputType = {
    type?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    storeId?: true
    type?: true
    content?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    storeId?: true
    type?: true
    content?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    storeId?: true
    type?: true
    content?: true
    createdBy?: true
    createdTime?: true
    updatedTime?: true
    deletedTime?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    storeId: string
    type: number
    content: string
    createdBy: string
    createdTime: bigint
    updatedTime: bigint
    deletedTime: bigint
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    storeId?: boolean
    type?: boolean
    content?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>



  export type CommentSelectScalar = {
    id?: boolean
    storeId?: boolean
    type?: boolean
    content?: boolean
    createdBy?: boolean
    createdTime?: boolean
    updatedTime?: boolean
    deletedTime?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "storeId" | "type" | "content" | "createdBy" | "createdTime" | "updatedTime" | "deletedTime", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    store?: boolean | StoreDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      store: Prisma.$StorePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      storeId: string
      type: number
      content: string
      createdBy: string
      createdTime: bigint
      updatedTime: bigint
      deletedTime: bigint
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    store<T extends StoreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StoreDefaultArgs<ExtArgs>>): Prisma__StoreClient<$Result.GetResult<Prisma.$StorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly storeId: FieldRef<"Comment", 'String'>
    readonly type: FieldRef<"Comment", 'Int'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly createdBy: FieldRef<"Comment", 'String'>
    readonly createdTime: FieldRef<"Comment", 'BigInt'>
    readonly updatedTime: FieldRef<"Comment", 'BigInt'>
    readonly deletedTime: FieldRef<"Comment", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    openId: 'openId',
    type: 'type',
    nickName: 'nickName',
    avatar: 'avatar',
    phone: 'phone',
    password: 'password',
    balance: 'balance',
    points: 'points',
    realName: 'realName',
    cardId: 'cardId',
    nation: 'nation',
    sex: 'sex',
    birth: 'birth',
    qq: 'qq',
    email: 'email',
    province: 'province',
    city: 'city',
    district: 'district',
    code: 'code',
    address: 'address',
    description: 'description',
    lastLoginTime: 'lastLoginTime',
    lastLoginIp: 'lastLoginIp',
    loginCount: 'loginCount',
    createdBy: 'createdBy',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime',
    deletedTime: 'deletedTime'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const StoreScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    provinceCode: 'provinceCode',
    cityCode: 'cityCode',
    regionCode: 'regionCode',
    province: 'province',
    city: 'city',
    region: 'region',
    address: 'address',
    longitude: 'longitude',
    latitude: 'latitude',
    seatCount: 'seatCount',
    phone: 'phone',
    is24Hours: 'is24Hours',
    openTime: 'openTime',
    closeTime: 'closeTime',
    isActive: 'isActive',
    features: 'features',
    promotion: 'promotion',
    price: 'price',
    reviews: 'reviews',
    sales: 'sales',
    coverImages: 'coverImages',
    description: 'description',
    userId: 'userId',
    createdBy: 'createdBy',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime',
    deletedTime: 'deletedTime'
  };

  export type StoreScalarFieldEnum = (typeof StoreScalarFieldEnum)[keyof typeof StoreScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    name: 'name',
    seatCount: 'seatCount',
    sort: 'sort',
    isActive: 'isActive',
    description: 'description',
    createdBy: 'createdBy',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime',
    deletedTime: 'deletedTime'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const SeatScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    areaId: 'areaId',
    type: 'type',
    seatNo: 'seatNo',
    x: 'x',
    y: 'y',
    width: 'width',
    height: 'height',
    hasPower: 'hasPower',
    status: 'status',
    description: 'description',
    createdBy: 'createdBy',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime',
    deletedTime: 'deletedTime'
  };

  export type SeatScalarFieldEnum = (typeof SeatScalarFieldEnum)[keyof typeof SeatScalarFieldEnum]


  export const CardScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    description: 'description',
    createdBy: 'createdBy',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime',
    deletedTime: 'deletedTime'
  };

  export type CardScalarFieldEnum = (typeof CardScalarFieldEnum)[keyof typeof CardScalarFieldEnum]


  export const UserCardScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    cardId: 'cardId',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime',
    deletedTime: 'deletedTime'
  };

  export type UserCardScalarFieldEnum = (typeof UserCardScalarFieldEnum)[keyof typeof UserCardScalarFieldEnum]


  export const UserOrderScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    areaId: 'areaId',
    seatId: 'seatId',
    category: 'category',
    userId: 'userId',
    type: 'type',
    startTime: 'startTime',
    endTime: 'endTime',
    payMethod: 'payMethod',
    price: 'price',
    status: 'status',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime',
    deletedTime: 'deletedTime'
  };

  export type UserOrderScalarFieldEnum = (typeof UserOrderScalarFieldEnum)[keyof typeof UserOrderScalarFieldEnum]


  export const AttachmentScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    noticeId: 'noticeId',
    name: 'name',
    type: 'type',
    description: 'description',
    createdBy: 'createdBy',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime',
    deletedTime: 'deletedTime'
  };

  export type AttachmentScalarFieldEnum = (typeof AttachmentScalarFieldEnum)[keyof typeof AttachmentScalarFieldEnum]


  export const NoticeScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    title: 'title',
    content: 'content',
    createdBy: 'createdBy',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime',
    deletedTime: 'deletedTime'
  };

  export type NoticeScalarFieldEnum = (typeof NoticeScalarFieldEnum)[keyof typeof NoticeScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    type: 'type',
    content: 'content',
    createdBy: 'createdBy',
    createdTime: 'createdTime',
    updatedTime: 'updatedTime',
    deletedTime: 'deletedTime'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    openId: 'openId',
    nickName: 'nickName',
    avatar: 'avatar',
    phone: 'phone',
    password: 'password',
    realName: 'realName',
    cardId: 'cardId',
    nation: 'nation',
    qq: 'qq',
    email: 'email',
    province: 'province',
    city: 'city',
    district: 'district',
    code: 'code',
    address: 'address',
    description: 'description',
    lastLoginIp: 'lastLoginIp',
    createdBy: 'createdBy'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const StoreOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    provinceCode: 'provinceCode',
    cityCode: 'cityCode',
    regionCode: 'regionCode',
    province: 'province',
    city: 'city',
    region: 'region',
    address: 'address',
    phone: 'phone',
    openTime: 'openTime',
    closeTime: 'closeTime',
    features: 'features',
    promotion: 'promotion',
    description: 'description',
    userId: 'userId',
    createdBy: 'createdBy'
  };

  export type StoreOrderByRelevanceFieldEnum = (typeof StoreOrderByRelevanceFieldEnum)[keyof typeof StoreOrderByRelevanceFieldEnum]


  export const AreaOrderByRelevanceFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    name: 'name',
    description: 'description',
    createdBy: 'createdBy'
  };

  export type AreaOrderByRelevanceFieldEnum = (typeof AreaOrderByRelevanceFieldEnum)[keyof typeof AreaOrderByRelevanceFieldEnum]


  export const SeatOrderByRelevanceFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    areaId: 'areaId',
    seatNo: 'seatNo',
    description: 'description',
    createdBy: 'createdBy'
  };

  export type SeatOrderByRelevanceFieldEnum = (typeof SeatOrderByRelevanceFieldEnum)[keyof typeof SeatOrderByRelevanceFieldEnum]


  export const CardOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdBy: 'createdBy'
  };

  export type CardOrderByRelevanceFieldEnum = (typeof CardOrderByRelevanceFieldEnum)[keyof typeof CardOrderByRelevanceFieldEnum]


  export const UserCardOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    cardId: 'cardId'
  };

  export type UserCardOrderByRelevanceFieldEnum = (typeof UserCardOrderByRelevanceFieldEnum)[keyof typeof UserCardOrderByRelevanceFieldEnum]


  export const UserOrderOrderByRelevanceFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    areaId: 'areaId',
    seatId: 'seatId',
    userId: 'userId'
  };

  export type UserOrderOrderByRelevanceFieldEnum = (typeof UserOrderOrderByRelevanceFieldEnum)[keyof typeof UserOrderOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AttachmentOrderByRelevanceFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    noticeId: 'noticeId',
    name: 'name',
    description: 'description',
    createdBy: 'createdBy'
  };

  export type AttachmentOrderByRelevanceFieldEnum = (typeof AttachmentOrderByRelevanceFieldEnum)[keyof typeof AttachmentOrderByRelevanceFieldEnum]


  export const NoticeOrderByRelevanceFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    title: 'title',
    content: 'content',
    createdBy: 'createdBy'
  };

  export type NoticeOrderByRelevanceFieldEnum = (typeof NoticeOrderByRelevanceFieldEnum)[keyof typeof NoticeOrderByRelevanceFieldEnum]


  export const CommentOrderByRelevanceFieldEnum: {
    id: 'id',
    storeId: 'storeId',
    content: 'content',
    createdBy: 'createdBy'
  };

  export type CommentOrderByRelevanceFieldEnum = (typeof CommentOrderByRelevanceFieldEnum)[keyof typeof CommentOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    openId?: StringFilter<"User"> | string
    type?: IntFilter<"User"> | number
    nickName?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    balance?: BigIntFilter<"User"> | bigint | number
    points?: IntFilter<"User"> | number
    realName?: StringFilter<"User"> | string
    cardId?: StringFilter<"User"> | string
    nation?: StringFilter<"User"> | string
    sex?: IntFilter<"User"> | number
    birth?: DateTimeFilter<"User"> | Date | string
    qq?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    province?: StringFilter<"User"> | string
    city?: StringFilter<"User"> | string
    district?: StringFilter<"User"> | string
    code?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    description?: StringFilter<"User"> | string
    lastLoginTime?: BigIntFilter<"User"> | bigint | number
    lastLoginIp?: StringFilter<"User"> | string
    loginCount?: IntFilter<"User"> | number
    createdBy?: StringFilter<"User"> | string
    createdTime?: BigIntFilter<"User"> | bigint | number
    updatedTime?: BigIntFilter<"User"> | bigint | number
    deletedTime?: BigIntFilter<"User"> | bigint | number
    stores?: StoreListRelationFilter
    orders?: UserOrderListRelationFilter
    cards?: UserCardListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    openId?: SortOrder
    type?: SortOrder
    nickName?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    points?: SortOrder
    realName?: SortOrder
    cardId?: SortOrder
    nation?: SortOrder
    sex?: SortOrder
    birth?: SortOrder
    qq?: SortOrder
    email?: SortOrder
    province?: SortOrder
    city?: SortOrder
    district?: SortOrder
    code?: SortOrder
    address?: SortOrder
    description?: SortOrder
    lastLoginTime?: SortOrder
    lastLoginIp?: SortOrder
    loginCount?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    stores?: StoreOrderByRelationAggregateInput
    orders?: UserOrderOrderByRelationAggregateInput
    cards?: UserCardOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    openId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    type?: IntFilter<"User"> | number
    nickName?: StringFilter<"User"> | string
    avatar?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    balance?: BigIntFilter<"User"> | bigint | number
    points?: IntFilter<"User"> | number
    realName?: StringFilter<"User"> | string
    cardId?: StringFilter<"User"> | string
    nation?: StringFilter<"User"> | string
    sex?: IntFilter<"User"> | number
    birth?: DateTimeFilter<"User"> | Date | string
    qq?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    province?: StringFilter<"User"> | string
    city?: StringFilter<"User"> | string
    district?: StringFilter<"User"> | string
    code?: StringFilter<"User"> | string
    address?: StringFilter<"User"> | string
    description?: StringFilter<"User"> | string
    lastLoginTime?: BigIntFilter<"User"> | bigint | number
    lastLoginIp?: StringFilter<"User"> | string
    loginCount?: IntFilter<"User"> | number
    createdBy?: StringFilter<"User"> | string
    createdTime?: BigIntFilter<"User"> | bigint | number
    updatedTime?: BigIntFilter<"User"> | bigint | number
    deletedTime?: BigIntFilter<"User"> | bigint | number
    stores?: StoreListRelationFilter
    orders?: UserOrderListRelationFilter
    cards?: UserCardListRelationFilter
  }, "id" | "openId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    openId?: SortOrder
    type?: SortOrder
    nickName?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    points?: SortOrder
    realName?: SortOrder
    cardId?: SortOrder
    nation?: SortOrder
    sex?: SortOrder
    birth?: SortOrder
    qq?: SortOrder
    email?: SortOrder
    province?: SortOrder
    city?: SortOrder
    district?: SortOrder
    code?: SortOrder
    address?: SortOrder
    description?: SortOrder
    lastLoginTime?: SortOrder
    lastLoginIp?: SortOrder
    loginCount?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    openId?: StringWithAggregatesFilter<"User"> | string
    type?: IntWithAggregatesFilter<"User"> | number
    nickName?: StringWithAggregatesFilter<"User"> | string
    avatar?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    balance?: BigIntWithAggregatesFilter<"User"> | bigint | number
    points?: IntWithAggregatesFilter<"User"> | number
    realName?: StringWithAggregatesFilter<"User"> | string
    cardId?: StringWithAggregatesFilter<"User"> | string
    nation?: StringWithAggregatesFilter<"User"> | string
    sex?: IntWithAggregatesFilter<"User"> | number
    birth?: DateTimeWithAggregatesFilter<"User"> | Date | string
    qq?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    province?: StringWithAggregatesFilter<"User"> | string
    city?: StringWithAggregatesFilter<"User"> | string
    district?: StringWithAggregatesFilter<"User"> | string
    code?: StringWithAggregatesFilter<"User"> | string
    address?: StringWithAggregatesFilter<"User"> | string
    description?: StringWithAggregatesFilter<"User"> | string
    lastLoginTime?: BigIntWithAggregatesFilter<"User"> | bigint | number
    lastLoginIp?: StringWithAggregatesFilter<"User"> | string
    loginCount?: IntWithAggregatesFilter<"User"> | number
    createdBy?: StringWithAggregatesFilter<"User"> | string
    createdTime?: BigIntWithAggregatesFilter<"User"> | bigint | number
    updatedTime?: BigIntWithAggregatesFilter<"User"> | bigint | number
    deletedTime?: BigIntWithAggregatesFilter<"User"> | bigint | number
  }

  export type StoreWhereInput = {
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    id?: StringFilter<"Store"> | string
    type?: IntFilter<"Store"> | number
    name?: StringFilter<"Store"> | string
    provinceCode?: StringFilter<"Store"> | string
    cityCode?: StringFilter<"Store"> | string
    regionCode?: StringFilter<"Store"> | string
    province?: StringFilter<"Store"> | string
    city?: StringFilter<"Store"> | string
    region?: StringFilter<"Store"> | string
    address?: StringFilter<"Store"> | string
    longitude?: FloatFilter<"Store"> | number
    latitude?: FloatFilter<"Store"> | number
    seatCount?: IntFilter<"Store"> | number
    phone?: StringFilter<"Store"> | string
    is24Hours?: BoolFilter<"Store"> | boolean
    openTime?: StringFilter<"Store"> | string
    closeTime?: StringFilter<"Store"> | string
    isActive?: BoolFilter<"Store"> | boolean
    features?: StringFilter<"Store"> | string
    promotion?: StringFilter<"Store"> | string
    price?: IntFilter<"Store"> | number
    reviews?: IntFilter<"Store"> | number
    sales?: IntFilter<"Store"> | number
    coverImages?: JsonFilter<"Store">
    description?: StringFilter<"Store"> | string
    userId?: StringFilter<"Store"> | string
    createdBy?: StringFilter<"Store"> | string
    createdTime?: BigIntFilter<"Store"> | bigint | number
    updatedTime?: BigIntFilter<"Store"> | bigint | number
    deletedTime?: BigIntFilter<"Store"> | bigint | number
    areas?: AreaListRelationFilter
    seats?: SeatListRelationFilter
    attachments?: AttachmentListRelationFilter
    notices?: NoticeListRelationFilter
    comments?: CommentListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StoreOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    provinceCode?: SortOrder
    cityCode?: SortOrder
    regionCode?: SortOrder
    province?: SortOrder
    city?: SortOrder
    region?: SortOrder
    address?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    seatCount?: SortOrder
    phone?: SortOrder
    is24Hours?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isActive?: SortOrder
    features?: SortOrder
    promotion?: SortOrder
    price?: SortOrder
    reviews?: SortOrder
    sales?: SortOrder
    coverImages?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    areas?: AreaOrderByRelationAggregateInput
    seats?: SeatOrderByRelationAggregateInput
    attachments?: AttachmentOrderByRelationAggregateInput
    notices?: NoticeOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    _relevance?: StoreOrderByRelevanceInput
  }

  export type StoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StoreWhereInput | StoreWhereInput[]
    OR?: StoreWhereInput[]
    NOT?: StoreWhereInput | StoreWhereInput[]
    type?: IntFilter<"Store"> | number
    name?: StringFilter<"Store"> | string
    provinceCode?: StringFilter<"Store"> | string
    cityCode?: StringFilter<"Store"> | string
    regionCode?: StringFilter<"Store"> | string
    province?: StringFilter<"Store"> | string
    city?: StringFilter<"Store"> | string
    region?: StringFilter<"Store"> | string
    address?: StringFilter<"Store"> | string
    longitude?: FloatFilter<"Store"> | number
    latitude?: FloatFilter<"Store"> | number
    seatCount?: IntFilter<"Store"> | number
    phone?: StringFilter<"Store"> | string
    is24Hours?: BoolFilter<"Store"> | boolean
    openTime?: StringFilter<"Store"> | string
    closeTime?: StringFilter<"Store"> | string
    isActive?: BoolFilter<"Store"> | boolean
    features?: StringFilter<"Store"> | string
    promotion?: StringFilter<"Store"> | string
    price?: IntFilter<"Store"> | number
    reviews?: IntFilter<"Store"> | number
    sales?: IntFilter<"Store"> | number
    coverImages?: JsonFilter<"Store">
    description?: StringFilter<"Store"> | string
    userId?: StringFilter<"Store"> | string
    createdBy?: StringFilter<"Store"> | string
    createdTime?: BigIntFilter<"Store"> | bigint | number
    updatedTime?: BigIntFilter<"Store"> | bigint | number
    deletedTime?: BigIntFilter<"Store"> | bigint | number
    areas?: AreaListRelationFilter
    seats?: SeatListRelationFilter
    attachments?: AttachmentListRelationFilter
    notices?: NoticeListRelationFilter
    comments?: CommentListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type StoreOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    provinceCode?: SortOrder
    cityCode?: SortOrder
    regionCode?: SortOrder
    province?: SortOrder
    city?: SortOrder
    region?: SortOrder
    address?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    seatCount?: SortOrder
    phone?: SortOrder
    is24Hours?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isActive?: SortOrder
    features?: SortOrder
    promotion?: SortOrder
    price?: SortOrder
    reviews?: SortOrder
    sales?: SortOrder
    coverImages?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    _count?: StoreCountOrderByAggregateInput
    _avg?: StoreAvgOrderByAggregateInput
    _max?: StoreMaxOrderByAggregateInput
    _min?: StoreMinOrderByAggregateInput
    _sum?: StoreSumOrderByAggregateInput
  }

  export type StoreScalarWhereWithAggregatesInput = {
    AND?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    OR?: StoreScalarWhereWithAggregatesInput[]
    NOT?: StoreScalarWhereWithAggregatesInput | StoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Store"> | string
    type?: IntWithAggregatesFilter<"Store"> | number
    name?: StringWithAggregatesFilter<"Store"> | string
    provinceCode?: StringWithAggregatesFilter<"Store"> | string
    cityCode?: StringWithAggregatesFilter<"Store"> | string
    regionCode?: StringWithAggregatesFilter<"Store"> | string
    province?: StringWithAggregatesFilter<"Store"> | string
    city?: StringWithAggregatesFilter<"Store"> | string
    region?: StringWithAggregatesFilter<"Store"> | string
    address?: StringWithAggregatesFilter<"Store"> | string
    longitude?: FloatWithAggregatesFilter<"Store"> | number
    latitude?: FloatWithAggregatesFilter<"Store"> | number
    seatCount?: IntWithAggregatesFilter<"Store"> | number
    phone?: StringWithAggregatesFilter<"Store"> | string
    is24Hours?: BoolWithAggregatesFilter<"Store"> | boolean
    openTime?: StringWithAggregatesFilter<"Store"> | string
    closeTime?: StringWithAggregatesFilter<"Store"> | string
    isActive?: BoolWithAggregatesFilter<"Store"> | boolean
    features?: StringWithAggregatesFilter<"Store"> | string
    promotion?: StringWithAggregatesFilter<"Store"> | string
    price?: IntWithAggregatesFilter<"Store"> | number
    reviews?: IntWithAggregatesFilter<"Store"> | number
    sales?: IntWithAggregatesFilter<"Store"> | number
    coverImages?: JsonWithAggregatesFilter<"Store">
    description?: StringWithAggregatesFilter<"Store"> | string
    userId?: StringWithAggregatesFilter<"Store"> | string
    createdBy?: StringWithAggregatesFilter<"Store"> | string
    createdTime?: BigIntWithAggregatesFilter<"Store"> | bigint | number
    updatedTime?: BigIntWithAggregatesFilter<"Store"> | bigint | number
    deletedTime?: BigIntWithAggregatesFilter<"Store"> | bigint | number
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: StringFilter<"Area"> | string
    storeId?: StringFilter<"Area"> | string
    name?: StringFilter<"Area"> | string
    seatCount?: IntFilter<"Area"> | number
    sort?: IntFilter<"Area"> | number
    isActive?: BoolFilter<"Area"> | boolean
    description?: StringFilter<"Area"> | string
    createdBy?: StringFilter<"Area"> | string
    createdTime?: BigIntFilter<"Area"> | bigint | number
    updatedTime?: BigIntFilter<"Area"> | bigint | number
    deletedTime?: BigIntFilter<"Area"> | bigint | number
    seats?: SeatListRelationFilter
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    seatCount?: SortOrder
    sort?: SortOrder
    isActive?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    seats?: SeatOrderByRelationAggregateInput
    store?: StoreOrderByWithRelationInput
    _relevance?: AreaOrderByRelevanceInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    storeId?: StringFilter<"Area"> | string
    name?: StringFilter<"Area"> | string
    seatCount?: IntFilter<"Area"> | number
    sort?: IntFilter<"Area"> | number
    isActive?: BoolFilter<"Area"> | boolean
    description?: StringFilter<"Area"> | string
    createdBy?: StringFilter<"Area"> | string
    createdTime?: BigIntFilter<"Area"> | bigint | number
    updatedTime?: BigIntFilter<"Area"> | bigint | number
    deletedTime?: BigIntFilter<"Area"> | bigint | number
    seats?: SeatListRelationFilter
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "id">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    seatCount?: SortOrder
    sort?: SortOrder
    isActive?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _avg?: AreaAvgOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
    _sum?: AreaSumOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Area"> | string
    storeId?: StringWithAggregatesFilter<"Area"> | string
    name?: StringWithAggregatesFilter<"Area"> | string
    seatCount?: IntWithAggregatesFilter<"Area"> | number
    sort?: IntWithAggregatesFilter<"Area"> | number
    isActive?: BoolWithAggregatesFilter<"Area"> | boolean
    description?: StringWithAggregatesFilter<"Area"> | string
    createdBy?: StringWithAggregatesFilter<"Area"> | string
    createdTime?: BigIntWithAggregatesFilter<"Area"> | bigint | number
    updatedTime?: BigIntWithAggregatesFilter<"Area"> | bigint | number
    deletedTime?: BigIntWithAggregatesFilter<"Area"> | bigint | number
  }

  export type SeatWhereInput = {
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    id?: StringFilter<"Seat"> | string
    storeId?: StringFilter<"Seat"> | string
    areaId?: StringFilter<"Seat"> | string
    type?: IntFilter<"Seat"> | number
    seatNo?: StringFilter<"Seat"> | string
    x?: FloatFilter<"Seat"> | number
    y?: FloatFilter<"Seat"> | number
    width?: FloatFilter<"Seat"> | number
    height?: FloatFilter<"Seat"> | number
    hasPower?: BoolFilter<"Seat"> | boolean
    status?: IntFilter<"Seat"> | number
    description?: StringFilter<"Seat"> | string
    createdBy?: StringFilter<"Seat"> | string
    createdTime?: BigIntFilter<"Seat"> | bigint | number
    updatedTime?: BigIntFilter<"Seat"> | bigint | number
    deletedTime?: BigIntFilter<"Seat"> | bigint | number
    orders?: UserOrderListRelationFilter
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type SeatOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    areaId?: SortOrder
    type?: SortOrder
    seatNo?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    hasPower?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    orders?: UserOrderOrderByRelationAggregateInput
    area?: AreaOrderByWithRelationInput
    store?: StoreOrderByWithRelationInput
    _relevance?: SeatOrderByRelevanceInput
  }

  export type SeatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    areaId_seatNo?: SeatAreaIdSeatNoCompoundUniqueInput
    AND?: SeatWhereInput | SeatWhereInput[]
    OR?: SeatWhereInput[]
    NOT?: SeatWhereInput | SeatWhereInput[]
    storeId?: StringFilter<"Seat"> | string
    areaId?: StringFilter<"Seat"> | string
    type?: IntFilter<"Seat"> | number
    seatNo?: StringFilter<"Seat"> | string
    x?: FloatFilter<"Seat"> | number
    y?: FloatFilter<"Seat"> | number
    width?: FloatFilter<"Seat"> | number
    height?: FloatFilter<"Seat"> | number
    hasPower?: BoolFilter<"Seat"> | boolean
    status?: IntFilter<"Seat"> | number
    description?: StringFilter<"Seat"> | string
    createdBy?: StringFilter<"Seat"> | string
    createdTime?: BigIntFilter<"Seat"> | bigint | number
    updatedTime?: BigIntFilter<"Seat"> | bigint | number
    deletedTime?: BigIntFilter<"Seat"> | bigint | number
    orders?: UserOrderListRelationFilter
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "id" | "areaId_seatNo">

  export type SeatOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    areaId?: SortOrder
    type?: SortOrder
    seatNo?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    hasPower?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    _count?: SeatCountOrderByAggregateInput
    _avg?: SeatAvgOrderByAggregateInput
    _max?: SeatMaxOrderByAggregateInput
    _min?: SeatMinOrderByAggregateInput
    _sum?: SeatSumOrderByAggregateInput
  }

  export type SeatScalarWhereWithAggregatesInput = {
    AND?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    OR?: SeatScalarWhereWithAggregatesInput[]
    NOT?: SeatScalarWhereWithAggregatesInput | SeatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Seat"> | string
    storeId?: StringWithAggregatesFilter<"Seat"> | string
    areaId?: StringWithAggregatesFilter<"Seat"> | string
    type?: IntWithAggregatesFilter<"Seat"> | number
    seatNo?: StringWithAggregatesFilter<"Seat"> | string
    x?: FloatWithAggregatesFilter<"Seat"> | number
    y?: FloatWithAggregatesFilter<"Seat"> | number
    width?: FloatWithAggregatesFilter<"Seat"> | number
    height?: FloatWithAggregatesFilter<"Seat"> | number
    hasPower?: BoolWithAggregatesFilter<"Seat"> | boolean
    status?: IntWithAggregatesFilter<"Seat"> | number
    description?: StringWithAggregatesFilter<"Seat"> | string
    createdBy?: StringWithAggregatesFilter<"Seat"> | string
    createdTime?: BigIntWithAggregatesFilter<"Seat"> | bigint | number
    updatedTime?: BigIntWithAggregatesFilter<"Seat"> | bigint | number
    deletedTime?: BigIntWithAggregatesFilter<"Seat"> | bigint | number
  }

  export type CardWhereInput = {
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    id?: StringFilter<"Card"> | string
    name?: StringFilter<"Card"> | string
    type?: IntFilter<"Card"> | number
    description?: StringFilter<"Card"> | string
    createdBy?: StringFilter<"Card"> | string
    createdTime?: BigIntFilter<"Card"> | bigint | number
    updatedTime?: BigIntFilter<"Card"> | bigint | number
    deletedTime?: BigIntFilter<"Card"> | bigint | number
    userCards?: UserCardListRelationFilter
  }

  export type CardOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    userCards?: UserCardOrderByRelationAggregateInput
    _relevance?: CardOrderByRelevanceInput
  }

  export type CardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CardWhereInput | CardWhereInput[]
    OR?: CardWhereInput[]
    NOT?: CardWhereInput | CardWhereInput[]
    name?: StringFilter<"Card"> | string
    type?: IntFilter<"Card"> | number
    description?: StringFilter<"Card"> | string
    createdBy?: StringFilter<"Card"> | string
    createdTime?: BigIntFilter<"Card"> | bigint | number
    updatedTime?: BigIntFilter<"Card"> | bigint | number
    deletedTime?: BigIntFilter<"Card"> | bigint | number
    userCards?: UserCardListRelationFilter
  }, "id">

  export type CardOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    _count?: CardCountOrderByAggregateInput
    _avg?: CardAvgOrderByAggregateInput
    _max?: CardMaxOrderByAggregateInput
    _min?: CardMinOrderByAggregateInput
    _sum?: CardSumOrderByAggregateInput
  }

  export type CardScalarWhereWithAggregatesInput = {
    AND?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    OR?: CardScalarWhereWithAggregatesInput[]
    NOT?: CardScalarWhereWithAggregatesInput | CardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Card"> | string
    name?: StringWithAggregatesFilter<"Card"> | string
    type?: IntWithAggregatesFilter<"Card"> | number
    description?: StringWithAggregatesFilter<"Card"> | string
    createdBy?: StringWithAggregatesFilter<"Card"> | string
    createdTime?: BigIntWithAggregatesFilter<"Card"> | bigint | number
    updatedTime?: BigIntWithAggregatesFilter<"Card"> | bigint | number
    deletedTime?: BigIntWithAggregatesFilter<"Card"> | bigint | number
  }

  export type UserCardWhereInput = {
    AND?: UserCardWhereInput | UserCardWhereInput[]
    OR?: UserCardWhereInput[]
    NOT?: UserCardWhereInput | UserCardWhereInput[]
    id?: StringFilter<"UserCard"> | string
    userId?: StringFilter<"UserCard"> | string
    cardId?: StringFilter<"UserCard"> | string
    createdTime?: BigIntFilter<"UserCard"> | bigint | number
    updatedTime?: BigIntFilter<"UserCard"> | bigint | number
    deletedTime?: BigIntFilter<"UserCard"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }

  export type UserCardOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    user?: UserOrderByWithRelationInput
    card?: CardOrderByWithRelationInput
    _relevance?: UserCardOrderByRelevanceInput
  }

  export type UserCardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserCardWhereInput | UserCardWhereInput[]
    OR?: UserCardWhereInput[]
    NOT?: UserCardWhereInput | UserCardWhereInput[]
    userId?: StringFilter<"UserCard"> | string
    cardId?: StringFilter<"UserCard"> | string
    createdTime?: BigIntFilter<"UserCard"> | bigint | number
    updatedTime?: BigIntFilter<"UserCard"> | bigint | number
    deletedTime?: BigIntFilter<"UserCard"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    card?: XOR<CardScalarRelationFilter, CardWhereInput>
  }, "id">

  export type UserCardOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    _count?: UserCardCountOrderByAggregateInput
    _avg?: UserCardAvgOrderByAggregateInput
    _max?: UserCardMaxOrderByAggregateInput
    _min?: UserCardMinOrderByAggregateInput
    _sum?: UserCardSumOrderByAggregateInput
  }

  export type UserCardScalarWhereWithAggregatesInput = {
    AND?: UserCardScalarWhereWithAggregatesInput | UserCardScalarWhereWithAggregatesInput[]
    OR?: UserCardScalarWhereWithAggregatesInput[]
    NOT?: UserCardScalarWhereWithAggregatesInput | UserCardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserCard"> | string
    userId?: StringWithAggregatesFilter<"UserCard"> | string
    cardId?: StringWithAggregatesFilter<"UserCard"> | string
    createdTime?: BigIntWithAggregatesFilter<"UserCard"> | bigint | number
    updatedTime?: BigIntWithAggregatesFilter<"UserCard"> | bigint | number
    deletedTime?: BigIntWithAggregatesFilter<"UserCard"> | bigint | number
  }

  export type UserOrderWhereInput = {
    AND?: UserOrderWhereInput | UserOrderWhereInput[]
    OR?: UserOrderWhereInput[]
    NOT?: UserOrderWhereInput | UserOrderWhereInput[]
    id?: StringFilter<"UserOrder"> | string
    storeId?: StringFilter<"UserOrder"> | string
    areaId?: StringFilter<"UserOrder"> | string
    seatId?: StringFilter<"UserOrder"> | string
    category?: IntFilter<"UserOrder"> | number
    userId?: StringFilter<"UserOrder"> | string
    type?: IntFilter<"UserOrder"> | number
    startTime?: BigIntFilter<"UserOrder"> | bigint | number
    endTime?: BigIntFilter<"UserOrder"> | bigint | number
    payMethod?: IntFilter<"UserOrder"> | number
    price?: IntFilter<"UserOrder"> | number
    status?: IntFilter<"UserOrder"> | number
    createdTime?: BigIntFilter<"UserOrder"> | bigint | number
    updatedTime?: BigIntFilter<"UserOrder"> | bigint | number
    deletedTime?: BigIntFilter<"UserOrder"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    seat?: XOR<SeatScalarRelationFilter, SeatWhereInput>
  }

  export type UserOrderOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    areaId?: SortOrder
    seatId?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    payMethod?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    user?: UserOrderByWithRelationInput
    seat?: SeatOrderByWithRelationInput
    _relevance?: UserOrderOrderByRelevanceInput
  }

  export type UserOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserOrderWhereInput | UserOrderWhereInput[]
    OR?: UserOrderWhereInput[]
    NOT?: UserOrderWhereInput | UserOrderWhereInput[]
    storeId?: StringFilter<"UserOrder"> | string
    areaId?: StringFilter<"UserOrder"> | string
    seatId?: StringFilter<"UserOrder"> | string
    category?: IntFilter<"UserOrder"> | number
    userId?: StringFilter<"UserOrder"> | string
    type?: IntFilter<"UserOrder"> | number
    startTime?: BigIntFilter<"UserOrder"> | bigint | number
    endTime?: BigIntFilter<"UserOrder"> | bigint | number
    payMethod?: IntFilter<"UserOrder"> | number
    price?: IntFilter<"UserOrder"> | number
    status?: IntFilter<"UserOrder"> | number
    createdTime?: BigIntFilter<"UserOrder"> | bigint | number
    updatedTime?: BigIntFilter<"UserOrder"> | bigint | number
    deletedTime?: BigIntFilter<"UserOrder"> | bigint | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    seat?: XOR<SeatScalarRelationFilter, SeatWhereInput>
  }, "id">

  export type UserOrderOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    areaId?: SortOrder
    seatId?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    payMethod?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    _count?: UserOrderCountOrderByAggregateInput
    _avg?: UserOrderAvgOrderByAggregateInput
    _max?: UserOrderMaxOrderByAggregateInput
    _min?: UserOrderMinOrderByAggregateInput
    _sum?: UserOrderSumOrderByAggregateInput
  }

  export type UserOrderScalarWhereWithAggregatesInput = {
    AND?: UserOrderScalarWhereWithAggregatesInput | UserOrderScalarWhereWithAggregatesInput[]
    OR?: UserOrderScalarWhereWithAggregatesInput[]
    NOT?: UserOrderScalarWhereWithAggregatesInput | UserOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserOrder"> | string
    storeId?: StringWithAggregatesFilter<"UserOrder"> | string
    areaId?: StringWithAggregatesFilter<"UserOrder"> | string
    seatId?: StringWithAggregatesFilter<"UserOrder"> | string
    category?: IntWithAggregatesFilter<"UserOrder"> | number
    userId?: StringWithAggregatesFilter<"UserOrder"> | string
    type?: IntWithAggregatesFilter<"UserOrder"> | number
    startTime?: BigIntWithAggregatesFilter<"UserOrder"> | bigint | number
    endTime?: BigIntWithAggregatesFilter<"UserOrder"> | bigint | number
    payMethod?: IntWithAggregatesFilter<"UserOrder"> | number
    price?: IntWithAggregatesFilter<"UserOrder"> | number
    status?: IntWithAggregatesFilter<"UserOrder"> | number
    createdTime?: BigIntWithAggregatesFilter<"UserOrder"> | bigint | number
    updatedTime?: BigIntWithAggregatesFilter<"UserOrder"> | bigint | number
    deletedTime?: BigIntWithAggregatesFilter<"UserOrder"> | bigint | number
  }

  export type AttachmentWhereInput = {
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    id?: StringFilter<"Attachment"> | string
    storeId?: StringNullableFilter<"Attachment"> | string | null
    noticeId?: StringNullableFilter<"Attachment"> | string | null
    name?: StringFilter<"Attachment"> | string
    type?: IntFilter<"Attachment"> | number
    description?: StringFilter<"Attachment"> | string
    createdBy?: StringFilter<"Attachment"> | string
    createdTime?: BigIntFilter<"Attachment"> | bigint | number
    updatedTime?: BigIntFilter<"Attachment"> | bigint | number
    deletedTime?: BigIntFilter<"Attachment"> | bigint | number
    store?: XOR<StoreNullableScalarRelationFilter, StoreWhereInput> | null
    notice?: XOR<NoticeNullableScalarRelationFilter, NoticeWhereInput> | null
  }

  export type AttachmentOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrderInput | SortOrder
    noticeId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    store?: StoreOrderByWithRelationInput
    notice?: NoticeOrderByWithRelationInput
    _relevance?: AttachmentOrderByRelevanceInput
  }

  export type AttachmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttachmentWhereInput | AttachmentWhereInput[]
    OR?: AttachmentWhereInput[]
    NOT?: AttachmentWhereInput | AttachmentWhereInput[]
    storeId?: StringNullableFilter<"Attachment"> | string | null
    noticeId?: StringNullableFilter<"Attachment"> | string | null
    name?: StringFilter<"Attachment"> | string
    type?: IntFilter<"Attachment"> | number
    description?: StringFilter<"Attachment"> | string
    createdBy?: StringFilter<"Attachment"> | string
    createdTime?: BigIntFilter<"Attachment"> | bigint | number
    updatedTime?: BigIntFilter<"Attachment"> | bigint | number
    deletedTime?: BigIntFilter<"Attachment"> | bigint | number
    store?: XOR<StoreNullableScalarRelationFilter, StoreWhereInput> | null
    notice?: XOR<NoticeNullableScalarRelationFilter, NoticeWhereInput> | null
  }, "id">

  export type AttachmentOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrderInput | SortOrder
    noticeId?: SortOrderInput | SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    _count?: AttachmentCountOrderByAggregateInput
    _avg?: AttachmentAvgOrderByAggregateInput
    _max?: AttachmentMaxOrderByAggregateInput
    _min?: AttachmentMinOrderByAggregateInput
    _sum?: AttachmentSumOrderByAggregateInput
  }

  export type AttachmentScalarWhereWithAggregatesInput = {
    AND?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    OR?: AttachmentScalarWhereWithAggregatesInput[]
    NOT?: AttachmentScalarWhereWithAggregatesInput | AttachmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attachment"> | string
    storeId?: StringNullableWithAggregatesFilter<"Attachment"> | string | null
    noticeId?: StringNullableWithAggregatesFilter<"Attachment"> | string | null
    name?: StringWithAggregatesFilter<"Attachment"> | string
    type?: IntWithAggregatesFilter<"Attachment"> | number
    description?: StringWithAggregatesFilter<"Attachment"> | string
    createdBy?: StringWithAggregatesFilter<"Attachment"> | string
    createdTime?: BigIntWithAggregatesFilter<"Attachment"> | bigint | number
    updatedTime?: BigIntWithAggregatesFilter<"Attachment"> | bigint | number
    deletedTime?: BigIntWithAggregatesFilter<"Attachment"> | bigint | number
  }

  export type NoticeWhereInput = {
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    id?: StringFilter<"Notice"> | string
    storeId?: StringFilter<"Notice"> | string
    title?: StringFilter<"Notice"> | string
    content?: StringFilter<"Notice"> | string
    createdBy?: StringFilter<"Notice"> | string
    createdTime?: BigIntFilter<"Notice"> | bigint | number
    updatedTime?: BigIntFilter<"Notice"> | bigint | number
    deletedTime?: BigIntFilter<"Notice"> | bigint | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    attachments?: AttachmentListRelationFilter
  }

  export type NoticeOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    store?: StoreOrderByWithRelationInput
    attachments?: AttachmentOrderByRelationAggregateInput
    _relevance?: NoticeOrderByRelevanceInput
  }

  export type NoticeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    storeId?: StringFilter<"Notice"> | string
    title?: StringFilter<"Notice"> | string
    content?: StringFilter<"Notice"> | string
    createdBy?: StringFilter<"Notice"> | string
    createdTime?: BigIntFilter<"Notice"> | bigint | number
    updatedTime?: BigIntFilter<"Notice"> | bigint | number
    deletedTime?: BigIntFilter<"Notice"> | bigint | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
    attachments?: AttachmentListRelationFilter
  }, "id">

  export type NoticeOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    _count?: NoticeCountOrderByAggregateInput
    _avg?: NoticeAvgOrderByAggregateInput
    _max?: NoticeMaxOrderByAggregateInput
    _min?: NoticeMinOrderByAggregateInput
    _sum?: NoticeSumOrderByAggregateInput
  }

  export type NoticeScalarWhereWithAggregatesInput = {
    AND?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    OR?: NoticeScalarWhereWithAggregatesInput[]
    NOT?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notice"> | string
    storeId?: StringWithAggregatesFilter<"Notice"> | string
    title?: StringWithAggregatesFilter<"Notice"> | string
    content?: StringWithAggregatesFilter<"Notice"> | string
    createdBy?: StringWithAggregatesFilter<"Notice"> | string
    createdTime?: BigIntWithAggregatesFilter<"Notice"> | bigint | number
    updatedTime?: BigIntWithAggregatesFilter<"Notice"> | bigint | number
    deletedTime?: BigIntWithAggregatesFilter<"Notice"> | bigint | number
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    storeId?: StringFilter<"Comment"> | string
    type?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    createdBy?: StringFilter<"Comment"> | string
    createdTime?: BigIntFilter<"Comment"> | bigint | number
    updatedTime?: BigIntFilter<"Comment"> | bigint | number
    deletedTime?: BigIntFilter<"Comment"> | bigint | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    storeId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    store?: StoreOrderByWithRelationInput
    _relevance?: CommentOrderByRelevanceInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    storeId?: StringFilter<"Comment"> | string
    type?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    createdBy?: StringFilter<"Comment"> | string
    createdTime?: BigIntFilter<"Comment"> | bigint | number
    updatedTime?: BigIntFilter<"Comment"> | bigint | number
    deletedTime?: BigIntFilter<"Comment"> | bigint | number
    store?: XOR<StoreScalarRelationFilter, StoreWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    storeId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    storeId?: StringWithAggregatesFilter<"Comment"> | string
    type?: IntWithAggregatesFilter<"Comment"> | number
    content?: StringWithAggregatesFilter<"Comment"> | string
    createdBy?: StringWithAggregatesFilter<"Comment"> | string
    createdTime?: BigIntWithAggregatesFilter<"Comment"> | bigint | number
    updatedTime?: BigIntWithAggregatesFilter<"Comment"> | bigint | number
    deletedTime?: BigIntWithAggregatesFilter<"Comment"> | bigint | number
  }

  export type UserCreateInput = {
    id?: string
    openId: string
    type?: number
    nickName?: string
    avatar?: string
    phone?: string
    password?: string
    balance?: bigint | number
    points?: number
    realName?: string
    cardId?: string
    nation?: string
    sex?: number
    birth?: Date | string
    qq?: string
    email?: string
    province?: string
    city?: string
    district?: string
    code?: string
    address?: string
    description?: string
    lastLoginTime?: bigint | number
    lastLoginIp?: string
    loginCount?: number
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    stores?: StoreCreateNestedManyWithoutUserInput
    orders?: UserOrderCreateNestedManyWithoutUserInput
    cards?: UserCardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    openId: string
    type?: number
    nickName?: string
    avatar?: string
    phone?: string
    password?: string
    balance?: bigint | number
    points?: number
    realName?: string
    cardId?: string
    nation?: string
    sex?: number
    birth?: Date | string
    qq?: string
    email?: string
    province?: string
    city?: string
    district?: string
    code?: string
    address?: string
    description?: string
    lastLoginTime?: bigint | number
    lastLoginIp?: string
    loginCount?: number
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    stores?: StoreUncheckedCreateNestedManyWithoutUserInput
    orders?: UserOrderUncheckedCreateNestedManyWithoutUserInput
    cards?: UserCardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    openId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: IntFieldUpdateOperationsInput | number
    realName?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    nation?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    qq?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lastLoginTime?: BigIntFieldUpdateOperationsInput | bigint | number
    lastLoginIp?: StringFieldUpdateOperationsInput | string
    loginCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    stores?: StoreUpdateManyWithoutUserNestedInput
    orders?: UserOrderUpdateManyWithoutUserNestedInput
    cards?: UserCardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    openId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: IntFieldUpdateOperationsInput | number
    realName?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    nation?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    qq?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lastLoginTime?: BigIntFieldUpdateOperationsInput | bigint | number
    lastLoginIp?: StringFieldUpdateOperationsInput | string
    loginCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    stores?: StoreUncheckedUpdateManyWithoutUserNestedInput
    orders?: UserOrderUncheckedUpdateManyWithoutUserNestedInput
    cards?: UserCardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    openId: string
    type?: number
    nickName?: string
    avatar?: string
    phone?: string
    password?: string
    balance?: bigint | number
    points?: number
    realName?: string
    cardId?: string
    nation?: string
    sex?: number
    birth?: Date | string
    qq?: string
    email?: string
    province?: string
    city?: string
    district?: string
    code?: string
    address?: string
    description?: string
    lastLoginTime?: bigint | number
    lastLoginIp?: string
    loginCount?: number
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    openId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: IntFieldUpdateOperationsInput | number
    realName?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    nation?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    qq?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lastLoginTime?: BigIntFieldUpdateOperationsInput | bigint | number
    lastLoginIp?: StringFieldUpdateOperationsInput | string
    loginCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    openId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: IntFieldUpdateOperationsInput | number
    realName?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    nation?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    qq?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lastLoginTime?: BigIntFieldUpdateOperationsInput | bigint | number
    lastLoginIp?: StringFieldUpdateOperationsInput | string
    loginCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type StoreCreateInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    areas?: AreaCreateNestedManyWithoutStoreInput
    seats?: SeatCreateNestedManyWithoutStoreInput
    attachments?: AttachmentCreateNestedManyWithoutStoreInput
    notices?: NoticeCreateNestedManyWithoutStoreInput
    comments?: CommentCreateNestedManyWithoutStoreInput
    user?: UserCreateNestedOneWithoutStoresInput
  }

  export type StoreUncheckedCreateInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    userId?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    areas?: AreaUncheckedCreateNestedManyWithoutStoreInput
    seats?: SeatUncheckedCreateNestedManyWithoutStoreInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutStoreInput
    notices?: NoticeUncheckedCreateNestedManyWithoutStoreInput
    comments?: CommentUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    areas?: AreaUpdateManyWithoutStoreNestedInput
    seats?: SeatUpdateManyWithoutStoreNestedInput
    attachments?: AttachmentUpdateManyWithoutStoreNestedInput
    notices?: NoticeUpdateManyWithoutStoreNestedInput
    comments?: CommentUpdateManyWithoutStoreNestedInput
    user?: UserUpdateOneRequiredWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    areas?: AreaUncheckedUpdateManyWithoutStoreNestedInput
    seats?: SeatUncheckedUpdateManyWithoutStoreNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutStoreNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutStoreNestedInput
    comments?: CommentUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    userId?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type StoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type StoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AreaCreateInput = {
    id?: string
    name?: string
    seatCount?: number
    sort?: number
    isActive?: boolean
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    seats?: SeatCreateNestedManyWithoutAreaInput
    store?: StoreCreateNestedOneWithoutAreasInput
  }

  export type AreaUncheckedCreateInput = {
    id?: string
    storeId?: string
    name?: string
    seatCount?: number
    sort?: number
    isActive?: boolean
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    seats?: SeatUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seatCount?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    seats?: SeatUpdateManyWithoutAreaNestedInput
    store?: StoreUpdateOneRequiredWithoutAreasNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seatCount?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    seats?: SeatUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: string
    storeId?: string
    name?: string
    seatCount?: number
    sort?: number
    isActive?: boolean
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type AreaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seatCount?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AreaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seatCount?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SeatCreateInput = {
    id?: string
    type?: number
    seatNo?: string
    x?: number
    y?: number
    width?: number
    height?: number
    hasPower?: boolean
    status?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    orders?: UserOrderCreateNestedManyWithoutSeatInput
    area: AreaCreateNestedOneWithoutSeatsInput
    store: StoreCreateNestedOneWithoutSeatsInput
  }

  export type SeatUncheckedCreateInput = {
    id?: string
    storeId: string
    areaId: string
    type?: number
    seatNo?: string
    x?: number
    y?: number
    width?: number
    height?: number
    hasPower?: boolean
    status?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    orders?: UserOrderUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    seatNo?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    hasPower?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    orders?: UserOrderUpdateManyWithoutSeatNestedInput
    area?: AreaUpdateOneRequiredWithoutSeatsNestedInput
    store?: StoreUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    seatNo?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    hasPower?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    orders?: UserOrderUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatCreateManyInput = {
    id?: string
    storeId: string
    areaId: string
    type?: number
    seatNo?: string
    x?: number
    y?: number
    width?: number
    height?: number
    hasPower?: boolean
    status?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type SeatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    seatNo?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    hasPower?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SeatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    seatNo?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    hasPower?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CardCreateInput = {
    id?: string
    name?: string
    type?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    userCards?: UserCardCreateNestedManyWithoutCardInput
  }

  export type CardUncheckedCreateInput = {
    id?: string
    name?: string
    type?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    userCards?: UserCardUncheckedCreateNestedManyWithoutCardInput
  }

  export type CardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    userCards?: UserCardUpdateManyWithoutCardNestedInput
  }

  export type CardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    userCards?: UserCardUncheckedUpdateManyWithoutCardNestedInput
  }

  export type CardCreateManyInput = {
    id?: string
    name?: string
    type?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type CardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserCardCreateInput = {
    id?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    user: UserCreateNestedOneWithoutCardsInput
    card: CardCreateNestedOneWithoutUserCardsInput
  }

  export type UserCardUncheckedCreateInput = {
    id?: string
    userId: string
    cardId: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type UserCardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutCardsNestedInput
    card?: CardUpdateOneRequiredWithoutUserCardsNestedInput
  }

  export type UserCardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserCardCreateManyInput = {
    id?: string
    userId: string
    cardId: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type UserCardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserCardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserOrderCreateInput = {
    id?: string
    storeId: string
    areaId: string
    category?: number
    type?: number
    startTime?: bigint | number
    endTime?: bigint | number
    payMethod?: number
    price?: number
    status?: number
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    user: UserCreateNestedOneWithoutOrdersInput
    seat: SeatCreateNestedOneWithoutOrdersInput
  }

  export type UserOrderUncheckedCreateInput = {
    id?: string
    storeId: string
    areaId: string
    seatId: string
    category?: number
    userId: string
    type?: number
    startTime?: bigint | number
    endTime?: bigint | number
    payMethod?: number
    price?: number
    status?: number
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type UserOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    category?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    startTime?: BigIntFieldUpdateOperationsInput | bigint | number
    endTime?: BigIntFieldUpdateOperationsInput | bigint | number
    payMethod?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
    seat?: SeatUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type UserOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    category?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    startTime?: BigIntFieldUpdateOperationsInput | bigint | number
    endTime?: BigIntFieldUpdateOperationsInput | bigint | number
    payMethod?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserOrderCreateManyInput = {
    id?: string
    storeId: string
    areaId: string
    seatId: string
    category?: number
    userId: string
    type?: number
    startTime?: bigint | number
    endTime?: bigint | number
    payMethod?: number
    price?: number
    status?: number
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type UserOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    category?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    startTime?: BigIntFieldUpdateOperationsInput | bigint | number
    endTime?: BigIntFieldUpdateOperationsInput | bigint | number
    payMethod?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    category?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    startTime?: BigIntFieldUpdateOperationsInput | bigint | number
    endTime?: BigIntFieldUpdateOperationsInput | bigint | number
    payMethod?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AttachmentCreateInput = {
    id?: string
    name?: string
    type?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    store?: StoreCreateNestedOneWithoutAttachmentsInput
    notice?: NoticeCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateInput = {
    id?: string
    storeId?: string | null
    noticeId?: string | null
    name?: string
    type?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type AttachmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    store?: StoreUpdateOneWithoutAttachmentsNestedInput
    notice?: NoticeUpdateOneWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    noticeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AttachmentCreateManyInput = {
    id?: string
    storeId?: string | null
    noticeId?: string | null
    name?: string
    type?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type AttachmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AttachmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    noticeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type NoticeCreateInput = {
    id?: string
    title?: string
    content?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    store: StoreCreateNestedOneWithoutNoticesInput
    attachments?: AttachmentCreateNestedManyWithoutNoticeInput
  }

  export type NoticeUncheckedCreateInput = {
    id?: string
    storeId: string
    title?: string
    content?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    attachments?: AttachmentUncheckedCreateNestedManyWithoutNoticeInput
  }

  export type NoticeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    store?: StoreUpdateOneRequiredWithoutNoticesNestedInput
    attachments?: AttachmentUpdateManyWithoutNoticeNestedInput
  }

  export type NoticeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    attachments?: AttachmentUncheckedUpdateManyWithoutNoticeNestedInput
  }

  export type NoticeCreateManyInput = {
    id?: string
    storeId: string
    title?: string
    content?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type NoticeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type NoticeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CommentCreateInput = {
    id?: string
    type?: number
    content?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    store: StoreCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    storeId: string
    type?: number
    content?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    store?: StoreUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CommentCreateManyInput = {
    id?: string
    storeId: string
    type?: number
    content?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StoreListRelationFilter = {
    every?: StoreWhereInput
    some?: StoreWhereInput
    none?: StoreWhereInput
  }

  export type UserOrderListRelationFilter = {
    every?: UserOrderWhereInput
    some?: UserOrderWhereInput
    none?: UserOrderWhereInput
  }

  export type UserCardListRelationFilter = {
    every?: UserCardWhereInput
    some?: UserCardWhereInput
    none?: UserCardWhereInput
  }

  export type StoreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    openId?: SortOrder
    type?: SortOrder
    nickName?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    points?: SortOrder
    realName?: SortOrder
    cardId?: SortOrder
    nation?: SortOrder
    sex?: SortOrder
    birth?: SortOrder
    qq?: SortOrder
    email?: SortOrder
    province?: SortOrder
    city?: SortOrder
    district?: SortOrder
    code?: SortOrder
    address?: SortOrder
    description?: SortOrder
    lastLoginTime?: SortOrder
    lastLoginIp?: SortOrder
    loginCount?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    type?: SortOrder
    balance?: SortOrder
    points?: SortOrder
    sex?: SortOrder
    lastLoginTime?: SortOrder
    loginCount?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    openId?: SortOrder
    type?: SortOrder
    nickName?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    points?: SortOrder
    realName?: SortOrder
    cardId?: SortOrder
    nation?: SortOrder
    sex?: SortOrder
    birth?: SortOrder
    qq?: SortOrder
    email?: SortOrder
    province?: SortOrder
    city?: SortOrder
    district?: SortOrder
    code?: SortOrder
    address?: SortOrder
    description?: SortOrder
    lastLoginTime?: SortOrder
    lastLoginIp?: SortOrder
    loginCount?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    openId?: SortOrder
    type?: SortOrder
    nickName?: SortOrder
    avatar?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    balance?: SortOrder
    points?: SortOrder
    realName?: SortOrder
    cardId?: SortOrder
    nation?: SortOrder
    sex?: SortOrder
    birth?: SortOrder
    qq?: SortOrder
    email?: SortOrder
    province?: SortOrder
    city?: SortOrder
    district?: SortOrder
    code?: SortOrder
    address?: SortOrder
    description?: SortOrder
    lastLoginTime?: SortOrder
    lastLoginIp?: SortOrder
    loginCount?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    type?: SortOrder
    balance?: SortOrder
    points?: SortOrder
    sex?: SortOrder
    lastLoginTime?: SortOrder
    loginCount?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AreaListRelationFilter = {
    every?: AreaWhereInput
    some?: AreaWhereInput
    none?: AreaWhereInput
  }

  export type SeatListRelationFilter = {
    every?: SeatWhereInput
    some?: SeatWhereInput
    none?: SeatWhereInput
  }

  export type AttachmentListRelationFilter = {
    every?: AttachmentWhereInput
    some?: AttachmentWhereInput
    none?: AttachmentWhereInput
  }

  export type NoticeListRelationFilter = {
    every?: NoticeWhereInput
    some?: NoticeWhereInput
    none?: NoticeWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SeatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttachmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoticeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StoreOrderByRelevanceInput = {
    fields: StoreOrderByRelevanceFieldEnum | StoreOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StoreCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    provinceCode?: SortOrder
    cityCode?: SortOrder
    regionCode?: SortOrder
    province?: SortOrder
    city?: SortOrder
    region?: SortOrder
    address?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    seatCount?: SortOrder
    phone?: SortOrder
    is24Hours?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isActive?: SortOrder
    features?: SortOrder
    promotion?: SortOrder
    price?: SortOrder
    reviews?: SortOrder
    sales?: SortOrder
    coverImages?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type StoreAvgOrderByAggregateInput = {
    type?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    seatCount?: SortOrder
    price?: SortOrder
    reviews?: SortOrder
    sales?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type StoreMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    provinceCode?: SortOrder
    cityCode?: SortOrder
    regionCode?: SortOrder
    province?: SortOrder
    city?: SortOrder
    region?: SortOrder
    address?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    seatCount?: SortOrder
    phone?: SortOrder
    is24Hours?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isActive?: SortOrder
    features?: SortOrder
    promotion?: SortOrder
    price?: SortOrder
    reviews?: SortOrder
    sales?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type StoreMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    provinceCode?: SortOrder
    cityCode?: SortOrder
    regionCode?: SortOrder
    province?: SortOrder
    city?: SortOrder
    region?: SortOrder
    address?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    seatCount?: SortOrder
    phone?: SortOrder
    is24Hours?: SortOrder
    openTime?: SortOrder
    closeTime?: SortOrder
    isActive?: SortOrder
    features?: SortOrder
    promotion?: SortOrder
    price?: SortOrder
    reviews?: SortOrder
    sales?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type StoreSumOrderByAggregateInput = {
    type?: SortOrder
    longitude?: SortOrder
    latitude?: SortOrder
    seatCount?: SortOrder
    price?: SortOrder
    reviews?: SortOrder
    sales?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StoreScalarRelationFilter = {
    is?: StoreWhereInput
    isNot?: StoreWhereInput
  }

  export type AreaOrderByRelevanceInput = {
    fields: AreaOrderByRelevanceFieldEnum | AreaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    seatCount?: SortOrder
    sort?: SortOrder
    isActive?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type AreaAvgOrderByAggregateInput = {
    seatCount?: SortOrder
    sort?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    seatCount?: SortOrder
    sort?: SortOrder
    isActive?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    name?: SortOrder
    seatCount?: SortOrder
    sort?: SortOrder
    isActive?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type AreaSumOrderByAggregateInput = {
    seatCount?: SortOrder
    sort?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type AreaScalarRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type SeatOrderByRelevanceInput = {
    fields: SeatOrderByRelevanceFieldEnum | SeatOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SeatAreaIdSeatNoCompoundUniqueInput = {
    areaId: string
    seatNo: string
  }

  export type SeatCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    areaId?: SortOrder
    type?: SortOrder
    seatNo?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    hasPower?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type SeatAvgOrderByAggregateInput = {
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    status?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type SeatMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    areaId?: SortOrder
    type?: SortOrder
    seatNo?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    hasPower?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type SeatMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    areaId?: SortOrder
    type?: SortOrder
    seatNo?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    hasPower?: SortOrder
    status?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type SeatSumOrderByAggregateInput = {
    type?: SortOrder
    x?: SortOrder
    y?: SortOrder
    width?: SortOrder
    height?: SortOrder
    status?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type CardOrderByRelevanceInput = {
    fields: CardOrderByRelevanceFieldEnum | CardOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CardCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type CardAvgOrderByAggregateInput = {
    type?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type CardMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type CardMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type CardSumOrderByAggregateInput = {
    type?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type CardScalarRelationFilter = {
    is?: CardWhereInput
    isNot?: CardWhereInput
  }

  export type UserCardOrderByRelevanceInput = {
    fields: UserCardOrderByRelevanceFieldEnum | UserCardOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCardCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type UserCardAvgOrderByAggregateInput = {
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type UserCardMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type UserCardMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    cardId?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type UserCardSumOrderByAggregateInput = {
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type SeatScalarRelationFilter = {
    is?: SeatWhereInput
    isNot?: SeatWhereInput
  }

  export type UserOrderOrderByRelevanceInput = {
    fields: UserOrderOrderByRelevanceFieldEnum | UserOrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserOrderCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    areaId?: SortOrder
    seatId?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    payMethod?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type UserOrderAvgOrderByAggregateInput = {
    category?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    payMethod?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type UserOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    areaId?: SortOrder
    seatId?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    payMethod?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type UserOrderMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    areaId?: SortOrder
    seatId?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    payMethod?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type UserOrderSumOrderByAggregateInput = {
    category?: SortOrder
    type?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    payMethod?: SortOrder
    price?: SortOrder
    status?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StoreNullableScalarRelationFilter = {
    is?: StoreWhereInput | null
    isNot?: StoreWhereInput | null
  }

  export type NoticeNullableScalarRelationFilter = {
    is?: NoticeWhereInput | null
    isNot?: NoticeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AttachmentOrderByRelevanceInput = {
    fields: AttachmentOrderByRelevanceFieldEnum | AttachmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AttachmentCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    noticeId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type AttachmentAvgOrderByAggregateInput = {
    type?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type AttachmentMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    noticeId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type AttachmentMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    noticeId?: SortOrder
    name?: SortOrder
    type?: SortOrder
    description?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type AttachmentSumOrderByAggregateInput = {
    type?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NoticeOrderByRelevanceInput = {
    fields: NoticeOrderByRelevanceFieldEnum | NoticeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NoticeCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type NoticeAvgOrderByAggregateInput = {
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type NoticeMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type NoticeMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type NoticeSumOrderByAggregateInput = {
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type CommentOrderByRelevanceInput = {
    fields: CommentOrderByRelevanceFieldEnum | CommentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    type?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    storeId?: SortOrder
    type?: SortOrder
    content?: SortOrder
    createdBy?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    type?: SortOrder
    createdTime?: SortOrder
    updatedTime?: SortOrder
    deletedTime?: SortOrder
  }

  export type StoreCreateNestedManyWithoutUserInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type UserOrderCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOrderCreateWithoutUserInput, UserOrderUncheckedCreateWithoutUserInput> | UserOrderCreateWithoutUserInput[] | UserOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOrderCreateOrConnectWithoutUserInput | UserOrderCreateOrConnectWithoutUserInput[]
    createMany?: UserOrderCreateManyUserInputEnvelope
    connect?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
  }

  export type UserCardCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCardCreateWithoutUserInput, UserCardUncheckedCreateWithoutUserInput> | UserCardCreateWithoutUserInput[] | UserCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCardCreateOrConnectWithoutUserInput | UserCardCreateOrConnectWithoutUserInput[]
    createMany?: UserCardCreateManyUserInputEnvelope
    connect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
  }

  export type StoreUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
  }

  export type UserOrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserOrderCreateWithoutUserInput, UserOrderUncheckedCreateWithoutUserInput> | UserOrderCreateWithoutUserInput[] | UserOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOrderCreateOrConnectWithoutUserInput | UserOrderCreateOrConnectWithoutUserInput[]
    createMany?: UserOrderCreateManyUserInputEnvelope
    connect?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
  }

  export type UserCardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCardCreateWithoutUserInput, UserCardUncheckedCreateWithoutUserInput> | UserCardCreateWithoutUserInput[] | UserCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCardCreateOrConnectWithoutUserInput | UserCardCreateOrConnectWithoutUserInput[]
    createMany?: UserCardCreateManyUserInputEnvelope
    connect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StoreUpdateManyWithoutUserNestedInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutUserInput | StoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutUserInput | StoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutUserInput | StoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type UserOrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOrderCreateWithoutUserInput, UserOrderUncheckedCreateWithoutUserInput> | UserOrderCreateWithoutUserInput[] | UserOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOrderCreateOrConnectWithoutUserInput | UserOrderCreateOrConnectWithoutUserInput[]
    upsert?: UserOrderUpsertWithWhereUniqueWithoutUserInput | UserOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOrderCreateManyUserInputEnvelope
    set?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    disconnect?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    delete?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    connect?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    update?: UserOrderUpdateWithWhereUniqueWithoutUserInput | UserOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOrderUpdateManyWithWhereWithoutUserInput | UserOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOrderScalarWhereInput | UserOrderScalarWhereInput[]
  }

  export type UserCardUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCardCreateWithoutUserInput, UserCardUncheckedCreateWithoutUserInput> | UserCardCreateWithoutUserInput[] | UserCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCardCreateOrConnectWithoutUserInput | UserCardCreateOrConnectWithoutUserInput[]
    upsert?: UserCardUpsertWithWhereUniqueWithoutUserInput | UserCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCardCreateManyUserInputEnvelope
    set?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    disconnect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    delete?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    connect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    update?: UserCardUpdateWithWhereUniqueWithoutUserInput | UserCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCardUpdateManyWithWhereWithoutUserInput | UserCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCardScalarWhereInput | UserCardScalarWhereInput[]
  }

  export type StoreUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput> | StoreCreateWithoutUserInput[] | StoreUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StoreCreateOrConnectWithoutUserInput | StoreCreateOrConnectWithoutUserInput[]
    upsert?: StoreUpsertWithWhereUniqueWithoutUserInput | StoreUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StoreCreateManyUserInputEnvelope
    set?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    disconnect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    delete?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    connect?: StoreWhereUniqueInput | StoreWhereUniqueInput[]
    update?: StoreUpdateWithWhereUniqueWithoutUserInput | StoreUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StoreUpdateManyWithWhereWithoutUserInput | StoreUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StoreScalarWhereInput | StoreScalarWhereInput[]
  }

  export type UserOrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserOrderCreateWithoutUserInput, UserOrderUncheckedCreateWithoutUserInput> | UserOrderCreateWithoutUserInput[] | UserOrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserOrderCreateOrConnectWithoutUserInput | UserOrderCreateOrConnectWithoutUserInput[]
    upsert?: UserOrderUpsertWithWhereUniqueWithoutUserInput | UserOrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserOrderCreateManyUserInputEnvelope
    set?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    disconnect?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    delete?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    connect?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    update?: UserOrderUpdateWithWhereUniqueWithoutUserInput | UserOrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserOrderUpdateManyWithWhereWithoutUserInput | UserOrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserOrderScalarWhereInput | UserOrderScalarWhereInput[]
  }

  export type UserCardUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCardCreateWithoutUserInput, UserCardUncheckedCreateWithoutUserInput> | UserCardCreateWithoutUserInput[] | UserCardUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCardCreateOrConnectWithoutUserInput | UserCardCreateOrConnectWithoutUserInput[]
    upsert?: UserCardUpsertWithWhereUniqueWithoutUserInput | UserCardUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCardCreateManyUserInputEnvelope
    set?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    disconnect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    delete?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    connect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    update?: UserCardUpdateWithWhereUniqueWithoutUserInput | UserCardUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCardUpdateManyWithWhereWithoutUserInput | UserCardUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCardScalarWhereInput | UserCardScalarWhereInput[]
  }

  export type AreaCreateNestedManyWithoutStoreInput = {
    create?: XOR<AreaCreateWithoutStoreInput, AreaUncheckedCreateWithoutStoreInput> | AreaCreateWithoutStoreInput[] | AreaUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutStoreInput | AreaCreateOrConnectWithoutStoreInput[]
    createMany?: AreaCreateManyStoreInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type SeatCreateNestedManyWithoutStoreInput = {
    create?: XOR<SeatCreateWithoutStoreInput, SeatUncheckedCreateWithoutStoreInput> | SeatCreateWithoutStoreInput[] | SeatUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutStoreInput | SeatCreateOrConnectWithoutStoreInput[]
    createMany?: SeatCreateManyStoreInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type AttachmentCreateNestedManyWithoutStoreInput = {
    create?: XOR<AttachmentCreateWithoutStoreInput, AttachmentUncheckedCreateWithoutStoreInput> | AttachmentCreateWithoutStoreInput[] | AttachmentUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutStoreInput | AttachmentCreateOrConnectWithoutStoreInput[]
    createMany?: AttachmentCreateManyStoreInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type NoticeCreateNestedManyWithoutStoreInput = {
    create?: XOR<NoticeCreateWithoutStoreInput, NoticeUncheckedCreateWithoutStoreInput> | NoticeCreateWithoutStoreInput[] | NoticeUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutStoreInput | NoticeCreateOrConnectWithoutStoreInput[]
    createMany?: NoticeCreateManyStoreInputEnvelope
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutStoreInput = {
    create?: XOR<CommentCreateWithoutStoreInput, CommentUncheckedCreateWithoutStoreInput> | CommentCreateWithoutStoreInput[] | CommentUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutStoreInput | CommentCreateOrConnectWithoutStoreInput[]
    createMany?: CommentCreateManyStoreInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutStoresInput = {
    create?: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoresInput
    connect?: UserWhereUniqueInput
  }

  export type AreaUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<AreaCreateWithoutStoreInput, AreaUncheckedCreateWithoutStoreInput> | AreaCreateWithoutStoreInput[] | AreaUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutStoreInput | AreaCreateOrConnectWithoutStoreInput[]
    createMany?: AreaCreateManyStoreInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type SeatUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<SeatCreateWithoutStoreInput, SeatUncheckedCreateWithoutStoreInput> | SeatCreateWithoutStoreInput[] | SeatUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutStoreInput | SeatCreateOrConnectWithoutStoreInput[]
    createMany?: SeatCreateManyStoreInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<AttachmentCreateWithoutStoreInput, AttachmentUncheckedCreateWithoutStoreInput> | AttachmentCreateWithoutStoreInput[] | AttachmentUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutStoreInput | AttachmentCreateOrConnectWithoutStoreInput[]
    createMany?: AttachmentCreateManyStoreInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type NoticeUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<NoticeCreateWithoutStoreInput, NoticeUncheckedCreateWithoutStoreInput> | NoticeCreateWithoutStoreInput[] | NoticeUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutStoreInput | NoticeCreateOrConnectWithoutStoreInput[]
    createMany?: NoticeCreateManyStoreInputEnvelope
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutStoreInput = {
    create?: XOR<CommentCreateWithoutStoreInput, CommentUncheckedCreateWithoutStoreInput> | CommentCreateWithoutStoreInput[] | CommentUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutStoreInput | CommentCreateOrConnectWithoutStoreInput[]
    createMany?: CommentCreateManyStoreInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AreaUpdateManyWithoutStoreNestedInput = {
    create?: XOR<AreaCreateWithoutStoreInput, AreaUncheckedCreateWithoutStoreInput> | AreaCreateWithoutStoreInput[] | AreaUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutStoreInput | AreaCreateOrConnectWithoutStoreInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutStoreInput | AreaUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: AreaCreateManyStoreInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutStoreInput | AreaUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutStoreInput | AreaUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type SeatUpdateManyWithoutStoreNestedInput = {
    create?: XOR<SeatCreateWithoutStoreInput, SeatUncheckedCreateWithoutStoreInput> | SeatCreateWithoutStoreInput[] | SeatUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutStoreInput | SeatCreateOrConnectWithoutStoreInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutStoreInput | SeatUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: SeatCreateManyStoreInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutStoreInput | SeatUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutStoreInput | SeatUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type AttachmentUpdateManyWithoutStoreNestedInput = {
    create?: XOR<AttachmentCreateWithoutStoreInput, AttachmentUncheckedCreateWithoutStoreInput> | AttachmentCreateWithoutStoreInput[] | AttachmentUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutStoreInput | AttachmentCreateOrConnectWithoutStoreInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutStoreInput | AttachmentUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: AttachmentCreateManyStoreInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutStoreInput | AttachmentUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutStoreInput | AttachmentUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type NoticeUpdateManyWithoutStoreNestedInput = {
    create?: XOR<NoticeCreateWithoutStoreInput, NoticeUncheckedCreateWithoutStoreInput> | NoticeCreateWithoutStoreInput[] | NoticeUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutStoreInput | NoticeCreateOrConnectWithoutStoreInput[]
    upsert?: NoticeUpsertWithWhereUniqueWithoutStoreInput | NoticeUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: NoticeCreateManyStoreInputEnvelope
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    update?: NoticeUpdateWithWhereUniqueWithoutStoreInput | NoticeUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: NoticeUpdateManyWithWhereWithoutStoreInput | NoticeUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutStoreNestedInput = {
    create?: XOR<CommentCreateWithoutStoreInput, CommentUncheckedCreateWithoutStoreInput> | CommentCreateWithoutStoreInput[] | CommentUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutStoreInput | CommentCreateOrConnectWithoutStoreInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutStoreInput | CommentUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: CommentCreateManyStoreInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutStoreInput | CommentUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutStoreInput | CommentUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutStoresNestedInput = {
    create?: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    connectOrCreate?: UserCreateOrConnectWithoutStoresInput
    upsert?: UserUpsertWithoutStoresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStoresInput, UserUpdateWithoutStoresInput>, UserUncheckedUpdateWithoutStoresInput>
  }

  export type AreaUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<AreaCreateWithoutStoreInput, AreaUncheckedCreateWithoutStoreInput> | AreaCreateWithoutStoreInput[] | AreaUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutStoreInput | AreaCreateOrConnectWithoutStoreInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutStoreInput | AreaUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: AreaCreateManyStoreInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutStoreInput | AreaUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutStoreInput | AreaUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type SeatUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<SeatCreateWithoutStoreInput, SeatUncheckedCreateWithoutStoreInput> | SeatCreateWithoutStoreInput[] | SeatUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutStoreInput | SeatCreateOrConnectWithoutStoreInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutStoreInput | SeatUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: SeatCreateManyStoreInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutStoreInput | SeatUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutStoreInput | SeatUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<AttachmentCreateWithoutStoreInput, AttachmentUncheckedCreateWithoutStoreInput> | AttachmentCreateWithoutStoreInput[] | AttachmentUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutStoreInput | AttachmentCreateOrConnectWithoutStoreInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutStoreInput | AttachmentUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: AttachmentCreateManyStoreInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutStoreInput | AttachmentUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutStoreInput | AttachmentUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type NoticeUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<NoticeCreateWithoutStoreInput, NoticeUncheckedCreateWithoutStoreInput> | NoticeCreateWithoutStoreInput[] | NoticeUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutStoreInput | NoticeCreateOrConnectWithoutStoreInput[]
    upsert?: NoticeUpsertWithWhereUniqueWithoutStoreInput | NoticeUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: NoticeCreateManyStoreInputEnvelope
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    update?: NoticeUpdateWithWhereUniqueWithoutStoreInput | NoticeUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: NoticeUpdateManyWithWhereWithoutStoreInput | NoticeUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutStoreNestedInput = {
    create?: XOR<CommentCreateWithoutStoreInput, CommentUncheckedCreateWithoutStoreInput> | CommentCreateWithoutStoreInput[] | CommentUncheckedCreateWithoutStoreInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutStoreInput | CommentCreateOrConnectWithoutStoreInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutStoreInput | CommentUpsertWithWhereUniqueWithoutStoreInput[]
    createMany?: CommentCreateManyStoreInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutStoreInput | CommentUpdateWithWhereUniqueWithoutStoreInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutStoreInput | CommentUpdateManyWithWhereWithoutStoreInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type SeatCreateNestedManyWithoutAreaInput = {
    create?: XOR<SeatCreateWithoutAreaInput, SeatUncheckedCreateWithoutAreaInput> | SeatCreateWithoutAreaInput[] | SeatUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutAreaInput | SeatCreateOrConnectWithoutAreaInput[]
    createMany?: SeatCreateManyAreaInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type StoreCreateNestedOneWithoutAreasInput = {
    create?: XOR<StoreCreateWithoutAreasInput, StoreUncheckedCreateWithoutAreasInput>
    connectOrCreate?: StoreCreateOrConnectWithoutAreasInput
    connect?: StoreWhereUniqueInput
  }

  export type SeatUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<SeatCreateWithoutAreaInput, SeatUncheckedCreateWithoutAreaInput> | SeatCreateWithoutAreaInput[] | SeatUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutAreaInput | SeatCreateOrConnectWithoutAreaInput[]
    createMany?: SeatCreateManyAreaInputEnvelope
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
  }

  export type SeatUpdateManyWithoutAreaNestedInput = {
    create?: XOR<SeatCreateWithoutAreaInput, SeatUncheckedCreateWithoutAreaInput> | SeatCreateWithoutAreaInput[] | SeatUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutAreaInput | SeatCreateOrConnectWithoutAreaInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutAreaInput | SeatUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: SeatCreateManyAreaInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutAreaInput | SeatUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutAreaInput | SeatUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type StoreUpdateOneRequiredWithoutAreasNestedInput = {
    create?: XOR<StoreCreateWithoutAreasInput, StoreUncheckedCreateWithoutAreasInput>
    connectOrCreate?: StoreCreateOrConnectWithoutAreasInput
    upsert?: StoreUpsertWithoutAreasInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutAreasInput, StoreUpdateWithoutAreasInput>, StoreUncheckedUpdateWithoutAreasInput>
  }

  export type SeatUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<SeatCreateWithoutAreaInput, SeatUncheckedCreateWithoutAreaInput> | SeatCreateWithoutAreaInput[] | SeatUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: SeatCreateOrConnectWithoutAreaInput | SeatCreateOrConnectWithoutAreaInput[]
    upsert?: SeatUpsertWithWhereUniqueWithoutAreaInput | SeatUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: SeatCreateManyAreaInputEnvelope
    set?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    disconnect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    delete?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    connect?: SeatWhereUniqueInput | SeatWhereUniqueInput[]
    update?: SeatUpdateWithWhereUniqueWithoutAreaInput | SeatUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: SeatUpdateManyWithWhereWithoutAreaInput | SeatUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: SeatScalarWhereInput | SeatScalarWhereInput[]
  }

  export type UserOrderCreateNestedManyWithoutSeatInput = {
    create?: XOR<UserOrderCreateWithoutSeatInput, UserOrderUncheckedCreateWithoutSeatInput> | UserOrderCreateWithoutSeatInput[] | UserOrderUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: UserOrderCreateOrConnectWithoutSeatInput | UserOrderCreateOrConnectWithoutSeatInput[]
    createMany?: UserOrderCreateManySeatInputEnvelope
    connect?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
  }

  export type AreaCreateNestedOneWithoutSeatsInput = {
    create?: XOR<AreaCreateWithoutSeatsInput, AreaUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutSeatsInput
    connect?: AreaWhereUniqueInput
  }

  export type StoreCreateNestedOneWithoutSeatsInput = {
    create?: XOR<StoreCreateWithoutSeatsInput, StoreUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutSeatsInput
    connect?: StoreWhereUniqueInput
  }

  export type UserOrderUncheckedCreateNestedManyWithoutSeatInput = {
    create?: XOR<UserOrderCreateWithoutSeatInput, UserOrderUncheckedCreateWithoutSeatInput> | UserOrderCreateWithoutSeatInput[] | UserOrderUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: UserOrderCreateOrConnectWithoutSeatInput | UserOrderCreateOrConnectWithoutSeatInput[]
    createMany?: UserOrderCreateManySeatInputEnvelope
    connect?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
  }

  export type UserOrderUpdateManyWithoutSeatNestedInput = {
    create?: XOR<UserOrderCreateWithoutSeatInput, UserOrderUncheckedCreateWithoutSeatInput> | UserOrderCreateWithoutSeatInput[] | UserOrderUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: UserOrderCreateOrConnectWithoutSeatInput | UserOrderCreateOrConnectWithoutSeatInput[]
    upsert?: UserOrderUpsertWithWhereUniqueWithoutSeatInput | UserOrderUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: UserOrderCreateManySeatInputEnvelope
    set?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    disconnect?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    delete?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    connect?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    update?: UserOrderUpdateWithWhereUniqueWithoutSeatInput | UserOrderUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: UserOrderUpdateManyWithWhereWithoutSeatInput | UserOrderUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: UserOrderScalarWhereInput | UserOrderScalarWhereInput[]
  }

  export type AreaUpdateOneRequiredWithoutSeatsNestedInput = {
    create?: XOR<AreaCreateWithoutSeatsInput, AreaUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutSeatsInput
    upsert?: AreaUpsertWithoutSeatsInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutSeatsInput, AreaUpdateWithoutSeatsInput>, AreaUncheckedUpdateWithoutSeatsInput>
  }

  export type StoreUpdateOneRequiredWithoutSeatsNestedInput = {
    create?: XOR<StoreCreateWithoutSeatsInput, StoreUncheckedCreateWithoutSeatsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutSeatsInput
    upsert?: StoreUpsertWithoutSeatsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutSeatsInput, StoreUpdateWithoutSeatsInput>, StoreUncheckedUpdateWithoutSeatsInput>
  }

  export type UserOrderUncheckedUpdateManyWithoutSeatNestedInput = {
    create?: XOR<UserOrderCreateWithoutSeatInput, UserOrderUncheckedCreateWithoutSeatInput> | UserOrderCreateWithoutSeatInput[] | UserOrderUncheckedCreateWithoutSeatInput[]
    connectOrCreate?: UserOrderCreateOrConnectWithoutSeatInput | UserOrderCreateOrConnectWithoutSeatInput[]
    upsert?: UserOrderUpsertWithWhereUniqueWithoutSeatInput | UserOrderUpsertWithWhereUniqueWithoutSeatInput[]
    createMany?: UserOrderCreateManySeatInputEnvelope
    set?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    disconnect?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    delete?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    connect?: UserOrderWhereUniqueInput | UserOrderWhereUniqueInput[]
    update?: UserOrderUpdateWithWhereUniqueWithoutSeatInput | UserOrderUpdateWithWhereUniqueWithoutSeatInput[]
    updateMany?: UserOrderUpdateManyWithWhereWithoutSeatInput | UserOrderUpdateManyWithWhereWithoutSeatInput[]
    deleteMany?: UserOrderScalarWhereInput | UserOrderScalarWhereInput[]
  }

  export type UserCardCreateNestedManyWithoutCardInput = {
    create?: XOR<UserCardCreateWithoutCardInput, UserCardUncheckedCreateWithoutCardInput> | UserCardCreateWithoutCardInput[] | UserCardUncheckedCreateWithoutCardInput[]
    connectOrCreate?: UserCardCreateOrConnectWithoutCardInput | UserCardCreateOrConnectWithoutCardInput[]
    createMany?: UserCardCreateManyCardInputEnvelope
    connect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
  }

  export type UserCardUncheckedCreateNestedManyWithoutCardInput = {
    create?: XOR<UserCardCreateWithoutCardInput, UserCardUncheckedCreateWithoutCardInput> | UserCardCreateWithoutCardInput[] | UserCardUncheckedCreateWithoutCardInput[]
    connectOrCreate?: UserCardCreateOrConnectWithoutCardInput | UserCardCreateOrConnectWithoutCardInput[]
    createMany?: UserCardCreateManyCardInputEnvelope
    connect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
  }

  export type UserCardUpdateManyWithoutCardNestedInput = {
    create?: XOR<UserCardCreateWithoutCardInput, UserCardUncheckedCreateWithoutCardInput> | UserCardCreateWithoutCardInput[] | UserCardUncheckedCreateWithoutCardInput[]
    connectOrCreate?: UserCardCreateOrConnectWithoutCardInput | UserCardCreateOrConnectWithoutCardInput[]
    upsert?: UserCardUpsertWithWhereUniqueWithoutCardInput | UserCardUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: UserCardCreateManyCardInputEnvelope
    set?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    disconnect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    delete?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    connect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    update?: UserCardUpdateWithWhereUniqueWithoutCardInput | UserCardUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: UserCardUpdateManyWithWhereWithoutCardInput | UserCardUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: UserCardScalarWhereInput | UserCardScalarWhereInput[]
  }

  export type UserCardUncheckedUpdateManyWithoutCardNestedInput = {
    create?: XOR<UserCardCreateWithoutCardInput, UserCardUncheckedCreateWithoutCardInput> | UserCardCreateWithoutCardInput[] | UserCardUncheckedCreateWithoutCardInput[]
    connectOrCreate?: UserCardCreateOrConnectWithoutCardInput | UserCardCreateOrConnectWithoutCardInput[]
    upsert?: UserCardUpsertWithWhereUniqueWithoutCardInput | UserCardUpsertWithWhereUniqueWithoutCardInput[]
    createMany?: UserCardCreateManyCardInputEnvelope
    set?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    disconnect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    delete?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    connect?: UserCardWhereUniqueInput | UserCardWhereUniqueInput[]
    update?: UserCardUpdateWithWhereUniqueWithoutCardInput | UserCardUpdateWithWhereUniqueWithoutCardInput[]
    updateMany?: UserCardUpdateManyWithWhereWithoutCardInput | UserCardUpdateManyWithWhereWithoutCardInput[]
    deleteMany?: UserCardScalarWhereInput | UserCardScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCardsInput = {
    create?: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardsInput
    connect?: UserWhereUniqueInput
  }

  export type CardCreateNestedOneWithoutUserCardsInput = {
    create?: XOR<CardCreateWithoutUserCardsInput, CardUncheckedCreateWithoutUserCardsInput>
    connectOrCreate?: CardCreateOrConnectWithoutUserCardsInput
    connect?: CardWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCardsNestedInput = {
    create?: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCardsInput
    upsert?: UserUpsertWithoutCardsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCardsInput, UserUpdateWithoutCardsInput>, UserUncheckedUpdateWithoutCardsInput>
  }

  export type CardUpdateOneRequiredWithoutUserCardsNestedInput = {
    create?: XOR<CardCreateWithoutUserCardsInput, CardUncheckedCreateWithoutUserCardsInput>
    connectOrCreate?: CardCreateOrConnectWithoutUserCardsInput
    upsert?: CardUpsertWithoutUserCardsInput
    connect?: CardWhereUniqueInput
    update?: XOR<XOR<CardUpdateToOneWithWhereWithoutUserCardsInput, CardUpdateWithoutUserCardsInput>, CardUncheckedUpdateWithoutUserCardsInput>
  }

  export type UserCreateNestedOneWithoutOrdersInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type SeatCreateNestedOneWithoutOrdersInput = {
    create?: XOR<SeatCreateWithoutOrdersInput, SeatUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: SeatCreateOrConnectWithoutOrdersInput
    connect?: SeatWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersInput
    upsert?: UserUpsertWithoutOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersInput, UserUpdateWithoutOrdersInput>, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type SeatUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<SeatCreateWithoutOrdersInput, SeatUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: SeatCreateOrConnectWithoutOrdersInput
    upsert?: SeatUpsertWithoutOrdersInput
    connect?: SeatWhereUniqueInput
    update?: XOR<XOR<SeatUpdateToOneWithWhereWithoutOrdersInput, SeatUpdateWithoutOrdersInput>, SeatUncheckedUpdateWithoutOrdersInput>
  }

  export type StoreCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<StoreCreateWithoutAttachmentsInput, StoreUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutAttachmentsInput
    connect?: StoreWhereUniqueInput
  }

  export type NoticeCreateNestedOneWithoutAttachmentsInput = {
    create?: XOR<NoticeCreateWithoutAttachmentsInput, NoticeUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: NoticeCreateOrConnectWithoutAttachmentsInput
    connect?: NoticeWhereUniqueInput
  }

  export type StoreUpdateOneWithoutAttachmentsNestedInput = {
    create?: XOR<StoreCreateWithoutAttachmentsInput, StoreUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutAttachmentsInput
    upsert?: StoreUpsertWithoutAttachmentsInput
    disconnect?: StoreWhereInput | boolean
    delete?: StoreWhereInput | boolean
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutAttachmentsInput, StoreUpdateWithoutAttachmentsInput>, StoreUncheckedUpdateWithoutAttachmentsInput>
  }

  export type NoticeUpdateOneWithoutAttachmentsNestedInput = {
    create?: XOR<NoticeCreateWithoutAttachmentsInput, NoticeUncheckedCreateWithoutAttachmentsInput>
    connectOrCreate?: NoticeCreateOrConnectWithoutAttachmentsInput
    upsert?: NoticeUpsertWithoutAttachmentsInput
    disconnect?: NoticeWhereInput | boolean
    delete?: NoticeWhereInput | boolean
    connect?: NoticeWhereUniqueInput
    update?: XOR<XOR<NoticeUpdateToOneWithWhereWithoutAttachmentsInput, NoticeUpdateWithoutAttachmentsInput>, NoticeUncheckedUpdateWithoutAttachmentsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StoreCreateNestedOneWithoutNoticesInput = {
    create?: XOR<StoreCreateWithoutNoticesInput, StoreUncheckedCreateWithoutNoticesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutNoticesInput
    connect?: StoreWhereUniqueInput
  }

  export type AttachmentCreateNestedManyWithoutNoticeInput = {
    create?: XOR<AttachmentCreateWithoutNoticeInput, AttachmentUncheckedCreateWithoutNoticeInput> | AttachmentCreateWithoutNoticeInput[] | AttachmentUncheckedCreateWithoutNoticeInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutNoticeInput | AttachmentCreateOrConnectWithoutNoticeInput[]
    createMany?: AttachmentCreateManyNoticeInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type AttachmentUncheckedCreateNestedManyWithoutNoticeInput = {
    create?: XOR<AttachmentCreateWithoutNoticeInput, AttachmentUncheckedCreateWithoutNoticeInput> | AttachmentCreateWithoutNoticeInput[] | AttachmentUncheckedCreateWithoutNoticeInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutNoticeInput | AttachmentCreateOrConnectWithoutNoticeInput[]
    createMany?: AttachmentCreateManyNoticeInputEnvelope
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
  }

  export type StoreUpdateOneRequiredWithoutNoticesNestedInput = {
    create?: XOR<StoreCreateWithoutNoticesInput, StoreUncheckedCreateWithoutNoticesInput>
    connectOrCreate?: StoreCreateOrConnectWithoutNoticesInput
    upsert?: StoreUpsertWithoutNoticesInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutNoticesInput, StoreUpdateWithoutNoticesInput>, StoreUncheckedUpdateWithoutNoticesInput>
  }

  export type AttachmentUpdateManyWithoutNoticeNestedInput = {
    create?: XOR<AttachmentCreateWithoutNoticeInput, AttachmentUncheckedCreateWithoutNoticeInput> | AttachmentCreateWithoutNoticeInput[] | AttachmentUncheckedCreateWithoutNoticeInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutNoticeInput | AttachmentCreateOrConnectWithoutNoticeInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutNoticeInput | AttachmentUpsertWithWhereUniqueWithoutNoticeInput[]
    createMany?: AttachmentCreateManyNoticeInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutNoticeInput | AttachmentUpdateWithWhereUniqueWithoutNoticeInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutNoticeInput | AttachmentUpdateManyWithWhereWithoutNoticeInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type AttachmentUncheckedUpdateManyWithoutNoticeNestedInput = {
    create?: XOR<AttachmentCreateWithoutNoticeInput, AttachmentUncheckedCreateWithoutNoticeInput> | AttachmentCreateWithoutNoticeInput[] | AttachmentUncheckedCreateWithoutNoticeInput[]
    connectOrCreate?: AttachmentCreateOrConnectWithoutNoticeInput | AttachmentCreateOrConnectWithoutNoticeInput[]
    upsert?: AttachmentUpsertWithWhereUniqueWithoutNoticeInput | AttachmentUpsertWithWhereUniqueWithoutNoticeInput[]
    createMany?: AttachmentCreateManyNoticeInputEnvelope
    set?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    disconnect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    delete?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    connect?: AttachmentWhereUniqueInput | AttachmentWhereUniqueInput[]
    update?: AttachmentUpdateWithWhereUniqueWithoutNoticeInput | AttachmentUpdateWithWhereUniqueWithoutNoticeInput[]
    updateMany?: AttachmentUpdateManyWithWhereWithoutNoticeInput | AttachmentUpdateManyWithWhereWithoutNoticeInput[]
    deleteMany?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
  }

  export type StoreCreateNestedOneWithoutCommentsInput = {
    create?: XOR<StoreCreateWithoutCommentsInput, StoreUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutCommentsInput
    connect?: StoreWhereUniqueInput
  }

  export type StoreUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<StoreCreateWithoutCommentsInput, StoreUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: StoreCreateOrConnectWithoutCommentsInput
    upsert?: StoreUpsertWithoutCommentsInput
    connect?: StoreWhereUniqueInput
    update?: XOR<XOR<StoreUpdateToOneWithWhereWithoutCommentsInput, StoreUpdateWithoutCommentsInput>, StoreUncheckedUpdateWithoutCommentsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StoreCreateWithoutUserInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    areas?: AreaCreateNestedManyWithoutStoreInput
    seats?: SeatCreateNestedManyWithoutStoreInput
    attachments?: AttachmentCreateNestedManyWithoutStoreInput
    notices?: NoticeCreateNestedManyWithoutStoreInput
    comments?: CommentCreateNestedManyWithoutStoreInput
  }

  export type StoreUncheckedCreateWithoutUserInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    areas?: AreaUncheckedCreateNestedManyWithoutStoreInput
    seats?: SeatUncheckedCreateNestedManyWithoutStoreInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutStoreInput
    notices?: NoticeUncheckedCreateNestedManyWithoutStoreInput
    comments?: CommentUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutUserInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput>
  }

  export type StoreCreateManyUserInputEnvelope = {
    data: StoreCreateManyUserInput | StoreCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserOrderCreateWithoutUserInput = {
    id?: string
    storeId: string
    areaId: string
    category?: number
    type?: number
    startTime?: bigint | number
    endTime?: bigint | number
    payMethod?: number
    price?: number
    status?: number
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    seat: SeatCreateNestedOneWithoutOrdersInput
  }

  export type UserOrderUncheckedCreateWithoutUserInput = {
    id?: string
    storeId: string
    areaId: string
    seatId: string
    category?: number
    type?: number
    startTime?: bigint | number
    endTime?: bigint | number
    payMethod?: number
    price?: number
    status?: number
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type UserOrderCreateOrConnectWithoutUserInput = {
    where: UserOrderWhereUniqueInput
    create: XOR<UserOrderCreateWithoutUserInput, UserOrderUncheckedCreateWithoutUserInput>
  }

  export type UserOrderCreateManyUserInputEnvelope = {
    data: UserOrderCreateManyUserInput | UserOrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCardCreateWithoutUserInput = {
    id?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    card: CardCreateNestedOneWithoutUserCardsInput
  }

  export type UserCardUncheckedCreateWithoutUserInput = {
    id?: string
    cardId: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type UserCardCreateOrConnectWithoutUserInput = {
    where: UserCardWhereUniqueInput
    create: XOR<UserCardCreateWithoutUserInput, UserCardUncheckedCreateWithoutUserInput>
  }

  export type UserCardCreateManyUserInputEnvelope = {
    data: UserCardCreateManyUserInput | UserCardCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithWhereUniqueWithoutUserInput = {
    where: StoreWhereUniqueInput
    update: XOR<StoreUpdateWithoutUserInput, StoreUncheckedUpdateWithoutUserInput>
    create: XOR<StoreCreateWithoutUserInput, StoreUncheckedCreateWithoutUserInput>
  }

  export type StoreUpdateWithWhereUniqueWithoutUserInput = {
    where: StoreWhereUniqueInput
    data: XOR<StoreUpdateWithoutUserInput, StoreUncheckedUpdateWithoutUserInput>
  }

  export type StoreUpdateManyWithWhereWithoutUserInput = {
    where: StoreScalarWhereInput
    data: XOR<StoreUpdateManyMutationInput, StoreUncheckedUpdateManyWithoutUserInput>
  }

  export type StoreScalarWhereInput = {
    AND?: StoreScalarWhereInput | StoreScalarWhereInput[]
    OR?: StoreScalarWhereInput[]
    NOT?: StoreScalarWhereInput | StoreScalarWhereInput[]
    id?: StringFilter<"Store"> | string
    type?: IntFilter<"Store"> | number
    name?: StringFilter<"Store"> | string
    provinceCode?: StringFilter<"Store"> | string
    cityCode?: StringFilter<"Store"> | string
    regionCode?: StringFilter<"Store"> | string
    province?: StringFilter<"Store"> | string
    city?: StringFilter<"Store"> | string
    region?: StringFilter<"Store"> | string
    address?: StringFilter<"Store"> | string
    longitude?: FloatFilter<"Store"> | number
    latitude?: FloatFilter<"Store"> | number
    seatCount?: IntFilter<"Store"> | number
    phone?: StringFilter<"Store"> | string
    is24Hours?: BoolFilter<"Store"> | boolean
    openTime?: StringFilter<"Store"> | string
    closeTime?: StringFilter<"Store"> | string
    isActive?: BoolFilter<"Store"> | boolean
    features?: StringFilter<"Store"> | string
    promotion?: StringFilter<"Store"> | string
    price?: IntFilter<"Store"> | number
    reviews?: IntFilter<"Store"> | number
    sales?: IntFilter<"Store"> | number
    coverImages?: JsonFilter<"Store">
    description?: StringFilter<"Store"> | string
    userId?: StringFilter<"Store"> | string
    createdBy?: StringFilter<"Store"> | string
    createdTime?: BigIntFilter<"Store"> | bigint | number
    updatedTime?: BigIntFilter<"Store"> | bigint | number
    deletedTime?: BigIntFilter<"Store"> | bigint | number
  }

  export type UserOrderUpsertWithWhereUniqueWithoutUserInput = {
    where: UserOrderWhereUniqueInput
    update: XOR<UserOrderUpdateWithoutUserInput, UserOrderUncheckedUpdateWithoutUserInput>
    create: XOR<UserOrderCreateWithoutUserInput, UserOrderUncheckedCreateWithoutUserInput>
  }

  export type UserOrderUpdateWithWhereUniqueWithoutUserInput = {
    where: UserOrderWhereUniqueInput
    data: XOR<UserOrderUpdateWithoutUserInput, UserOrderUncheckedUpdateWithoutUserInput>
  }

  export type UserOrderUpdateManyWithWhereWithoutUserInput = {
    where: UserOrderScalarWhereInput
    data: XOR<UserOrderUpdateManyMutationInput, UserOrderUncheckedUpdateManyWithoutUserInput>
  }

  export type UserOrderScalarWhereInput = {
    AND?: UserOrderScalarWhereInput | UserOrderScalarWhereInput[]
    OR?: UserOrderScalarWhereInput[]
    NOT?: UserOrderScalarWhereInput | UserOrderScalarWhereInput[]
    id?: StringFilter<"UserOrder"> | string
    storeId?: StringFilter<"UserOrder"> | string
    areaId?: StringFilter<"UserOrder"> | string
    seatId?: StringFilter<"UserOrder"> | string
    category?: IntFilter<"UserOrder"> | number
    userId?: StringFilter<"UserOrder"> | string
    type?: IntFilter<"UserOrder"> | number
    startTime?: BigIntFilter<"UserOrder"> | bigint | number
    endTime?: BigIntFilter<"UserOrder"> | bigint | number
    payMethod?: IntFilter<"UserOrder"> | number
    price?: IntFilter<"UserOrder"> | number
    status?: IntFilter<"UserOrder"> | number
    createdTime?: BigIntFilter<"UserOrder"> | bigint | number
    updatedTime?: BigIntFilter<"UserOrder"> | bigint | number
    deletedTime?: BigIntFilter<"UserOrder"> | bigint | number
  }

  export type UserCardUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCardWhereUniqueInput
    update: XOR<UserCardUpdateWithoutUserInput, UserCardUncheckedUpdateWithoutUserInput>
    create: XOR<UserCardCreateWithoutUserInput, UserCardUncheckedCreateWithoutUserInput>
  }

  export type UserCardUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCardWhereUniqueInput
    data: XOR<UserCardUpdateWithoutUserInput, UserCardUncheckedUpdateWithoutUserInput>
  }

  export type UserCardUpdateManyWithWhereWithoutUserInput = {
    where: UserCardScalarWhereInput
    data: XOR<UserCardUpdateManyMutationInput, UserCardUncheckedUpdateManyWithoutUserInput>
  }

  export type UserCardScalarWhereInput = {
    AND?: UserCardScalarWhereInput | UserCardScalarWhereInput[]
    OR?: UserCardScalarWhereInput[]
    NOT?: UserCardScalarWhereInput | UserCardScalarWhereInput[]
    id?: StringFilter<"UserCard"> | string
    userId?: StringFilter<"UserCard"> | string
    cardId?: StringFilter<"UserCard"> | string
    createdTime?: BigIntFilter<"UserCard"> | bigint | number
    updatedTime?: BigIntFilter<"UserCard"> | bigint | number
    deletedTime?: BigIntFilter<"UserCard"> | bigint | number
  }

  export type AreaCreateWithoutStoreInput = {
    id?: string
    name?: string
    seatCount?: number
    sort?: number
    isActive?: boolean
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    seats?: SeatCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutStoreInput = {
    id?: string
    name?: string
    seatCount?: number
    sort?: number
    isActive?: boolean
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    seats?: SeatUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutStoreInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutStoreInput, AreaUncheckedCreateWithoutStoreInput>
  }

  export type AreaCreateManyStoreInputEnvelope = {
    data: AreaCreateManyStoreInput | AreaCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type SeatCreateWithoutStoreInput = {
    id?: string
    type?: number
    seatNo?: string
    x?: number
    y?: number
    width?: number
    height?: number
    hasPower?: boolean
    status?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    orders?: UserOrderCreateNestedManyWithoutSeatInput
    area: AreaCreateNestedOneWithoutSeatsInput
  }

  export type SeatUncheckedCreateWithoutStoreInput = {
    id?: string
    areaId: string
    type?: number
    seatNo?: string
    x?: number
    y?: number
    width?: number
    height?: number
    hasPower?: boolean
    status?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    orders?: UserOrderUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatCreateOrConnectWithoutStoreInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutStoreInput, SeatUncheckedCreateWithoutStoreInput>
  }

  export type SeatCreateManyStoreInputEnvelope = {
    data: SeatCreateManyStoreInput | SeatCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type AttachmentCreateWithoutStoreInput = {
    id?: string
    name?: string
    type?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    notice?: NoticeCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateWithoutStoreInput = {
    id?: string
    noticeId?: string | null
    name?: string
    type?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type AttachmentCreateOrConnectWithoutStoreInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutStoreInput, AttachmentUncheckedCreateWithoutStoreInput>
  }

  export type AttachmentCreateManyStoreInputEnvelope = {
    data: AttachmentCreateManyStoreInput | AttachmentCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type NoticeCreateWithoutStoreInput = {
    id?: string
    title?: string
    content?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    attachments?: AttachmentCreateNestedManyWithoutNoticeInput
  }

  export type NoticeUncheckedCreateWithoutStoreInput = {
    id?: string
    title?: string
    content?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    attachments?: AttachmentUncheckedCreateNestedManyWithoutNoticeInput
  }

  export type NoticeCreateOrConnectWithoutStoreInput = {
    where: NoticeWhereUniqueInput
    create: XOR<NoticeCreateWithoutStoreInput, NoticeUncheckedCreateWithoutStoreInput>
  }

  export type NoticeCreateManyStoreInputEnvelope = {
    data: NoticeCreateManyStoreInput | NoticeCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutStoreInput = {
    id?: string
    type?: number
    content?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type CommentUncheckedCreateWithoutStoreInput = {
    id?: string
    type?: number
    content?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type CommentCreateOrConnectWithoutStoreInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutStoreInput, CommentUncheckedCreateWithoutStoreInput>
  }

  export type CommentCreateManyStoreInputEnvelope = {
    data: CommentCreateManyStoreInput | CommentCreateManyStoreInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutStoresInput = {
    id?: string
    openId: string
    type?: number
    nickName?: string
    avatar?: string
    phone?: string
    password?: string
    balance?: bigint | number
    points?: number
    realName?: string
    cardId?: string
    nation?: string
    sex?: number
    birth?: Date | string
    qq?: string
    email?: string
    province?: string
    city?: string
    district?: string
    code?: string
    address?: string
    description?: string
    lastLoginTime?: bigint | number
    lastLoginIp?: string
    loginCount?: number
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    orders?: UserOrderCreateNestedManyWithoutUserInput
    cards?: UserCardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStoresInput = {
    id?: string
    openId: string
    type?: number
    nickName?: string
    avatar?: string
    phone?: string
    password?: string
    balance?: bigint | number
    points?: number
    realName?: string
    cardId?: string
    nation?: string
    sex?: number
    birth?: Date | string
    qq?: string
    email?: string
    province?: string
    city?: string
    district?: string
    code?: string
    address?: string
    description?: string
    lastLoginTime?: bigint | number
    lastLoginIp?: string
    loginCount?: number
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    orders?: UserOrderUncheckedCreateNestedManyWithoutUserInput
    cards?: UserCardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStoresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
  }

  export type AreaUpsertWithWhereUniqueWithoutStoreInput = {
    where: AreaWhereUniqueInput
    update: XOR<AreaUpdateWithoutStoreInput, AreaUncheckedUpdateWithoutStoreInput>
    create: XOR<AreaCreateWithoutStoreInput, AreaUncheckedCreateWithoutStoreInput>
  }

  export type AreaUpdateWithWhereUniqueWithoutStoreInput = {
    where: AreaWhereUniqueInput
    data: XOR<AreaUpdateWithoutStoreInput, AreaUncheckedUpdateWithoutStoreInput>
  }

  export type AreaUpdateManyWithWhereWithoutStoreInput = {
    where: AreaScalarWhereInput
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyWithoutStoreInput>
  }

  export type AreaScalarWhereInput = {
    AND?: AreaScalarWhereInput | AreaScalarWhereInput[]
    OR?: AreaScalarWhereInput[]
    NOT?: AreaScalarWhereInput | AreaScalarWhereInput[]
    id?: StringFilter<"Area"> | string
    storeId?: StringFilter<"Area"> | string
    name?: StringFilter<"Area"> | string
    seatCount?: IntFilter<"Area"> | number
    sort?: IntFilter<"Area"> | number
    isActive?: BoolFilter<"Area"> | boolean
    description?: StringFilter<"Area"> | string
    createdBy?: StringFilter<"Area"> | string
    createdTime?: BigIntFilter<"Area"> | bigint | number
    updatedTime?: BigIntFilter<"Area"> | bigint | number
    deletedTime?: BigIntFilter<"Area"> | bigint | number
  }

  export type SeatUpsertWithWhereUniqueWithoutStoreInput = {
    where: SeatWhereUniqueInput
    update: XOR<SeatUpdateWithoutStoreInput, SeatUncheckedUpdateWithoutStoreInput>
    create: XOR<SeatCreateWithoutStoreInput, SeatUncheckedCreateWithoutStoreInput>
  }

  export type SeatUpdateWithWhereUniqueWithoutStoreInput = {
    where: SeatWhereUniqueInput
    data: XOR<SeatUpdateWithoutStoreInput, SeatUncheckedUpdateWithoutStoreInput>
  }

  export type SeatUpdateManyWithWhereWithoutStoreInput = {
    where: SeatScalarWhereInput
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyWithoutStoreInput>
  }

  export type SeatScalarWhereInput = {
    AND?: SeatScalarWhereInput | SeatScalarWhereInput[]
    OR?: SeatScalarWhereInput[]
    NOT?: SeatScalarWhereInput | SeatScalarWhereInput[]
    id?: StringFilter<"Seat"> | string
    storeId?: StringFilter<"Seat"> | string
    areaId?: StringFilter<"Seat"> | string
    type?: IntFilter<"Seat"> | number
    seatNo?: StringFilter<"Seat"> | string
    x?: FloatFilter<"Seat"> | number
    y?: FloatFilter<"Seat"> | number
    width?: FloatFilter<"Seat"> | number
    height?: FloatFilter<"Seat"> | number
    hasPower?: BoolFilter<"Seat"> | boolean
    status?: IntFilter<"Seat"> | number
    description?: StringFilter<"Seat"> | string
    createdBy?: StringFilter<"Seat"> | string
    createdTime?: BigIntFilter<"Seat"> | bigint | number
    updatedTime?: BigIntFilter<"Seat"> | bigint | number
    deletedTime?: BigIntFilter<"Seat"> | bigint | number
  }

  export type AttachmentUpsertWithWhereUniqueWithoutStoreInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutStoreInput, AttachmentUncheckedUpdateWithoutStoreInput>
    create: XOR<AttachmentCreateWithoutStoreInput, AttachmentUncheckedCreateWithoutStoreInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutStoreInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutStoreInput, AttachmentUncheckedUpdateWithoutStoreInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutStoreInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutStoreInput>
  }

  export type AttachmentScalarWhereInput = {
    AND?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    OR?: AttachmentScalarWhereInput[]
    NOT?: AttachmentScalarWhereInput | AttachmentScalarWhereInput[]
    id?: StringFilter<"Attachment"> | string
    storeId?: StringNullableFilter<"Attachment"> | string | null
    noticeId?: StringNullableFilter<"Attachment"> | string | null
    name?: StringFilter<"Attachment"> | string
    type?: IntFilter<"Attachment"> | number
    description?: StringFilter<"Attachment"> | string
    createdBy?: StringFilter<"Attachment"> | string
    createdTime?: BigIntFilter<"Attachment"> | bigint | number
    updatedTime?: BigIntFilter<"Attachment"> | bigint | number
    deletedTime?: BigIntFilter<"Attachment"> | bigint | number
  }

  export type NoticeUpsertWithWhereUniqueWithoutStoreInput = {
    where: NoticeWhereUniqueInput
    update: XOR<NoticeUpdateWithoutStoreInput, NoticeUncheckedUpdateWithoutStoreInput>
    create: XOR<NoticeCreateWithoutStoreInput, NoticeUncheckedCreateWithoutStoreInput>
  }

  export type NoticeUpdateWithWhereUniqueWithoutStoreInput = {
    where: NoticeWhereUniqueInput
    data: XOR<NoticeUpdateWithoutStoreInput, NoticeUncheckedUpdateWithoutStoreInput>
  }

  export type NoticeUpdateManyWithWhereWithoutStoreInput = {
    where: NoticeScalarWhereInput
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyWithoutStoreInput>
  }

  export type NoticeScalarWhereInput = {
    AND?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
    OR?: NoticeScalarWhereInput[]
    NOT?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
    id?: StringFilter<"Notice"> | string
    storeId?: StringFilter<"Notice"> | string
    title?: StringFilter<"Notice"> | string
    content?: StringFilter<"Notice"> | string
    createdBy?: StringFilter<"Notice"> | string
    createdTime?: BigIntFilter<"Notice"> | bigint | number
    updatedTime?: BigIntFilter<"Notice"> | bigint | number
    deletedTime?: BigIntFilter<"Notice"> | bigint | number
  }

  export type CommentUpsertWithWhereUniqueWithoutStoreInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutStoreInput, CommentUncheckedUpdateWithoutStoreInput>
    create: XOR<CommentCreateWithoutStoreInput, CommentUncheckedCreateWithoutStoreInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutStoreInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutStoreInput, CommentUncheckedUpdateWithoutStoreInput>
  }

  export type CommentUpdateManyWithWhereWithoutStoreInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutStoreInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    storeId?: StringFilter<"Comment"> | string
    type?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    createdBy?: StringFilter<"Comment"> | string
    createdTime?: BigIntFilter<"Comment"> | bigint | number
    updatedTime?: BigIntFilter<"Comment"> | bigint | number
    deletedTime?: BigIntFilter<"Comment"> | bigint | number
  }

  export type UserUpsertWithoutStoresInput = {
    update: XOR<UserUpdateWithoutStoresInput, UserUncheckedUpdateWithoutStoresInput>
    create: XOR<UserCreateWithoutStoresInput, UserUncheckedCreateWithoutStoresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStoresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStoresInput, UserUncheckedUpdateWithoutStoresInput>
  }

  export type UserUpdateWithoutStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    openId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: IntFieldUpdateOperationsInput | number
    realName?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    nation?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    qq?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lastLoginTime?: BigIntFieldUpdateOperationsInput | bigint | number
    lastLoginIp?: StringFieldUpdateOperationsInput | string
    loginCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    orders?: UserOrderUpdateManyWithoutUserNestedInput
    cards?: UserCardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStoresInput = {
    id?: StringFieldUpdateOperationsInput | string
    openId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: IntFieldUpdateOperationsInput | number
    realName?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    nation?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    qq?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lastLoginTime?: BigIntFieldUpdateOperationsInput | bigint | number
    lastLoginIp?: StringFieldUpdateOperationsInput | string
    loginCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    orders?: UserOrderUncheckedUpdateManyWithoutUserNestedInput
    cards?: UserCardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SeatCreateWithoutAreaInput = {
    id?: string
    type?: number
    seatNo?: string
    x?: number
    y?: number
    width?: number
    height?: number
    hasPower?: boolean
    status?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    orders?: UserOrderCreateNestedManyWithoutSeatInput
    store: StoreCreateNestedOneWithoutSeatsInput
  }

  export type SeatUncheckedCreateWithoutAreaInput = {
    id?: string
    storeId: string
    type?: number
    seatNo?: string
    x?: number
    y?: number
    width?: number
    height?: number
    hasPower?: boolean
    status?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    orders?: UserOrderUncheckedCreateNestedManyWithoutSeatInput
  }

  export type SeatCreateOrConnectWithoutAreaInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutAreaInput, SeatUncheckedCreateWithoutAreaInput>
  }

  export type SeatCreateManyAreaInputEnvelope = {
    data: SeatCreateManyAreaInput | SeatCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type StoreCreateWithoutAreasInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    seats?: SeatCreateNestedManyWithoutStoreInput
    attachments?: AttachmentCreateNestedManyWithoutStoreInput
    notices?: NoticeCreateNestedManyWithoutStoreInput
    comments?: CommentCreateNestedManyWithoutStoreInput
    user?: UserCreateNestedOneWithoutStoresInput
  }

  export type StoreUncheckedCreateWithoutAreasInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    userId?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    seats?: SeatUncheckedCreateNestedManyWithoutStoreInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutStoreInput
    notices?: NoticeUncheckedCreateNestedManyWithoutStoreInput
    comments?: CommentUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutAreasInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutAreasInput, StoreUncheckedCreateWithoutAreasInput>
  }

  export type SeatUpsertWithWhereUniqueWithoutAreaInput = {
    where: SeatWhereUniqueInput
    update: XOR<SeatUpdateWithoutAreaInput, SeatUncheckedUpdateWithoutAreaInput>
    create: XOR<SeatCreateWithoutAreaInput, SeatUncheckedCreateWithoutAreaInput>
  }

  export type SeatUpdateWithWhereUniqueWithoutAreaInput = {
    where: SeatWhereUniqueInput
    data: XOR<SeatUpdateWithoutAreaInput, SeatUncheckedUpdateWithoutAreaInput>
  }

  export type SeatUpdateManyWithWhereWithoutAreaInput = {
    where: SeatScalarWhereInput
    data: XOR<SeatUpdateManyMutationInput, SeatUncheckedUpdateManyWithoutAreaInput>
  }

  export type StoreUpsertWithoutAreasInput = {
    update: XOR<StoreUpdateWithoutAreasInput, StoreUncheckedUpdateWithoutAreasInput>
    create: XOR<StoreCreateWithoutAreasInput, StoreUncheckedCreateWithoutAreasInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutAreasInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutAreasInput, StoreUncheckedUpdateWithoutAreasInput>
  }

  export type StoreUpdateWithoutAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    seats?: SeatUpdateManyWithoutStoreNestedInput
    attachments?: AttachmentUpdateManyWithoutStoreNestedInput
    notices?: NoticeUpdateManyWithoutStoreNestedInput
    comments?: CommentUpdateManyWithoutStoreNestedInput
    user?: UserUpdateOneRequiredWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateWithoutAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    seats?: SeatUncheckedUpdateManyWithoutStoreNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutStoreNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutStoreNestedInput
    comments?: CommentUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type UserOrderCreateWithoutSeatInput = {
    id?: string
    storeId: string
    areaId: string
    category?: number
    type?: number
    startTime?: bigint | number
    endTime?: bigint | number
    payMethod?: number
    price?: number
    status?: number
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    user: UserCreateNestedOneWithoutOrdersInput
  }

  export type UserOrderUncheckedCreateWithoutSeatInput = {
    id?: string
    storeId: string
    areaId: string
    category?: number
    userId: string
    type?: number
    startTime?: bigint | number
    endTime?: bigint | number
    payMethod?: number
    price?: number
    status?: number
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type UserOrderCreateOrConnectWithoutSeatInput = {
    where: UserOrderWhereUniqueInput
    create: XOR<UserOrderCreateWithoutSeatInput, UserOrderUncheckedCreateWithoutSeatInput>
  }

  export type UserOrderCreateManySeatInputEnvelope = {
    data: UserOrderCreateManySeatInput | UserOrderCreateManySeatInput[]
    skipDuplicates?: boolean
  }

  export type AreaCreateWithoutSeatsInput = {
    id?: string
    name?: string
    seatCount?: number
    sort?: number
    isActive?: boolean
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    store?: StoreCreateNestedOneWithoutAreasInput
  }

  export type AreaUncheckedCreateWithoutSeatsInput = {
    id?: string
    storeId?: string
    name?: string
    seatCount?: number
    sort?: number
    isActive?: boolean
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type AreaCreateOrConnectWithoutSeatsInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutSeatsInput, AreaUncheckedCreateWithoutSeatsInput>
  }

  export type StoreCreateWithoutSeatsInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    areas?: AreaCreateNestedManyWithoutStoreInput
    attachments?: AttachmentCreateNestedManyWithoutStoreInput
    notices?: NoticeCreateNestedManyWithoutStoreInput
    comments?: CommentCreateNestedManyWithoutStoreInput
    user?: UserCreateNestedOneWithoutStoresInput
  }

  export type StoreUncheckedCreateWithoutSeatsInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    userId?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    areas?: AreaUncheckedCreateNestedManyWithoutStoreInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutStoreInput
    notices?: NoticeUncheckedCreateNestedManyWithoutStoreInput
    comments?: CommentUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutSeatsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutSeatsInput, StoreUncheckedCreateWithoutSeatsInput>
  }

  export type UserOrderUpsertWithWhereUniqueWithoutSeatInput = {
    where: UserOrderWhereUniqueInput
    update: XOR<UserOrderUpdateWithoutSeatInput, UserOrderUncheckedUpdateWithoutSeatInput>
    create: XOR<UserOrderCreateWithoutSeatInput, UserOrderUncheckedCreateWithoutSeatInput>
  }

  export type UserOrderUpdateWithWhereUniqueWithoutSeatInput = {
    where: UserOrderWhereUniqueInput
    data: XOR<UserOrderUpdateWithoutSeatInput, UserOrderUncheckedUpdateWithoutSeatInput>
  }

  export type UserOrderUpdateManyWithWhereWithoutSeatInput = {
    where: UserOrderScalarWhereInput
    data: XOR<UserOrderUpdateManyMutationInput, UserOrderUncheckedUpdateManyWithoutSeatInput>
  }

  export type AreaUpsertWithoutSeatsInput = {
    update: XOR<AreaUpdateWithoutSeatsInput, AreaUncheckedUpdateWithoutSeatsInput>
    create: XOR<AreaCreateWithoutSeatsInput, AreaUncheckedCreateWithoutSeatsInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutSeatsInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutSeatsInput, AreaUncheckedUpdateWithoutSeatsInput>
  }

  export type AreaUpdateWithoutSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seatCount?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    store?: StoreUpdateOneRequiredWithoutAreasNestedInput
  }

  export type AreaUncheckedUpdateWithoutSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seatCount?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type StoreUpsertWithoutSeatsInput = {
    update: XOR<StoreUpdateWithoutSeatsInput, StoreUncheckedUpdateWithoutSeatsInput>
    create: XOR<StoreCreateWithoutSeatsInput, StoreUncheckedCreateWithoutSeatsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutSeatsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutSeatsInput, StoreUncheckedUpdateWithoutSeatsInput>
  }

  export type StoreUpdateWithoutSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    areas?: AreaUpdateManyWithoutStoreNestedInput
    attachments?: AttachmentUpdateManyWithoutStoreNestedInput
    notices?: NoticeUpdateManyWithoutStoreNestedInput
    comments?: CommentUpdateManyWithoutStoreNestedInput
    user?: UserUpdateOneRequiredWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateWithoutSeatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    areas?: AreaUncheckedUpdateManyWithoutStoreNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutStoreNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutStoreNestedInput
    comments?: CommentUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type UserCardCreateWithoutCardInput = {
    id?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    user: UserCreateNestedOneWithoutCardsInput
  }

  export type UserCardUncheckedCreateWithoutCardInput = {
    id?: string
    userId: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type UserCardCreateOrConnectWithoutCardInput = {
    where: UserCardWhereUniqueInput
    create: XOR<UserCardCreateWithoutCardInput, UserCardUncheckedCreateWithoutCardInput>
  }

  export type UserCardCreateManyCardInputEnvelope = {
    data: UserCardCreateManyCardInput | UserCardCreateManyCardInput[]
    skipDuplicates?: boolean
  }

  export type UserCardUpsertWithWhereUniqueWithoutCardInput = {
    where: UserCardWhereUniqueInput
    update: XOR<UserCardUpdateWithoutCardInput, UserCardUncheckedUpdateWithoutCardInput>
    create: XOR<UserCardCreateWithoutCardInput, UserCardUncheckedCreateWithoutCardInput>
  }

  export type UserCardUpdateWithWhereUniqueWithoutCardInput = {
    where: UserCardWhereUniqueInput
    data: XOR<UserCardUpdateWithoutCardInput, UserCardUncheckedUpdateWithoutCardInput>
  }

  export type UserCardUpdateManyWithWhereWithoutCardInput = {
    where: UserCardScalarWhereInput
    data: XOR<UserCardUpdateManyMutationInput, UserCardUncheckedUpdateManyWithoutCardInput>
  }

  export type UserCreateWithoutCardsInput = {
    id?: string
    openId: string
    type?: number
    nickName?: string
    avatar?: string
    phone?: string
    password?: string
    balance?: bigint | number
    points?: number
    realName?: string
    cardId?: string
    nation?: string
    sex?: number
    birth?: Date | string
    qq?: string
    email?: string
    province?: string
    city?: string
    district?: string
    code?: string
    address?: string
    description?: string
    lastLoginTime?: bigint | number
    lastLoginIp?: string
    loginCount?: number
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    stores?: StoreCreateNestedManyWithoutUserInput
    orders?: UserOrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCardsInput = {
    id?: string
    openId: string
    type?: number
    nickName?: string
    avatar?: string
    phone?: string
    password?: string
    balance?: bigint | number
    points?: number
    realName?: string
    cardId?: string
    nation?: string
    sex?: number
    birth?: Date | string
    qq?: string
    email?: string
    province?: string
    city?: string
    district?: string
    code?: string
    address?: string
    description?: string
    lastLoginTime?: bigint | number
    lastLoginIp?: string
    loginCount?: number
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    stores?: StoreUncheckedCreateNestedManyWithoutUserInput
    orders?: UserOrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCardsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
  }

  export type CardCreateWithoutUserCardsInput = {
    id?: string
    name?: string
    type?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type CardUncheckedCreateWithoutUserCardsInput = {
    id?: string
    name?: string
    type?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type CardCreateOrConnectWithoutUserCardsInput = {
    where: CardWhereUniqueInput
    create: XOR<CardCreateWithoutUserCardsInput, CardUncheckedCreateWithoutUserCardsInput>
  }

  export type UserUpsertWithoutCardsInput = {
    update: XOR<UserUpdateWithoutCardsInput, UserUncheckedUpdateWithoutCardsInput>
    create: XOR<UserCreateWithoutCardsInput, UserUncheckedCreateWithoutCardsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCardsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCardsInput, UserUncheckedUpdateWithoutCardsInput>
  }

  export type UserUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    openId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: IntFieldUpdateOperationsInput | number
    realName?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    nation?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    qq?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lastLoginTime?: BigIntFieldUpdateOperationsInput | bigint | number
    lastLoginIp?: StringFieldUpdateOperationsInput | string
    loginCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    stores?: StoreUpdateManyWithoutUserNestedInput
    orders?: UserOrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    openId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: IntFieldUpdateOperationsInput | number
    realName?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    nation?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    qq?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lastLoginTime?: BigIntFieldUpdateOperationsInput | bigint | number
    lastLoginIp?: StringFieldUpdateOperationsInput | string
    loginCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    stores?: StoreUncheckedUpdateManyWithoutUserNestedInput
    orders?: UserOrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CardUpsertWithoutUserCardsInput = {
    update: XOR<CardUpdateWithoutUserCardsInput, CardUncheckedUpdateWithoutUserCardsInput>
    create: XOR<CardCreateWithoutUserCardsInput, CardUncheckedCreateWithoutUserCardsInput>
    where?: CardWhereInput
  }

  export type CardUpdateToOneWithWhereWithoutUserCardsInput = {
    where?: CardWhereInput
    data: XOR<CardUpdateWithoutUserCardsInput, CardUncheckedUpdateWithoutUserCardsInput>
  }

  export type CardUpdateWithoutUserCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CardUncheckedUpdateWithoutUserCardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserCreateWithoutOrdersInput = {
    id?: string
    openId: string
    type?: number
    nickName?: string
    avatar?: string
    phone?: string
    password?: string
    balance?: bigint | number
    points?: number
    realName?: string
    cardId?: string
    nation?: string
    sex?: number
    birth?: Date | string
    qq?: string
    email?: string
    province?: string
    city?: string
    district?: string
    code?: string
    address?: string
    description?: string
    lastLoginTime?: bigint | number
    lastLoginIp?: string
    loginCount?: number
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    stores?: StoreCreateNestedManyWithoutUserInput
    cards?: UserCardCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrdersInput = {
    id?: string
    openId: string
    type?: number
    nickName?: string
    avatar?: string
    phone?: string
    password?: string
    balance?: bigint | number
    points?: number
    realName?: string
    cardId?: string
    nation?: string
    sex?: number
    birth?: Date | string
    qq?: string
    email?: string
    province?: string
    city?: string
    district?: string
    code?: string
    address?: string
    description?: string
    lastLoginTime?: bigint | number
    lastLoginIp?: string
    loginCount?: number
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    stores?: StoreUncheckedCreateNestedManyWithoutUserInput
    cards?: UserCardUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
  }

  export type SeatCreateWithoutOrdersInput = {
    id?: string
    type?: number
    seatNo?: string
    x?: number
    y?: number
    width?: number
    height?: number
    hasPower?: boolean
    status?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    area: AreaCreateNestedOneWithoutSeatsInput
    store: StoreCreateNestedOneWithoutSeatsInput
  }

  export type SeatUncheckedCreateWithoutOrdersInput = {
    id?: string
    storeId: string
    areaId: string
    type?: number
    seatNo?: string
    x?: number
    y?: number
    width?: number
    height?: number
    hasPower?: boolean
    status?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type SeatCreateOrConnectWithoutOrdersInput = {
    where: SeatWhereUniqueInput
    create: XOR<SeatCreateWithoutOrdersInput, SeatUncheckedCreateWithoutOrdersInput>
  }

  export type UserUpsertWithoutOrdersInput = {
    update: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
    create: XOR<UserCreateWithoutOrdersInput, UserUncheckedCreateWithoutOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersInput, UserUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    openId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: IntFieldUpdateOperationsInput | number
    realName?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    nation?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    qq?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lastLoginTime?: BigIntFieldUpdateOperationsInput | bigint | number
    lastLoginIp?: StringFieldUpdateOperationsInput | string
    loginCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    stores?: StoreUpdateManyWithoutUserNestedInput
    cards?: UserCardUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    openId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    nickName?: StringFieldUpdateOperationsInput | string
    avatar?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    balance?: BigIntFieldUpdateOperationsInput | bigint | number
    points?: IntFieldUpdateOperationsInput | number
    realName?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    nation?: StringFieldUpdateOperationsInput | string
    sex?: IntFieldUpdateOperationsInput | number
    birth?: DateTimeFieldUpdateOperationsInput | Date | string
    qq?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    district?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    lastLoginTime?: BigIntFieldUpdateOperationsInput | bigint | number
    lastLoginIp?: StringFieldUpdateOperationsInput | string
    loginCount?: IntFieldUpdateOperationsInput | number
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    stores?: StoreUncheckedUpdateManyWithoutUserNestedInput
    cards?: UserCardUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SeatUpsertWithoutOrdersInput = {
    update: XOR<SeatUpdateWithoutOrdersInput, SeatUncheckedUpdateWithoutOrdersInput>
    create: XOR<SeatCreateWithoutOrdersInput, SeatUncheckedCreateWithoutOrdersInput>
    where?: SeatWhereInput
  }

  export type SeatUpdateToOneWithWhereWithoutOrdersInput = {
    where?: SeatWhereInput
    data: XOR<SeatUpdateWithoutOrdersInput, SeatUncheckedUpdateWithoutOrdersInput>
  }

  export type SeatUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    seatNo?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    hasPower?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    area?: AreaUpdateOneRequiredWithoutSeatsNestedInput
    store?: StoreUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    seatNo?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    hasPower?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type StoreCreateWithoutAttachmentsInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    areas?: AreaCreateNestedManyWithoutStoreInput
    seats?: SeatCreateNestedManyWithoutStoreInput
    notices?: NoticeCreateNestedManyWithoutStoreInput
    comments?: CommentCreateNestedManyWithoutStoreInput
    user?: UserCreateNestedOneWithoutStoresInput
  }

  export type StoreUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    userId?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    areas?: AreaUncheckedCreateNestedManyWithoutStoreInput
    seats?: SeatUncheckedCreateNestedManyWithoutStoreInput
    notices?: NoticeUncheckedCreateNestedManyWithoutStoreInput
    comments?: CommentUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutAttachmentsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutAttachmentsInput, StoreUncheckedCreateWithoutAttachmentsInput>
  }

  export type NoticeCreateWithoutAttachmentsInput = {
    id?: string
    title?: string
    content?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    store: StoreCreateNestedOneWithoutNoticesInput
  }

  export type NoticeUncheckedCreateWithoutAttachmentsInput = {
    id?: string
    storeId: string
    title?: string
    content?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type NoticeCreateOrConnectWithoutAttachmentsInput = {
    where: NoticeWhereUniqueInput
    create: XOR<NoticeCreateWithoutAttachmentsInput, NoticeUncheckedCreateWithoutAttachmentsInput>
  }

  export type StoreUpsertWithoutAttachmentsInput = {
    update: XOR<StoreUpdateWithoutAttachmentsInput, StoreUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<StoreCreateWithoutAttachmentsInput, StoreUncheckedCreateWithoutAttachmentsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutAttachmentsInput, StoreUncheckedUpdateWithoutAttachmentsInput>
  }

  export type StoreUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    areas?: AreaUpdateManyWithoutStoreNestedInput
    seats?: SeatUpdateManyWithoutStoreNestedInput
    notices?: NoticeUpdateManyWithoutStoreNestedInput
    comments?: CommentUpdateManyWithoutStoreNestedInput
    user?: UserUpdateOneRequiredWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    areas?: AreaUncheckedUpdateManyWithoutStoreNestedInput
    seats?: SeatUncheckedUpdateManyWithoutStoreNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutStoreNestedInput
    comments?: CommentUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type NoticeUpsertWithoutAttachmentsInput = {
    update: XOR<NoticeUpdateWithoutAttachmentsInput, NoticeUncheckedUpdateWithoutAttachmentsInput>
    create: XOR<NoticeCreateWithoutAttachmentsInput, NoticeUncheckedCreateWithoutAttachmentsInput>
    where?: NoticeWhereInput
  }

  export type NoticeUpdateToOneWithWhereWithoutAttachmentsInput = {
    where?: NoticeWhereInput
    data: XOR<NoticeUpdateWithoutAttachmentsInput, NoticeUncheckedUpdateWithoutAttachmentsInput>
  }

  export type NoticeUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    store?: StoreUpdateOneRequiredWithoutNoticesNestedInput
  }

  export type NoticeUncheckedUpdateWithoutAttachmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type StoreCreateWithoutNoticesInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    areas?: AreaCreateNestedManyWithoutStoreInput
    seats?: SeatCreateNestedManyWithoutStoreInput
    attachments?: AttachmentCreateNestedManyWithoutStoreInput
    comments?: CommentCreateNestedManyWithoutStoreInput
    user?: UserCreateNestedOneWithoutStoresInput
  }

  export type StoreUncheckedCreateWithoutNoticesInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    userId?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    areas?: AreaUncheckedCreateNestedManyWithoutStoreInput
    seats?: SeatUncheckedCreateNestedManyWithoutStoreInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutStoreInput
    comments?: CommentUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutNoticesInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutNoticesInput, StoreUncheckedCreateWithoutNoticesInput>
  }

  export type AttachmentCreateWithoutNoticeInput = {
    id?: string
    name?: string
    type?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    store?: StoreCreateNestedOneWithoutAttachmentsInput
  }

  export type AttachmentUncheckedCreateWithoutNoticeInput = {
    id?: string
    storeId?: string | null
    name?: string
    type?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type AttachmentCreateOrConnectWithoutNoticeInput = {
    where: AttachmentWhereUniqueInput
    create: XOR<AttachmentCreateWithoutNoticeInput, AttachmentUncheckedCreateWithoutNoticeInput>
  }

  export type AttachmentCreateManyNoticeInputEnvelope = {
    data: AttachmentCreateManyNoticeInput | AttachmentCreateManyNoticeInput[]
    skipDuplicates?: boolean
  }

  export type StoreUpsertWithoutNoticesInput = {
    update: XOR<StoreUpdateWithoutNoticesInput, StoreUncheckedUpdateWithoutNoticesInput>
    create: XOR<StoreCreateWithoutNoticesInput, StoreUncheckedCreateWithoutNoticesInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutNoticesInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutNoticesInput, StoreUncheckedUpdateWithoutNoticesInput>
  }

  export type StoreUpdateWithoutNoticesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    areas?: AreaUpdateManyWithoutStoreNestedInput
    seats?: SeatUpdateManyWithoutStoreNestedInput
    attachments?: AttachmentUpdateManyWithoutStoreNestedInput
    comments?: CommentUpdateManyWithoutStoreNestedInput
    user?: UserUpdateOneRequiredWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateWithoutNoticesInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    areas?: AreaUncheckedUpdateManyWithoutStoreNestedInput
    seats?: SeatUncheckedUpdateManyWithoutStoreNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutStoreNestedInput
    comments?: CommentUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type AttachmentUpsertWithWhereUniqueWithoutNoticeInput = {
    where: AttachmentWhereUniqueInput
    update: XOR<AttachmentUpdateWithoutNoticeInput, AttachmentUncheckedUpdateWithoutNoticeInput>
    create: XOR<AttachmentCreateWithoutNoticeInput, AttachmentUncheckedCreateWithoutNoticeInput>
  }

  export type AttachmentUpdateWithWhereUniqueWithoutNoticeInput = {
    where: AttachmentWhereUniqueInput
    data: XOR<AttachmentUpdateWithoutNoticeInput, AttachmentUncheckedUpdateWithoutNoticeInput>
  }

  export type AttachmentUpdateManyWithWhereWithoutNoticeInput = {
    where: AttachmentScalarWhereInput
    data: XOR<AttachmentUpdateManyMutationInput, AttachmentUncheckedUpdateManyWithoutNoticeInput>
  }

  export type StoreCreateWithoutCommentsInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    areas?: AreaCreateNestedManyWithoutStoreInput
    seats?: SeatCreateNestedManyWithoutStoreInput
    attachments?: AttachmentCreateNestedManyWithoutStoreInput
    notices?: NoticeCreateNestedManyWithoutStoreInput
    user?: UserCreateNestedOneWithoutStoresInput
  }

  export type StoreUncheckedCreateWithoutCommentsInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    userId?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
    areas?: AreaUncheckedCreateNestedManyWithoutStoreInput
    seats?: SeatUncheckedCreateNestedManyWithoutStoreInput
    attachments?: AttachmentUncheckedCreateNestedManyWithoutStoreInput
    notices?: NoticeUncheckedCreateNestedManyWithoutStoreInput
  }

  export type StoreCreateOrConnectWithoutCommentsInput = {
    where: StoreWhereUniqueInput
    create: XOR<StoreCreateWithoutCommentsInput, StoreUncheckedCreateWithoutCommentsInput>
  }

  export type StoreUpsertWithoutCommentsInput = {
    update: XOR<StoreUpdateWithoutCommentsInput, StoreUncheckedUpdateWithoutCommentsInput>
    create: XOR<StoreCreateWithoutCommentsInput, StoreUncheckedCreateWithoutCommentsInput>
    where?: StoreWhereInput
  }

  export type StoreUpdateToOneWithWhereWithoutCommentsInput = {
    where?: StoreWhereInput
    data: XOR<StoreUpdateWithoutCommentsInput, StoreUncheckedUpdateWithoutCommentsInput>
  }

  export type StoreUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    areas?: AreaUpdateManyWithoutStoreNestedInput
    seats?: SeatUpdateManyWithoutStoreNestedInput
    attachments?: AttachmentUpdateManyWithoutStoreNestedInput
    notices?: NoticeUpdateManyWithoutStoreNestedInput
    user?: UserUpdateOneRequiredWithoutStoresNestedInput
  }

  export type StoreUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    areas?: AreaUncheckedUpdateManyWithoutStoreNestedInput
    seats?: SeatUncheckedUpdateManyWithoutStoreNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutStoreNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreCreateManyUserInput = {
    id?: string
    type?: number
    name?: string
    provinceCode?: string
    cityCode?: string
    regionCode?: string
    province?: string
    city?: string
    region?: string
    address?: string
    longitude?: number
    latitude?: number
    seatCount?: number
    phone?: string
    is24Hours?: boolean
    openTime?: string
    closeTime?: string
    isActive?: boolean
    features?: string
    promotion?: string
    price?: number
    reviews?: number
    sales?: number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type UserOrderCreateManyUserInput = {
    id?: string
    storeId: string
    areaId: string
    seatId: string
    category?: number
    type?: number
    startTime?: bigint | number
    endTime?: bigint | number
    payMethod?: number
    price?: number
    status?: number
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type UserCardCreateManyUserInput = {
    id?: string
    cardId: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type StoreUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    areas?: AreaUpdateManyWithoutStoreNestedInput
    seats?: SeatUpdateManyWithoutStoreNestedInput
    attachments?: AttachmentUpdateManyWithoutStoreNestedInput
    notices?: NoticeUpdateManyWithoutStoreNestedInput
    comments?: CommentUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    areas?: AreaUncheckedUpdateManyWithoutStoreNestedInput
    seats?: SeatUncheckedUpdateManyWithoutStoreNestedInput
    attachments?: AttachmentUncheckedUpdateManyWithoutStoreNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutStoreNestedInput
    comments?: CommentUncheckedUpdateManyWithoutStoreNestedInput
  }

  export type StoreUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    provinceCode?: StringFieldUpdateOperationsInput | string
    cityCode?: StringFieldUpdateOperationsInput | string
    regionCode?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    longitude?: FloatFieldUpdateOperationsInput | number
    latitude?: FloatFieldUpdateOperationsInput | number
    seatCount?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    is24Hours?: BoolFieldUpdateOperationsInput | boolean
    openTime?: StringFieldUpdateOperationsInput | string
    closeTime?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    features?: StringFieldUpdateOperationsInput | string
    promotion?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    reviews?: IntFieldUpdateOperationsInput | number
    sales?: IntFieldUpdateOperationsInput | number
    coverImages?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserOrderUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    category?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    startTime?: BigIntFieldUpdateOperationsInput | bigint | number
    endTime?: BigIntFieldUpdateOperationsInput | bigint | number
    payMethod?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    seat?: SeatUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type UserOrderUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    category?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    startTime?: BigIntFieldUpdateOperationsInput | bigint | number
    endTime?: BigIntFieldUpdateOperationsInput | bigint | number
    payMethod?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserOrderUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    seatId?: StringFieldUpdateOperationsInput | string
    category?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    startTime?: BigIntFieldUpdateOperationsInput | bigint | number
    endTime?: BigIntFieldUpdateOperationsInput | bigint | number
    payMethod?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserCardUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    card?: CardUpdateOneRequiredWithoutUserCardsNestedInput
  }

  export type UserCardUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserCardUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cardId?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AreaCreateManyStoreInput = {
    id?: string
    name?: string
    seatCount?: number
    sort?: number
    isActive?: boolean
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type SeatCreateManyStoreInput = {
    id?: string
    areaId: string
    type?: number
    seatNo?: string
    x?: number
    y?: number
    width?: number
    height?: number
    hasPower?: boolean
    status?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type AttachmentCreateManyStoreInput = {
    id?: string
    noticeId?: string | null
    name?: string
    type?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type NoticeCreateManyStoreInput = {
    id?: string
    title?: string
    content?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type CommentCreateManyStoreInput = {
    id?: string
    type?: number
    content?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type AreaUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seatCount?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    seats?: SeatUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seatCount?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    seats?: SeatUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    seatCount?: IntFieldUpdateOperationsInput | number
    sort?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SeatUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    seatNo?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    hasPower?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    orders?: UserOrderUpdateManyWithoutSeatNestedInput
    area?: AreaUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    seatNo?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    hasPower?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    orders?: UserOrderUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    seatNo?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    hasPower?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AttachmentUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    notice?: NoticeUpdateOneWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    noticeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AttachmentUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    noticeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type NoticeUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    attachments?: AttachmentUpdateManyWithoutNoticeNestedInput
  }

  export type NoticeUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    attachments?: AttachmentUncheckedUpdateManyWithoutNoticeNestedInput
  }

  export type NoticeUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CommentUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CommentUncheckedUpdateWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CommentUncheckedUpdateManyWithoutStoreInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type SeatCreateManyAreaInput = {
    id?: string
    storeId: string
    type?: number
    seatNo?: string
    x?: number
    y?: number
    width?: number
    height?: number
    hasPower?: boolean
    status?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type SeatUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    seatNo?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    hasPower?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    orders?: UserOrderUpdateManyWithoutSeatNestedInput
    store?: StoreUpdateOneRequiredWithoutSeatsNestedInput
  }

  export type SeatUncheckedUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    seatNo?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    hasPower?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    orders?: UserOrderUncheckedUpdateManyWithoutSeatNestedInput
  }

  export type SeatUncheckedUpdateManyWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    seatNo?: StringFieldUpdateOperationsInput | string
    x?: FloatFieldUpdateOperationsInput | number
    y?: FloatFieldUpdateOperationsInput | number
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    hasPower?: BoolFieldUpdateOperationsInput | boolean
    status?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserOrderCreateManySeatInput = {
    id?: string
    storeId: string
    areaId: string
    category?: number
    userId: string
    type?: number
    startTime?: bigint | number
    endTime?: bigint | number
    payMethod?: number
    price?: number
    status?: number
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type UserOrderUpdateWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    category?: IntFieldUpdateOperationsInput | number
    type?: IntFieldUpdateOperationsInput | number
    startTime?: BigIntFieldUpdateOperationsInput | bigint | number
    endTime?: BigIntFieldUpdateOperationsInput | bigint | number
    payMethod?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type UserOrderUncheckedUpdateWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    category?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    startTime?: BigIntFieldUpdateOperationsInput | bigint | number
    endTime?: BigIntFieldUpdateOperationsInput | bigint | number
    payMethod?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserOrderUncheckedUpdateManyWithoutSeatInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    category?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    startTime?: BigIntFieldUpdateOperationsInput | bigint | number
    endTime?: BigIntFieldUpdateOperationsInput | bigint | number
    payMethod?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserCardCreateManyCardInput = {
    id?: string
    userId: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type UserCardUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneRequiredWithoutCardsNestedInput
  }

  export type UserCardUncheckedUpdateWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserCardUncheckedUpdateManyWithoutCardInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AttachmentCreateManyNoticeInput = {
    id?: string
    storeId?: string | null
    name?: string
    type?: number
    description?: string
    createdBy?: string
    createdTime?: bigint | number
    updatedTime?: bigint | number
    deletedTime?: bigint | number
  }

  export type AttachmentUpdateWithoutNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    store?: StoreUpdateOneWithoutAttachmentsNestedInput
  }

  export type AttachmentUncheckedUpdateWithoutNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type AttachmentUncheckedUpdateManyWithoutNoticeInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    type?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    createdTime?: BigIntFieldUpdateOperationsInput | bigint | number
    updatedTime?: BigIntFieldUpdateOperationsInput | bigint | number
    deletedTime?: BigIntFieldUpdateOperationsInput | bigint | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}