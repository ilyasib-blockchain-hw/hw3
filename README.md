# ITMO Blockchain HW-3, Sibiryakov Ilya M3337

## Configuration

Insert your Alchemy api key into [configuration](config/configuration.json), also you can add new oracles.

## Build

Run

```
npm install
node scripts/app.js 
```

## Console output example

```
Subscribed on events "AnswerUpdated" in contract name = ETH/USD, address = 0x37bC7498f4FF12C19678ee8fE19d713b87F6a9e6
Subscribed on events "AnswerUpdated" in contract name = USDT/ETH, address = 0x7De0d6fce0C128395C488cb4Df667cdbfb35d7DE
Subscribed on events "AnswerUpdated" in contract name = LINK/ETH, address = 0xbba12740DE905707251525477bAD74985DeC46D2
[USDT/ETH] At Wed Nov 02 2022 21:56:23 GMT+0300 (Moscow Standard Time) exchange rate was 0.000639132824583605 in round #8236
[USDT/ETH] At Wed Nov 02 2022 22:03:23 GMT+0300 (Moscow Standard Time) exchange rate was 0.000638728674446382 in round #8237
[ETH/USD] At Wed Nov 02 2022 22:05:35 GMT+0300 (Moscow Standard Time) exchange rate was 1571.22664067 in round #36153
[ETH/USD] At Wed Nov 02 2022 22:09:35 GMT+0300 (Moscow Standard Time) exchange rate was 1581.66 in round #36154
[ETH/USD] At Wed Nov 02 2022 22:15:59 GMT+0300 (Moscow Standard Time) exchange rate was 1570.49 in round #36155
[ETH/USD] At Wed Nov 02 2022 22:20:11 GMT+0300 (Moscow Standard Time) exchange rate was 1561.39434081 in round #36156
[ETH/USD] At Wed Nov 02 2022 22:21:35 GMT+0300 (Moscow Standard Time) exchange rate was 1550.88 in round #36157
[ETH/USD] At Wed Nov 02 2022 22:26:35 GMT+0300 (Moscow Standard Time) exchange rate was 1540.62240459 in round #36158
[USDT/ETH] At Wed Nov 02 2022 22:27:23 GMT+0300 (Moscow Standard Time) exchange rate was 0.00064640428751587 in round #8238
[ETH/USD] At Wed Nov 02 2022 22:28:35 GMT+0300 (Moscow Standard Time) exchange rate was 1528.83818744 in round #36159
[ETH/USD] At Wed Nov 02 2022 22:29:59 GMT+0300 (Moscow Standard Time) exchange rate was 1538.00975315 in round #36160
[ETH/USD] At Wed Nov 02 2022 22:33:35 GMT+0300 (Moscow Standard Time) exchange rate was 1530.04937617 in round #36161
[ETH/USD] At Wed Nov 02 2022 22:36:59 GMT+0300 (Moscow Standard Time) exchange rate was 1538.45855036 in round #36162
[ETH/USD] At Wed Nov 02 2022 22:55:35 GMT+0300 (Moscow Standard Time) exchange rate was 1535.80504691 in round #36163
[ETH/USD] At Wed Nov 02 2022 23:10:59 GMT+0300 (Moscow Standard Time) exchange rate was 1526.1 in round #36164
[USDT/ETH] At Wed Nov 02 2022 23:11:47 GMT+0300 (Moscow Standard Time) exchange rate was 0.00065332973 in round #8239
[ETH/USD] At Wed Nov 02 2022 23:14:11 GMT+0300 (Moscow Standard Time) exchange rate was 1516.51197163 in round #36165
[LINK/ETH] At Wed Nov 02 2022 23:23:23 GMT+0300 (Moscow Standard Time) exchange rate was 0.004898616614321285 in round #5819
[ETH/USD] At Wed Nov 02 2022 23:24:11 GMT+0300 (Moscow Standard Time) exchange rate was 1506.75642292 in round #36166
```