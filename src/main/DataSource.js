/*
 *
 * Created by Stone
 * https://github.com/bolan9999
 * Email: bolan999999@gmail.com
 * Date: 2017/12/14
 *
 */

import { iconObject as icons, iconArray } from "./icons";

let message = [
  {
    icon: icons.icon1,
    title: "游戏推荐",
    subtitle: "热门游戏推荐：王者荣耀,英雄联盟"
  },
  {
    icon: icons.icon2,
    title: "通知提醒",
    subtitle: "您有一份快递已送达，请查收"
  },
  {
    icon: icons.icon3,
    title: "优惠活动",
    subtitle: "买999送0.1元，满9999立减100000元"
  },
  {
    icon: icons.icon4,
    title: "卡券消息",
    subtitle: "查看最新卡券福利消息，0元完全免费购机"
  },
  {
    icon: icons.icon5,
    title: "系统消息",
    subtitle: "您的智商已欠费停机，请充值！"
  }
];

let messages = [{items:[]}];
for (let i = 0; i < 1000; ++i) {
  messages[0].items.push(message[Math.floor(Math.random() * 5)]);
}

let contacts = [
  {
    header: "A",
    index:0,
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Apple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "App",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Aee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Aliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Amliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Anni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Akali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "All",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Aba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Appqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "B",
    index:1,
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Bppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "C",
    index:2,
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Cpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Cpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Cee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Cliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Cmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Cnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ckali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Cll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Cba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Cppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "D",
    index:3,
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Dpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Dpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Dee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Dliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Dmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Dnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Dkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Dll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Dba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Dppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "E",
    index:4,
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Epple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Epp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Eee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Eliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Emliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Enni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ekali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ell",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Eba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Eppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "F",
    index:5,
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Fpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Fpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Fee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Fliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Fmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Fnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Fkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Fll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Fba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Fppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "G",
    index:6,
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Gpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Gpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Gee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Gliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Gmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Gnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Gkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Gll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Gba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Gppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "H",
    index:7,
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Hpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Hpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Hee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Hliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Hmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Hnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Hkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Hll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Hba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Hppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "I",
    index:8,
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ipple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ipp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Iee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Iliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Imliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Inni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ikali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ill",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Iba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ippqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "J",

    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Jpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Jpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Jee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Jliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Jmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Jnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Jkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Jll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Jba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Jppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "K",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Kpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Kpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Kee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Kliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Kmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Knni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Kkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Kll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Kba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Kppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "L",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Lpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Lpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Lee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Lliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Lmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Lnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Lkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Lll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Lba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Lppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "M",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Mpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Mpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Mee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Mliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Mmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Mnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Mkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Mll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Mba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Mppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "N",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Npple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Npp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Nee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Nliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Nmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Nnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Nkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Nll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Nba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Nppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "O",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Opple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Opp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Oee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Oliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Omliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Onni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Okali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Oll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Oba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Oppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "P",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ppple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ppp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Pee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Pliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Pmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Pnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Pkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Pll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Pba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Pppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "Q",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Qpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Qpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Qee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Qliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Qmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Qnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Qkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Qll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Qba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Qppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "R",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Rpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Rpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ree",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Rliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Rmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Rnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Rkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Rll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Rba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Rppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "S",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Spple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Spp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "See",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Sliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Smliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Snni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Skali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Sll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Sba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Sppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "T",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Tpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Tpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Tee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Tliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Tmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Tnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Tkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Tll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Tba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Tppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "U",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Upple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Upp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Uee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Uliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Umliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Unni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ukali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ull",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Uba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Uppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "V",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Vpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Vpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Vee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Vliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Vmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Vnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Vkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Vll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Vba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Vppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "W",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Wpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Wpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Wee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Wliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Wmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Wnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Wkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Wll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Wba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Wppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "X",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Xpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Xpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Xee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Xliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Xmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Xnni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Xkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Xll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Xba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Xppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "Y",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ypple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ypp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Yee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Yliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ymliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ynni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Ykali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Yll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Yba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Yppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "Z",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Zpple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Zpp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Zee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Zliy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Zmliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Znni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Zkali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Zll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Zba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "Zppqq",
        phone: "13333333333"
      }
    ]
  },
  {
    header: "#",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "#pple",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "#pp",
        phone: "13333333443"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "#ee",
        phone: "13333333553"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "#liy",
        phone: "13336633333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "#mliy",
        phone: "13333333003"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "#nni",
        phone: "13123333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "#kali",
        phone: "13322333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "#ll",
        phone: "13333333333"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "#ba",
        phone: "13333333310"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        name: "#ppqq",
        phone: "13333333333"
      }
    ]
  }
];

let foods = [
  {
    header: "热销",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "加菜",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "泡菜",
        subtitle: "含米饭一份",
        sales: "月销2020份",
        praise: "赞4",
        prise: "¥0.00",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加青菜",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    "header": "米饭", items:[
    {
      icon: iconArray[Math.floor(Math.random() * 11)],
      title: "米饭",
      subtitle: "",
      sales: "月销22000份",
      praise: "赞4",
      prise: "¥2",
      activity: ""
    },
  ]},
  {
    header: "砂锅黄焖鸡套餐",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡小份加豆皮",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥20.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡小份加香菇",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡小份加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡小份加青菜",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "砂锅黄焖猪脚套餐",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖猪脚小份加香菇",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥25.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖猪脚小份加百事可乐",
        subtitle: "含米饭一份",
        sales: "月销2份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖猪脚小份加金针菇",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥24",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖猪脚小份加豆皮",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖猪脚小份加青菜",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "砂锅黄焖排骨套餐",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份加百事可乐",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥28.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份加香菇",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份加豆皮",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份加青菜",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "招牌菜",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "铁山坪麻辣跑山鸡",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "奉节二师兄烤猪头",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销1",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销2",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销3",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销4",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销5",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销6",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销7",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销8",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销9",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    header: "热销10",
    items: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },

];

let new2contacts = [
  {
    orgName: "热销11",
    userList: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
  {
    orgName: "热销12",
    userList: [
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖鸡米饭",
        subtitle: "含米饭一份",
        sales: "月销220份",
        praise: "赞4",
        prise: "¥18.86",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加豆皮",
        subtitle: "",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥3",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加金针菇",
        subtitle: "",
        sales: "月销220份",
        praise: "赞2",
        prise: "¥4",
        activity: ""
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "黄焖排骨小份",
        subtitle: "含米饭一份",
        sales: "月销20份",
        praise: "赞1",
        prise: "¥18.76",
        activity: "8折优惠，限1份"
      },
      {
        icon: iconArray[Math.floor(Math.random() * 11)],
        title: "加香菇",
        subtitle: "",
        sales: "月销290份",
        praise: "赞4",
        prise: "¥5",
        activity: ""
      },
    ]
  },
];

let newcontacts = [
  {
    header:"TD",
    index:0,
    data:[
      {
        name:"技术部",
        count:2,
        id:"1e14ca65f7ac44c883b53f34683930e0",
        type:1
      },
      {
        name:"产品部",
        count:1,
        id:"b020297923d046f18a1db0c155e3a416",
        type:1
      },
      {
        userName:"苏姚",
        postId:"439e5f7999634259a473828698230a68",
        userId:"a78816e745c4421f99f8b05871001397",
        postName:"顶级管理岗",
        userPortraitUrl:null,
        type:0
      },
      {
        userName:"苏姚",
        postId:"c1bad3a66f244906a91e2eb2979afb7a",
        userId:"a78816e745c4421f99f8b05871001397",
        postName:"顶级管理执行岗",
        userPortraitUrl:null,
        type:0
      }
    ],
    orgLogo:null,
    count:2,
    orgId:"0bdaded8313d4625b58bf0c0f9f00098"
  },
  {
    header:"阿里粑粑",
    index:1,
    data:[
      {
        name:"品质监管部",
        count:1,
        id:"caa1cc85f3d04edc96672e9abc445a14",
        type:1
      },
      {
        name:"技术中心",
        count:8,
        id:"093ffefbcef04eb58e004876bde8d12c",
        type:1
      },
      {
        name:"产品中心",
        count:1,
        id:"0baa778a08b04949879ce219279dbcad",
        type:1
      },
      {
        name:"新测试部门",
        count:0,
        id:"3990d8bc910b4b5d807542bb54cef449",
        type:1
      },
      {
        userName:"谢美芳",
        postId:"317d8ed5c9e74401b475ea20d5c1cb34",
        userId:"b15bffe588c4404eba26aae07c8d0916",
        postName:"顶级管理岗",
        userPortraitUrl:"http://doc.gongwuyun.net/201903221355473774734.jpg",
        type:0
      },
      {
        userName:"周福建",
        postId:"05ceeaf920674e5da202beca6905e01d",
        userId:"824950ccdb5543b8bf5b639250f51e9b",
        postName:"管理员执行岗1",
        userPortraitUrl:"",
        type:0
      },
      {
        userName:"赵玉堂",
        postId:"add2dd3bbbf54d7c89589dae0e4e8c6b",
        userId:"10f7e83618fe4f82aaaa0f8bdf414f8a",
        postName:"管理员执行岗2",
        userPortraitUrl:"",
        type:0
      },
      {
        userName:"谢美芳",
        postId:"c319046c3888438984ac013dfd547802",
        userId:"b15bffe588c4404eba26aae07c8d0916",
        postName:"顶级管理执行岗",
        userPortraitUrl:"http://doc.gongwuyun.net/201903221355473774734.jpg",
        type:0
      }
    ],
    orgLogo:null,
    count:11,
    departmentList:[

    ],
    orgId:"12207b02c2d7420da6b91594bfb6c002"
  },
  {
    header:"连线策划",
    index:2,
    data:[
      {
        name:"总经办",
        count:41,
        id:"4885700fa4b0436590111751eb3ef8a4",
        type:1
      },
      {
        userName:"郑育高",
        postId:"f51992f1307d49bf96e76556207c5188",
        userId:"c3f7f7c96bf041358d7527c98e7c39a8",
        postName:"执行董事",
        userPortraitUrl:null,
        type:0
      },
      {
        userName:"郑育高",
        postId:"04217b12af5941d582cd0b162a34341b",
        userId:"c3f7f7c96bf041358d7527c98e7c39a8",
        postName:"执行董事执行岗",
        userPortraitUrl:null,
        type:0
      },
      {
        userName:"王文浩",
        postId:"b45598a87d754c5e94005393b6a23b64",
        userId:"524eacc66d2f4ca5b8917be0c500f7bc",
        postName:"管理员执行岗2",
        userPortraitUrl:"http://doc.gongwuyun.net/lx0330E9DB94CD4C73A2F1DCB2A8638A4A113150931.png",
        type:0
      },
      {
        userName:"吴喜月",
        postId:"c85dcd91ea06452da23cc5ee2104459f",
        userId:"62ec58dae51f49669918639af668d8ba",
        postName:"管理员执行岗1",
        userPortraitUrl:"",
        type:0
      }
    ],
    orgLogo:null,
    count:45,
    orgId:"46a51c7143d946929bf59b8a5a495e51"
  },
  {
    header:"连线网络",
    index:3,
    data:[
      {
        name:"总裁室",
        count:48,
        id:"19fcc1e87b1647ec83f406e4288cf129",
        type:1
      },
      {
        userName:"郑育高",
        postId:"a518f3892d79424eb785493f54ac0f7a",
        userId:"c3f7f7c96bf041358d7527c98e7c39a8",
        postName:"董事长",
        userPortraitUrl:null,
        type:0
      },
      {
        userName:"凌晓博",
        postId:"2fee7d13a52642748d1195ac83f7cb22",
        userId:"9aa8853654fe48c88133c3113efcf8e2",
        postName:"管理员执行岗2",
        userPortraitUrl:"http://doc.gongwuyun.net/201903211351260809346.png",
        type:0
      },
      {
        userName:"张俊伟",
        postId:"6b81e230a45c4f2ca4005bedacb1b96e",
        userId:"94c68323ea0e4923bd794fc5c3e282af",
        postName:"管理员执行岗1",
        userPortraitUrl:"http://doc.gongwuyun.net/lx48F2EE982639453B8B3A624E2FCA5186153640899.png",
        type:0
      },
      {
        userName:"郑育高",
        postId:"e3eafb5e3d364f788c2e67219293e0ff",
        userId:"c3f7f7c96bf041358d7527c98e7c39a8",
        postName:"董事长执行岗",
        userPortraitUrl:null,
        type:0
      }
    ],
    orgLogo:null,
    count:52,
    orgId:"e2641c941716464690ae7d5adecc02ef"
  },
  {
    header:"凌云科技",
    index:4,
    data:[
      {
        name:"技术总监室",
        count:2,
        id:"06597eed172c488f85982922b94474a1",
        type:1
      },
      {
        name:"产品总监室",
        count:1,
        id:"b894c735c3c6425cac11b8a33be5f538",
        type:1
      },
      {
        name:"行政总监室",
        count:0,
        id:"8c0b92b519dd47849488e421259e0879",
        type:1
      },
      {
        name:"销售部",
        count:2,
        id:"2ca0d1444d004ce6bb716be6183c8c52",
        type:1
      },
      {
        userName:"凌晓博",
        postId:"d505523ca94a4f9eb3e44587838c4393",
        userId:"9aa8853654fe48c88133c3113efcf8e2",
        postName:"顶级管理岗",
        userPortraitUrl:"http://doc.gongwuyun.net/201903211351260809346.png",
        type:0
      },
      {
        userName:"凌晓博",
        postId:"dfe65aaec1994e4d8c430e53d8ff79c2",
        userId:"9aa8853654fe48c88133c3113efcf8e2",
        postName:"顶级管理执行岗",
        userPortraitUrl:"http://doc.gongwuyun.net/201903211351260809346.png",
        type:0
      },
      {
        userName:"刘士凤",
        postId:"f6ec0c2c37764940b2882fbb50f57f2e",
        userId:"a413d4d2e634480ba92930319aff2544",
        postName:"管理员执行岗1",
        userPortraitUrl:"http://doc.gongwuyun.net/2019032112470010371.jpg",
        type:0
      }
    ],
    orgLogo:null,
    count:3,
    orgId:"4fd6abb1b31f4aa9aa1283cafb117163"
  }
];

let groupData =  [
  {
    userCount:18,
    name:"技术研发部",
    wyTid:"1636640349",
    id:"9ed27f26e78e4c4a9361adb1b2b10972",
    type:4,
    url:""
  },
  {
    userCount:3,
    name:"技术研发部",
    wyTid:"1635514937",
    id:"7b376a0cce904d13bdeb4468fa44eb69",
    type:4,
    url:""
  },
  {
    userCount:2,
    name:"技术部经理",
    wyTid:"1635341581",
    id:"b1f03af655314678a1e8b258e422f8bf",
    type:4,
    url:""
  },
  {
    userCount:53,
    name:"连线网络",
    wyTid:"1637941672",
    id:"a7d605fe89e24433a004a5d3b0be5a89",
    type:3,
    url:""
  },
  {
    userCount:3,
    name:"iOS",
    wyTid:"1644384676",
    id:"62e75f12474746e7b601f2b1df6d5349",
    type:1,
    url:"http://doc.gongwuyun.net/lx4E7454A7FBF04686AD65C9D89893EF37134831979.png"
  },
  {
    userCount:39,
    name:"七嘴八舌吐槽群",
    wyTid:"1641848825",
    id:"b48053514bc548258b25b916ef3aa54c",
    type:1,
    url:"http://doc.gongwuyun.net/2019032514234457951.jpg"
  },
  {
    userCount:8,
    name:"测试测试测试测试测试",
    wyTid:"1638057689",
    id:"9b3d5123c1f24943b0ce10b1fe17c942",
    type:1,
    url:"http://doc.gongwuyun.net/2019032209365984918.jpg"
  },
  {
    userCount:7,
    name:"组长群",
    wyTid:"1637853062",
    id:"ecd3441878344273906cf09d6b8d332c",
    type:1,
    url:"http://doc.gongwuyun.net/lx90A798593F6446B3BF42E12854CFA406091312341.png"
  },
  {
    userCount:8,
    name:"模块负责人",
    wyTid:"1637960077",
    id:"90f2573ba2e248779e7d32e5301ad085",
    type:1,
    url:"http://doc.gongwuyun.net/lx2F6BC0A5A7B84E459493DEBC55AB0E14091016383.png"
  },
  {
    userCount:24,
    name:"研发&测试沟通群",
    wyTid:"1637852791",
    id:"0fb16859a3e84aa19946c2099b0388e3",
    type:1,
    url:"http://doc.gongwuyun.net/lx72DB1107D32B4F7CBF9E1CA3638AC626090806525.png"
  },
  {
    userCount:6,
    name:"移动端",
    wyTid:"1636903152",
    id:"d7b91ca18d454a58a4e36a82d72d9a41",
    type:1,
    url:""
  },
  {
    userCount:8,
    name:"网络公司测试群",
    wyTid:"1635233852",
    id:"15eb4c783065454c9aa60469d4090073",
    type:1,
    url:"http://doc.gongwuyun.net/lx9EBC0FBA394A4B4EAC2FDC632640D1E5102746612.png"
  }
];

let personData = [
  {
    "postInfo":"即时通讯/即时通讯领导;谢阳/顶级管理执行岗;谢阳/顶级管理岗;Java组长组/Java开发2;技术研发部/后端组副组长",
    "portraitUrl":"http://doc.gongwuyun.net/201903221011091030848.jpg",
    "phoneId":"15325885352",
    "name":"程鑫鑫",
    "py":"C",
    "userId":"68cc03e3f5d34ca282d3d431e9f4c1c2"
  },
  {
    "postInfo":"技术部经理/技术部经理执行岗;IOS组长组/IOS组长;IOS开发组/IOS开发;技术研发部/技术研发经理;技术部经理/技术部经理;技术研发部/技术研发经理执行岗",
    "portraitUrl":"http://doc.gongwuyun.net/lxF6461AAE7D3F4641BC29E9515A9E0998205942698.png",
    "phoneId":"13967111590",
    "name":"苏解文",
    "py":"S",
    "userId":"1fe54ab13d9449bca88f0c946ff14154"
  },
  {
    "postInfo":"技术部/技术部;TD/顶级管理岗;产品部/产品部执行岗;技术部/技术部执行岗;TD/顶级管理执行岗;产品部/产品部",
    "portraitUrl":"",
    "phoneId":"13666659654",
    "name":"苏姚",
    "py":"S",
    "userId":"a78816e745c4421f99f8b05871001397"
  },
  {
    "postInfo":"连线测试/管理员执行岗1;品质监管部/软件测试;品质监管部/品质监管部经理;品质监管部/品质监管部经理执行岗;测试部/软件测试执行岗;测试部/软件测试",
    "portraitUrl":"",
    "phoneId":"18357134116",
    "name":"周福建",
    "py":"Z",
    "userId":"824950ccdb5543b8bf5b639250f51e9b"
  }
]

export { messages, contacts,newcontacts,new2contacts,foods, groupData, personData};
