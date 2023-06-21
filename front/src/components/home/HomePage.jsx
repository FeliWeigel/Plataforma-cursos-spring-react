import React from 'react'
import "../../../index.css"
import "./HomePage.css"
import { Icon } from "react-icons-kit"
import { powerOff } from 'react-icons-kit/fa/powerOff'
import { Box, Button } from '@mui/material'
import { filesEmpty } from 'react-icons-kit/icomoon/filesEmpty'
import { Link } from 'react-router-dom'
import { calculateTotal } from '../../utils/calculateTotal'

const HomePage = () => {

  return (
    <section className='home-page'>
        
        <section className='home-content'>
          <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="400" height="400" viewBox="0 0 786.81995 572.25773" xmlns:xlink="http://www.w3.org/1999/xlink"><circle cx="458.32136" cy="74.18162" r="26.70075" fill="transparent"/><path d="M872.03753,661.02307c39.6877-30.22889,58.64352-81.02546,46.77635-129.48234q-.44231-1.806-.93367-3.6038c-7.86742-28.76343-27.33167-56.10058-55.7-65.29129-23.81971-7.71694-49.81962-1.78274-74.66936-4.85149-48.78136-6.02417-86.60057-45.494-113.21115-86.81933-26.61064-41.32546-47.06182-87.58331-82.42157-121.72413-58.28479-56.27536-153.36192-68.39149-225.62671-31.76044C293.98673,254.12142,247.95487,335.39062,249.918,416.38554c1.96322,80.995,50.04632,158.43176,119.87492,199.517,25.65222,15.093,55.32138,25.78522,84.84826,22.04377,25.62011-3.24641,48.89908-17.01264,74.39861-21.09959,40.09115-6.42568,79.92687,11.70084,114.60268,32.82375,34.67571,21.12288,68.17007,46.15988,107.57436,55.95242C789.47831,715.13139,836.88051,687.80109,872.03753,661.02307Z" transform="translate(-206.59003 -163.87113)" fill="transparent"/><path d="M815.016,219.19108c-.87006-.58-1.75-1.13-2.62006-1.69a380.24008,380.24008,0,0,0-80.31-38.93l-6.54,90.22h-41.46v-103.39c-2.61-.54-5.24-1.05-7.87-1.53v104.92H626.94587A102.26992,102.26992,0,0,1,524.67595,166.5212v-.0001c-2.64.57-5.26,1.18-7.88,1.83v100.44h-40.13l-6.23-86.03a380.8581,380.8581,0,0,0-81.94,43.53c-.44.3-.88.61-1.31.91-2.21,1.55-4.39,3.13-6.56,4.73v344.19h118.27l-2.09-28.95-11.5-158.95h231.59l-11.5,158.95-2.09,28.95h116.96v-353.45Q817.65591,220.90114,815.016,219.19108Zm-298.22,142.78h-33.39l-6.17-85.3h39.56Zm159.42,0h-56.08v-1.69a6.17975,6.17975,0,0,0-6.19-6.18h-24.38a6.17757,6.17757,0,0,0-6.18,6.18v1.69h-58.71v-85.3h151.54Zm7.87,0v-85.3h40.89l-6.17,85.3Z" transform="translate(-206.59003 -163.87113)" fill="rgb(0, 0, 41)"/><path d="M206.59,598.16193a289.0029,289.0029,0,0,0,28.12,28.95l730.58,1a289.0029,289.0029,0,0,0,28.12-28.95Z" transform="translate(-206.59003 -163.87113)" fill="#3f3d56"/><path d="M702.01993,505.46245v85.704a4.12233,4.12233,0,0,0,4.11906,4.11907H833.14348a4.12232,4.12232,0,0,0,4.11907-4.11907v-85.704a4.12433,4.12433,0,0,0-4.11907-4.11452H706.139A4.12434,4.12434,0,0,0,702.01993,505.46245Z" transform="translate(-206.59003 -163.87113)" fill="#3f3d56"/><path d="M704.99939,506.52881V590.1092a2.20523,2.20523,0,0,0,2.20141,2.20141H832.08626a2.20522,2.20522,0,0,0,2.20141-2.20141V506.52881a2.20621,2.20621,0,0,0-2.20141-2.206H707.2008A2.20623,2.20623,0,0,0,704.99939,506.52881Z" transform="translate(-206.59003 -163.87113)" fill="rgb(2, 2, 109)"/><path d="M699.36376,607.881a2.46985,2.46985,0,0,0,1.94346.92984H837.29917a2.5024,2.5024,0,0,0,2.44606-3.0157l-2.111-10.02722a2.50694,2.50694,0,0,0-1.55811-1.81784,2.42467,2.42467,0,0,0-.888-.1675H703.40985a2.42446,2.42446,0,0,0-.888.1675,2.50671,2.50671,0,0,0-1.55811,1.81784l-2.111,10.02722A2.5005,2.5005,0,0,0,699.36376,607.881Z" transform="translate(-206.59003 -163.87113)" fill="#2f2e41"/><rect x="830.03379" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1457.66604 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="821.65681" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1440.91208 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="813.27982" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1424.15811 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="804.90284" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1407.40415 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="796.52586" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1390.65018 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="788.14888" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1373.89622 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="779.7719" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1357.14226 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="771.39491" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1340.38829 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="763.01793" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1323.63433 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="754.64095" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1306.88037 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="746.26397" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1290.1264 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="737.88699" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1273.37244 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="729.51001" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1256.61847 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="721.13302" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1239.86451 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="712.75604" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1223.11055 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="704.37906" y="595.58843" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1206.35658 1029.81882) rotate(-180)" fill="#3f3d56"/><rect x="830.13277" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1457.86401 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="821.75579" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1441.11005 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="813.37881" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1424.35608 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="805.00183" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1407.60212 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="796.62485" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1390.84816 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="788.24786" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1374.09419 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="779.87088" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1357.34023 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="771.4939" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1340.58627 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="763.11692" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1323.8323 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="754.73994" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1307.07834 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="746.36295" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1290.32437 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="737.98597" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1273.57041 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="729.60899" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1256.81645 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="721.23201" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1240.06248 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="712.85503" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1223.30852 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="704.47805" y="599.77692" width="4.18849" height="2.51309" rx="0.48819" transform="translate(1206.55456 1038.1958) rotate(-180)" fill="#3f3d56"/><rect x="760.60382" y="604.80311" width="33.50793" height="2.51309" rx="0.48819" transform="translate(1348.12555 1048.24818) rotate(-180)" fill="#3f3d56"/><rect x="515.63106" y="358.73707" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="548.15407" y="358.73707" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="557.36892" y="358.73707" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="524.47742" y="358.4768" width="20.79613" height="3.12216" rx="1.56108" fill="#fff"/><rect x="567.84144" y="358.4768" width="20.79613" height="3.12216" rx="1.56108" fill="#fff"/><rect x="524.30386" y="365.78373" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="556.82687" y="365.78373" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="566.04172" y="365.78373" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="533.15023" y="365.52345" width="20.79613" height="3.12216" rx="1.56108" fill="#fff"/><rect x="576.51424" y="365.52345" width="20.79613" height="3.12216" rx="1.56108" fill="#fff"/><rect x="532.97666" y="372.83038" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="565.49967" y="372.83038" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="574.71453" y="372.83038" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="541.82303" y="372.57011" width="20.79613" height="3.12216" rx="1.56108" fill="#fff"/><rect x="585.18704" y="372.57011" width="20.79613" height="3.12216" rx="1.56108" fill="#fff"/><rect x="541.64947" y="379.87703" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="574.17248" y="379.87703" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="583.38733" y="379.87703" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="550.49583" y="379.61676" width="20.79613" height="3.12216" rx="1.56108" fill="#fff"/><rect x="548.15407" y="407.89751" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="557.36892" y="407.89751" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="567.84144" y="408.15779" width="20.79613" height="3.12216" rx="1.56108" fill="#fff"/><rect x="515.63106" y="407.89751" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="524.47742" y="408.15779" width="20.79613" height="3.12216" rx="1.56108" fill="#fff"/><rect x="524.30386" y="400.85086" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="556.82687" y="400.85086" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="566.04172" y="400.85086" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="533.15023" y="401.11113" width="20.79613" height="3.12216" rx="1.56108" fill="#fff"/><rect x="532.97666" y="393.80421" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="565.49967" y="393.80421" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="574.71453" y="393.80421" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="541.82303" y="394.06448" width="20.79613" height="3.12216" rx="1.56108" fill="#fff"/><rect x="541.64947" y="386.75755" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="574.17248" y="386.75755" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="583.38733" y="386.75755" width="5.96585" height="3.12216" rx="1.56108" fill="#fff"/><rect x="550.49583" y="387.01783" width="20.79613"
          height="3.12216" rx="1.56108" fill="#fff"/><path d="M711.50727,654.35273l-13.34954-21.10162,41.902-33.40283,17.29534-19.16107a19.16138,19.16138,0,0,1,32.418,6.8279h0a19.16136,19.16136,0,0,1-11.57015,23.991l-27.3488,10.07535Z" transform="translate(-206.59003 -163.87113)" fill="#ffb6b6"/><path d="M398.28,501.35193v102.56h71.85v-102.56a3.448,3.448,0,0,0-2.43-3.3,3.1749,3.1749,0,0,0-1.03-.16H401.75A3.46328,3.46328,0,0,0,398.28,501.35193Zm28.04,35.24a7.67033,7.67033,0,0,1,15.34,0v11.9a7.6701,7.6701,0,0,1-15.34,0Z" transform="translate(-206.59003 -163.87113)" fill="#2f2e41"/><path d="M398.06006,600.632v9.89a1.94622,1.94622,0,0,0,1.93,1.94h68.43a1.93972,1.93972,0,0,0,1.93-1.94v-9.89Z" transform="translate(-206.59003 -163.87113)" fill="#3f3d56"/><path d="M285.25,346.832V534.09192a9.00714,9.00714,0,0,0,9,9h277.5a9.0071,9.0071,0,0,0,9-9V346.832a9.01147,9.01147,0,0,0-9-8.99H294.25A9.01151,9.01151,0,0,0,285.25,346.832Z" transform="translate(-206.59003 -163.87113)" fill="#3f3d56"/><path d="M291.76,349.16193v182.62a4.81833,4.81833,0,0,0,4.81,4.81H569.44a4.81829,4.81829,0,0,0,4.81-4.81v-182.62a4.82047,4.82047,0,0,0-4.81-4.82H296.57A4.82051,4.82051,0,0,0,291.76,349.16193Z" transform="translate(-206.59003 -163.87113)" fill="#fff"/><path d="M342.4,611.79193a2.9484,2.9484,0,0,0,2.32,1.11h162.34a2.98725,2.98725,0,0,0,2.92-3.6l-2.52-11.97a2.99264,2.99264,0,0,0-1.86-2.17,2.89454,2.89454,0,0,0-1.06-.19995H347.23a2.8943,2.8943,0,0,0-1.06.19995,2.99239,2.99239,0,0,0-1.86,2.17l-2.52,11.97A2.985,2.985,0,0,0,342.4,611.79193Z" transform="translate(-206.59003 -163.87113)" fill="#2f2e41"/><path d="M560.58451,369.49866H305.26115a1.0156,1.0156,0,0,1,0-2.0307H560.58451a1.0156,1.0156,0,0,1,0,2.0307Z" transform="translate(-206.59003 -163.87113)" fill="#3f3d56"/><ellipse cx="116.05131" cy="192.32963" rx="5.95043" ry="6.08304" fill="#3f3d56"/><ellipse cx="136.60733" cy="192.32963" rx="5.95043" ry="6.08304" fill="#3f3d56"/><ellipse cx="157.16336" cy="192.32963" rx="5.95043" ry="6.08304" fill="#3f3d56"/><path d="M548.20637,351.622h-14.6a1.1053,1.1053,0,0,0,0,2.21h14.6a1.10511,1.10511,0,0,0,0-2.21Z" transform="translate(-206.59003 -163.87113)" fill="#3f3d56"/><path d="M548.20637,355.772h-14.6a1.10527,1.10527,0,0,0,0,2.21h14.6a1.10508,1.10508,0,0,0,0-2.21Z" transform="translate(-206.59003 -163.87113)" fill="#3f3d56"/><path d="M548.20637,359.92194h-14.6a1.1053,1.1053,0,0,0,0,2.21h14.6a1.10511,1.10511,0,0,0,0-2.21Z" transform="translate(-206.59003 -163.87113)" fill="#3f3d56"/><path d="M900.18575,604.97238a6.41621,6.41621,0,0,0,6.1831,4.331l26.49183-.68178a6.3285,6.3285,0,0,0,5.98085-4.657l3.74888-40.08721a9.79409,9.79409,0,0,0,4.23793.87079,9.66133,9.66133,0,1,0-.4849-19.31658,8.18393,8.18393,0,0,0-1.73618.18056,6.54764,6.54764,0,0,0-4.87405-2.103l-40.75051,1.05229a5.85294,5.85294,0,0,0-1.00519.1248,6.36455,6.36455,0,0,0-4.87318,8.26464Zm43.17345-43.81684,2.66764-9.55274a6.50649,6.50649,0,0,0,.02036-3.37458c.12944-.00034.24363-.06169.37307-.062a6.91049,6.91049,0,0,1,.32357,13.81714A6.50527,6.50527,0,0,1,943.3592,561.15554Z" transform="translate(-206.59003 -163.87113)" fill="#2f2e41"/><path d="M897.97751,544.68623c.86818,4.96412,10.62909,8.45387,22.36585,7.84729,10.79271-.49726,19.61745-4.287,21.23421-8.7785a6.02511,6.02511,0,0,0-1.84436-.24588l-40.75051,1.05229A5.85294,5.85294,0,0,0,897.97751,544.68623Z" transform="translate(-206.59003 -163.87113)" fill="#3f3d56"/><path d="M922.49438,582.94415a.49659.49659,0,0,0,.15091-.06642l5.75315-3.76566a.49923.49923,0,0,0,.00032-.83621l-5.97978-3.91667a.49972.49972,0,1,0-.54792.83585l5.34091,3.49818-5.114,3.34794a.49991.49991,0,0,0,.39637.903Z" transform="translate(-206.59003 -163.87113)" fill="#fff"/><path d="M913.40762,583.36319a.5.5,0,0,0,.12608-.91842l-5.30306-3.04034,5.1256-3.80723a.49963.49963,0,1,0-.596-.80208l-5.73862,4.26265a.49951.49951,0,0,0,.04918.83476l5.96525,3.41968A.4997.4997,0,0,0,913.40762,583.36319Z" transform="translate(-206.59003 -163.87113)" fill="#fff"/><path d="M921.92215,586.24416a.48233.48233,0,0,0,.137-.05785.49976.49976,0,0,0,.16752-.68714l-8.15548-13.40836a.50026.50026,0,0,0-.85442.52058l8.15548,13.40835A.50035.50035,0,0,0,921.92215,586.24416Z" transform="translate(-206.59003 -163.87113)" fill="#fff"/><rect x="209.38454" y="260.82713" width="50.71916" height="10.8457" rx="3.26417" fill="#1f1a90"/><rect x="183.62601" y="282.51852" width="102.23622" height="10.8457" rx="3.26417" fill="#e6e6e6"/><rect x="183.62601" y="304.20991" width="102.23622" height="10.8457" rx="3.26417" fill="#e6e6e6"/><path d="M497.30123,540.717l.21675.68444.01142.02283,6.52515,19.838,7.50627,22.86094,14.1227,42.96133.13688,6.67346v.02283l1.04949,53.6845-2.90894,7.2781,3.274,11.93237s-1.50582-18.037-9.5824-7.67884c-4.57448,5.8864-9.92468,11.90961-14.31668,17.55642q9.59964,3.88436,19.50716,7.0271c1.426.45633,2.86334.88983,4.30071,1.32333q.46194.13692.924.27377a266.86342,266.86342,0,0,0,67.35086,10.82587c1.18637.03425,2.35.057,3.47932.07986.39932.01142.78714.02284,1.175.02284,1.27765.01142,2.54389.02277,3.82154.02277q3.86721,0,7.70018-.11405a266.85337,266.85337,0,0,0,56.09149-7.58613c-.12547-7.58606-.46768-16.44984-.9582-25.91819-.22817-4.64293-5.3502-9.67369-5.65823-14.53336-.21675-3.65047,4.38057-7.08419,4.141-10.79169-1.55143-22.82675-3.49075-14.06417-4.92813-30.22882q-.22245-2.37852-.41066-4.55165c-.924-10.381-1.56284-16.872-1.56284-16.872l6.13733-38.68338,9.6395-60.73442-.74153-1.22063-.83274-.41066-50.844-25.16532-2.76064-7.07276a10.97881,10.97881,0,0,0-10.14143-6.94731l-33.4929-.13688a10.93117,10.93117,0,0,0-8.90946,4.52888l-9.069,12.55978Z" transform="translate(-206.59003 -163.87113)" fill="#3f3d56"/><path d="M533.40653,617.52479,525.8204,633.758l-5.179,11.08822-8.90939,46.646-4.46044,4.73414L503.45,679.467l-39.99772,8.88094c-1.31191-7.28951-.3512.24662-1.16117-7.75009.22817-.22817.46768-.45634.70727-.68451.63882-.59322,1.175-1.15218,1.1636-1.68831-.45633-27.58374.9126-74.52633,12.34311-102.96564a60.05328,60.05328,0,0,1,7.02709-13.1074c.22817-.308.44492-.61606.66167-.924,5.27034-7.3808,8.60136-14.64748,13.32415-19.81511v-.01142a.53028.53028,0,0,0,.07986-.07987.157.157,0,0,0,.04561-.03425l32.44341-17.20272,1.39177,39.10546.99247,28.10851Z" transform="translate(-206.59003 -163.87113)" fill="rgb(0, 0, 98)"/><path d="M650.3914,622.13549l9.476,20.275,3.30742,7.06091,8.90681,46.64162,4.44575,4.72264,3.83039-16.75524,1.7998-.36918,32.4585-6.72243,9.46058,30.04631a17.984,17.984,0,0,0-3.26122-22.50556c-.64606-.58457-1.18444-1.15373-1.16913-1.69211.53847-32.4431-1.446-91.68363-19.36733-116.06588-5.69179-7.73777-9.1068-15.44474-14.07562-20.82885-.0154-.0153-.0154-.0307-.03071-.0307L674.0814,526.1139l-.73836-1.21533-.83066-.41528Z" transform="translate(-206.59003 -163.87113)" fill="rgb(0, 0, 98)"/><circle id="a657ec4b-47ce-4d2a-9c58-81a811696ca9" data-name="Ellipse 5" cx="386.3965" cy="267.20052" r="44.55826" fill="#ffb6b6"/><path d="M653.21227,399.94791a3.75933,3.75933,0,0,0-2.69-1.19l.67-1.86a3.52769,3.52769,0,0,0-3.96-4.7l-2.44.47.23-1.63a3.53387,3.53387,0,0,0-4.73-3.82,3.76631,3.76631,0,0,1-3.24-.23,3.84647,3.84647,0,0,1-1.92-2.61005l-.85-4.1-.09-.22c-4.14-6.9-12.1-11.92-21.84-13.76-8.67005-1.65-17.56-.81-26.13-.02-3.4.32-7.24.68-10.44,2.64-2.72,1.68-5.02,5.04-4.55,8.43-8.45-2.59-17.51,2.58-22,9.1-5.32,7.76-6.19,17.48-6.33,25.08-.38,17.98,3.33,32.69,11,43.73.56.8.7,2.47,1.81,3.03l-.23-.37c1.24.62,2.5,1.62,2.03,2.69-1.35,3.08,7.62,9.89,13.94,12.14,11.53,4.11,26.86,3.76,37.64,2.28l.38-2.55c3.89-.53,6.63-1.54,7.4-3.12,1.36005-1.16,2.52-2.2,3.53-3.16l.01-.01c.02-.02.06-.05.08-.07,4.87-4.67,6-7.32995,6.51-11.37994.49-3.97-.38-8-1.27-11.63,18.74,2.9-7.38-19.96,10.08-24.38a5.434,5.434,0,0,1,.61-.15c.51-.12,1.02-.24,1.51-.38a26.44846,26.44846,0,0,0,6.72-2.87c4.88-2.97,6.49-6.91,9.01-11.35A3.42652,3.42652,0,0,0,653.21227,399.94791Z" transform="translate(-206.59003 -163.87113)" fill="#2f2e41"/><path d="M750.58227,625.3079c-.01,1.75-.03,4.2-.11,7.23q-.015.63-.03,1.29c-.13,5.57-.26,10.24-.47,15.43-.01.36-.02.71-.04,1.07-.28,7.24-.72,15.67-1.48,29.02-1.41,24.66-3.87,3.39-6.34,12.04-.12.43-.25.94-.37,1.54a27.91582,27.91582,0,0,1-1.88,6.33c-1.31.78-2.66,1.53-3.99,2.28-3.79,2.11-7.63995,4.13995-11.51995,6.07-2.18006,1.08-4.37,2.14-6.57,3.16-.35.16-.69.32-1.03.47a270.88715,270.88715,0,0,1-34.75,13.26c-2.32.7-4.63,1.38-6.97,2.01-2.44.68-4.88,1.32-7.35,1.92a266.8933,266.8933,0,0,1-56.09,7.59c-2.55.08-5.12.11-7.7.11-1.28,0-2.54-.01-3.82-.02-.39,0-.78-.01-1.17-.02-1.13-.03-2.3-.05-3.48-.08a266.66307,266.66307,0,0,1-67.35-10.83l-.93-.27c-1.44-.44-2.87-.87-4.3-1.33q-9.90006-3.135-19.51-7.02-7.335-2.955-14.5-6.34a.33861.33861,0,0,1-.12-.06c-1-.46-2.01-.94-3.01-1.43-.13-.07-.27-.14-.41-.21q-5.59506-2.73-11.07-5.72c-3.07-7.05005-7.39-8.4-10.07-14.6a25.87356,25.87356,0,0,1-1.68-5.74c0-.02-.01-.04-.01-.07.28,3.72-1.19-6.6-.01-.04-.01-.12-.02-.25-.03-.4-.03-.36-.06994-.8-.12994-1.35-3.43-33.49-3.21-71.79-4.7-103.35q-.15006-3.06-.31-5.86c-.03-.62-.07-1.23-.11005-1.83.07-.18.15-.37.24-.55a1.002,1.002,0,0,1,.07-.15,1.62294,1.62294,0,0,1,.1-.18c.02-.03.05-.07.07-.1a.91693.91693,0,0,1,.05-.1c.09-.14.19-.29.3-.43.05-.06.09-.11005.14-.16a.80824.80824,0,0,1,.12-.14.637.637,0,0,1,.11-.13c.04-.04.08-.09.13-.13995a.30159.30159,0,0,1,.08-.08,2.03313,2.03313,0,0,1,.26-.25,9.62387,9.62387,0,0,1,1.14-.9c.13995-.09.29-.18.43-.28a19.13528,19.13528,0,0,1,3.17-1.52c.38-.14.76-.27,1.17-.41.15-.04.29-.09.44-.14.22-.07.44-.14.67-.19,1.14-.34,2.37-.63,3.7-.9.16-.03.33-.06.5-.1.24-.05.49-.09.74-.13.34-.06.69-.12,1.04-.18,2.97-.47,6.34-.82,10.06-1.05q.525-.03,1.05-.06c.41-.02.82-.04,1.24-.06.35-.02.71-.03,1.07-.04.35-.02.71-.03,1.08-.04,1.01-.03,2.05-.06,3.11-.08,3.02-.06,6.2-.04,9.54.03,1.55.04,3.13.08,4.75.15.11005,0,.21.01.31.01,1.41.05,2.83.11,4.29.19,1.02.05,2.05.1,3.07995.16.97.06,1.95.12,2.94.19.77.04,1.54.1,2.32.15.66.05,1.32.1,1.98.14l.9.06c.49.04.98.07,1.48.12,1.1.09,2.2.18,3.32.27,1.11.1,2.24.2,3.37.3s2.27.21,3.41.32c.12.01.23.02.34.03,1.04.11005,2.08.21,3.13.32.24.02.49.04.73.07,1.0011.10058,2.02173.21832,3.032.32568.31006.03345.61847.06586.92944.09985.79139.08618,1.57154.16089,2.36847.25446,1.05.12,2.12006.23,3.16.37.81.09,1.62.18,2.43.28,1.27.15,2.56.31,3.85.48.49.06.98.12,1.47.19,3.68.46,7.4.97,11.18,1.5,5.73.81,11.55,1.69,17.41,2.64q8.80509,1.425,17.71,3.01c1.5.27,3,.54,4.51.82q1.02.19491,2.04.38995c1.16.21,2.32.43,3.48.65,1.16.22,2.32.44,3.48.67,1.38.27,2.77.54,4.15.81,9.09,1.8,18.12994,3.72,26.95,5.73,1.45.32995,2.9.67,4.34,1q4.32,1.005,8.56,2.04c.78.18,1.55.37,2.32.56,1.92.48,3.84.96,5.73,1.45l.33.09c1.39.34,2.75.69,4.11,1.05q4.815,1.26,9.47,2.55,3.09.855,6.11,1.73c3.01.87,5.96,1.75,8.83,2.64.71.22,1.42.44,2.12.65,2.1.65,4.17,1.31,6.18,1.97,1.6.52,3.16,1.05,4.7,1.58q2.31.795,4.53,1.59c.95.34,1.89.7,2.83,1.04,1.35.5,2.68,1,3.98,1.5.4.15.79.31,1.18.46.25.11.49.2.73.3.47.19.95.37,1.41.56.47.18.93.37,1.39.57.45.18.91.37,1.35.56.45.18.89.37,1.33.57.37.15.73.31,1.08.47.71.31,1.42.62,2.11.94.34.16.68.31,1.02.47l.78.36c.11.06.22.11.33.16.25.12.51.25.76.37.57995.27,1.15.56,1.71.83.75.38,1.48.76,2.18,1.13.71.37994,1.4.76,2.06,1.12994.11.06.21.12006.32.18006.15.07995.3.17.45.25.51.29,1,.59,1.49.87994.96.59,1.87,1.17,2.72,1.75.19.13.37.26.56.38.63.45,1.23.89,1.79,1.34,0,.01,0,.01.01.01.19.14.37.29.55.43.15.14.31.26.46.4.52.45,1,.87994,1.44,1.32a5.667,5.667,0,0,1,.42.43,1.20839,1.20839,0,0,1,.16.16c.2.2.38.4.55.6a.55257.55257,0,0,1,.07.09c.24.28.46.56.67.84.1.14.21.28.3.42.12.17.24.35.34.52.09.14.17.29.25.43006a7.2566,7.2566,0,0,1,.54,1.12994,5.2413,5.2413,0,0,1,.27.82A5.84442,5.84442,0,0,1,750.58227,625.3079Z" transform="translate(-206.59003 -163.87113)" fill="rgb(0, 0, 98)"/><path d="M750.58227,625.3079c-.01,1.75-.03,4.2-.11,7.23-.01.42-.03.85-.04,1.29-.1,4.25-.25,9.5-.46,15.43-.01.36-.02.71-.04,1.07-.28,7.24-.72,15.67-1.48,29.02-1.41,24.66-3.87,3.39-6.34,12.04-6.86-4.22-14.38-8.64-22.42-13.18q-2.175-1.23-4.39-2.47c-16.08-8.97-34.04-18.37006-52.79-27.68-.74-.37-1.49-.74-2.23-1.1-42.95-21.23-89.83-41.88-127.81-55.66-7.33-2.66-14.33-5.06-20.91-7.17005-13.86-4.43-25.84-7.53-35.06-8.87-9.6-1.4-16.23-.9-18.91,1.99q-.15006-3.06-.31-5.86-.06006-.93-.12-1.83c.06171-.16462.14191-.32172.21955-.48017.01111-.02313.019-.047.03045-.06982a1.002,1.002,0,0,1,.07-.15,1.62294,1.62294,0,0,1,.1-.18,1.05985,1.05985,0,0,1,.12-.2c.09-.14.19-.29.3-.43a3.48261,3.48261,0,0,1,.26-.30005.637.637,0,0,1,.11-.13c.04-.04.08-.09.13-.13995a.30159.30159,0,0,1,.08-.08,2.03313,2.03313,0,0,1,.26-.25,9.62387,9.62387,0,0,1,1.14-.9c.13995-.09.29-.18.43-.28a19.13528,19.13528,0,0,1,3.17-1.52c.38-.14.76-.27,1.17-.41.15-.04.29-.09.44-.14.22-.07.44-.14.67-.19,1.14-.34,2.37-.63,3.7-.9.4-.08.82-.16,1.24-.23.34-.06.69-.12,1.04-.18,2.97-.47,6.34-.82,10.06-1.05q.525-.03,1.05-.06c.41-.02.82-.04,1.24-.06.35-.02.71-.03,1.07-.04.35-.02.71-.03,1.08-.04,1.01-.03,2.05-.06,3.11-.08,3.02-.05,6.2-.03,9.54.04,1.55.03,3.13.08,4.75.15.1,0,.21.01.31.01,1.41.04,2.84.11,4.29.18,1.02.05,2.05.1,3.07995.16.97.06,1.95.12,2.94.19.77.04,1.54.1,2.32.15.66.05,1.32.1,1.98.14.79.06,1.58.12,2.38.18,1.1.09,2.2.18,3.32.27,1.11.1,2.24.2,3.37.3s2.27.21,3.41.32c.12.01.23.02.34.03,1.04.11005,2.08.21,3.13.32q8.73.885,17.97,2.07,5.52.705,11.18,1.51c5.73.81,11.55,1.69,17.41,2.63q8.80509,1.425,17.71,3.01c1.5.27,3,.54,4.51.82q2.76.50994,5.52,1.04c1.16.22,2.32.44,3.48.67,1.38.27,2.77.54,4.15.81,9.09,1.8,18.12994,3.72,26.95,5.73,1.45.32995,2.9.67,4.34,1q4.32,1.005,8.56,2.04c.78.19,1.55.38,2.32.57q2.895.72,5.73,1.44v.01c.11.02.22.05.33.08,1.38.35,2.75.7,4.11,1.06q4.815,1.26,9.47,2.54c2.06.57995,4.1,1.15,6.11,1.73,3.01.88,5.96,1.76,8.83,2.64.71.22,1.42.44,2.12.65q3.15.99,6.18,1.97c1.6.52,3.16,1.05,4.7,1.58q2.31.795,4.53,1.59c.96.34,1.9.69,2.83,1.03,1.36.5,2.68,1,3.98,1.51.4.15.79.31,1.18.46.73.28,1.44.57,2.14.86.47.18.93.37,1.39.57.45.18.91.37,1.35.56.45.18.89.37,1.33.57.37.15.73.31,1.08.47.71.31,1.42.62,2.11.94.34.16.68.31,1.02.47l.78.36c.11.06.22.11.33.16.85.4,1.67.8,2.47,1.2.75.38,1.48.76,2.18,1.13.83.43994,1.62.87,2.38,1.31.15.07995.3.17.45.25.51.29,1,.59,1.49.87994.96.59,1.87,1.17,2.72,1.75.84.58,1.62,1.15,2.35,1.72,0,.01,0,.01.01.01.35.28.69.56,1.01.83.52.45,1,.87994,1.44,1.32a5.667,5.667,0,0,1,.42.43,1.20839,1.20839,0,0,1,.16.16c.21.23.42.46.62006.69.24.28.46.56.67.84.1.14.21.28.3.42.12.17.24.35.34.52.09.14.17.29.25.43006a7.2566,7.2566,0,0,1,.54,1.12994,6.05312,6.05312,0,0,1,.27.82A5.84442,5.84442,0,0,1,750.58227,625.3079Z" transform="translate(-206.59003 -163.87113)" opacity="0.2"/>
        </svg>
          
        <div className='content-right'>
          <h1>Platform of online courses</h1>
          <h3>Learn the most required and outstanding IT skills in the current job market</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur corporis optio numquam voluptates odio velit, aperiam, sit tempora sint quo, officia eveniet magnam sequi dignissimos accusamus tempore nesciunt! Optio.</p>
          <Box sx={{
            display: 'flex',
            gap: '1rem'
          }}>
            <Link to="/courses/offer">
              <Button variant='outlined' sx={{
                marginTop: '2rem',
                transition: '.4s',
                color: 'rgba(94, 201, 255, 0.92)',
                border: '1.3px solid #53ace3',
                borderRadius: '13px',
                boxShadow: '0px 0px 4px 0px #1c3580'
              }} className='home-btn'>
                Explore
                <Icon icon={powerOff} size={21}></Icon>
              </Button>
            </Link>
            <Button 
              target='_blank' 
              href='http://localhost:8080/swagger-ui/index.html' variant='outlined' 
              sx={{
                marginTop: '2rem',
                transition: '.4s',
                color: '#fff',
                backgroundColor: 'rgb(0, 0, 30)',
                border: '1.3px solid #53ace3',
                borderRadius: '13px',
                boxShadow: '0px 0px 4px 0px #1c3580'
              }} 
              className='home-btn'
            >
              Learn API
              <Icon icon={filesEmpty} size={18}></Icon>
            </Button>
          </Box>
        </div>
        </section>
    </section>
  )
}

export default HomePage