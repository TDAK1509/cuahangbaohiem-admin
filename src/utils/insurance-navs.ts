export interface Nav {
  to: string;
  icon: string;
  text: string;
  dataCy: string;
}

export default class InsuranceNavs {
  private _navs: Nav[];

  constructor() {
    this._navs = this.getNavs();
  }

  get navs(): Nav[] {
    return this._navs;
  }

  private getNavs(): Nav[] {
    return [
      {
        icon: "mdi-car",
        dataCy: "car-insurance-request",
        text: "Ô tô",
        to: "/bao-hiem/o-to"
      },
      {
        icon: "mdi-car-cog",
        dataCy: "accident-insurance-request",
        text: "Tai nạn 24/24",
        to: "/bao-hiem/tai-nan"
      },
      {
        icon: "mdi-emoticon-sick",
        dataCy: "health-insurance-request",
        text: "Sức khỏe cá nhân",
        to: "/bao-hiem/suc-khoe-ca-nhan"
      },
      {
        icon: "mdi-zodiac-cancer",
        dataCy: "cancer-insurance-request",
        text: "Ung thư",
        to: "/bao-hiem/ung-thu"
      },
      {
        icon: "mdi-home",
        dataCy: "house-insurance-request",
        text: "Nhà tư nhân",
        to: "/bao-hiem/nha-tu-nhan"
      },
      {
        icon: "mdi-motorbike",
        dataCy: "motorbike-insurance-request",
        text: "Xe máy",
        to: "/bao-hiem/xe-may"
      },
      {
        icon: "mdi-airplane-takeoff",
        dataCy: "travel-insurance-request",
        text: "Du lịch quốc tế",
        to: "/bao-hiem/du-lich-quoc-te"
      },
      {
        icon: "mdi-human-male",
        dataCy: "life-insurance-request",
        text: "Nhân thọ",
        to: "/bao-hiem/nhan-tho"
      }
    ];
  }
}
