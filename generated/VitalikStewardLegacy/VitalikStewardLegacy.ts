// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  EthereumCall,
  EthereumEvent,
  SmartContract,
  EthereumValue,
  JSONValue,
  TypedMap,
  Entity,
  EthereumTuple,
  Bytes,
  Address,
  BigInt,
  CallResult
} from "@graphprotocol/graph-ts";

export class LogBuy extends EthereumEvent {
  get params(): LogBuy__Params {
    return new LogBuy__Params(this);
  }
}

export class LogBuy__Params {
  _event: LogBuy;

  constructor(event: LogBuy) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class LogPriceChange extends EthereumEvent {
  get params(): LogPriceChange__Params {
    return new LogPriceChange__Params(this);
  }
}

export class LogPriceChange__Params {
  _event: LogPriceChange;

  constructor(event: LogPriceChange) {
    this._event = event;
  }

  get newPrice(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class LogForeclosure extends EthereumEvent {
  get params(): LogForeclosure__Params {
    return new LogForeclosure__Params(this);
  }
}

export class LogForeclosure__Params {
  _event: LogForeclosure;

  constructor(event: LogForeclosure) {
    this._event = event;
  }

  get prevOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class LogCollection extends EthereumEvent {
  get params(): LogCollection__Params {
    return new LogCollection__Params(this);
  }
}

export class LogCollection__Params {
  _event: LogCollection;

  constructor(event: LogCollection) {
    this._event = event;
  }

  get collected(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class VitalikStewardLegacy__patronageOwedWithTimestampResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, EthereumValue> {
    let map = new TypedMap<string, EthereumValue>();
    map.set("value0", EthereumValue.fromUnsignedBigInt(this.value0));
    map.set("value1", EthereumValue.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class VitalikStewardLegacy extends SmartContract {
  static bind(address: Address): VitalikStewardLegacy {
    return new VitalikStewardLegacy("VitalikStewardLegacy", address);
  }

  assetToken(): Address {
    let result = super.call("assetToken", []);

    return result[0].toAddress();
  }

  try_assetToken(): CallResult<Address> {
    let result = super.tryCall("assetToken", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  organization(): Address {
    let result = super.call("organization", []);

    return result[0].toAddress();
  }

  try_organization(): CallResult<Address> {
    let result = super.tryCall("organization", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toAddress());
  }

  patrons(param0: Address): boolean {
    let result = super.call("patrons", [EthereumValue.fromAddress(param0)]);

    return result[0].toBoolean();
  }

  try_patrons(param0: Address): CallResult<boolean> {
    let result = super.tryCall("patrons", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  timeAcquired(): BigInt {
    let result = super.call("timeAcquired", []);

    return result[0].toBigInt();
  }

  try_timeAcquired(): CallResult<BigInt> {
    let result = super.tryCall("timeAcquired", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  timeHeld(param0: Address): BigInt {
    let result = super.call("timeHeld", [EthereumValue.fromAddress(param0)]);

    return result[0].toBigInt();
  }

  try_timeHeld(param0: Address): CallResult<BigInt> {
    let result = super.tryCall("timeHeld", [EthereumValue.fromAddress(param0)]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  price(): BigInt {
    let result = super.call("price", []);

    return result[0].toBigInt();
  }

  try_price(): CallResult<BigInt> {
    let result = super.tryCall("price", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  currentCollected(): BigInt {
    let result = super.call("currentCollected", []);

    return result[0].toBigInt();
  }

  try_currentCollected(): CallResult<BigInt> {
    let result = super.tryCall("currentCollected", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  organizationFund(): BigInt {
    let result = super.call("organizationFund", []);

    return result[0].toBigInt();
  }

  try_organizationFund(): CallResult<BigInt> {
    let result = super.tryCall("organizationFund", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  state(): i32 {
    let result = super.call("state", []);

    return result[0].toI32();
  }

  try_state(): CallResult<i32> {
    let result = super.tryCall("state", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toI32());
  }

  deposit(): BigInt {
    let result = super.call("deposit", []);

    return result[0].toBigInt();
  }

  try_deposit(): CallResult<BigInt> {
    let result = super.tryCall("deposit", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  totalCollected(): BigInt {
    let result = super.call("totalCollected", []);

    return result[0].toBigInt();
  }

  try_totalCollected(): CallResult<BigInt> {
    let result = super.tryCall("totalCollected", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  timeLastCollected(): BigInt {
    let result = super.call("timeLastCollected", []);

    return result[0].toBigInt();
  }

  try_timeLastCollected(): CallResult<BigInt> {
    let result = super.tryCall("timeLastCollected", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  patronageOwed(): BigInt {
    let result = super.call("patronageOwed", []);

    return result[0].toBigInt();
  }

  try_patronageOwed(): CallResult<BigInt> {
    let result = super.tryCall("patronageOwed", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  patronageOwedWithTimestamp(): VitalikStewardLegacy__patronageOwedWithTimestampResult {
    let result = super.call("patronageOwedWithTimestamp", []);

    return new VitalikStewardLegacy__patronageOwedWithTimestampResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_patronageOwedWithTimestamp(): CallResult<
    VitalikStewardLegacy__patronageOwedWithTimestampResult
  > {
    let result = super.tryCall("patronageOwedWithTimestamp", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(
      new VitalikStewardLegacy__patronageOwedWithTimestampResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  foreclosed(): boolean {
    let result = super.call("foreclosed", []);

    return result[0].toBoolean();
  }

  try_foreclosed(): CallResult<boolean> {
    let result = super.tryCall("foreclosed", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBoolean());
  }

  depositAbleToWithdraw(): BigInt {
    let result = super.call("depositAbleToWithdraw", []);

    return result[0].toBigInt();
  }

  try_depositAbleToWithdraw(): CallResult<BigInt> {
    let result = super.tryCall("depositAbleToWithdraw", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  foreclosureTime(): BigInt {
    let result = super.call("foreclosureTime", []);

    return result[0].toBigInt();
  }

  try_foreclosureTime(): CallResult<BigInt> {
    let result = super.tryCall("foreclosureTime", []);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }

  withdrawDeposit(_wei: BigInt): BigInt {
    let result = super.call("withdrawDeposit", [
      EthereumValue.fromUnsignedBigInt(_wei)
    ]);

    return result[0].toBigInt();
  }

  try_withdrawDeposit(_wei: BigInt): CallResult<BigInt> {
    let result = super.tryCall("withdrawDeposit", [
      EthereumValue.fromUnsignedBigInt(_wei)
    ]);
    if (result.reverted) {
      return new CallResult();
    }
    let value = result.value;
    return CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends EthereumCall {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _organization(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _assetToken(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ChangeReceivingOrganizationCall extends EthereumCall {
  get inputs(): ChangeReceivingOrganizationCall__Inputs {
    return new ChangeReceivingOrganizationCall__Inputs(this);
  }

  get outputs(): ChangeReceivingOrganizationCall__Outputs {
    return new ChangeReceivingOrganizationCall__Outputs(this);
  }
}

export class ChangeReceivingOrganizationCall__Inputs {
  _call: ChangeReceivingOrganizationCall;

  constructor(call: ChangeReceivingOrganizationCall) {
    this._call = call;
  }

  get _newReceivingOrganization(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeReceivingOrganizationCall__Outputs {
  _call: ChangeReceivingOrganizationCall;

  constructor(call: ChangeReceivingOrganizationCall) {
    this._call = call;
  }
}

export class _collectPatronageCall extends EthereumCall {
  get inputs(): _collectPatronageCall__Inputs {
    return new _collectPatronageCall__Inputs(this);
  }

  get outputs(): _collectPatronageCall__Outputs {
    return new _collectPatronageCall__Outputs(this);
  }
}

export class _collectPatronageCall__Inputs {
  _call: _collectPatronageCall;

  constructor(call: _collectPatronageCall) {
    this._call = call;
  }
}

export class _collectPatronageCall__Outputs {
  _call: _collectPatronageCall;

  constructor(call: _collectPatronageCall) {
    this._call = call;
  }
}

export class DepositWeiCall extends EthereumCall {
  get inputs(): DepositWeiCall__Inputs {
    return new DepositWeiCall__Inputs(this);
  }

  get outputs(): DepositWeiCall__Outputs {
    return new DepositWeiCall__Outputs(this);
  }
}

export class DepositWeiCall__Inputs {
  _call: DepositWeiCall;

  constructor(call: DepositWeiCall) {
    this._call = call;
  }
}

export class DepositWeiCall__Outputs {
  _call: DepositWeiCall;

  constructor(call: DepositWeiCall) {
    this._call = call;
  }
}

export class BuyCall extends EthereumCall {
  get inputs(): BuyCall__Inputs {
    return new BuyCall__Inputs(this);
  }

  get outputs(): BuyCall__Outputs {
    return new BuyCall__Outputs(this);
  }
}

export class BuyCall__Inputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }

  get _newPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyCall__Outputs {
  _call: BuyCall;

  constructor(call: BuyCall) {
    this._call = call;
  }
}

export class ChangePriceCall extends EthereumCall {
  get inputs(): ChangePriceCall__Inputs {
    return new ChangePriceCall__Inputs(this);
  }

  get outputs(): ChangePriceCall__Outputs {
    return new ChangePriceCall__Outputs(this);
  }
}

export class ChangePriceCall__Inputs {
  _call: ChangePriceCall;

  constructor(call: ChangePriceCall) {
    this._call = call;
  }

  get _newPrice(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangePriceCall__Outputs {
  _call: ChangePriceCall;

  constructor(call: ChangePriceCall) {
    this._call = call;
  }
}

export class WithdrawDepositCall extends EthereumCall {
  get inputs(): WithdrawDepositCall__Inputs {
    return new WithdrawDepositCall__Inputs(this);
  }

  get outputs(): WithdrawDepositCall__Outputs {
    return new WithdrawDepositCall__Outputs(this);
  }
}

export class WithdrawDepositCall__Inputs {
  _call: WithdrawDepositCall;

  constructor(call: WithdrawDepositCall) {
    this._call = call;
  }

  get _wei(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawDepositCall__Outputs {
  _call: WithdrawDepositCall;

  constructor(call: WithdrawDepositCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class WithdrawOrganizationFundsCall extends EthereumCall {
  get inputs(): WithdrawOrganizationFundsCall__Inputs {
    return new WithdrawOrganizationFundsCall__Inputs(this);
  }

  get outputs(): WithdrawOrganizationFundsCall__Outputs {
    return new WithdrawOrganizationFundsCall__Outputs(this);
  }
}

export class WithdrawOrganizationFundsCall__Inputs {
  _call: WithdrawOrganizationFundsCall;

  constructor(call: WithdrawOrganizationFundsCall) {
    this._call = call;
  }
}

export class WithdrawOrganizationFundsCall__Outputs {
  _call: WithdrawOrganizationFundsCall;

  constructor(call: WithdrawOrganizationFundsCall) {
    this._call = call;
  }
}

export class ExitCall extends EthereumCall {
  get inputs(): ExitCall__Inputs {
    return new ExitCall__Inputs(this);
  }

  get outputs(): ExitCall__Outputs {
    return new ExitCall__Outputs(this);
  }
}

export class ExitCall__Inputs {
  _call: ExitCall;

  constructor(call: ExitCall) {
    this._call = call;
  }
}

export class ExitCall__Outputs {
  _call: ExitCall;

  constructor(call: ExitCall) {
    this._call = call;
  }
}